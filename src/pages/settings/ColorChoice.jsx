import React, { useState } from 'react';
import '#src/styles/App.scss';

import styles from '#src/styles/pages/settings/ColorChoice.module.scss';

colors = {
    red: ["#821c3f", "#be1951", "#e91e63", "#f5754c"],
    pink: ["#6e193b", "#9f144a", "#c2185b", "#bb5534"],
    violet: ["#5b2165", "#7a1f89", "#9c27b0", "#4f34bb"],
    darkblue: ["#392165", "#4a2293", "#5727b0", "#5b2165"],
    navy: ["#212265", "#222597", "#272ab0", "#392165"],
    sea: ["#214365", "#235a93", "#276bb0", "#357e60"],
    lightblue: ["#39637b", "#4a92ba", "#4a92ba", "#aaca2d"],
    lightgreen: ["#397b6c", "#4dbaa1", "#57dcbe", "#2fa7cd"],
    green: ["#3d7052", "#53a875", "#53a875", "#b7ba18"]
}

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