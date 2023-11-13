import React, { useState } from 'react';

import styles from '../../styles/components/widgets/ModalWidget.module.scss';


const ModalWidget = () => {
    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>

                <div className={styles.header}>
                    <h2 className={styles.headerText}>HEADER</h2>
                </div>
                <div className={styles.paragraph}>
                    <p>--------------------Paragraph--------------------</p>
                </div>
                <div className={styles.footer}>
                    <button className={`${styles.modalButton} ${styles.cancel}`}>Cancel</button>
                    <button className={`${styles.modalButton} ${styles.confirm}`}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default ModalWidget;
