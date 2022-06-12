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
    position: fixed;
    margin-top: -120px;
    margin-right: 25px;
  }
`;

export default SubHeaderStyles;
