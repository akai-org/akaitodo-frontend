import { jwtDecode } from "jwt-decode";
import LocalStorage from "../../../services/LocalStorage"
import axios from "axios";

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
    }
}

export const logout = (state) => {
    state.isAuthenticated = false;
    LocalStorage.removeAccessToken();
    delete axios.defaults.headers.common.Authorization;
}

export default {
    verifyToken,
    logout
}
