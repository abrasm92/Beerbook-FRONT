import styled from "styled-components";

const AlertModalSyles = styled.section`
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
  p {
    color: #fff;
    font-size: medium;
    font-weight: 700;
  }

  /* animation: myAnim 1s ease 2s 1 normal forwards;

  @keyframes myAnim {
    0% {
      animation-timing-function: ease-in;
      opacity: 1;
      transform: translateX(200vw);
    }

    87% {
      animation-timing-function: ease-out;
      transform: translateX(0px);
    }

    100% {
      animation-timing-function: ease-out;
      opacity: 1;
      transform: translateX(0px);
    }
  } */

  animation: movein 1s ease forwards, moveout 1s 5s ease forwards;

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
export default AlertModalSyles;
