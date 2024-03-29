export const addNote = (state) => {
    const initNote = {
        id: 0,
        title: 'Name your note!',
        content: 'Write down your thoughts',
    };
    state.notes.push(initNote);
};
