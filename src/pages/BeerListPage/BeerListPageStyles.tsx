import styled from "styled-components";

const BeerListPageStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 100px auto;
  border: 1px solid #b6b6b6;
  min-width: 280px;
  width: 80%;
  max-width: 400px;
  height: 100%;
  border-radius: 20px;
  box-shadow: 10px 10px 7px #b6b6b6;

  .buttons-pagination {
    width: 200px;
    display: flex;
    justify-content: space-between;
    button {
      color: #0d47a1;
      font-weight: 900;
      font-size: x-large;
      background: none;
      border: none;
      padding: 10px;
      transform: scaleY(1.5);
      padding-bottom: 20px;
      cursor: pointer;
    }
    .button--off {
      visibility: hidden;
    }
  }

  @media screen and (min-width: 600px) {
    min-width: 400px;
    width: 80%;
    max-width: 800px;
  }
`;

export default BeerListPageStyles;
