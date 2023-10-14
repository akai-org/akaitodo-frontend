import React from 'react';

const AuthContext = React.createContext({
    isAuthenticated: true,
    isAuthorized: true,
});

export default AuthContext;
