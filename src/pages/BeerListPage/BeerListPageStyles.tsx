import styled from "styled-components";

const BeerListPageStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  border: 1px solid #b6b6b6;
  width: 320px;
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
    }
  }
`;

export default BeerListPageStyles;
