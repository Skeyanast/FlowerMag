import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import '../styles/App.css';
import '../styles/GameIdPage.css';

import { useFetching } from '../hooks/useFetching';
import GameService from '../API/GameService';
import Loader from '../components/UI/Loader/Loader';

// Страница определенной игры из каталога
const GameIdPage = () => {
    const params = useParams(); // параметры из адресной строки
    const [game, setGame] = useState({}); // состояние объекта игры

    // метод для получения данных игры
    const [fetchGameById, isLoading, error] = useFetching(async (id) => {
        const response = await GameService.getById(id);
        setGame(response.data);
    })

    // хук, активирующийся при загрузке страницы
    useEffect(() => {
        fetchGameById(params.id)
    }, [])

    return (
        <div className="mainContent">
            <h1 className="gameIdPage__title">{game.game_name}</h1>

            {isLoading
                ?
                <Loader />
                :
                <div className="game">
                    {game.game_id}<br/>
                    {game.game_name}<br/>
                    {game.developer_id}<br/>
                    {game.game_price}<br/>
                    {game.game_raiting}<br/>
                    {game.review_number}<br/>
                    {game.genre_id}<br/>
                    {game.release_date}
                </div>
            }
            
        </div>
    )
}

export default GameIdPage;