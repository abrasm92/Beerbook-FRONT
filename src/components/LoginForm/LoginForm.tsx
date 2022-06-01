import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { userLoginThunk } from "../../redux/thunks/userThunks";
import { LoginUser } from "../../types/interfaces";
import LoginFormStyles from "./LoginFormStyles";

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const initialFormValue: LoginUser = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialFormValue);

  const changeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.id]: event.target.value });
  };

  const submitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(userLoginThunk(userData));
    setUserData(initialFormValue);
  };

  return (
    <LoginFormStyles noValidate autoComplete="off" onSubmit={submitForm}>
      <label htmlFor="username">Usuario</label>
      <input
        type="text"
        id="username"
        value={userData.username}
        onChange={changeUserData}
      />
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        id="password"
        value={userData.password}
        onChange={changeUserData}
      />
      <button>Iniciar sesión</button>
      <p>No tienes cuenta? Registrate aquí</p>
    </LoginFormStyles>
  );
};

export default LoginForm;
