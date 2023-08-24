import React from "react";
import "../styles/App.scss";
import styles from "../styles/pages/Settings.module.scss";

const Settings = () => (
  <>
    <div className={styles.container}>
      <div className={styles.line}>
        <div className={styles.themeDiv}>
          <h3>THEME</h3>
          <button className={styles.themeButton}></button>
        </div>
        <div className={styles.modeDiv}>
          <h3>MODE</h3>
          <div className={styles.modeSwitch}>
            <input type="checkbox"></input>
            <div className={styles.modeSlider}></div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
    <ColorChoice />
  </>
)



const ColorChoice = () => (
  <>
    <div className={styles.cContainer}>
      <div className={styles.cColor}>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  </>
)

export default Settings;
