import { useNavigate } from "react-router-dom";
import HeaderStyles from "./HeaderStyles";

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/iniciar-sesion");
  };

  return (
    <HeaderStyles>
      <div className="header-content">
        <img src="/images/Logo.svg" alt="Beerbook logo" />
        <button onClick={redirectToLogin}>Iniciar sesión</button>
      </div>
    </HeaderStyles>
  );
};

export default Header;
