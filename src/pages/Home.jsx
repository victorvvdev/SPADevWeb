import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { items as mockItems } from '../data/items.js';
import ItemCard from '../components/ItemCard';

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(mockItems);
  }, []);

  return (
    <div>
      <h2 className="mb-4">Lista de Jogos</h2>
      <Row>
        {games.map(game => (
          <Col md={4} key={game.id}>
            <ItemCard item={game} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;