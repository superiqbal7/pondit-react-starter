import { Component } from 'react';

class UserList extends Component {
  render() {
    const {persons} = this.props;
    return (
      <div>
        {
          persons.length > 0 ?
            persons.map((person) => {
              return <h1 key={person.id}>{person.name}</h1>
            }) : <h1>Fetching user infos!</h1>
        }
      </div>
    )
  }
}

export default UserList;
