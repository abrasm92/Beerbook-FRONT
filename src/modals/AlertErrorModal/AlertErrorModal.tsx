import AlertErrorModalSyles from "./AlertErrorModalStyles";

const AlertErrorModal = (): JSX.Element => {
  return (
    <AlertErrorModalSyles>
      <p className="alert-modal">El usuario o contraseña son incorrectos</p>
    </AlertErrorModalSyles>
  );
};
export default AlertErrorModal;
