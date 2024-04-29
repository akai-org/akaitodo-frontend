import { createSlice } from '@reduxjs/toolkit';
import * as taskThunks from './Task.thunks';
import buildReducers from './Task.reducers';

const initialState = {
    tasks: [],
};

const slice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    reducers: buildReducers,
});

export const taskReducer = slice.reducer;
export const taskSelector = (state) => state.task;
export const taskActions = { ...slice.actions, ...taskThunks };
