import '#src/styles/App.scss';
import { useLocation } from 'react-router-dom';

import styles from '#src/styles/pages/Settings.module.scss';
import NavbarModule from '../../layout/Navbar/NavbarModule';

const availableFolds = [
    "themes",
    "calendar",
    "todolist",
    "notes",
    "profile"
];

const navbarElementsArray = [
    "Themes",
    "Calendar",
    "ToDo List",
    "Notes",
    "Profile"
];

const navbarElements = navbarElementsArray.map((element, index, array) => (
    <div className={styles.elementWithPipe}>
        <div className={styles.navbarElement}>{element}</div>
        {index !== array.length - 1 && <div className={styles.navbarPipe}></div>}
    </div>
));

const Settings = (props) => {
    return (
        <div>
            <NavbarModule>
                <div className={styles.navbar}>
                    {navbarElements}
                </div>
            </NavbarModule>
        </div>
    );
};

export default Settings;
