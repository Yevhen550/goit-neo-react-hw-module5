import { useEffect, useRef, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/Error/ErrorMessage";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../API/fetchMovies";
import ButtonBack from "../../components/ButtonBack/ButtonBack";

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const previousLocationRef = useRef(location.state);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
        console.log(data);
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

  return (
    <div>
      <Link to={previousLocationRef.current ?? "/movies"}>
        <ButtonBack />
      </Link>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default MovieDetailsPage;
