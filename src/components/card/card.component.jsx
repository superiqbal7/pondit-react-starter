import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const DataCard = ({ id, name, email }) => {
  const navigate = useNavigate();
  const showDetails = () => {
    navigate(`/users/${id}`, {state: {
      id, name, email
    }});
  }

  return (
    <div key={id}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://robohash.org/${id}`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {email}
          </Card.Text>
          <Button variant="primary" onClick={showDetails}>Details</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default DataCard;
