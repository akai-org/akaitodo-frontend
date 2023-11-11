class LocalStorage {
    static getJWT() {
        if (!(localStorage.getItem('JWT') == null)) {
            const JWT = localStorage.getItem('JWT');
            console.log(JWT);
        } else {
            console.log('JWT not found');
        }
    }
    static setJWT(val) {
        localStorage.setItem('JWT', val);
    }
}

export default new LocalStorage();
