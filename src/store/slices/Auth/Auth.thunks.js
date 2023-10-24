import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('/api/login', async () => {
    axios.get('http://localhost:3000/api/users/1').then((response) => {
        console.log(response);
        return response.data;
    });
});
