import '#src/styles/App.scss';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from '#src/styles/pages/Settings.module.scss';
import NavbarModule from '../../layout/Navbar/NavbarModule';
import ThemesFold from '../../components/settings/Themes';
import CalendarFold from '../../components/settings/Calendar';
import ToDoListFold from '../../components/settings/ToDoList';
import NotesFold from '../../components/settings/Notes';
import ProfileFold from '../../components/settings/Profile';

const navbarElementsArray = [
    "Themes",
    "Calendar",
    "ToDo List",
    "Notes",
    "Profile"
];

const folds = {
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


const Settings = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const isFoldCorrect = availableFolds.includes(location.pathname.split('/').pop());
    const [currentFold, setCurrentFold] = useState(
        isFoldCorrect
        ? location.pathname.split('/').pop()
        : "themes"
        );
    
        
    const handleFoldChange = (fold) => setCurrentFold(fold);
    
    useEffect(() => {
        navigate(`/settings/${currentFold}`);
    }, [currentFold]);
    
    const navbarElements = navbarElementsArray.map((element, index, array) => {
        return(
        <div className={styles.elementWithPipe}>
            <button 
                className={`${styles.navbarElement} ${currentFold === availableFolds[index] ? styles.activeNavbarElement : ''}`}
                onClick={() => handleFoldChange(availableFolds[index])}
            >{element}</button>
            {index !== array.length - 1 && <div className={styles.navbarPipe}></div>}
        </div>)
    });

    return (
        <div>
            <NavbarModule>
                <div className={styles.navbar}>
                    {navbarElements}
                </div>
            </NavbarModule>
            <div className={styles.container}>
                {folds[currentFold]}
            </div>
        </div>
    );
};

export default Settings;
