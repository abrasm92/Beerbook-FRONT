import AlertModalStyles from "./AlertModalStyles";

type TextModal = {
  text: string;
};

const AlertModal = ({ text }: TextModal): JSX.Element => {
  return (
    <AlertModalStyles>
      <p className="alert-modal">{text}</p>
    </AlertModalStyles>
  );
};
export default AlertModal;
