import AlertErrorModalSyles from "./AlertErrorModalStyles";

type TextModal = {
  text: string;
};

const AlertErrorModal = ({ text }: TextModal): JSX.Element => {
  return (
    <AlertErrorModalSyles>
      <p className="alert-modal">{text}</p>
    </AlertErrorModalSyles>
  );
};
export default AlertErrorModal;
