import React from 'react';
import '#src/styles/App.scss';
import colors from "./colors";
import styles from '#src/styles/pages/settings/ColorChoice.module.scss';

const ColorChoice = () => {
    return (
        <div className={styles.container}>
            <ColorButton />
        </div>
    )
}

const ColorButton = (props) => {
    // styleButton = {
    //     backgroundColor: props.color
    // }
    // console.log(props)
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