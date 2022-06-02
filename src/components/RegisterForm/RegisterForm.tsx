import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userRegisterThunk } from "../../redux/thunks/userThunks";
import RegisterFormStyles from "./RegisterFormStyles";

const RegisterForm = (): JSX.Element => {
  const navigate = useNavigate();
  const initialFormValue = {
    name: "",
    username: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialFormValue);

  const changeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  const submitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const message = await userRegisterThunk(userData);
    setUserData(initialFormValue);
    return message;
  };

  const redirectToLogin = () => {
    navigate("/iniciar-sesion");
  };

  return (
    <RegisterFormStyles noValidate autoComplete="off" onSubmit={submitForm}>
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        id="name"
        value={userData.name}
        onChange={changeUserData}
        placeholder="Nombre"
      />
      <label htmlFor="username">Usuario</label>
      <input
        type="text"
        id="username"
        value={userData.username}
        onChange={changeUserData}
        placeholder="Usuario"
      />
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        value={userData.email}
        onChange={changeUserData}
        placeholder="E-mail"
      />
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        id="password"
        value={userData.password}
        onChange={changeUserData}
        placeholder="Contraseña"
      />
      <button>Registrarse</button>
      <p className="registerForm-linkLogin">
        Ya tienes cuenta?
        <span
          className="registerForm-linkLogin--link"
          onClick={redirectToLogin}
        >
          Inicia sesión aquí
        </span>
      </p>
    </RegisterFormStyles>
  );
};

export default RegisterForm;
