import styles from '#src/styles/components/notes/Note.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { notesActions } from '../../store/slices/Notes';

const Note = (props) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);

    const stopEditing = (e) => {
        if (!e.shiftKey) {
            if (e.key === 'Enter' || e.key === 'Escape') {
                e.target.blur();
            }
        }
    };

    const editTitle = (e) => {
        e.preventDefault();
        console.log('Event', e.target.value);
        if (e.target.value !== title) {
            setTitle(e.target.value);
            console.log('Title changed', props.id);
            // dispatch(
            //     notesActions.updateNoteTitle({
            //         title: e.target.innerText,
            //         noteId: props.id,
            //     }),
            // );
        }
    };

    const editContent = (e) => {
        e.preventDefault();
        console.log('Event', e.target.innerText);
        if (e.target.innerText !== content) {
            setContent(e.target.innerText);
            console.log('Content changed', props.id);
            dispatch(
                notesActions.updateNoteContent({
                    content: e.target.innerText,
                    noteId: props.id,
                }),
            );
        }
    };

    const deleteNoteHandler = () => {
        dispatch(notesActions.deleteNoteById({ noteId: props.id }));
    };

    return (
        <div className={styles.block}>
            <div className={styles.header}>
                <div className={styles.wrapper}>
                    <input
                        className={styles.title}
                        type="text"
                        value={title}
                        onChange={editTitle}
                        onKeyDown={stopEditing}
                    />
                    <div
                        className={styles.icon}
                        onClick={deleteNoteHandler}
                    ></div>
                </div>
                <div className={styles.line}>
                    <div className={styles.invisible}></div>
                    <div className={styles.visible}></div>
                </div>
            </div>
            <div className={styles.content}>
                <p
                    onBlur={editContent}
                    onKeyDown={stopEditing}
                    contentEditable="true"
                    suppressContentEditableWarning="true"
                >
                    {content}
                </p>
            </div>
            <div className={styles.footer}>
                <div className={styles.time}>{props.time}</div>
                <div className={styles.date}>{props.date}</div>
            </div>
        </div>
    );
};

export default Note;
