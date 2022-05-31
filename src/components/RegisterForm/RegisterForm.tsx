import RegisterFormStyles from "./RegisterFormStyles";

const RegisterForm = (): JSX.Element => {
  return (
    <RegisterFormStyles noValidate autoComplete="off">
      <label htmlFor="RegisterName">Nombre</label>
      <input type="text" id="RegisterName" />
      <label htmlFor="RegisterUsername">Usuario</label>
      <input type="text" id="RegisterUsername" />
      <label htmlFor="RegisterEmail">E-mail</label>
      <input type="text" id="RegisterEmail" />
      <label htmlFor="RegisterPassword">Contraseña</label>
      <input type="text" id="RegisterPassword" />
      <button>Registrarse</button>
      <p>Ya tienes cuenta? Inicia sesión aquí</p>
    </RegisterFormStyles>
  );
};

export default RegisterForm;
