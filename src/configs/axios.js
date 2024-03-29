import Axios from 'axios';
import LocalStorage from '#src/services/LocalStorage';

const axios = Axios.create();

axios.interceptors.request.use((config) => {
    config.headers.Authorization =  `Bearer ${LocalStorage.getAccessToken() ?? ''}`;
    return config;
});

axios.interceptors.response.use((res) => res, (err) => {
    if (err.request.status === 401 && !err.request.responseURL.includes('login')) {
        LocalStorage.removeAccessToken();
        delete axios.defaults.headers.common.Authorization;
        window.location.reload();
    }

    return err;
});

export default axios;

// CONSTRAINTS
export const API_PORT = 5000;
export const API_ADDRESS = `http://localhost:${API_PORT}`;
