import AlertErrorModalStyles from "./AlertErrorModalStyles";

type TextModal = {
  text: string;
};

const AlertErrorModal = ({ text }: TextModal): JSX.Element => {
  return (
    <AlertErrorModalStyles>
      <p className="alert-modal">{text}</p>
    </AlertErrorModalStyles>
  );
};
export default AlertErrorModal;
