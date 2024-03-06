import React from 'react';
import { ToDoEdit, ToDoStatus, ToDoLists, ToDoTasks } from '#src/components/todolist/index.jsx';
import '#src/styles/App.scss';
import styles from '#src/styles/pages/ToDoList.module.scss';

const ToDoList = () => {
    return (
        <div className={styles.container}>
           <div className={styles.middleContainer}>
            <ToDoTasks />
            <ToDoLists />
           </div>
           <div className={styles.rightContainer}>
            <ToDoEdit />
            <ToDoStatus />
           </div>
        </div>
    );
};

export default ToDoList;
