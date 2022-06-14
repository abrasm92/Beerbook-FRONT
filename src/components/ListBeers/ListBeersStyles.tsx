import styled from "styled-components";

const ListBeersStyles = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 85%;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 0;
    padding-top: 30px;
  }
  gap: 20px;
`;

export default ListBeersStyles;
