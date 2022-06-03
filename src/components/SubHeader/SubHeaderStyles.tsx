import styled from "styled-components";

const SubHeaderStyles = styled.section`
  position: fixed;
  height: 100px;
  width: 100vw;
  background: linear-gradient(
    rgba(13, 71, 161, 1) 10%,
    rgba(255, 255, 255, 0) 100%
  );
  p {
    font-size: 1.2rem;
    text-align: center;
    font-weight: 700;
    color: #fff;
  }
`;

export default SubHeaderStyles;
