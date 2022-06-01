import HeaderStyles from "./HeaderStyles";

const Header = (): JSX.Element => {
  return (
    <HeaderStyles>
      <div className="header-content">
        <img src="/images/Logo.svg" alt="Beerbook logo" />
        <button>Iniciar sesión</button>
      </div>
    </HeaderStyles>
  );
};

export default Header;
