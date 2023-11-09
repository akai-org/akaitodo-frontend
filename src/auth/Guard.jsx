import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Redirect } from 'react-router-dom';

const Guard = (component) => {
    return false ? component : <Redirect to="/login" />;
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
