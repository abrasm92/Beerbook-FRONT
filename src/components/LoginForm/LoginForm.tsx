import LoginFormStyles from "./LoginFormStyles";

const LoginForm = (): JSX.Element => {
  return (
    <LoginFormStyles>
      <label htmlFor="username">Usuario</label>
      <input type="text" id="username" />
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" />
      <button>Iniciar sesión</button>
      <p>No tienes cuenta? Registrate aquí</p>
    </LoginFormStyles>
  );
};

export default LoginForm;
