import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [pikachuImage, setPikachuImage] = useState("");

  const getPikachu = async () => {
    try {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/pikachu"
      );
      const pikachuImageUrl = data.sprites.other.dream_world.front_default;
      setPikachuImage(pikachuImageUrl);
    } catch (error) {
      console.error("Error al buscar la imagen", error);
    }
  };

  useEffect(() => {
    getPikachu();
  }, []);

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mt-5 mb-4">Bienvenido maestro Pokémon</h1>
      {pikachuImage && (
        <img src={pikachuImage} alt="Pikachu" className="img-fluid mb-4" />
      )}
      <p className="text-center mb-4">
        Explora la colección de Pokémon, descubre sus habilidades
        y características.
      </p>
      <Link to="/pokemones" className="btn btn-secondary">Ver listado de Pokémon</Link>
    </Container>
  );
};

export default Home;