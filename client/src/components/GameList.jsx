import React from "react";

import GameItem from './GameItem';

// Компонент списка постов
const GameList = ({games, title}) => {
    if (!games.length) {
        return (
            <h2 className="gameList__title">
                Игры не найдены...
            </h2>
        )
    }

    return (
        <div className="gameList">
            <h2 className="gameList__title">
                {title}
            </h2>
            <div className="gameList__list">
                {games.map((game) => 
                    <GameItem key={game.game_id} game={game} />
                )}
            </div>
        </div>
    )
}

export default GameList;