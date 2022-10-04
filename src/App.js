import { Component } from 'react';
import { url } from './utils/utils';

class App extends Component {
  constructor() {
    super();
    console.log('create');
  }
  state = {
    monsters: [],
    filter: '',
  };

  componentDidMount() {
    console.log('mount');
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

  render() {
    console.log('render');
    const { monsters, filter } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(filter)
    );

    return (
      <div className='App'>
        <input
          type='search'
          className='search-box'
          placeholder='search monster'
          value={this.state.filter}
          onChange={(e) =>
            this.setState(() => ({
              filter: e.target.value.trim().toLowerCase(),
            }))
          }
        />
        {filteredMonsters.map((monster) => {
          const { name, id } = monster;
          return (
            <div key={id}>
              <h1>{name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
