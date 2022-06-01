import styled from "styled-components";

const NavbarStyles = styled.nav`
  width: 100vw;
  height: 60px;
  background-color: #0d47a1;
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;

  .navbar-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: small;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export default NavbarStyles;
