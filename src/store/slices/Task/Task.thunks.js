import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '#src/configs/axios';
import { API_ADDRESS } from '#src/configs/axios';

const API_TASKS_URL = `${API_ADDRESS}/tasks`;

export const fetchAllTasks = createAsyncThunk(
    'task/fetchAllTasks',
    (_, { rejectWithValue }) =>
        axios
            .get(`${API_TASKS_URL}/user/all`)
            .then((res) => res.data)
            .catch((err) => rejectWithValue(err)),
);
