import styles from '#src/styles/pages/Notes.module.scss';
import Note from '#src/components/notes/Note';
import AddNote from '../../components/notes/AddNote';
import NavbarModule from '../../layout/Navbar/NavbarModule';
import SearchBar from '../../components/notes/SearchBar';
import { notesActions } from '../../store/slices/Notes/Notes.slice';
import { useDispatch, useSelector } from 'react-redux';
import { notesSelector } from '../../store/slices/Notes/Notes.slice';
import { useEffect, useState } from 'react';

const Notes = () => {
    const dispatch = useDispatch();
    const notes = useSelector(notesSelector);

    useEffect(() => {
        dispatch(notesActions.getNotes());
    }, [notes.notes.length]);

    return (
        <>
            <NavbarModule>
                <SearchBar />
            </NavbarModule>
            <div className={styles.container}>
                {notes.notes.map((note) => {
                    const time =
                        note.createdAt
                            .split('T')[1]
                            .split('.')[0]
                            .split(':')[0] +
                        ':' +
                        note.createdAt
                            .split('T')[1]
                            .split('.')[0]
                            .split(':')[1];
                    const date = note.createdAt.split('T')[0];
                    return (
                        <Note
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            content={note.body}
                            time={time}
                            date={date}
                        />
                    );
                })}
                <AddNote />
            </div>
        </>
    );
};

export default Notes;
