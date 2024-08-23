import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useStore } from 'flux';

export const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { store, actions } = useStore();
    const navigate = useNavigate();

    const handleRegister = async () => {
        const result = await actions.register(username, password);
        if (result.success) {
            navigate('/login');
        } else {
            alert(`Registration failed: ${result.message}`);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            {store.error && <p>Error: {store.error}</p>}
        </div>
    );
};