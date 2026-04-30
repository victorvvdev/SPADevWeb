import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ItemCard({ item }) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{item.nome}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.categoria}</Card.Subtitle>
        <Card.Text>{item.descricao.substring(0, 40)}...</Card.Text>
        <Link to={`/detalhe/${item.id}`} className="btn btn-primary">
          Ver Detalhes
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;