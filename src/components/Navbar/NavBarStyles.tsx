import styled from "styled-components";

const NavbarStyles = styled.nav`
  width: 100vw;
  height: 60px;
  background-color: #0d47a1;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;

  .navbar-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: small;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }
  }

  .navbar-button--link {
    align-self: center;
    text-decoration: none;
  }

  @media screen and (min-width: 600px) {
    width: 250px;
    height: 60px;
    background: none;
    display: flex;
    position: fixed;
    top: 18px;
    right: 130px;

    .navbar-button {
      cursor: pointer;
      img {
        display: none;
      }
    }
  }

  @media screen and (min-width: 800px) {
    width: 300px;
    height: 60px;
    background: none;
    display: flex;
    position: fixed;
    top: 18px;
    right: 200px;
  }

  @media screen and (min-width: 1200px) {
    width: 350px;
    height: 60px;
    background: none;
    display: flex;
    position: fixed;
    top: 18px;
    right: 260px;
  }
`;

export default NavbarStyles;
