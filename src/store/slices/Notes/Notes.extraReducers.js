import {
    getNotes,
    addNote,
    updateNoteContent,
    updateNoteTitle,
    deleteNoteById,
} from './Notes.thunks';

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
        state.hasChanged = false;
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

    builder.addCase(updateNoteTitle.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(updateNoteTitle.fulfilled, (state) => {
        state.isLoading = false;
        state.hasChanged = true;
    });
    builder.addCase(updateNoteTitle.rejected, (state) => {
        state.isLoading = false;
    });

    builder.addCase(updateNoteContent.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(updateNoteContent.fulfilled, (state) => {
        state.isLoading = false;
        state.hasChanged = true;
    });
    builder.addCase(updateNoteContent.rejected, (state) => {
        state.isLoading = false;
    });

    builder.addCase(deleteNoteById.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(deleteNoteById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.hasChanged = true;
    });
    builder.addCase(deleteNoteById.rejected, (state) => {
        state.isLoading = false;
    });
};

export default buildExtraReducers;
