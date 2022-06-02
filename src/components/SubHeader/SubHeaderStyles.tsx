import styled from "styled-components";

const SubHeaderStyles = styled.section`
  position: fixed;
  height: 100px;
  width: 100vw;
  background: linear-gradient(
    rgba(13, 71, 161, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  p {
    font-size: 1.3rem;
    text-align: center;
    font-weight: 700;
    padding-top: 20px;
  }
`;

export default SubHeaderStyles;
