import React, { useState } from 'react';

import styles from '../../styles/components/widgets/ModalWidget.module.scss';


const ModalWidget = ({header, paragraph, modalOn, onConfirm,}) => {
    const [openModal, setOpenModal] = useState(modalOn);
    const switchModal = () => {
        setOpenModal(!openModal);
    }

    document.body.addEventListener('keydown', e  => {
        if (e.key == "Escape") {
            setOpenModal(false);
        }
      });

    const pressConfirm = () => {
        switchModal();
        onConfirm(true);
    }
    
    return (
        <div>
            <button onClick={switchModal}> Show modal </button>
            {openModal && <>
                <div className={styles.modalBackground}>
                    <div className={styles.overlay} onClick={switchModal}></div>
                    <div className={styles.modalContainer}>
                        <div className={styles.header}>
                            <h2 className={styles.headerText}>{header}</h2>
                        </div>
                        <div className={styles.paragraph}>
                            <p>{paragraph}</p>
                        </div>
                        <div className={styles.footer}>
                            <button className={`${styles.modalButton} ${styles.cancel}`} onClick={switchModal}>
                                Cancel
                            </button>
                            <button className={`${styles.modalButton} ${styles.confirm}`} onClick={pressConfirm}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>                
                </>
            }
        </div>
    );
};

export default ModalWidget;
