import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../API/fetchMovies";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchTrendingMovies();
        setMovies(data);
        console.log(data);
      } catch (error) {
        setError(
          `Oops... Something went wrong. The error encountered was: ${error.message}.`
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
