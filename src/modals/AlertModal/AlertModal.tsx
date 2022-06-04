import AlertModalSyles from "./AlertModalStyles";

type TextModal = {
  text: string;
};

const AlertModal = ({ text }: TextModal): JSX.Element => {
  return (
    <AlertModalSyles>
      <p className="alert-modal">{text}</p>
    </AlertModalSyles>
  );
};
export default AlertModal;
