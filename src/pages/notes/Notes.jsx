import styles from '#src/styles/pages/Notes.module.scss';
import Note from '#src/components/notes/Note';
import AddNote from '../../components/notes/AddNote';
import NavbarModule from '../../layout/Navbar/NavbarModule';
import SearchBar from '../../components/notes/SearchBar';

const Notes = () => {
    return (
        <>
            <NavbarModule>
                <SearchBar />
            </NavbarModule>
            <div className={styles.container}>
                <Note />
                <AddNote />
            </div>
        </>
    );
};

export default Notes;
