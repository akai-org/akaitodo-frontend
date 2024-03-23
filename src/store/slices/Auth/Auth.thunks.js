import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '#src/configs/axios';
import { API_ADDRESS } from '#src/configs/axios';

import LocalStorage from '#src/services/LocalStorage';

const API_AUTH_URL = `${API_ADDRESS}/auth`;
const API_USER_URL = `${API_ADDRESS}/users`;

const authFunction = (res) => {
    const { accessToken } = res.data;

    if (accessToken) {
        LocalStorage.setAccessToken(accessToken);
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
        LocalStorage.removeAccessToken();
        delete axios.defaults.headers.common.Authorization;
        throw Error("No token");
    }

    return res.data;
}

export const getAuthenticate = createAsyncThunk(
    'auth/login', (authDto) =>
        axios.post(`${API_AUTH_URL}/login`, authDto)
            .then(res => authFunction(res))
);

export const getAuthenticateByGoogle = createAsyncThunk(
    'auth/google/login', (gtokenDto) =>
        axios.post(`${API_AUTH_URL}/google/login`, gtokenDto)
            .then(res => authFunction(res))
)

export const getCurrentUser = createAsyncThunk(
    'auth/currentUser', (_, { rejectWithValue }) =>
        axios.get(`${API_USER_URL}/me`)
            .then(res => res.data)
            .catch(err => rejectWithValue(err))
);
