import { Component } from 'react';
import { url } from './utils/utils';
import CardList from './components/card-list/card-list.component';
import SaerchBox from './components/search-box/search-box.components';
import './App.css';

class App extends Component {
  state = {
    monsters: [],
    filter: '',
  };

  componentDidMount() {
    this.fetchData(url).then((data) =>
      this.setState(() => ({ monsters: data, filteredMonsters: data }))
    );
  }

  async fetchData(url) {
    try {
      const res = await fetch(url);
      const data = res.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }

  onSearchChange = (e) => {
    this.setState(() => ({
      filter: e.target.value.trim().toLowerCase(),
    }));
  };

  render() {
    const { monsters, filter } = this.state;
    const { onSearchChange } = this;
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
        {/* {filteredMonsters.map((monster) => {
          const { name, id } = monster;
          return (
            <div key={id}>
              <h1>{name}</h1>
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default App;
