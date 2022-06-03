import { Link } from "react-router-dom";
import NavbarStyles from "./NavBarStyles";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyles>
      <span className="navbar-button">
        <img src="/images/home.svg" alt="Enlace a inicio" />
        <p>Inicio</p>
      </span>
      <Link to="/cervezas-del-mundo">
        <span className="navbar-button">
          <img src="/images/discover.svg" alt="Enlace a cervezas del mundo" />
          <p>Cervezas del mundo</p>
        </span>
      </Link>
      <span className="navbar-button">
        <img src="/images/profile.svg" alt="Enlace a mi perfil" />
        <p>Mi perfil</p>
      </span>
    </NavbarStyles>
  );
};

export default Navbar;
