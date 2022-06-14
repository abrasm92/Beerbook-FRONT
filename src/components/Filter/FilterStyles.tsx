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
    cursor: pointer;
  }

  .categories,
  .categories--options,
  .values,
  .values--options {
    width: 75px;
    height: 30px;
    margin-right: 10px;
    background: #fff;
    color: #0d47a1;
    border: none;
    font-weight: 700;
    cursor: pointer;
  }

  option {
    font-weight: 700;
    width: 75px;
    height: 30px;
    cursor: pointer;
  }

  button {
    background: #fff;
    border: none;
    color: #0d47a1;
    cursor: pointer;
    margin-right: 5px;
    font-weight: 700;
  }

  @media screen and (min-width: 600px) {
    .filter {
      margin-top: -70px;
      margin-right: 80px;
      display: flex;
      flex-direction: row;
    }
    .categories,
    .categories--options,
    .values,
    .values--options {
      width: 100px;
      height: 30px;
    }

    button {
      width: 60px;
    }
  }

  @media screen and (min-width: 800px) {
    .filter {
      margin-top: -70px;
      margin-right: 140px;
      display: flex;
      flex-direction: row;
    }
    .categories,
    .categories--options,
    .values,
    .values--options {
      width: 120px;
      height: 30px;
    }

    button {
      width: 80px;
    }
  }
  @media screen and (min-width: 1200px) {
    .filter {
      margin-top: -70px;
      margin-right: 210px;
      display: flex;
      flex-direction: row;
    }
    .categories,
    .categories--options,
    .values,
    .values--options {
      width: 150px;
      height: 30px;
    }

    button {
      width: 100px;
    }
  }
`;

export default FilterStyles;
