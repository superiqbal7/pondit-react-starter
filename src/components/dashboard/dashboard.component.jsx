import { useState, useEffect} from 'react';
import UserList from '../user-list/userList.component';
import SearchBar from '../search-bar/searchBar.component';

const Dashboard = () => {

  const [searchField, setSearchField] = useState('');
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState(persons);

  console.log('rendering');

  const onSearchChange = (event) => {
    console.log(event.target.value);
    const searchString = event.target.value.toLocaleLowerCase()

    setSearchField(searchString);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setPersons(users))
  }, []);

  useEffect(() => {
    const newFilteredPersons = persons.filter((person) => {
      console.log('filter runs');
      return person.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredPersons(newFilteredPersons);
    console.log('filter fired');
  }, [searchField, persons]);

  return (
    <div className="App">
      <SearchBar onChangeHandler={onSearchChange} placeholder={'Search by name'} type={'search'} className={'search-box'}/>
      <UserList persons={filteredPersons}/>
    </div>
  );
}

export default Dashboard;
