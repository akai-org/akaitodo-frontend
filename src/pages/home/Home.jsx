import React, { useEffect } from 'react';
import '#src/styles/App.scss';

import styles from '#src/styles/pages/Home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, authSelector } from '../../store/slices/Auth';

const Home = () => {
    const { user } = useSelector(authSelector);
    console.log(user);

    useEffect(() => {}, [user]);

    return <div className={styles.container}>Welcome! {user}</div>;
};

export default Home;
