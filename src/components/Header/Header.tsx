import { useNavigate } from "react-router-dom";
import { userLogoutActionCreator } from "../../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import HeaderStyles from "./HeaderStyles";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const { logged } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const redirectToLogin = () => {
    navigate("/iniciar-sesion");
  };

  const logOutUser = () => {
    localStorage.removeItem("token");
    dispatch(userLogoutActionCreator());
    navigate("/iniciar-sesion");
  };

  return (
    <HeaderStyles>
      <div className="header-content">
        <img src="/images/Logo.svg" alt="Beerbook logo" />
        {!logged && <button onClick={redirectToLogin}>Iniciar sesión</button>}
        {logged && <button onClick={logOutUser}>Cerrar sesión</button>}
      </div>
    </HeaderStyles>
  );
};

export default Header;
