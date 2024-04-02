import React, { useState } from 'react';
import '#src/styles/App.scss';
import styles from '#src/styles/components/todolist/ToDoTasks.module.scss';
import Task from './Task.jsx';

const ToDoTasks = () => {
    const [tasks, setTasks] = useState(["test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9"]);
    const [checkedTasks, setCheckedTasks] = useState([]);

    const toggleTask = (taskName) => {
        if (checkedTasks.includes(taskName)) {
            setCheckedTasks(checkedTasks.filter(task => task !== taskName));
        } else {
            setCheckedTasks([...checkedTasks, taskName]);
        }
        removeTask(taskName);
    };

    const removeTask = (taskName) => {
        setTimeout(() => {
            setTasks(tasks.filter(task => task !== taskName));
        }, 300);
    };

    return (
        <div className={styles.toDoTasks}>
            <div className={styles.title}>Tasks</div>
            <div className={styles.tasksContainer}>
                {tasks.map((task, index) => (
                    <Task 
                        key={index} 
                        taskName={task} 
                        isChecked={checkedTasks.includes(task)} 
                        onToggle={toggleTask} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ToDoTasks;
