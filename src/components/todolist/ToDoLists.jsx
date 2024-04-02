import React from 'react';
import '#src/styles/App.scss';
import styles from '#src/styles/components/todolist/ToDoLists.module.scss';
import List from './List.jsx';

const ToDoLists = () => {
    // for testing only
    const listsData = [
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 },
        { listName: "Home", numOfTasks: 2 }
    ];

    return <div className={styles.toDoLists}>

        <div className={styles.titleContainer}>
            <div className={styles.title}>Lists</div>
            <button className={styles.addListButton}>
                Add New
                <i class="ri-add-line"></i>
            </button>
        </div>

        <hr/>

        <div className={styles.listsContainer}>
            {listsData.map((list, index) => (
                <List
                    key={index}
                    listName={list.listName}
                    numOfTasks={list.numOfTasks}
                />
            ))}
        </div>

    </div>;
};

export default ToDoLists;