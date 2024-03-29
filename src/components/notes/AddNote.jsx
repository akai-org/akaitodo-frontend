import styles from '#src/styles/components/notes/AddNote.module.scss';

const AddNote = () => {
    const addNoteHandler = () => {
        console.log('Add Note');
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
