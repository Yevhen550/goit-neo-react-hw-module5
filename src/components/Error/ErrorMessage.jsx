import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={s.errorContainer}>
      <p className={s.error}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
