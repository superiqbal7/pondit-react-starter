import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class DataCard extends Component {
  render() {
    const { id, name, email } = this.props
    return (
      <div key={id}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`https://robohash.org/${id}`} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {email}
            </Card.Text>
            <Button variant="primary">Details</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default DataCard;
