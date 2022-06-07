import { Link } from "react-router-dom";
import NavbarStyles from "./NavBarStyles";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyles>
      <Link to="/crear-cerveza" className="navbar-button--link">
        <span className="navbar-button">
          <img src="/images/home.svg" alt="Enlace a inicio" />
          <p>Inicio</p>
        </span>
      </Link>
      <Link to="/cervezas-del-mundo" className="navbar-button--link">
        <span className="navbar-button">
          <img src="/images/discover.svg" alt="Enlace a cervezas del mundo" />
          <p>Cervezas del mundo</p>
        </span>
      </Link>
      <Link to="" className="navbar-button--link">
        <span className="navbar-button">
          <img src="/images/profile.svg" alt="Enlace a mi perfil" />
          <p>Mi perfil</p>
        </span>
      </Link>
    </NavbarStyles>
  );
};

export default Navbar;
