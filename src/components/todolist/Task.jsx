import React, { useState } from 'react';
import '#src/styles/App.scss';
import styles from '#src/styles/components/todolist/Task.module.scss';

const Task = ({ taskName, isChecked, onToggle }) => {
    const toggleCheckbox = () => {
        onToggle(taskName);
    };

    return (
        <div className={styles.task}>
            <label htmlFor={taskName}>
                <div className={styles.checkboxContainer}>
                    <input 
                        type="checkbox" 
                        id={taskName}
                        checked={isChecked} 
                        onChange={toggleCheckbox}
                    />
                    <div className={styles.checkIcon}>
                        {isChecked && <i className="ri-check-line"></i>}
                    </div>
                </div>
                {taskName}
            </label>
        </div>
    );
};

export default Task;
