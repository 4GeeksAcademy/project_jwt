import React from "react";
import { useNavigate } from 'react-router-dom';
import { useStore } from 'flux';

export const Private = () => {
    const { store, actions } = useStore();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await actions.logout();
        navigate('/login');
    };

    if (!store.isAuthenticated) {
        navigate('/login');
        return null; // Redirecting, so nothing to render
    }

    return (
        <div>
            <h2>Private Page</h2>
            <p>Welcome, {store.user}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};