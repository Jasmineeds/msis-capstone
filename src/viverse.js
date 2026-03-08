const APP_ID = import.meta.env.VITE_APP_ID;
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN || 'account.htcvive.com';

const STORAGE_KEYS = {
    PROGRESS: 'woofKorean_progress',
    PLAYER_NAME: 'woofKorean_playerName'
};

let viverseClient = null;
let currentUser = null;
let authResult = null;

export async function initViverse() {
    if (typeof globalThis.viverse === 'undefined') {
        console.warn('VIVERSE SDK not loaded');
        return false;
    }

    try {
        viverseClient = new globalThis.viverse.client({
            clientId: APP_ID,
            domain: AUTH_DOMAIN
        });
        
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Auth check timeout')), 3000)
        );
        
        try {
            const result = await Promise.race([
                viverseClient.checkAuth(),
                timeoutPromise
            ]);
            if (result) {
                authResult = result;
                currentUser = {
                    id: result.account_id,
                    accessToken: result.access_token
                };
                console.log('Already logged in:', currentUser.id);
            }
        } catch (authErr) {
            console.warn('Auth check skipped:', authErr.message);
        }
        
        console.log('VIVERSE SDK initialized successfully');
        return true;
    } catch (error) {
        console.error('VIVERSE SDK init failed:', error);
        return false;
    }
}

export async function login() {
    if (!viverseClient) {
        console.warn('VIVERSE SDK not initialized');
        return null;
    }

    try {
        const result = await viverseClient.checkAuth();
        
        if (result) {
            authResult = result;
            currentUser = {
                id: result.account_id,
                accessToken: result.access_token
            };
            console.log('Logged in:', currentUser.id);
            return currentUser;
        } else {
            viverseClient.loginWithWorlds();
            return null;
        }
    } catch (error) {
        console.error('Login failed:', error);
        viverseClient.loginWithWorlds();
        return null;
    }
}

export function getCurrentUser() {
    return currentUser;
}

export function getAuthResult() {
    return authResult;
}

export async function saveProgress(progressData) {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progressData));
    console.log('Progress saved locally');
}

export async function loadProgress() {
    const local = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return local ? JSON.parse(local) : null;
}

export function getStorageKeys() {
    return STORAGE_KEYS;
}

export async function submitScore(score) {
    console.log('Score recorded:', score);
    return true;
}

export async function getLeaderboard(limit = 10) {
    return [];
}

export function isViverseReady() {
    return viverseClient !== null;
}
