import React from 'react';
import styles from '#src/styles/components/widgets/LoadingScreen.module.scss';

const LoadingScreen = () => {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={`${styles.duo} ${styles.duo1}`}>
                    <div className={`${styles.dot} ${styles.dotA}`}></div>
                    <div className={`${styles.dot} ${styles.dotB}`}></div>
                </div>
                <div className={`${styles.duo} ${styles.duo2}`}>
                    <div className={`${styles.dot} ${styles.dotA}`}></div>
                    <div className={`${styles.dot} ${styles.dotB}`}></div>
                </div>
            </div>
            <div className={styles.text}></div>
        </div>
    );
};

export default LoadingScreen;
