import styled from "styled-components";

const CreateEditBeerFormStyles = styled.form`
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
    margin-top: 20px;
    font-size: large;
    cursor: pointer;
  }

  input {
    border: none;
    border-bottom: 1px solid #b6b6b6;
    text-align: left;
    height: 35px;
    margin: 10px;
  }

  textarea {
    border: none;
    border-bottom: 1px solid #b6b6b6;
    text-align: left;
    height: 100px;
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

  .number-input {
    width: 50px;
  }

  .fileUpload,
  .fileUpload--On {
    background: #0d47a1;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 10px;
    color: #fff;
    font-size: 0.8rem;
    margin-top: 10px;
    overflow: hidden;
    padding: 10px;
    position: relative;
    text-align: center;
    width: 70px;
    cursor: pointer;
  }

  .fileUpload:hover,
  .fileUpload:active,
  .fileUpload:focus,
  .fileUpload--On {
    cursor: pointer;
  }

  .fileUpload input.upload,
  .fileUpload--On input.upload {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    opacity: 0;
    filter: alpha(opacity=0);
    width: 70px;
    height: 46px;
    cursor: pointer;
  }

  .fileUpload--On {
    background: #ffc107;
    color: #0d47a1;
  }
`;

export default CreateEditBeerFormStyles;
