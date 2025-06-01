import { useEffect, useRef, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/Error/ErrorMessage";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../API/fetchMovies";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError(
          `Oops... Something went wrong. The error encountered was: ${error.message}.`
        );
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [movieId]);

  if (!movieDetails) return null;

  return (
    <div className={s.detailsPage}>
      <Link to={backLinkRef.current ?? "/movies"}>
        <ButtonBack />
      </Link>

      <div className={s.movieWrapper}>
        <img
          className={s.poster}
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movieDetails.title}
        />
        <div className={s.movieInfo}>
          <h2 className={s.movieTitle}>
            {movieDetails.title}{" "}
            <span>({movieDetails.release_date?.slice(0, 4)})</span>
          </h2>
          <p className={s.score}>
            User Score: {Math.round(movieDetails.vote_average * 10)}%
          </p>

          <h3 className={s.sectionHeading}>Overview</h3>
          <p>{movieDetails.overview}</p>

          <h3 className={s.sectionHeading}>Genres</h3>
          <p>
            {movieDetails.genres?.map((genre) => genre.name).join(" ") ||
              "Not available"}
          </p>
        </div>
      </div>

      <div className={s.additionalInfo}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default MovieDetailsPage;
