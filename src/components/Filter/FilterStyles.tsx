import styled from "styled-components";

const FilterStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .filter {
    margin-top: -70px;
    margin-right: 65px;
    display: flex;
    flex-direction: row;
  }

  .categories,
  .categories--options,
  .values,
  .values--options {
    width: 75px;
    height: 30px;
    margin-right: 10px;
    text-align: center;
    background: #fff;
    color: #0d47a1;
    border: none;
    font-weight: 700;
  }

  option {
    font-weight: 700;
    width: 75px;
    height: 30px;
  }

  button {
    background: #fff;
    border: none;
    color: #0d47a1;
    cursor: pointer;
    margin-right: 5px;
    font-weight: 700;
  }
`;

export default FilterStyles;
