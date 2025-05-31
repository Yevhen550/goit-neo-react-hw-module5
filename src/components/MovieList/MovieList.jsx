import s from "./MovieList.module.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies }) => {
  return (
    <ol className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.listItem}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ol>
  );
};

export default MovieList;
