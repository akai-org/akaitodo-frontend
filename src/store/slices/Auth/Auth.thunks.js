import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from '#src/configs/axios';
import { API_PORT } from '#src/configs/axios';

import LocalStorage from '#src/services/LocalStorage';

const API_AUTH_URL = `http://localhost:${API_PORT}/auth`;
const API_USER_URL = `http://localhost:${API_PORT}/users`;

export const getAuthenticate = createAsyncThunk(
    'auth/login', (authDto) =>
        axios.post(`${API_AUTH_URL}/login`, authDto)
            .then(res => {
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
            })
);

export const getCurrentUser = createAsyncThunk(
    'auth/currentUser', (_, { rejectWithValue }) =>
        axios.get(`${API_USER_URL}/me`)
            .then(res => res.data)
            .catch(err => rejectWithValue(err))
);
