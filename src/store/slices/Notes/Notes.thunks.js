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
