import styled from "styled-components";

const AlertModalStyles = styled.section`
  background-color: #43a047;
  width: 100vw;
  height: 70px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  margin-top: 100px;
  padding: 15px;
  text-align: center;
  p {
    color: #fff;
    font-size: medium;
    font-weight: 700;
  }

  animation: movein 1s ease forwards, moveout 2.5s 2.5s ease forwards;

  @keyframes movein {
    from {
      left: 200vw;
    }
    to {
      left: 0px;
    }
  }

  @keyframes moveout {
    from {
      left: 0px;
    }
    to {
      left: 200vw;
    }
  }
`;
export default AlertModalStyles;
