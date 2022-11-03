import { Component } from 'react';
import DataCard from '../card/card.component';
class UserList extends Component {
  render() {
    const {persons} = this.props;
    return (
      <div>
        {
          persons.length > 0 ?
            persons.map((person) => {
              return <div key={person.id}><DataCard id={person.id} name={person.name} email={person.email} /></div> 
              // <h1 key={person.id}>{person.name}</h1>
            }) : <h1>Fetching user infos!</h1>
        }
      </div>
    )
  }
}


export default UserList;
