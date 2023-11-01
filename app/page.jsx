"use client";
// components/Login.js
import React, { useState } from 'react';
import MainHeader from "/components/MainHeader";
import Image from "next/image";
function goToAdminPanel() {
    window.location.href = '/dashboard';
}

const Login = () => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const inputClass = "w-full p-2 mb-2 rounded border border-emerald-300 focus:outline-none focus:border-emerald-700";
    const buttonClass = "w-full p-2 bg-emerald-600 text-white rounded cursor-pointer hover:bg-emerald-800 transition duration-200 text-center";
    const errorClass = "text-red-500";

    const handleLogin = () => {
        if (Email === 'admin' && password === '123456') {
            goToAdminPanel();
            // alert('Login successful');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div>
            <MainHeader />
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <Image width={300} height={300}
                           src={'/images/LOGO.png'}
                           alt={"Logo"}
                           className="items-center w-1/2 p-2.5 ml-28 h-auto"
                    />
                    <h1 className="text-2xl font-semibold mb-4 text-emerald-700">Login</h1>
                    {error && <p className={errorClass}>{error}</p>}
                    <input
                        type="text"
                        placeholder="Username"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`${inputClass} mt-2`}
                    />
                    <button
                        onClick={handleLogin}
                        className={`${buttonClass} mt-4`}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
