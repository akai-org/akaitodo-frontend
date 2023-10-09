import React from 'react';
import '../styles/App.scss';

import HomeMiddle from '../components/home/HomeMiddle';
import HomeRight from '../components//home/HomeRight';
import styles from '../styles/pages/Home.module.scss';

const Home = () => {
    return (
        <div className={styles.container}>
            <HomeMiddle />
            <HomeRight />
        </div>
    );
};

export default Home;
