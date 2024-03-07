import '#src/styles/App.scss';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from '#src/styles/pages/Settings.module.scss';

import NavbarModule from '../../layout/Navbar/NavbarModule';
import ThemesFold from '../../components/settings/ThemesFold';
import CalendarFold from '../../components/settings/CalendarFold';
import ToDoListFold from '../../components/settings/ToDoListFold';
import NotesFold from '../../components/settings/NotesFold';
import ProfileFold from '../../components/settings/ProfileFold';


const folds = [
    {
        title: "Themes",
        url: "themes",
        component: <ThemesFold />
    },
    {
        title: "Calendar",
        url: "calendar",
        component: <CalendarFold />
    },
    {
        title: "ToDo List",
        url: "todolist",
        component: <ToDoListFold />
    },
    {
        title: "Notes",
        url: "notes",
        component: <NotesFold />
    },
    {
        title: "Profile",
        url: "profile",
        component: <ProfileFold />
    }
]

const foldTitles = folds.map(fold => fold.title);
const foldUrls = folds.map(fold => fold.url);
const foldComponents = folds.map(fold => fold.component);


const Settings = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleFoldChange = (fold) => setCurrentFold(fold);
    

    const isFoldInPath = foldUrls.includes(location.pathname.split('/').pop());
    const [currentFold, setCurrentFold] = useState(
        isFoldInPath
        ? location.pathname.split('/').pop()
        : "themes"
        );
        
    useEffect(() => {
        navigate(`/settings/${currentFold}`);
    }, [currentFold]);
    
    const navbarElements = foldTitles.map((element, index, array) => (
        <div className={styles.elementWithPipe} key={index}>
            <button 
                className={`${styles.navbarElement} ${currentFold === foldUrls[index] ? styles.activeNavbarElement : ''}`}
                onClick={() => handleFoldChange(foldUrls[index])}
            >{element}</button>
            {index !== array.length - 1 && <div className={styles.navbarPipe}></div>}
        </div>)
    );

    return (
        <div>
            <NavbarModule>
                <div className={styles.navbar}>
                    {navbarElements}
                </div>
            </NavbarModule>
            <div className={styles.container}>
                {folds.find(fold => fold.url === currentFold).component}
            </div>
        </div>
    );
};

export default Settings;
