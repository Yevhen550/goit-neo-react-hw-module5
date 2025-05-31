import { Link, useLocation } from "react-router-dom";
import s from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const location = useLocation();
  const { id, title, poster_path, release_date } = movie;
  const year = release_date ? release_date.slice(0, 4) : "N/A";

  return (
    <Link
      to={`/movies/${id}`}
      state={{ from: location }}
      className={s.movieCard}
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w200${poster_path}`
            : "https://via.placeholder.com/200x300?text=No+Image"
        }
        alt={title}
        className={s.movieImg}
      />
      <div className={s.movieTitleBox}>
        <h3 className={s.movieTitle}>{title}</h3>
        <p className={s.movieYear}>({year})</p>
      </div>
    </Link>
  );
};

export default MovieCard;
