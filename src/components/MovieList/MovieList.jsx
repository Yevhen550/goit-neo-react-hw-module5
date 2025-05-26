import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ol className={s.list}>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies${id}`} state={location}>
            {title}
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default MovieList;
