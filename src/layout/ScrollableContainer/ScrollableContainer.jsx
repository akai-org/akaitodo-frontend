import React from 'react';

import styles from '#src/styles/layout/ScrollableContainer/ScrollableContainer.module.scss';

const ScrollableContainer = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>{children}</div>
        </div>
    );
};

export default ScrollableContainer;
