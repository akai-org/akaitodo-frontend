import React from "react";
import CalendarWidget from "../widgets/CalendarWidget";
import "../../styles/App.scss";
import styles from "../../styles/components/home/HomeMiddle.module.scss";

function HomeMiddle() {
  /*
  return (
    <div className="middle">
      <CalendarWidget />
    </div>
  );
  */
  return <div className={styles.container}></div>;
}

export default HomeMiddle;
