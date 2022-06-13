import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetFilterActionCreator } from "../../redux/features/beerSlice";
import NavbarStyles from "./NavBarStyles";

const Navbar = (): JSX.Element => {
  const pageBeerList = `/cervezas-del-mundo/page=1`;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resetFilter = () => {
    dispatch(resetFilterActionCreator());
    navigate(pageBeerList);
  };

  return (
    <NavbarStyles>
      <Link to="/" className="navbar-button--link">
        <span className="navbar-button">
          <img src="/images/home.svg" alt="Enlace a inicio" />
          <p>Inicio</p>
        </span>
      </Link>

      <span className="navbar-button" onClick={resetFilter}>
        <img src="/images/discover.svg" alt="Enlace a cervezas del mundo" />
        <p>Cervezas del mundo</p>
      </span>

      <Link to="/mi-perfil" className="navbar-button--link">
        <span className="navbar-button">
          <img src="/images/profile.svg" alt="Enlace a mi perfil" />
          <p>Mi perfil</p>
        </span>
      </Link>
    </NavbarStyles>
  );
};

export default Navbar;
