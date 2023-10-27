"use client";
// components/Login.js
import React, { useState } from 'react';

function goToAdminPanel() {
    window.location.href = '/dashboard';
}

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#0070f3',
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    };

    const errorStyle = {
        color: 'red',
    };

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            // Successful login, you can navigate to the admin panel here.
            goToAdminPanel();
            alert('Login successful');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                {error && <p style={errorStyle}>{error}</p>}
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={inputStyle}
                    className="w-full"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={inputStyle}
                    className="w-full mt-2"
                />
                <button
                    onClick={handleLogin}
                    style={buttonStyle}
                    className="w-full mt-4"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;

