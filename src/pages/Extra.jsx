import { useState, useEffect } from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import { items } from '../data/items.js';

function Extra() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    // Simulando que os IDs 1 e 3 estão favoritados
    const itensFavoritados = items.filter(item => item.id === 1 || item.id === 3);
    setFavoritos(itensFavoritados);
  }, []);

  return (
    <div>
      <h2>Meus Favoritos</h2>
      <p>Página extra demonstrando filtro e estado.</p>
      <ListGroup>
        {favoritos.map(fav => (
          <ListGroup.Item key={fav.id} className="d-flex justify-content-between align-items-center">
            {fav.nome}
            <Badge bg="primary" pill>
              {fav.categoria}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Extra;