import '#src/styles/App.scss';
// import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from '#src/styles/pages/Settings.module.scss';
import NavbarModule from '../../layout/Navbar/NavbarModule';
import ThemesFold from './Themes';
import CalendarFold from './Calendar';
import ToDoListFold from './ToDoList';
import NotesFold from './Notes';
import ProfileFold from './Profile';

const navbarElementsArray = [
    "Themes",
    "Calendar",
    "ToDo List",
    "Notes",
    "Profile"
];

const arr = {
    themes: <ThemesFold />,
    calendar: <CalendarFold />,
    todolist: <ToDoListFold />,
    notes: <NotesFold />,
    profile: <ProfileFold />
};

const availableFolds = [
    "themes",
    "calendar",
    "todolist",
    "notes",
    "profile"
];

const navbarElements = navbarElementsArray.map((element, index, array) => (
    <div className={styles.elementWithPipe}>
        <div className={styles.navbarElement}>{element}</div>
        {index !== array.length - 1 && <div className={styles.navbarPipe}></div>}
    </div>
));

const Settings = (props) => {
    const location = useLocation();

    return (
        <div>
            <NavbarModule>
                <div className={styles.navbar}>
                    {navbarElements}
                </div>
            </NavbarModule>
            <div className={styles.container}>

            </div>
        </div>
    );
};

export default Settings;
