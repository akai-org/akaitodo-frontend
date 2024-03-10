import styles from '#src/styles/pages/Notes.module.scss';
import Note from '#src/components/notes/Note';
import AddNote from '../../components/notes/AddNote';

const Notes = () => {
    return (
        <div className={styles.container}>
            <Note />
            <AddNote />
        </div>
    );
};

export default Notes;
