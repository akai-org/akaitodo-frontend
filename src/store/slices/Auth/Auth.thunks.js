import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import LocalStorage from '../../../services/LocalStorage';

const API_AUTH_URL = 'http://localhost:5000/auth';
const API_USER_URL = 'http://localhost:5000/users';

export const getAuthenticate = createAsyncThunk(
    'auth/login', (authDto, { rejectWithValue }) =>
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
            .catch(err => {
                rejectWithValue(err.response.data);
            })
);

export const getCurrentUser = createAsyncThunk(
    'auth/currentUser', (_, { rejectWithValue }) =>
        axios.get(`${API_USER_URL}/me`)
            .then(res => res.data)
            .catch(err => rejectWithValue(err))
);
