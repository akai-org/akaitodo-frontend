import React from "react";
import "../styles/App.scss";
import styles from "../styles/pages/Settings.module.scss";

function Settings() {
  return (
  <div className={styles.container}>
    <div className={styles.line}>
      <div className={styles.themeDiv}>
        <h3>THEME</h3>
        <button className={styles.themeButton}></button>
      </div>
      <div className={styles.modeDiv}>
        <h3>MODE</h3>
        <button className={styles.themeButton}></button>
      </div>
    </div>
    <hr></hr>
  </div>
  )
}

export default Settings;
