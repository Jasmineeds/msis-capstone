import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm';

let currentVRM = null;
let mixer = null;
let cachedBones = null;

const keys = { w: false, a: false, s: false, d: false };

const CONFIG = {
    MOVE_SPEED: 0.05,
    ROTATE_SPEED: 0.03,
    WALK_SPEED: 0.15,
    LEG_SWING: 0.5,
    ARM_SWING: 0.3,
    IDLE_DECAY: 0.9,
    ARM_LERP: 0.05,
    ARM_REST_Z: 1.0
};

export async function loadVRM(scene, url) {
    if (!url) {
        console.warn('No VRM URL provided');
        return null;
    }

    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));

    try {
        console.log('Loading VRM from:', url);
        
        const gltf = await loader.loadAsync(url);
        const vrm = gltf.userData.vrm;

        if (!vrm) {
            console.error('No VRM data found in file');
            return null;
        }

        VRMUtils.removeUnnecessaryVertices(gltf.scene);
        VRMUtils.removeUnnecessaryJoints(gltf.scene);

        vrm.scene.traverse((obj) => {
            if (obj.isMesh) {
                obj.castShadow = true;
                obj.receiveShadow = true;
            }
        });

        vrm.scene.position.set(2, 0, 2);
        vrm.scene.rotation.y = Math.PI;
        vrm.scene.scale.set(1, 1, 1);

        if (currentVRM) {
            scene.remove(currentVRM.scene);
        }

        scene.add(vrm.scene);
        currentVRM = vrm;
        mixer = new THREE.AnimationMixer(vrm.scene);
        
        cacheBones(vrm.humanoid);

        console.log('VRM loaded successfully');
        return vrm;
    } catch (error) {
        console.error('Failed to load VRM:', error);
        return null;
    }
}

export function updateVRM(delta) {
    if (currentVRM) {
        currentVRM.update(delta);
    }
    if (mixer) {
        mixer.update(delta);
    }
}

export function playIdleAnimation() {
    if (!currentVRM) return;

    const blinkInterval = setInterval(() => {
        if (!currentVRM) {
            clearInterval(blinkInterval);
            return;
        }
        
        const blink = currentVRM.expressionManager;
        if (blink) {
            blink.setValue('blink', 1);
            setTimeout(() => {
                if (blink) blink.setValue('blink', 0);
            }, 100);
        }
    }, 3000);

    animateBreathing();
}

function animateBreathing() {
    if (!currentVRM) return;

    const humanoid = currentVRM.humanoid;
    if (!humanoid) return;

    const spine = humanoid.getNormalizedBoneNode('spine');
    if (!spine) return;

    let time = 0;
    const breathe = () => {
        if (!currentVRM) return;
        
        time += 0.02;
        const breathScale = 1 + Math.sin(time) * 0.01;
        spine.scale.set(1, breathScale, 1);
        
        requestAnimationFrame(breathe);
    };
    breathe();
}

export function getCurrentVRM() {
    return currentVRM;
}

export function removeVRM(scene) {
    if (currentVRM) {
        scene.remove(currentVRM.scene);
        currentVRM = null;
        mixer = null;
    }
}

export function setupAvatarControls() {
    window.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();
        if (key in keys) keys[key] = true;
    });

    window.addEventListener('keyup', (e) => {
        const key = e.key.toLowerCase();
        if (key in keys) keys[key] = false;
    });
}

let walkTime = 0;

export function updateAvatarMovement() {
    if (!currentVRM || !cachedBones) return;

    const avatar = currentVRM.scene;
    const { MOVE_SPEED, ROTATE_SPEED, WALK_SPEED } = CONFIG;
    const moving = keys.w || keys.s;

    if (keys.w) {
        avatar.position.z -= Math.cos(avatar.rotation.y) * MOVE_SPEED;
        avatar.position.x -= Math.sin(avatar.rotation.y) * MOVE_SPEED;
    }
    if (keys.s) {
        avatar.position.z += Math.cos(avatar.rotation.y) * MOVE_SPEED;
        avatar.position.x += Math.sin(avatar.rotation.y) * MOVE_SPEED;
    }
    if (keys.a) avatar.rotation.y += ROTATE_SPEED;
    if (keys.d) avatar.rotation.y -= ROTATE_SPEED;

    if (moving) {
        walkTime += WALK_SPEED;
        animateWalk(walkTime);
    } else {
        animateIdle();
    }
}

function cacheBones(humanoid) {
    if (!humanoid) return;
    cachedBones = {
        leftUpperLeg: humanoid.getNormalizedBoneNode('leftUpperLeg'),
        rightUpperLeg: humanoid.getNormalizedBoneNode('rightUpperLeg'),
        leftLowerLeg: humanoid.getNormalizedBoneNode('leftLowerLeg'),
        rightLowerLeg: humanoid.getNormalizedBoneNode('rightLowerLeg'),
        leftUpperArm: humanoid.getNormalizedBoneNode('leftUpperArm'),
        rightUpperArm: humanoid.getNormalizedBoneNode('rightUpperArm'),
        spine: humanoid.getNormalizedBoneNode('spine')
    };
}

function animateWalk(time) {
    const { LEG_SWING, ARM_SWING } = CONFIG;
    const { leftUpperLeg, rightUpperLeg, leftLowerLeg, rightLowerLeg, leftUpperArm, rightUpperArm, spine } = cachedBones;

    const legSwing = Math.sin(time) * LEG_SWING;
    const armSwing = Math.sin(time) * ARM_SWING;

    if (leftUpperLeg) leftUpperLeg.rotation.x = legSwing;
    if (rightUpperLeg) rightUpperLeg.rotation.x = -legSwing;
    if (leftLowerLeg) leftLowerLeg.rotation.x = Math.max(0, -legSwing) * 0.5;
    if (rightLowerLeg) rightLowerLeg.rotation.x = Math.max(0, legSwing) * 0.5;
    if (leftUpperArm) leftUpperArm.rotation.x = -armSwing;
    if (rightUpperArm) rightUpperArm.rotation.x = armSwing;
    if (spine) spine.rotation.y = Math.sin(time) * 0.05;
}

function animateIdle() {
    const { IDLE_DECAY, ARM_LERP, ARM_REST_Z } = CONFIG;
    const { leftUpperLeg, rightUpperLeg, leftLowerLeg, rightLowerLeg, leftUpperArm, rightUpperArm } = cachedBones;

    if (leftUpperLeg) leftUpperLeg.rotation.x *= IDLE_DECAY;
    if (rightUpperLeg) rightUpperLeg.rotation.x *= IDLE_DECAY;
    if (leftLowerLeg) leftLowerLeg.rotation.x *= IDLE_DECAY;
    if (rightLowerLeg) rightLowerLeg.rotation.x *= IDLE_DECAY;
    if (leftUpperArm) {
        leftUpperArm.rotation.x *= IDLE_DECAY;
        leftUpperArm.rotation.z += (ARM_REST_Z - leftUpperArm.rotation.z) * ARM_LERP;
    }
    if (rightUpperArm) {
        rightUpperArm.rotation.x *= IDLE_DECAY;
        rightUpperArm.rotation.z += (-ARM_REST_Z - rightUpperArm.rotation.z) * ARM_LERP;
    }
}

export function isMoving() {
    return keys.w || keys.a || keys.s || keys.d;
}
