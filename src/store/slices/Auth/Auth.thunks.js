import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const dBlogin = createAsyncThunk('/api/login', async (thunkApi) => {
    try {
        const res = await axios.get('http://localhost:3000/api/users/1');
        console.log(res.data);
        return res.data;
    } catch (err) {
        return thunkApi.rejectWithValue({ error: err.message });
    }
});
