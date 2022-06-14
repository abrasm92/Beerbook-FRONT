import styled from "styled-components";

const SubHeaderStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  position: fixed;
  height: 100px;
  width: 100vw;
  background: linear-gradient(
    rgba(13, 71, 161, 1) 10%,
    rgba(255, 255, 255, 0) 100%
  );
  .subheader--tittle {
    font-size: 1.2rem;
    text-align: center;
    font-weight: 700;
    color: #fff;
    margin: 0 auto;
    margin-top: -70px;
    padding: 0 20px;
  }

  .subHeader--open-filter {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    margin-top: -70px;
    margin-right: 30px;
    background: #ffc107;
    border: none;
    border-radius: 10px;
    height: 30px;
    width: 30px;
  }

  @media screen and (min-width: 600px) {
  }

  @media screen and (min-width: 800px) {
    .subHeader--open-filter {
      margin-top: -70px;
      margin-right: 90px;
    }
  }
  @media screen and (min-width: 1200px) {
    .subHeader--open-filter {
      margin-top: -70px;
      margin-right: 150px;
    }
  }
`;

export default SubHeaderStyles;
