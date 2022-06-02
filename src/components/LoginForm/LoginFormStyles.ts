import styled from "styled-components";

const LoginFormStyles = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    background-color: #0d47a1;
    border: none;
    border-radius: 10px;
    color: #fff;
    padding: 10px;
    margin: 40px;
    cursor: pointer;
  }
  input {
    border: none;
    border-bottom: 1px solid #b6b6b6;
    text-align: left;
    height: 35px;
    margin: 10px;
  }
  label {
    display: none;
  }
  .loginForm-linkRegister {
    font-size: 0.7rem;
  }
  .loginForm-linkRegister--link {
    color: #0d47a1;
    cursor: pointer;
  }
`;

export default LoginFormStyles;
