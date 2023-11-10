import React, { useEffect } from 'react';
import '#src/styles/App.scss';

import styles from '#src/styles/pages/Home.module.scss';
import { useDispatch } from 'react-redux';
import useAuth from '#src/hooks/useAuth';


const Home = () => {
    const dispatch = useDispatch();
    const auth = useAuth();

    const handleLogout = () => {
        dispatch({ type: 'auth/logout' });
        console.log(auth.isAuthenticated);
    };

    return (
        <div className={styles.container}>
            <div> Welcome </div>
            <button onClick={handleLogout}> LOGOUT </button>
        </div>
    );
};

export default Home;
