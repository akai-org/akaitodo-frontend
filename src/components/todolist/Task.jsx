import React, { useState } from 'react';
import '../../styles/App.scss';
import styles from '../../styles/components/todolist/Task.module.scss';

const Task = ({ taskName }) => {
    //const toggleCheckbox = () => {
    //    onToggle(taskName);
    //};

    return (
        <div className={styles.task}>
            <label htmlFor={taskName}>
                <div className={styles.checkboxContainer}>
                    <input 
                        type="checkbox" 
                        id={taskName}
                    />
                    <div className={styles.checkIcon}>
                        //{isChecked && <i className="ri-check-line"></i>}
                    </div>
                </div>
                {taskName}
            </label>
        </div>
    );
};

export default Task;
