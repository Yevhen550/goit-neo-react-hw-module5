import { BeatLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <BeatLoader size={35} color="rgb(11, 246, 23)" />
    </div>
  );
};

export default Loader;
