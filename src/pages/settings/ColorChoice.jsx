import React, { useState } from 'react';
import '#src/styles/App.scss';
import colorsListBright from "./colorsBright";
import colorsListDark from "./colorsDark";
import styles from '#src/styles/pages/settings/ColorChoice.module.scss';

const ColorChoice = (props) => {
    // Rendering 2 times? Check it later
    const [colorsData, setColorsData] = useState(colorsListBright)
    if (!props.darkMode && colorsData === colorsListDark) {
        setColorsData(colorsListBright)
    } else if (props.darkMode && colorsData === colorsListBright) {
        setColorsData(colorsListDark)
    } // maybe it is possible to implement this in better way

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
    // console.log(props)
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