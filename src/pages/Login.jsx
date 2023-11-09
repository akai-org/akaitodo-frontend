import React, { useState, useEffect } from 'react';
import styles from '#src/styles/pages/Login.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, authSelector } from '../store/slices/Auth/Auth.slice';
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
        console.log(formErrors);
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
        dispatch({ type: 'auth/login' });
        console.log(auth.isAuthenticated);
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <div className={styles.leftSide}>
                    <div className={styles.topWelcome}>
                        <h1>Welcome!</h1>
                        <img src="/favicon.ico" alt="DoDo Logo" />
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
                        <img src="/images/Google__G__Logo.png" alt="" />
                        Continue with&nbsp;
                        <span className={styles.googleAccountBold}>
                            Google Account
                        </span>
                    </button>
                    <p>or</p>
                    <form onSubmit={handleSubmit}>
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
                            type="submit"
                            className={styles.loginButton}
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </form>
                </div>

                <div className={styles.bottomBlock}></div>
            </div>
        </div>
    );
};

export default Login;
