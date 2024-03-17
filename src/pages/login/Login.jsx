import React, { useState, useEffect } from 'react';
import styles from '#src/styles/pages/Login.module.scss';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/slices/Auth/Auth.slice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

const initialFormState = {
    email: '',
    password: '',
};

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState(initialFormState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleEmailChange = (event) => {
        const email = event.target.value;
        setForm((prevState) => ({ ...prevState, email }));
    };

    const handlePasswordChange = (event) => {
        const password = event.target.value;
        setForm((prevState) => ({ ...prevState, password }));
    };

    const validation = (form) => {
        const errors = {};
        const emailRegex = /^[\w-\.]{1,30}@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!form.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(form.email)) {
            errors.login = 'Email is not in a valid format';
        }
        if (!form.password) {
            errors.password = 'Password is required';
        }

        return errors;
    };

    const handleLogin = () => {
        const userCredentials = {
            email: form.email,
            password: form.password
        };

        dispatch(authActions.getAuthenticate(userCredentials))
            .unwrap()
            .then(() => {
                toast("Login success", { type: 'success' });
                setTimeout(() => { navigate('/home'); }, 2000);
            })
            .catch(() => {
                toast("Login failed", { type: 'error' });
            });
    };

    // to remove
    const temporary = useGoogleLogin({
        scope: ['email', 'profile'],
        select_account: true,
        flow: 'auth-code',
        onSuccess: (response) => {
            dispatch(authActions.getAuthenticateByGoogle({
                    gCode: response.code
                })).unwrap()
                .then(() => {
                    toast("Login success", { type: 'success' });
                    setTimeout(() => { navigate('/home'); }, 2000);
                })
                .catch(() => {
                    toast("Login failed", { type: 'error' });
                });
        },
        onError: () => {
            toast("Google login failed", { type: 'error' });
        }
    });

    const handleGoogleLoginSuccess = ({ credential }) => {
        dispatch(authActions.getAuthenticateByGoogle({
            gToken: credential
        })).unwrap()
        .then(() => {
            toast("Login success", { type: 'success' });
            setTimeout(() => { navigate('/home'); }, 2000);
        })
        .catch(() => {
            toast("Login failed", { type: 'error' });
        });
    };

    const handleGoogleLoginFailed = () => {
        toast("Google login failed", { type: 'error' });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validation(form));
        setIsSubmit(true);

        // TODO -> prevent login if form has errors

        handleLogin();
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(form);
        }
    }, [formErrors]);    

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
                    {/* <button className={styles.googleButton} onClick={handleGoogleLogin}>
                        <img src="/images/Google__G__Logo.png" alt="" className={styles.googleLogo}/>
                        Continue with&nbsp;
                        <span className={styles.googleAccountBold}>
                            Google Account
                        </span>
                    </button> */}
                    <GoogleLogin
                        onSuccess={handleGoogleLoginSuccess}
                        onError={handleGoogleLoginFailed}
                    />
                    <p className={styles.orText}>or</p>
                    <form className={styles.loginForm} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleEmailChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handlePasswordChange}
                        />
                        <button
                            className={styles.loginButton}
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
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
