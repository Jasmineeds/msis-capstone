import * as THREE from 'three';

export function createScene(container) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 3, 8);
    camera.lookAt(0, 1, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    addLights(scene);
    createGround(scene);
    createClassroom(scene);
    const shibaTeacher = createShibaTeacher(scene);
    createTrees(scene);
    createClouds(scene);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return { scene, camera, renderer, shibaTeacher };
}

function addLights(scene) {
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xffffff, 0.8);
    sun.position.set(10, 20, 10);
    sun.castShadow = true;
    scene.add(sun);
}

function createGround(scene) {
    const grassGeo = new THREE.PlaneGeometry(50, 50);
    const grassMat = new THREE.MeshStandardMaterial({ color: 0x7CBA5F });
    const grass = new THREE.Mesh(grassGeo, grassMat);
    grass.rotation.x = -Math.PI / 2;
    grass.receiveShadow = true;
    scene.add(grass);

    const pathGeo = new THREE.PlaneGeometry(3, 15);
    const pathMat = new THREE.MeshStandardMaterial({ color: 0xD4A574 });
    const path = new THREE.Mesh(pathGeo, pathMat);
    path.rotation.x = -Math.PI / 2;
    path.position.set(0, 0.01, 5);
    scene.add(path);
}

function createClassroom(scene) {
    const building = new THREE.Group();

    const wallGeo = new THREE.BoxGeometry(12, 6, 8);
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xFFF8DC });
    const walls = new THREE.Mesh(wallGeo, wallMat);
    walls.position.y = 3;
    walls.castShadow = true;
    building.add(walls);

    const roofGeo = new THREE.ConeGeometry(8, 3, 4);
    const roofMat = new THREE.MeshStandardMaterial({ color: 0xB22222 });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = 7.5;
    roof.rotation.y = Math.PI / 4;
    building.add(roof);

    const doorGeo = new THREE.BoxGeometry(2, 3, 0.2);
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    const door = new THREE.Mesh(doorGeo, doorMat);
    door.position.set(0, 1.5, 4.1);
    building.add(door);

    const winGeo = new THREE.BoxGeometry(1.5, 1.5, 0.2);
    const winMat = new THREE.MeshStandardMaterial({ color: 0x87CEEB, transparent: true, opacity: 0.7 });
    [-3, 3].forEach(x => {
        const win = new THREE.Mesh(winGeo, winMat);
        win.position.set(x, 3.5, 4.1);
        building.add(win);
    });

    const signGeo = new THREE.BoxGeometry(6, 1.2, 0.3);
    const signMat = new THREE.MeshStandardMaterial({ color: 0xFFD700 });
    const sign = new THREE.Mesh(signGeo, signMat);
    sign.position.set(0, 5.5, 4.2);
    building.add(sign);

    building.position.z = -5;
    scene.add(building);
}

function createShibaTeacher(scene) {
    const shiba = new THREE.Group();
    shiba.name = 'shibaTeacher';

    const furColor = 0xE8B86D;
    const furMat = new THREE.MeshStandardMaterial({ color: furColor });

    const bodyGeo = new THREE.CapsuleGeometry(0.5, 0.8, 8, 16);
    const body = new THREE.Mesh(bodyGeo, furMat);
    body.position.y = 1;
    body.castShadow = true;
    shiba.add(body);

    const headGeo = new THREE.SphereGeometry(0.5, 16, 16);
    const head = new THREE.Mesh(headGeo, furMat);
    head.position.y = 2;
    head.scale.set(1, 0.9, 0.9);
    shiba.add(head);

    const earGeo = new THREE.ConeGeometry(0.15, 0.3, 8);
    const leftEar = new THREE.Mesh(earGeo, furMat);
    leftEar.position.set(-0.3, 2.4, 0);
    leftEar.rotation.z = -0.3;
    shiba.add(leftEar);

    const rightEar = new THREE.Mesh(earGeo, furMat);
    rightEar.position.set(0.3, 2.4, 0);
    rightEar.rotation.z = 0.3;
    shiba.add(rightEar);

    const faceGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const faceMat = new THREE.MeshStandardMaterial({ color: 0xFFFAF0 });
    const face = new THREE.Mesh(faceGeo, faceMat);
    face.position.set(0, 1.95, 0.25);
    face.scale.set(1, 0.8, 0.5);
    shiba.add(face);

    const eyeGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.15, 2.05, 0.4);
    shiba.add(leftEye);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.15, 2.05, 0.4);
    shiba.add(rightEye);

    const noseGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const noseMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const nose = new THREE.Mesh(noseGeo, noseMat);
    nose.position.set(0, 1.9, 0.5);
    shiba.add(nose);

    const tailGeo = new THREE.CylinderGeometry(0.08, 0.12, 0.5, 8);
    const tail = new THREE.Mesh(tailGeo, furMat);
    tail.position.set(0, 1.2, -0.5);
    tail.rotation.x = -0.5;
    shiba.add(tail);

    const hatBrimGeo = new THREE.CylinderGeometry(0.4, 0.5, 0.2, 16);
    const hatMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e });
    const hatBrim = new THREE.Mesh(hatBrimGeo, hatMat);
    hatBrim.position.y = 2.5;
    shiba.add(hatBrim);

    const hatTopGeo = new THREE.BoxGeometry(0.6, 0.3, 0.6);
    const hatTop = new THREE.Mesh(hatTopGeo, hatMat);
    hatTop.position.y = 2.7;
    shiba.add(hatTop);

    shiba.position.set(0, 0, 2);
    scene.add(shiba);
    return shiba;
}

function createTrees(scene) {
    const positions = [[-8, 0, -3], [8, 0, -3], [-6, 0, 5], [6, 0, 5]];
    
    positions.forEach(([x, y, z]) => {
        const tree = new THREE.Group();
        
        const trunkGeo = new THREE.CylinderGeometry(0.2, 0.3, 2, 8);
        const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
        const trunk = new THREE.Mesh(trunkGeo, trunkMat);
        trunk.position.y = 1;
        tree.add(trunk);

        const leavesGeo = new THREE.SphereGeometry(1.2, 8, 8);
        const leavesMat = new THREE.MeshStandardMaterial({ color: 0x228B22 });
        const leaves = new THREE.Mesh(leavesGeo, leavesMat);
        leaves.position.y = 2.8;
        tree.add(leaves);

        tree.position.set(x, y, z);
        scene.add(tree);
    });
}

function createClouds(scene) {
    const cloudMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.9 });
    
    for (let i = 0; i < 5; i++) {
        const cloud = new THREE.Group();
        const puffPositions = [[0, 0, 0], [0.8, 0.2, 0], [-0.8, 0.1, 0], [0.4, 0.4, 0]];
        
        puffPositions.forEach(([px, py, pz]) => {
            const puffGeo = new THREE.SphereGeometry(0.8 + Math.random() * 0.4, 8, 8);
            const puff = new THREE.Mesh(puffGeo, cloudMat);
            puff.position.set(px, py, pz);
            cloud.add(puff);
        });

        cloud.position.set(
            (Math.random() - 0.5) * 40,
            15 + Math.random() * 5,
            -20 + Math.random() * 10
        );
        scene.add(cloud);
    }
}
