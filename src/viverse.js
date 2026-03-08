const APP_ID = import.meta.env.VITE_APP_ID;
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN || 'account.htcvive.com';

const STORAGE_KEYS = {
    PROGRESS: 'woofKorean_progress',
    PLAYER_NAME: 'woofKorean_playerName'
};

const AVATAR_API_URL = 'https://sdk-api.viverse.com/';
const VIVEPORT_URL = 'https://www.viveport.com/';
const VIVERSE_COMMUNITY_URL = 'https://www.viverse.com/';
const LEADERBOARD_NAME = 'xp_leaderboard';

let viverseClient = null;
let avatarClient = null;
let gameDashboardClient = null;
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

export function isViverseReady() {
    return viverseClient !== null;
}

export async function initAvatarClient() {
    if (!viverseClient) {
        console.warn('VIVERSE client not initialized');
        return null;
    }
    
    try {
        const accessToken = await viverseClient.getToken();
        if (!accessToken) {
            console.warn('No access token available');
            return null;
        }
        
        avatarClient = new globalThis.viverse.avatar({
            baseURL: AVATAR_API_URL,
            token: accessToken
        });
        
        console.log('Avatar client initialized');
        return avatarClient;
    } catch (error) {
        console.error('Avatar client init failed:', error);
        return null;
    }
}

export async function getUserProfile() {
    if (!avatarClient) {
        await initAvatarClient();
    }
    
    if (!avatarClient) {
        return null;
    }
    
    try {
        const profile = await avatarClient.getProfile();
        console.log('User profile:', profile);
        return profile;
    } catch (error) {
        console.error('Failed to get profile:', error);
        return null;
    }
}

export async function getActiveAvatar() {
    if (!avatarClient) {
        await initAvatarClient();
    }
    
    if (!avatarClient) {
        return null;
    }
    
    try {
        const avatar = await avatarClient.getActiveAvatar();
        console.log('Active avatar:', avatar);
        return avatar;
    } catch (error) {
        console.error('Failed to get avatar:', error);
        return null;
    }
}

export async function getPublicAvatars() {
    if (!avatarClient) {
        await initAvatarClient();
    }
    
    if (!avatarClient) {
        return [];
    }
    
    try {
        const avatars = await avatarClient.getPublicAvatarList();
        console.log('Public avatars:', avatars.length);
        return avatars;
    } catch (error) {
        console.error('Failed to get public avatars:', error);
        return [];
    }
}

async function initGameDashboard() {
    if (!viverseClient) {
        console.warn('VIVERSE client not initialized');
        return null;
    }
    
    try {
        const accessToken = await viverseClient.getToken();
        if (!accessToken) {
            console.warn('No access token for leaderboard');
            return null;
        }
        
        gameDashboardClient = new globalThis.viverse.gameDashboard({
            baseURL: VIVEPORT_URL,
            communityBaseURL: VIVERSE_COMMUNITY_URL,
            token: accessToken
        });
        
        console.log('Game Dashboard client initialized');
        return gameDashboardClient;
    } catch (error) {
        console.error('Game Dashboard init failed:', error);
        return null;
    }
}

export async function submitScore(score) {
    if (!gameDashboardClient) {
        await initGameDashboard();
    }
    
    if (!gameDashboardClient) {
        console.warn('Cannot submit score: not logged in');
        return false;
    }
    
    try {
        await gameDashboardClient.uploadLeaderboardScore(APP_ID, [
            { name: LEADERBOARD_NAME, value: String(score) }
        ]);
        console.log('Score submitted:', score);
        return true;
    } catch (error) {
        console.error('Failed to submit score:', error);
        return false;
    }
}

export async function getLeaderboard(limit = 10) {
    if (!gameDashboardClient) {
        await initGameDashboard();
    }
    
    if (!gameDashboardClient) {
        try {
            const guestClient = new globalThis.viverse.gameDashboard({
                baseURL: VIVEPORT_URL,
                communityBaseURL: VIVERSE_COMMUNITY_URL,
                token: ''
            });
            const result = await guestClient.getGuestLeaderboard(APP_ID, {
                name: LEADERBOARD_NAME,
                range_start: 1,
                range_end: limit,
                region: 'global',
                time_range: 'alltime'
            });
            return result?.entries || [];
        } catch (error) {
            console.error('Failed to get guest leaderboard:', error);
            return [];
        }
    }
    
    try {
        const result = await gameDashboardClient.getLeaderboard(APP_ID, {
            name: LEADERBOARD_NAME,
            range_start: 1,
            range_end: limit,
            region: 'global',
            time_range: 'alltime'
        });
        return result?.entries || [];
    } catch (error) {
        console.error('Failed to get leaderboard:', error);
        return [];
    }
}
