import styles from '#src/styles/pages/Notes.module.scss';
import Note from '#src/components/notes/Note';

const Notes = () => {
    return (
        <div className={styles.container}>
            <Note />
        </div>
    );
};

export default Notes;
