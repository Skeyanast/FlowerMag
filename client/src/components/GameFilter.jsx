import React from 'react';

import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

// Компонент для фильтрации постов
const GameFilter = ({filter, setFilter}) => {
    return ( 
      <div className="gameFilter">
        <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder='Поиск...'
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          options={[
            {value: 'game_id', name: 'Сортировка по id'},
            {value: 'game_name', name: "Сортировка по названию"}
          ]}
        />
      </div>
    );
}

export default GameFilter;