import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Guard =
    ({ Component }) =>
    (props) => {
        // const auth = useSelector(authSelector);
        const auth = { isAuthenticated: true };

        return auth?.isAuthenticated ? <Component {...props} /> : <AuthError />;
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
