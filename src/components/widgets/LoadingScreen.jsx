import React from 'react';
import styles from '#src/styles/components/widgets/LoadingScreen.module.scss';

const LoadingScreen = () => {
    return (
        <div className={styles.container}>
            <div className={styles.block}></div>
            <div className={styles.text}></div>
        </div>
    );
};

export default LoadingScreen;
