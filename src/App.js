import { Component} from 'react';
import UserList from './components/user-list/userList.component';
import SearchBar from './components/search-bar/searchBar.component'
import './App.css';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      persons: [],
      searchField: ''
    }

    console.log('In constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {persons: users}
      }, () => {
        //console.log(this.state);
      }));

    console.log('In componentDidMount');
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchString = event.target.value.toLocaleLowerCase()
    
    this.setState(() => {
      return { searchField: searchString };
    })
  }

  render() {

    console.log('In rendering');

    const {persons, searchField} = this.state;
    const { onSearchChange } = this;

    const filteredPersons = persons.filter((person) => {
      return person.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBar onChangeHandler={onSearchChange} placeholder={'Search by name'} type={'search'} className={'search-box'}/>
        <UserList persons={filteredPersons}/>
      </div>
    );
  }
  
}

export default App;
