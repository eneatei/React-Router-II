import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Container, ProgressBar, Badge } from 'react-bootstrap';
import { IoIosArrowBack } from "react-icons/io";

const CharacterDetail = () => {
  const { name } = useParams();
  const [character, setCharacter] = useState({});

  const getCharacter = async () => {
    try {
      const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setCharacter(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case "fire":
        return "danger";
      case "water":
        return "primary";
      case "grass":
        return "success";
        case "electric":
          return "warning";
          case "rock":
            return "dark-subtle";
            case "ice":
              return "info";
              case "bug":
              return "success-subtle";
      default:
        return "secondary";
    }
  };

  return (
<>
    <Container className="d-flex justify-content-center mt-3 mb-5">
    <Card className="p-4" border={getTypeColor(character.types?.[0]?.type?.name)} style={{ borderWidth: '4px', backgroundColor: "#F9F5EF"}}>
    <Badge className="text-center" bg={getTypeColor(character.types?.[0]?.type?.name)}><strong>Tipo:</strong> {character.types?.map(type => type.type.name).join(', ')}</Badge>
      <Card.Img variant="top" src={character.sprites?.other?.["official-artwork"]?.front_default} alt={character.name} />
      <Card.Body>
      <Card.Title style={{ textTransform: 'uppercase' }}>{character.name}</Card.Title>
        <Card.Text >
          <strong>Altura:</strong> {character.height}<br />
          <strong>Peso:</strong> {character.weight}<br />
          <strong>Puntos de Salud:</strong>
<ProgressBar
  now={character.stats?.[5]?.base_stat}
  variant={getTypeColor(character.types?.[0]?.type?.name)}
  label={`${character.stats?.[5]?.base_stat}`}
/>
<strong>Ataque:</strong>
          <ProgressBar
  now={character.stats?.[0]?.base_stat}
  variant={getTypeColor(character.types?.[0]?.type?.name)}
  label={`${character.stats?.[0]?.base_stat}`}
/>
<strong>Defensa:</strong>
<ProgressBar
  now={character.stats?.[1]?.base_stat}
  variant={getTypeColor(character.types?.[0]?.type?.name)}
  label={`${character.stats?.[1]?.base_stat}`}
/>
<strong>Ataque Especial:</strong>
<ProgressBar
  now={character.stats?.[2]?.base_stat}
  variant={getTypeColor(character.types?.[0]?.type?.name)}
  label={`${character.stats?.[2]?.base_stat}`}
/>
<strong>Defensa Especial:</strong>
<ProgressBar
  now={character.stats?.[3]?.base_stat}
  variant={getTypeColor(character.types?.[0]?.type?.name)}
  label={`${character.stats?.[3]?.base_stat}`}
/>
<strong>Velocidad:</strong>
<ProgressBar
  now={character.stats?.[4]?.base_stat}
  variant={getTypeColor(character.types?.[0]?.type?.name)}
  label={`${character.stats?.[4]?.base_stat}`}
/>

        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
    <Link to="/pokemones" className="mb-5 ms-5 btn btn-outline-secondary"><IoIosArrowBack />Volver al listado de Pokémon</Link>
    </>
  );
};

export default CharacterDetail;