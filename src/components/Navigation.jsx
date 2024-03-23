import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { RiHomeLine } from 'react-icons/ri';
import { MdCatchingPokemon } from "react-icons/md";


const Navigation = () => {
  const navbarStyle = ({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"

  return (
    <Navbar bg="danger" data-bs-theme="dark">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <img
            alt=""
            src="src/assets/pokemon.svg"
            width="150"
            className="d-inline-block align-top"
          />
        </NavLink>
        <Nav className="ms-auto">
          <NavLink to="/" className={navbarStyle}>
            <RiHomeLine /> Home
          </NavLink>
          <NavLink to="/pokemones" className={navbarStyle}>
            <MdCatchingPokemon /> Listado de Pokémon
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
