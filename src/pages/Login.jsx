import React, { useState } from 'react';
import styles from '../styles/pages/Login.module.scss';

const initialFormState = {
    login: '',
    password: '',
};

const Login = () => {
    const [form, setForm] = useState(initialFormState);

    const handleLoginChange = (event) => {
        const login = event.target.value;
        setForm((prevState) => ({ ...prevState, login }));
    };

    return (
        <div>
            <input
                type="text"
                value={form.login}
                onChange={handleLoginChange}
            />
        </div>
    );
};

export default Login;
