import { deleteTask, fetchAllTasks } from './Task.thunks';

const buildExtraReducers = (builder) => {
    builder
        // fetch all tasks
        .addCase(fetchAllTasks.fulfilled, (state, action) => {
            state.tasks = action.payload;
        })
        // delete task
        .addCase(deleteTask.fulfilled, (state, action) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload,
            );
        });
};

export default buildExtraReducers;
