import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import '../styles/App.css';
import '../styles/Login.css';

import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import LoginController from '../components/LoginController';

// Страница авторизации
const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext); // состояние авторизованности
    const [step, setStep] = useState(1); // состояние шага формы
    const [formData, setFormData] = useState({login: "", password: ""}) // состояние полей формы авторизации
    
    // функция перехода на следующий шаг формы
    const continues = (event) => {
        event.preventDefault();
        setStep(step + 1);
    }

    // функция авторизации
    const entry = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div className="mainContent">
            <h1 className="loginPage__title">FlowerMag</h1>
            <div className="login__block">
                <div className="login__title">
                    Вход в аккаунт FlowerMag
                </div>
                <div>
                    <LoginController />
                </div>
            </div>
        </div>
    )
}

export default Login;