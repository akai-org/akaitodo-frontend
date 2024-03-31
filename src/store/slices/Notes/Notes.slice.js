import { createSlice } from '@reduxjs/toolkit';
import * as notesThunks from './Notes.thunks';
import buildExtraReducers from './Notes.extraReducers';

const initialState = {
    notes: [],
    colorsUsed: [],
    isLoading: false,
    lastId: 0,
};

const slice = createSlice({
    name: 'notes',
    initialState: initialState,
    reducers: {},
    extraReducers: buildExtraReducers,
});

export const notesReducer = slice.reducer;
export const notesSelector = (state) => state.notes;
export const notesActions = { ...slice.actions, ...notesThunks };
