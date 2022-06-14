import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetFilterActionCreator } from "../../redux/features/beerSlice";
import NavbarStyles from "./NavBarStyles";

const Navbar = (): JSX.Element => {
  const pageBeerList = `/cervezas-del-mundo/page=1`;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resetFilter = (link: string) => {
    dispatch(resetFilterActionCreator());
    navigate(link);
  };

  return (
    <NavbarStyles>
      <span className="navbar-button" onClick={() => resetFilter("/")}>
        <img src="/images/home.svg" alt="Enlace a inicio" />
        <p>Inicio</p>
      </span>

      <span className="navbar-button" onClick={() => resetFilter(pageBeerList)}>
        <img src="/images/discover.svg" alt="Enlace a cervezas del mundo" />
        <p>Cervezas del mundo</p>
      </span>

      <span className="navbar-button" onClick={() => resetFilter("/mi-perfil")}>
        <img src="/images/profile.svg" alt="Enlace a mi perfil" />
        <p>Mi perfil</p>
      </span>
    </NavbarStyles>
  );
};

export default Navbar;
