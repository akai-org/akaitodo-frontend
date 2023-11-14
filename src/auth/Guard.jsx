import React from 'react';
import Login from '../pages/login/Login';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../store/slices/Auth';

const Guard =
    ({ Component }) =>
    (props) => {
        const auth = useSelector(authSelector);
        const componentObj = { Component };

        if (componentObj.Component.name == 'Login') {
            return !auth?.isAuthenticated ? (
                <Login />
            ) : (
                <Navigate to="/" replace />
            );
        }
        return auth?.isAuthenticated ? (
            <Component {...props} />
        ) : (
            <Navigate to="/login" replace />
        );
    };

// const AuthError1 = () => {
//     const navigate = useNavigate();

//     const doIt = () => {
//         navigate('/login');
//     };

//     useEffect(() => {
//         doIt();
//     }, []);

//     return <></>;
// };

// const AuthError2 = () => {
//     const navigate = useNavigate();

//     const doIt = () => {
//         navigate('/');
//     };

//     useEffect(() => {
//         doIt();
//     }, []);

//     return <></>;
// };

export default Guard;
