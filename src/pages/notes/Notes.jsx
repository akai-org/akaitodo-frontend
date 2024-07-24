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
        console.log(notes.notes.length, notes.hasChanged);
    }, [notes.notes.length, notes.hasChanged]);

    return (
        <>
            <NavbarModule>
                <SearchBar />
            </NavbarModule>
            <div className={styles.container}>
                {notes.notes.map((note) => {
                    const localDate = new Date(note.createdAt);
                    const timezoneOffset = localDate.getTimezoneOffset();
                    const correctedDate = new Date(
                        localDate.getTime() - timezoneOffset * 60000,
                    ).toISOString();

                    const time =
                        correctedDate
                            .split('T')[1]
                            .split('.')[0]
                            .split(':')[0] +
                        ':' +
                        correctedDate.split('T')[1].split('.')[0].split(':')[1];
                    const date = correctedDate.split('T')[0];
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
