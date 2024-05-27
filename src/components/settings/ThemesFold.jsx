import React, { useContext } from 'react';
import '../../styles/App.scss';

import styles from '../../styles/components/settings/ThemesFold.module.scss';

import { ThemeContext } from '../../contexts/ThemeContext';


const colors = [
    {
        name: "Default",
        primaryColor: "#222",
        secondaryColor: "#555",
        thirdColor: "#888",
        additionalColor: "#aaa",
    },
    {
        name: "Red",
        primaryColor: "#821c3f",
        secondaryColor: "#be1951",
        thirdColor: "#e91e63",
        additionalColor: "#f5754c",
    },
    {
        name: "Pink",
        primaryColor: "#6e193b",
        secondaryColor: "#9f144a",
        thirdColor: "#c2185b",
        additionalColor: "#bb5534",
    },
    {
        name: "Purple",
        primaryColor: "#5b2165",
        secondaryColor: "#7a1f89",
        thirdColor: "#9c27b0",
        additionalColor: "#4f34bb",
    },
    {
        name: "Violet",
        primaryColor: "#392165",
        secondaryColor: "#4a2293",
        thirdColor: "#5727b0",
        additionalColor: "#5b2165",
    },
    {
        name: "Navy",
        primaryColor: "#212265",
        secondaryColor: "#222597",
        thirdColor: "#272ab0",
        additionalColor: "#392165",
    },
    {
        name: "Sea",
        primaryColor: "#214365",
        secondaryColor: "#235a93",
        thirdColor: "#276bb0",
        additionalColor: "#357e60",
    },
    {
        name: "Lightblue",
        primaryColor: "#39637b",
        secondaryColor: "#4a92ba",
        thirdColor: "#57acdc",
        additionalColor: "#aaca2d",
    },
    {
        name: "Lightgreen",
        primaryColor: "#397b6c",
        secondaryColor: "#4dbaa1",
        thirdColor: "#57dcbe",
        additionalColor: "#2fa7cd",
    },
    {
        name: "Green",
        primaryColor: "#3d7052",
        secondaryColor: "#53a875",
        thirdColor: "#60c689",
        additionalColor: "#b7ba18",
    }
];


const ThemesFold = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const colorPalettes = colors.map(palette => (
        <div key={palette.name} className={styles.paletteElement}>
            <p className={styles.paletteName}>{palette.name}</p>
            <div style={{backgroundColor: palette.additionalColor}} className={styles.firstLayer}>
                <div style={{backgroundColor: palette.thirdColor}} className={styles.secondLayer}>
                    <div style={{backgroundColor: palette.secondaryColor}} className={styles.thirdLayer}>
                        <div style={{backgroundColor: palette.primaryColor}} className={styles.fourthLayer}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))

    return(
        <div className={styles.container}>
            <div className={styles.modeContainer}>
                <p className={styles.modeText}>MODE</p>
                <input type="checkbox" style={{backgroundColor: 'tomato'}}/> {/* What's happening? */} 
                
            </div>
            <hr className={styles.line} />
            <div className={styles.themesContainer}>
                {colorPalettes}
            </div>
        </div>
    )
}

export default ThemesFold;