import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '#src/store/slices/Task';
import '../../styles/App.scss';
import styles from '../../styles/components/todolist/ToDoTasks.module.scss';
import Task from './Task.jsx';

const ToDoTasks = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.task.tasks);

    useEffect(() => {
        dispatch(taskActions.fetchAllTasks());
    }, [dispatch]);

    useEffect(() => {
        console.log("Tasks from Redux state:", tasks);
    }, [tasks]);



    const toggleTask = (taskId) => {
        // to do
    };

    const removeTask = async (taskId) => {
        // to do
    };

    return (
        <div className={styles.toDoTasks}>
            <div className={styles.title}>Tasks</div>
            <div className={styles.tasksContainer}>
                {tasks.map((task) => (
                    <Task 
                        key={task.id} 
                        taskId={task.id}
                        taskName={task.name} 
                        taskDescription={task.description}
                        isDone={task.isDone}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToDoTasks;
