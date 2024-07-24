import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '#src/configs/axios';
import { API_ADDRESS } from '#src/configs/axios';

export const getNotes = createAsyncThunk('notes/getNotes', () => {
    console.log('thunk called');
    return axios.get(`${API_ADDRESS}/notes`).then((res) => res.data);
});

export const addNote = createAsyncThunk('notes/addNote', (initialNote) => {
    return axios
        .post(`${API_ADDRESS}/notes`, { ...initialNote })
        .then((res) => res.data);
});

export const updateNoteTitle = createAsyncThunk(
    'notes/updateNoteTitle',
    (update) => {
        console.log('Update title called', update.title, update.noteId);
        return axios
            .patch(`${API_ADDRESS}/notes/${update.noteId}`, {
                title: update.title,
            })
            .then((res) => res.data);
    },
);

export const updateNoteContent = createAsyncThunk(
    'notes/updateNoteContent',
    (update) => {
        console.log('Update content called', update.content, update.noteId);
        return axios
            .patch(`${API_ADDRESS}/notes/${update.noteId}`, {
                body: update.content,
            })
            .then((res) => res.data);
    },
);

export const deleteNoteById = createAsyncThunk(
    'notes/deleteNoteById',
    ({ noteId }) => {
        return axios
            .delete(`${API_ADDRESS}/notes/${noteId}`)
            .then((res) => res.data);
    },
);
