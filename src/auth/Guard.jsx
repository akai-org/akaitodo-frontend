import React, { useEffect } from 'react';
import Login from '../pages/login/Login';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { authSelector } from '../store/slices/Auth';

const Guard =
    ({ Component }) =>
    (props) => {
        const auth = useSelector(authSelector);
        const componentObj = { Component };

        if (componentObj.Component.name == 'Login') {
            return !auth?.isAuthenticated ? <Login /> : <AuthError2 />;
        }
        return auth?.isAuthenticated ? (
            <Component {...props} />
        ) : (
            <AuthError1 />
        );
    };

// this is ugly asf

const AuthError1 = () => {
    //temporary fix

    const navigate = useNavigate();

    const doIt = () => {
        navigate('/login');
    };

    useEffect(() => {
        doIt();
    }, []);

    return <></>;
};

const AuthError2 = () => {
    //temporary fix #2

    const navigate = useNavigate();

    const doIt = () => {
        navigate('/');
    };

    useEffect(() => {
        doIt();
    }, []);

    return <></>;
};

export default Guard;
