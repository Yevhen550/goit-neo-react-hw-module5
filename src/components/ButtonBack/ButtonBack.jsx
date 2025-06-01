import { useLocation, Link } from "react-router-dom";
import s from "./ButtonBack.module.css";

const ButtonBack = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? "/movies";

  return (
    <Link to={backLink} className={s.btnBack}>
      ← Go back
    </Link>
  );
};

export default ButtonBack;
