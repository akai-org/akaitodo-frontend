import React, { useState } from 'react';
import ColorChoice from "./ColorChoice";

import '#src/styles/App.scss';
import styles from '#src/styles/pages/settings/Settings.module.scss';


const Settings = () => {
    const [sidebarOnOff, setSidebarOnOff] = useState(false)
    const [isModeChecked, setIsModeChecked] = useState(false)
    // const sidebarStyle = {
    //     display: sidebarOnOff ? "block" : "none"
    // }

    const handleCheckbox = () => {
        setIsModeChecked(prevState => !prevState)
    }

    const handleClick = () => {
        setSidebarOnOff(prevState => !prevState)
    }

    return (
        <div className={styles.container}>
            <div className={styles.themesAndColors}>
                <div className={styles.theme}>
                    <h3 className={styles.themeText}>THEME</h3>
                    <button className={styles.themeButton} onClick={handleClick}></button>
                </div>
            <div className={styles.mode}>
                <h3 className={styles.modeText}>MODE</h3>
                <div className={styles.modeSlider}>
                    <input
                        type="checkbox" 
                        className={styles.setIsModeChecked} 
                        checked={isModeChecked}
                        onChange={handleCheckbox}
                    />
                </div>
            </div>
        </div>
        <hr className={styles.line} />
        {sidebarOnOff && <ColorChoice darkMode={isModeChecked}/>}
        {/* <p className={styles.test} style={sidebarStyle}>Test</p>  */}
        </div>
    );
};


export default Settings;
