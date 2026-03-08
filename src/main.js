import * as THREE from 'three';
import { createScene } from './scene.js';
import { GameManager } from './game.js';
import { initViverse, login, getCurrentUser, loadProgress, getStorageKeys } from './viverse.js';

let scene, camera, renderer, shibaTeacher, gameManager;
let playerName = '';

function setupScene() {
    const container = document.getElementById('canvas-container');
    if (!container) {
        console.error('Canvas container not found');
        return false;
    }
    const sceneData = createScene(container);
    scene = sceneData.scene;
    camera = sceneData.camera;
    renderer = sceneData.renderer;
    shibaTeacher = sceneData.shibaTeacher;
    gameManager = new GameManager(scene, camera, shibaTeacher);
    return true;
}

function showNicknameModal() {
    const modal = document.getElementById('nickname-modal');
    const input = document.getElementById('nickname-input');
    const submitBtn = document.getElementById('nickname-submit');
    const STORAGE_KEYS = getStorageKeys();
    
    const savedName = localStorage.getItem(STORAGE_KEYS.PLAYER_NAME);
    if (savedName) {
        input.value = savedName;
    }
    
    modal.style.display = 'flex';
    input.focus();
    
    const startGame = () => {
        playerName = input.value.trim() || 'Guest';
        localStorage.setItem(STORAGE_KEYS.PLAYER_NAME, playerName);
        localStorage.removeItem(STORAGE_KEYS.PROGRESS);
        modal.style.display = 'none';
        document.getElementById('player-name').textContent = `👤 ${playerName}`;
        gameManager.setPlayerName(playerName);
        gameManager.resetState();
        gameManager.start();
    };
    
    submitBtn.onclick = startGame;
    input.onkeypress = (e) => {
        if (e.key === 'Enter') startGame();
    };
}

async function init() {
    console.log('Initializing game...');
    
    if (!setupScene()) {
        console.error('Failed to setup scene');
        return;
    }
    
    let viverseReady = false;
    try {
        viverseReady = await initViverse();
        console.log('VIVERSE SDK ready:', viverseReady);
    } catch (err) {
        console.warn('VIVERSE init error:', err);
    }
    
    const loginBtn = document.getElementById('login-btn');
    const guestBtn = document.getElementById('guest-btn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', async () => {
            console.log('Login button clicked');
            if (!viverseReady) {
                console.log('VIVERSE not available, showing nickname modal');
                showNicknameModal();
                return;
            }
            try {
                const user = await login();
                console.log('Login result:', user);
                if (user) {
                    playerName = user.id;
                    document.getElementById('player-name').textContent = `👤 ${playerName}`;
                    gameManager.setPlayerName(playerName);
                    document.getElementById('user-info').style.display = 'block';
                    document.getElementById('user-info').textContent = `Welcome, ${playerName}!`;
                    setTimeout(() => gameManager.start(), 1000);
                }
            } catch (err) {
                console.error('Login error:', err);
                showNicknameModal();
            }
        });
    }
    
    if (guestBtn) {
        guestBtn.addEventListener('click', () => {
            console.log('Guest button clicked');
            showNicknameModal();
        });
    }
    
    animate();
    console.log('Game initialized successfully');
}

function animate() {
    requestAnimationFrame(animate);
    
    if (shibaTeacher) {
        shibaTeacher.position.y = Math.sin(Date.now() * 0.002) * 0.05;
        shibaTeacher.rotation.y = Math.sin(Date.now() * 0.001) * 0.1;
    }
    
    if (renderer && scene && camera) {
        renderer.render(scene, camera);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
