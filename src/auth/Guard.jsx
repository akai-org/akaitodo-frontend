import React, { useContext } from 'react';
import AuthContext from '../contexts/auth-context';

const Guard = (component) => {
    const protoAPI = useContext(AuthContext);

    return protoAPI.isAuthenticated ? component : AuthError;
};

const AuthError = () => {
    return (
        <>
            // render login component
            <h1>You failed...</h1>
        </>
    );
};

export default Guard;
