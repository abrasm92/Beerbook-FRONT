import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { userLoginThunk } from "../../redux/thunks/userThunks";
import { LoginUser } from "../../types/interfaces";
import LoginFormStyles from "./LoginFormStyles";

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialFormValue: LoginUser = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialFormValue);

  const changeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(userLoginThunk(userData));
    setUserData(initialFormValue);
  };

  const redirectToRegister = () => {
    navigate("/registro");
  };

  return (
    <LoginFormStyles noValidate autoComplete="off" onSubmit={submitForm}>
      <label htmlFor="username">Usuario</label>
      <input
        type="text"
        id="username"
        value={userData.username}
        onChange={changeUserData}
        placeholder="Usuario"
      />
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        id="password"
        value={userData.password}
        onChange={changeUserData}
        placeholder="Contraseña"
      />
      <button>Iniciar sesión</button>
      <p className="loginForm-linkRegister">
        No tienes cuenta?{" "}
        <span
          className="loginForm-linkRegister--link"
          onClick={redirectToRegister}
        >
          Registrate aquí
        </span>
      </p>
    </LoginFormStyles>
  );
};

export default LoginForm;
