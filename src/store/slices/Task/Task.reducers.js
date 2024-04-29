import { fetchAllTasks } from './Task.thunks';

const buildReducers = (builder) => {
    builder
        // fetch all tasks
        .addCase(fetchAllTasks.fulfilled, (state, action) => {
            state.tasks = action.payload;
        });
};

export default buildReducers;
