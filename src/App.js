import React, { useState, useEffect } from 'react';
import { url } from './utils/utils';
import CardList from './components/card-list/card-list.component';
import SaerchBox from './components/search-box/search-box.components';
import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filter, setFilter] = useState('');

  async function fetchData(url) {
    try {
      const res = await fetch(url);
      const data = res.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData(url).then((data) => setMonsters(data));
  }, []);

  const onSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(filter)
  );

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SaerchBox
        filter={filter}
        onSearchChange={onSearchChange}
        placeholder='search monster'
        className='search-box'
      />
      {<CardList monsters={filteredMonsters} />}
    </div>
  );
};

export default App;
