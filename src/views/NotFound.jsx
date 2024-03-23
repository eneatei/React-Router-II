import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mt-5 mb-4">Esta página no existe</h1>
      <img src="https://cdn.dribbble.com/users/283669/screenshots/2851144/media/d2264e5da2e3096faef1b0d007ed04d3.gif" alt="Página no encontrada" className="mb-4" />
      <Link to="/pokemones" className="mb-5 ms-5 btn btn-outline-secondary">
        <IoIosArrowBack />
        Volver al listado de Pokémon
      </Link>
    </Container>
  );
};

export default NotFound;