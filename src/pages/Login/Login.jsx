import React, { useEffect, useState } from 'react';
import styles from '../../styles/pages/Login.module.scss';
import LocalStorage from '../../classes/LocalStorage';

import { useSelector, useDispatch } from 'react-redux';
import { authSelector } from '../../store/slices/Auth';
import { authActions } from '../../store/slices/Auth';
import { useNavigate } from 'react-router-dom';

const initialFormState = {
    login: '',
    password: '',
};

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(authSelector);

    const [form, setForm] = useState(initialFormState);

    const handleLoginChange = (event) => {
        const login = event.target.value;
        setForm((prevState) => ({ ...prevState, login }));
    };

    const handlePasswordChange = (event) => {
        const password = event.target.value;
        setForm((prevState) => ({ ...prevState, password }));
    };

    // not so sure about this but it works?
    // I think the if statement should wait for dispatch to mutate the state
    // useEffect has a weird bug though
    const loginHandler = () => {
        console.log('button');
        dispatch(authActions.login());
        if (user.username == form.login && user.password == form.password) {
            navigate('/');
        }
    };

    useEffect(() => {
        dispatch(authActions.logout());

        console.log('logged out');
    }, []);

    // useEffect(() => {
    //     console.log(user.username, user.password);
    //     console.log(form.login, form.password);
    //     if (user.username == form.login && user.password == form.password) {
    //         navigate('/');
    //     }
    // }, [navigate, user, form, setForm, loginHandler]);

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <div className={styles.leftSide}>
                    <div className={styles.topWelcome}>
                        <h1>Welcome!</h1>
                        <img src="../../public/favicon.ico" alt="DoDo Logo" />
                    </div>
                    <p className={styles.leftSideFirstSentence}>
                        This is <span style={{ color: '#4DAEC3' }}>DoDo</span>
                    </p>
                    <p>Your new bird friend in organizing things and time.</p>
                    <p className={styles.leftSideLastSentence}>
                        We hope you will enjoy the app.
                    </p>
                </div>

                <button className={styles.middleBar}></button>

                <div className={styles.rightSide}>
                    <button className={styles.googleButton}>
                        <img
                            src="../../public/images/Google__G__Logo.png"
                            alt=""
                        />
                        Continue with&nbsp;
                        <span className={styles.googleAccountBold}>
                            Google Account
                        </span>
                    </button>
                    <p>or</p>
                    <input
                        type="text"
                        placeholder="Username"
                        value={form.login}
                        onChange={handleLoginChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handlePasswordChange}
                    />
                    <button
                        className={styles.loginButton}
                        onClick={loginHandler}
                    >
                        Login
                    </button>
                </div>

                <div className={styles.bottomBlock}></div>
            </div>
        </div>
    );
};

export default Login;
