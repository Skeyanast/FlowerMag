import React, { useContext, useState } from 'react';

import '../styles/App.css';
import '../styles/Cart.css';

import { AuthContext } from "../context/AuthContext";
import MyButton from '../components/UI/button/MyButton';

// Страница корзины пользователя
const Cart = () => {
    // Состояние для хранения списка игр в корзине
    const {cartGames, setCartGames} = useContext(AuthContext);

    // Функция для удаления игры из корзины
    const removeGame = (id) => {
        console.log(cartGames);
        setCartGames(cartGames.filter(game => game.game_id !== id));
    };

    // Вычисление общей стоимости игр
    const total = cartGames.reduce((acc, game) => acc + game.game_price, 0);

    const purchaseGames = (event) => {
        event.preventDefault();
        alert("Покупка на сумму: " + total);
    }

    return (

        <div className="mainContent">
            <h1 className="cart__title">Корзина</h1>
            {!cartGames.length
                ?
                <h2 className="cart__empty">Корзина пуста</h2>
                :
                <div className="cart__content">
                    {cartGames.map(game => (
                        <div key={game.game_id} className="game">
                            <div className="game__details">
                                <div className="game__details__name">{game.game_name}</div>
                                <div className="game__details__price">Стоимость: {game.game_price}</div>
                            </div>
                            <MyButton onClick={() => removeGame(game.game_id)}>Удалить из корзины</MyButton>
                        </div>
                    ))}
                    <div className="total">
                        Итого: <span>{total.toFixed(2)}</span>
                    </div>
                    <div className="buy">
                        <MyButton onClick={purchaseGames}>Перейти к оформлению заказа</MyButton>
                    </div>
                </div>
            }
            
        </div>
    );
};

export default Cart;