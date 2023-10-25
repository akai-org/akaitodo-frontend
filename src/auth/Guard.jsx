import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { authSelector } from '../store/slices/Auth';
import LocalStorage from '../classes/LocalStorage';

const Guard = (component) => {
    return false ? component : AuthError;
};

const AuthError = () => {
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
