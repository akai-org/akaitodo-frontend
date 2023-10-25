import React, { useEffect } from 'react';
import '#src/styles/App.scss';

import styles from '#src/styles/pages/Home.module.scss';

const Home = () => {
    return (
        <div className={styles.container}>
            <div> Welcome </div>
        </div>
    );
};

export default Home;
