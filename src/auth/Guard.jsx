import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { authSelector } from '../store/slices/Auth';

const Guard = ({ component }) => {
    const auth = useSelector(authSelector);
    const Component = component;

    return auth.isAuthenticated ? <Component /> : <AuthError />;
};

const AuthError = () => {
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

export default Guard;
