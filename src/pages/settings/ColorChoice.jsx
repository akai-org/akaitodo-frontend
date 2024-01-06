import React, { useState } from 'react';
import '#src/styles/App.scss';

import styles from '#src/styles/pages/settings/ColorChoice.module.scss';

// colors = {
//     red1: []
// }

const ColorChoice = () => {
    return (
        <div className={styles.container}>
            <ColorButton />
            <ColorButton />
            <ColorButton />
            <ColorButton />
            <ColorButton />
        </div>
    )
}


const ColorButton = (props) => {
    // styleButton = {
    //     backgroundColor: props.color
    // }
    return (
        <div className={styles.firstLayer}>
            <div className={styles.secondLayer}>
                <div className={styles.thirdLayer}>
                    <div className={styles.fourthLayer}>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ColorChoice;