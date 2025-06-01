import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../API/fetchMovies";
import ReviewList from "../ReviewList/ReviewList";
import ErrorMessage from "../Error/ErrorMessage";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await fetchMovieReviews(movieId);
        setMovieReviews(data);
      } catch (error) {
        setError(
          `Oops... Something went wrong. The error encountered was: ${error.message}.`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);
  return (
    <>
      {error.length > 0 && !loading && <ErrorMessage message={error} />}
      {error.length === 0 && !loading && movieReviews.length === 0 ? (
        <ErrorMessage message={"We don't have any reviews for this movie."} />
      ) : (
        <ReviewList reviews={movieReviews} />
      )}
      {loading && <Loader />}
    </>
  );
};

export default MovieReviews;
