import React, { useState } from 'react';
import '../../styles/App.scss';
import styles from '../../styles/components/todolist/Task.module.scss';

const Task = ({ taskId, taskName, onToggle }) => {
    const toggleCheckbox = () => {
        onToggle(taskId);
    };

    return (
        <div className={styles.task}>
            <label htmlFor={taskId}>
                <div className={styles.checkboxContainer}>
                    <input 
                        type="checkbox" 
                        id={taskId}
                        onChange={toggleCheckbox}
                    />
                    <div className={styles.checkIcon}>
                       <i className="ri-check-line"></i>
                    </div>
                </div>
                {taskName}
            </label>
        </div>
    );
};

export default Task;
