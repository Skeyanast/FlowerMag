import React from 'react';

import '../styles/App.css';
import '../styles/Login.css';

import LoginController from '../components/LoginController';

// Страница авторизации
const Login = () => {

    return (
        <div className="mainContent">
            <h1 className="loginPage__title">FlowerMag</h1>
            <div className="login__block">
                <div className="login__title">
                    Вход
                </div>
                <div>
                    <LoginController />
                </div>
            </div>
        </div>
    )
}

export default Login;