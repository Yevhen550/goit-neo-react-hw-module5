import { Link } from "react-router-dom";
import s from "./ButtonBack.module.css";

const ButtonBack = ({ backLink = "/movies" }) => {
  return (
    <Link to={backLink} className={s.btnBack}>
      ← Go back
    </Link>
  );
};

export default ButtonBack;
