import styles from '#src/styles/components/notes/Note.module.scss';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { notesActions } from '../../store/slices/Notes';
import ContentEditable from '../widgets/ContentEditable';

const Note = (props) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState(props.title);
    const [titleChanged, setTitleChanged] = useState(false);
    const [content, setContent] = useState(props.content);
    const [contentChanged, setContentChanged] = useState(false);

    // Input Counter (accessible for both useEffect and onBlurEvent)
    let timeoutId = null;

    // PTC commences
    useEffect(() => {
        timeoutId = setTimeout(() => {
            if (titleChanged) {
                dispatch(
                    notesActions.updateNoteTitle({ title, noteId: props.id }),
                );
                setTitleChanged(false);
            }
            if (contentChanged) {
                dispatch(
                    notesActions.updateNoteContent({
                        content,
                        noteId: props.id,
                    }),
                );
                setContentChanged(false);
            }
        }, 5 * 1000);

        // Cleanup executes after every input
        return () => {
            clearTimeout(timeoutId);
        };
    }, [title, setTitle, content, setContent]);

    const stopEditing = (e) => {
        if (!e.shiftKey) {
            if (e.key === 'Enter' || e.key === 'Escape') {
                e.target.blur();
            }
        }
    };

    const editTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
        setTitleChanged(true);
    };

    const onBlurUpdateTitle = () => {
        clearTimeout(timeoutId);
        if (titleChanged) {
            dispatch(notesActions.updateNoteTitle({ title, noteId: props.id }));
            setTitleChanged(false);
        }
    };

    const editContent = (e) => {
        setContent(e);
        setContentChanged(true);
    };

    const onBlurUpdateContent = () => {
        clearTimeout(timeoutId);
        if (contentChanged) {
            dispatch(
                notesActions.updateNoteContent({ content, noteId: props.id }),
            );
            setContentChanged(false);
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
                        onBlur={onBlurUpdateTitle}
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
                <ContentEditable onChange={editContent}>
                    <p onKeyDown={stopEditing} onBlur={onBlurUpdateContent}>
                        {props.content}
                    </p>
                </ContentEditable>
            </div>
            <div className={styles.footer}>
                <div className={styles.time}>{props.time}</div>
                <div className={styles.date}>{props.date}</div>
            </div>
        </div>
    );
};

export default Note;
