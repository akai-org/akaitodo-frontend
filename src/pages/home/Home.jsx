import React, { useEffect } from 'react';
import '#src/styles/App.scss';
import useAuth from '../../hooks/useAuth';

import styles from '#src/styles/pages/Home.module.scss';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/slices/Auth';

const Home = () => {
    return (
        <div className={styles.container}>
            <div> Welcome {useAuth('username')} ~! </div>
        </div>
    );
};

export default Home;
