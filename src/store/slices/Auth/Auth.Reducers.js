import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

import LocalStorage from '#src/services/LocalStorage';

export const verifyToken = (state) => {
    const token = LocalStorage.getAccessToken();

    if (token === '' || token === null) {
        state.isAuthenticated = false;
        return;
    }

    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    state.isAuthenticated = decoded.exp > currentTime;
    if (decoded.exp > currentTime) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
        LocalStorage.removeAccessToken();
        delete axios.defaults.headers.common.Authorization;
    }
}

export const logout = (state) => {
    state.isAuthenticated = false;
    LocalStorage.removeAccessToken();
    delete axios.defaults.headers.common.Authorization;
}
