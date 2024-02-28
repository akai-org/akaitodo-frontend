import React, { useState, useEffect } from 'react';
import styles from '#src/styles/pages/Login.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, authSelector } from '../../store/slices/Auth/Auth.slice';
import { useNavigate } from 'react-router-dom';

const initialFormState = {
    login: '',
    password: '',
};

const Login = () => {
    const auth = useSelector(authSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState(initialFormState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleLoginChange = (event) => {
        const login = event.target.value;
        setForm((prevState) => ({ ...prevState, login }));
    };

    const handlePasswordChange = (event) => {
        const password = event.target.value;
        setForm((prevState) => ({ ...prevState, password }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validation(form));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(form);
        }
    }, [formErrors]);

    const validation = (form) => {
        const errors = {};
        const emailRegex = /^[\w-\.]{1,30}@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!form.login) {
            errors.login = 'Login is required';
        } else if (!emailRegex.test(form.login)) {
            errors.login = 'This login is not a valid e-mail format';
        }
        if (!form.password) {
            errors.password = 'Password is required';
        }

        return errors;
    };

    const handleLogin = () => {
        const userCredentials = {
            username: "User",
            email: form.login,
            password: form.password
        };

        dispatch(authActions.getAuthenticate(userCredentials));
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <div className={styles.leftSide}>
                    <div className={styles.topWelcome}>
                        <h1 className={styles.welcomeHeader}>Welcome!</h1>
                        <img src="/favicon.ico" alt="DoDo Logo" className={styles.dodoLogo}/>
                    </div>
                    <p className={styles.leftSideFirstSentence}>
                        This is <span className={styles.dodoName}>DoDo</span>
                    </p>
                    <p className={styles.leftSideDescription}>Your new bird friend in&nbsp;organizing things and time.</p>
                    <p className={styles.leftSideLastSentence}>
                        We hope you will enjoy the app.
                    </p>
                </div>

                <div className={styles.middleBar}></div>

                <div className={styles.rightSide}>
                    <button className={styles.googleButton}>
                        <img src="/images/Google__G__Logo.png" alt="" className={styles.googleLogo}/>
                        Continue with&nbsp;
                        <span className={styles.googleAccountBold}>
                            Google Account
                        </span>
                    </button>
                    <p className={styles.orText}>or</p>
                    {/* <form className={styles.loginForm} onSubmit={handleLogin}> */}
                    <div className={styles.loginForm}>
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
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
                <div className={styles.topMobile}>
                        <p className={styles.dodoNameMobile}>DoDo</p>
                        <hr className={styles.hrLineMobile}></hr>
                </div>
                <div className={styles.bottomBlock}></div>
            </div>
        </div>
    );
};

export default Login;
