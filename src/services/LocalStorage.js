class LocalStorage {
    static getAccessToken() {
        if (!(localStorage.getItem('access_token') == null)) {
            const JWT = localStorage.getItem('access_token');
            return JWT;
        }

        return null;
    }

    static setAccessToken(token) {
        localStorage.setItem('access_token', token);
    }

    static removeAccessToken() {
        try {
            localStorage.removeItem('access_token');
        } catch {}
    }
}

export default LocalStorage;
