import React from 'react';
import CardList from './CardList/CardList';
import SearchBox from './SearchBox/SearchBox';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange = (e) => {
    this.setState({searchField : e.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) )
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={this.handleChange} placeholder="search monsters" />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
