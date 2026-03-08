import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm';

let currentVRM = null;
let mixer = null;
let clock = new THREE.Clock();

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
