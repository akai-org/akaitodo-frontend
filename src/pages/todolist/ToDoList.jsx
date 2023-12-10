import React from 'react';
import '#src/styles/App.scss';

import styles from '#src/styles/pages/ToDoList.module.scss';

const ToDoList = () => {
    return (
        <div className={styles.container}>
            <div> ToDo List </div>
        </div>
    );
};

export default ToDoList;
