import styled from "styled-components";

const HeaderStyles = styled.header`
  width: 100vw;
  height: 100px;
  background-color: #0d47a1;
  position: sticky;
  top: 0px;

  .header-content {
    padding: 30px;
    padding-top: 25px;
    padding-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 160px;
      height: 44px;
    }
    button {
      background: none;
      border: 2px solid #fff;
      border-radius: 10px;
      color: #fff;
      padding: 5px;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 600px) {
    .header-content {
      padding: 30px;
      padding-top: 25px;
      padding-bottom: 0;
    }
  }

  @media screen and (min-width: 800px) {
    .header-content {
      padding: 90px;
      padding-top: 25px;
      padding-bottom: 0;
    }
  }
  @media screen and (min-width: 1200px) {
    .header-content {
      padding: 150px;
      padding-top: 25px;
      padding-bottom: 0;
    }
  }
`;

export default HeaderStyles;
