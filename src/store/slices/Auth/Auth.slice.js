import { createSlice } from '@reduxjs/toolkit';
import * as authThunks from './Auth.thunks';
import buildExtraReducers from './Auth.extraReducers';
import { verifyToken, logout } from './Auth.reducers';

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
};

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        verifyToken,
        logout
    },
    extraReducers: buildExtraReducers,
});

export const authReducer = slice.reducer;
export const authSelector = (state) => state.auth;
export const authActions = { ...slice.actions, ...authThunks };
