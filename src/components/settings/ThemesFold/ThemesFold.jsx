import React, { useContext, useCallback } from 'react';
import '../../../styles/App.scss';

import styles from '../../../styles/components/settings/ThemesFold.module.scss';

import { ThemeContext } from '../../../contexts/ThemeContext';
import { colors } from './ThemesFold.utils';
import capitalizedFirstLetter from '../../utils/capitalizedFirstLetter';

const ThemesFold = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleModeChange = () => {
        setTheme((prevState) => ({
            ...prevState,
            mode: prevState.mode === 'light' ? 'dark' : 'light',
        }));
    };

    const handleStyleChange = (name) => {
        setTheme((prevState) => ({
            ...prevState,
            style: name,
        }));
    };

    const colorPalettes = colors.map(
        ({
            name,
            primaryColor,
            secondaryColor,
            thirdColor,
            additionalColor,
        }) => (
            <div
                key={name}
                className={styles.paletteElement}
                onClick={() => handleStyleChange(name)}
            >
                <p className={styles.paletteName}>
                    {capitalizedFirstLetter(name)}
                </p>
                <div
                    style={{ backgroundColor: additionalColor }}
                    className={styles.firstLayer}
                >
                    <div
                        style={{ backgroundColor: thirdColor }}
                        className={styles.secondLayer}
                    >
                        <div
                            style={{ backgroundColor: secondaryColor }}
                            className={styles.thirdLayer}
                        >
                            <div
                                style={{ backgroundColor: primaryColor }}
                                className={styles.fourthLayer}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    );

    return (
        <div className={styles.container}>
            <div className={styles.modeContainer}>
                <p className={styles.modeText}>MODE</p>
                <label className={styles.switch}>
                    <input
                        type="checkbox"
                        onChange={handleModeChange}
                        checked={theme.mode === 'dark'}
                    />
                    <div className={styles.slider}></div>
                </label>
            </div>
            <hr className={styles.line} />
            <div className={styles.themesContainer}>{colorPalettes}</div>
        </div>
    );
};

export default ThemesFold;
