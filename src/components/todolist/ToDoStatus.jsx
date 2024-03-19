import React from 'react';
import '#src/styles/App.scss';
import styles from '#src/styles/components/todolist/ToDoStatus.module.scss';

const ToDoStatus = () => {
    return <div className={styles.toDoStatus}>status div</div>;
};

export default ToDoStatus;