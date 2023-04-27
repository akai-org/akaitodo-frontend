import React from "react";
import HomeMiddle from "../components/home/HomeMiddle";
import HomeRight from "../components//home/HomeRight";
import "../styles/App.scss";
import styles from "../styles/pages/Home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <HomeMiddle />
      <HomeRight />
    </div>
  );
}

export default Home;
