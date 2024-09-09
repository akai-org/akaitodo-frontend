import React, { useContext, useCallback } from 'react';
import '../../styles/App.scss';

import styles from '../../styles/components/settings/ThemesFold.module.scss';

import { ThemeContext } from '../../contexts/ThemeContext';

const colors = [
    {
        name: 'default',
        primaryColor: '#222',
        secondaryColor: '#555',
        thirdColor: '#888',
        additionalColor: '#aaa',
    },
    {
        name: 'red',
        primaryColor: '#b8283a',
        secondaryColor: '#e32d50',
        thirdColor: '#ff4262',
        additionalColor: '#ff735b',
    },
    {
        name: 'pink',
        primaryColor: '#9e1b52',
        secondaryColor: '#d1236e',
        thirdColor: '#ff4081',
        additionalColor: '#ff8f8a',
    },
    {
        name: 'purple',
        primaryColor: '#682b83',
        secondaryColor: '#9e33b4',
        thirdColor: '#c158d6',
        additionalColor: '#7a4fc4',
    },
    {
        name: 'teal',
        primaryColor: '#16555e',
        secondaryColor: '#1b7d84',
        thirdColor: '#1fa8a8',
        additionalColor: '#46d9b1',
    },
    {
        name: 'navy',
        primaryColor: '#1d3b6a',
        secondaryColor: '#20488e',
        thirdColor: '#2b6bbf',
        additionalColor: '#3a8dda',
    },
    {
        name: 'aqua',
        primaryColor: '#1b5e77',
        secondaryColor: '#25879e',
        thirdColor: '#30b5d1',
        additionalColor: '#56dfeb',
    },
    {
        name: 'lightblue',
        primaryColor: '#44799c',
        secondaryColor: '#58a6d1',
        thirdColor: '#67c2ff',
        additionalColor: '#c7e876',
    },
    {
        name: 'limegreen',
        primaryColor: '#4c8a4d',
        secondaryColor: '#6bcb64',
        thirdColor: '#87e283',
        additionalColor: '#c1f26f',
    },
    {
        name: 'green',
        primaryColor: '#2c7059',
        secondaryColor: '#40a476',
        thirdColor: '#57c894',
        additionalColor: '#99d64c',
    },
];

const capitalizedFirstLetter = (name) =>
    name.slice(0, 1).toUpperCase() + name.slice(1);

const ThemesFold = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleModeChange = useCallback(() => {
        setTheme((prevState) => ({
            ...prevState,
            mode: prevState.mode === 'light' ? 'dark' : 'light',
        }));
    }, [setTheme]);

    const handleStyleChange = useCallback(
        (name) => {
            setTheme((prevState) => ({
                ...prevState,
                style: name,
            }));
        },
        [setTheme],
    );

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
