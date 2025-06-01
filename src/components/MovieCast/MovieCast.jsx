import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCastList from "../MovieCastList/MovieCastList";
import ErrorMessage from "../Error/ErrorMessage";
import Loader from "../Loader/Loader";
import { fetchMovieCredits } from "../../API/fetchMovies";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await fetchMovieCredits(movieId);
        setCast(data);
      } catch (error) {
        setError(
          `Oops... Something went wrong. The error encountered was: ${error.message}.`
        );
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {error.length > 0 && !loading && <ErrorMessage message={error} />}
      {error.length === 0 && !loading && MovieCastList.length === 0 ? (
        <ErrorMessage
          message={
            "We don't have any information about the cast of this movie."
          }
        />
      ) : (
        <MovieCastList cast={cast} />
      )}
      {loading && <Loader />}
    </>
  );
};

export default MovieCast;
