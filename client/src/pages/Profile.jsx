import React, { useEffect, useState } from 'react';

import '../styles/App.css';
import '../styles/Profile.css';

import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import UserService from '../API/UserService';

// Страница профиля пользователя
const Profile = () => {
    const [user, setUser] = useState({}); // состояние пользователя
    
    // метод получения данных о пользователе
    const [fetchUsers, isUserLoading, userError] = useFetching(async () => {
        const response = await UserService.getAll();
        setUser(response.users[0]);
    })

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div className="mainContent">
            <h1 className="profilePage__title">Профиль:</h1>
            {isUserLoading
            ?
            <Loader />
            :
            <div className="profilePage__content">
                <div className="profile">
                    <div className="profile__content">
                        <div className="profile__content__item">
                            Uid: {user.uid}
                        </div>
                        <div className="profile__content__item">
                            Name: {user.name}
                        </div>
                        <div className="profile__content__item">
                            Email: {user.email}
                        </div>
                        <div className="profile__content__item">
                            Registration date: {user.regdate}
                        </div>
                    </div>
                </div>
            </div>
        }
        </div>
    )
};

export default Profile;