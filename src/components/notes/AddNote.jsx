import styles from '#src/styles/components/notes/AddNote.module.scss';
import { notesActions } from '#src/store/slices/Notes/Notes.slice';
import { useDispatch, useSelector } from 'react-redux';
import { notesSelector } from '../../store/slices/Notes';

const AddNote = () => {
    const dispatch = useDispatch();
    const notes = useSelector(notesSelector);

    const initNote = {
        title: 'Name your note!',
        body: 'Write down your thoughts',
        createdAt: new Date().toISOString(),
    };

    const addNoteHandler = () => {
        dispatch(notesActions.addNote(initNote));
        console.log(notes.notes);
    };
    return (
        <div role="button" className={styles.main} onClick={addNoteHandler}>
            <div className={styles.wrapper}>
                <div className={`${styles.lt} ${styles.corner}`}></div>
                <div className={`${styles.rt} ${styles.corner}`}></div>
                <div className={`${styles.lb} ${styles.corner}`}></div>
                <div className={`${styles.rb} ${styles.corner}`}></div>
            </div>
            <div className={styles.plus}></div>
        </div>
    );
};

export default AddNote;
