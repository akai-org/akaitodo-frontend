import styles from '#src/styles/components/notes/SearchBar.module.scss';

const SearchBar = () => {
    return (
        <div className={styles.container}>
            <input
                className={styles.searchBar}
                type="text"
                placeholder="Search notes..."
            />
            <div className={styles.horLine}></div>
            <div className={styles.box}></div>
        </div>
    );
};

export default SearchBar;
