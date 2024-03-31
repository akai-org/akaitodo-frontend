import { getNotes, addNote } from './Notes.thunks';

const buildExtraReducers = (builder) => {
    // Get Notes
    builder.addCase(getNotes.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(getNotes.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // Don't want store user data in notes
        delete payload[0].user;
        state.notes = payload;
    });
    builder.addCase(getNotes.rejected, (state) => {
        state.isLoading = false;
    });

    // Add Note
    builder.addCase(addNote.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(addNote.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.notes.push(payload);
    });
    builder.addCase(addNote.rejected, (state) => {
        state.isLoading = false;
    });
};

export default buildExtraReducers;
