import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Modal } from "react-bootstrap";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const getCharacters = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150"
      );
      setCharacters(response.data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedCharacter(e.target.value);
  };

  const handleButtonClick = () => {
    if (selectedCharacter) {
      navigate(`/pokemones/${selectedCharacter}`);
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <h1 className="mt-5 mb-4">Selecciona un Pokémon</h1>
      <p className="mb-4">
      Al seleccionar un Pokémon podrás descubrir sus habilidades y características.</p>
      <Form className="mb-3">
        <Form.Group controlId="selectCharacter">
          <Form.Control
            as="select"
            value={selectedCharacter}
            onChange={handleSelectChange}
          >
            <option value="">Selecciona un Pokémon</option>
            {characters.map((character) => (
              <option key={character.name} value={character.name}>
                {character.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
      <Button variant="secondary" onClick={handleButtonClick}>
        Ver detalles
      </Button>
<Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Upss!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Debes elegir un Pokémon</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Characters;

