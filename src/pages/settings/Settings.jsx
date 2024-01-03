import '#src/styles/App.scss';

import styles from '#src/styles/pages/Settings.module.scss';

const Settings = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.themesAndColors}>
                <div className={styles.theme}>
                    <h3 className={styles.themeText}>THEME</h3>
                    <button className={styles.themeButton}></button>
                </div>
            <div className={styles.mode}>
                <h3 className={styles.modeText}>MODE</h3>
                <div className={styles.modeSlider}>
                    <input type="checkbox" className={styles.modeCheckbox} />
                </div>
            </div>
        </div>
        <hr className={styles.line} />
        </div>
    );
};

export default Settings;
