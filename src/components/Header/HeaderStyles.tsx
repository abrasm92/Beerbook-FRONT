import styled from "styled-components";

const HeaderStyles = styled.header`
  width: 100vw;
  height: 100px;
  background-color: #0d47a1;

  .header-content {
    padding: 20px;
    padding-top: 25px;
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
    }
  }
`;

export default HeaderStyles;
