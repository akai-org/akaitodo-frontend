import React, { useState } from 'react';
import '#src/styles/App.scss';
import colorsList from "./colors";
import styles from '#src/styles/pages/settings/ColorChoice.module.scss';

const ColorChoice = () => {
    const [colorsData, setColorsData] = useState(colorsList)

    const colors = colorsData.map(color => {
        return (
            <ColorButton 
                key={color.id}
                {...color}
            />
        )
    })
    return (
        <div className={styles.container}>
            {colors}
        </div>
    )
}

const ColorButton = (props) => {
    // styleButton = {
    //     backgroundColor: props.color
    // }
    console.log(props)
    return (
        <div className={styles.firstLayer} style={{backgroundColor: props.color1}}>
            <div className={styles.secondLayer} style={{backgroundColor: props.color2}}>
                <div className={styles.thirdLayer} style={{backgroundColor: props.color3}}>
                    <div className={styles.fourthLayer} style={{backgroundColor: props.color4}}>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ColorChoice;