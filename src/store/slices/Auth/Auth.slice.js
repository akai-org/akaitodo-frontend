import { createSlice, createReducer } from '@reduxjs/toolkit';
import * as authThunks from './Auth.thunks';
import buildExtraReducers from './Auth.extraReducers';

const initialState = {
    isAuthenticated: false,
    user: {
        id: 0,
        username: null,
        password: null,
        email: null,
    },
};

// reducers for methods
// extraReducers for thunks
const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.id = 0;
            state.username = '';
            state.password = '';
            state.email = '';
        },
    },
    extraReducers: buildExtraReducers,
});

export const authReducer = slice.reducer;
export const authSelector = (state) => state.auth;
export const authActions = { ...slice.actions, ...authThunks };
