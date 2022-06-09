import styled from "styled-components";

const FilterStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .filter {
    margin-top: -40px;
    margin-right: 25px;
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
`;

export default FilterStyles;
