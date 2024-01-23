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

    // New:
    const [formData, setFormData] = useState(
        {
            isDarkModeChecked: false
        }
    )

    const handleChange = (event) => {
        const {name, type, value, checked} = event.target // value for the future inputs in settings
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type == "checkbox" ? checked : value
            }
        })
    }

    // const handleCheckbox = () => {
    //     setIsModeChecked(prevState => !prevState)
    // }

    const handleClick = () => {
        setSidebarOnOff(prevState => !prevState)
    }

    return (
        <div className={styles.container}>
            <div className={styles.themesAndColors}>
                <div className={styles.theme}>
                    <label htmlFor="themeButton" className={styles.themeText}>THEME</label>
                    <button 
                        id="themeButton"
                        className={styles.themeButton} 
                        onClick={handleClick}>
                    </button>
                </div>
            <div className={styles.mode}>
                <label htmlFor="isDarkModeChecked" className={styles.modeText}>MODE</label>
                <div className={styles.modeSlider}>
                    <input
                        type="checkbox"
                        id="isDarkModeChecked"
                        className={styles.setIsModeChecked} 
                        checked={formData.isDarkModeChecked}
                        onChange={handleChange}
                        name="isDarkModeChecked"
                    />
                </div>
            </div>
        </div>
        <hr className={styles.line} />
        {sidebarOnOff && <ColorChoice darkMode={formData.isDarkModeChecked}/>}
        {/* <p className={styles.test} style={sidebarStyle}>Test</p>  */}
        </div>
    );
};


export default Settings;
