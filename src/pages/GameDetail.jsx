import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { items } from '../data/items.js';
import CustomButton from '../components/CustomButton';

function GameDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);

  useEffect(() => {
    // Busca o item no array pelo ID (convertendo id da URL para número)
    const foundGame = items.find(item => item.id === parseInt(id));
    setGame(foundGame);
  }, [id]);

  const handleFavoritar = () => {
    alert(`${game.nome} adicionado aos favoritos!`);
    // Aqui você poderia salvar no localStorage em um projeto real
  };

  if (!game) return <h2>Carregando ou Jogo não encontrado...</h2>;

  return (
    <Card>
      <Card.Body>
        <Card.Title><h1>{game.nome}</h1></Card.Title>
        <Card.Subtitle className="mb-3 text-muted">Categoria: {game.categoria}</Card.Subtitle>
        <Card.Text>{game.descricao}</Card.Text>
        
        <CustomButton text="⭐ Favoritar" onClick={handleFavoritar} />
        <Button variant="secondary" className="mt-2 ms-2" onClick={() => navigate(-1)}>
          Voltar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default GameDetail;