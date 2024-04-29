import { createSlice } from '@reduxjs/toolkit';
import * as taskThunks from './Task.thunks';
import buildExtraReducers from './Task.extraReducers';
import {} from './Task.reducers';

const initialState = {
    tasks: [],
};

const slice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: buildExtraReducers,
});

export const taskReducer = slice.reducer;
export const taskSelector = (state) => state.task;
export const taskActions = { ...slice.actions, ...taskThunks };
