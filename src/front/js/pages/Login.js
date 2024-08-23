import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useStore } from 'flux'
import { useContext } from "react";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { store, actions } = useStore();
    const navigate = useNavigate();

    const handleLogin = async () => {
        const result = await actions.login(username, password);
        if (result.success) {
            navigate('/private');
        } else {
            alert(`Login failed: ${result.message}`);
        }
    };

    return (
        <div>
            <h2>Login</h2>
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
            <button onClick={handleLogin}>Login</button>
            {store.error && <p>Error: {store.error}</p>}
        </div>
    );
};


