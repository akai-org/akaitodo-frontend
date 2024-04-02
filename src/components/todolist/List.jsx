import '#src/styles/App.scss';
import styles from '#src/styles/components/todolist/List.module.scss';

const List = ({ numOfTasks, listName }) => {
    return (
        <div className={styles.list}>
            <div className={styles.num}>{numOfTasks}</div>
            <div className={styles.name}>{listName}</div>
        </div>
    );
};

export default List;
