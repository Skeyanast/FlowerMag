import React, { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import '../styles/App.css';
import '../styles/FlowerIdPage.css';

import { useFetching } from '../hooks/useFetching';
import FlowerService from '../API/FlowerService';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/Loader/Loader';
import { AuthContext } from '../context/AuthContext';

// Страница определенной игры из каталога
const FlowerIdPage = () => {
    const {user} = useContext(AuthContext);
    const {cartFlowers, setCartFlowers} = useContext(AuthContext);
    const params = useParams(); // параметры из адресной строки
    const [flower, setFlower] = useState({}); // состояние объекта цветка

    // метод для получения данных игры
    const [fetchFlowerById, isLoading, error] = useFetching(async (id, token) => {
        const response = await FlowerService.GetById(id, token);
        setFlower(response.flower);
    });

    // хук, активирующийся при загрузке страницы
    useEffect(() => {
        const idFromParams = params.id;
        const userToken = user.token;
        fetchFlowerById(idFromParams, userToken);
    }, []);

    // функция добавления товара в корзину
    const addOnCart = () => {
        //проверка отсутствия наличия товара с данным id в корзине
        //if (!cartFlowers.some(g => g.id === flower.id)) { }
        setCartFlowers([...cartFlowers, flower]);
    }

    return (
        <div className="mainContent">
            <h1 className="catalog__title">{flower.name}</h1>
            
            {error && <div className="catalog__flowerError">{error}!</div>}
            
            {isLoading
                ?
                <Loader />
                :
                <div className="flower">
                    <div className="flower__content">
                        <div className="flower__content__details">
                            <div className="flower__content__details__item">
                                Id: {flower.id}
                            </div>
                            <div className="flower__content__details__item">
                                Вид: {flower.view}
                            </div>
                            <div className="flower__content__details__item">
                                Страна: {flower.country}
                            </div>
                            <div className="flower__content__details__item">
                                Сезон цветения: {flower.season}
                            </div>
                            <div className="flower__content__details__item">
                                Сорт: {flower.variety}
                            </div>
                            <div className="flower__content__details__item">
                                Цена: {flower.price}
                            </div>
                            <div className="flower__content__details__item">
                                Id поставщика: {flower.provider_id}
                            </div>
                            <div className="flower__content__details__item">
                                Id продавца: {flower.vendor_id}
                            </div>
                        </div>
                    </div>
                    <div className="flower__buttons">
                        <MyButton onClick={addOnCart}>
                            Добавить в корзину
                        </MyButton>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default FlowerIdPage;