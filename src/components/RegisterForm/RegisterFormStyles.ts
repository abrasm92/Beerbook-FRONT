import styled from "styled-components";

const RegisterFormStyles = styled.form`
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
    width: 60%;
    margin: 10px;
  }
  label {
    display: none;
  }
  .registerForm-linkLogin {
    font-size: 0.7rem;
  }
  .registerForm-linkLogin--link {
    color: #0d47a1;
    cursor: pointer;
  }
`;

export default RegisterFormStyles;
