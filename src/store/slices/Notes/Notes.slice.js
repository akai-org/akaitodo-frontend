import { createSlice } from '@reduxjs/toolkit';
import * as notesThunks from './Notes.thunks';

const initialState = {
    notes: [],
    colorsUsed: [],
    isLoading: false,
};

const slice = createSlice({
    name: 'notes',
    initialState: initialState,
    reducers: {},
    extraReducers: {},
});

export const notesReducer = slice.reducer;
export const notesSelector = (state) => state.notes;
export const notesActions = { ...slice.actions, ...notesThunks };
