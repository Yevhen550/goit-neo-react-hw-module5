import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import fetchMovies from "../../API/fetchMovies";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetchMovies("cars");
        setMovies(res.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong: {error.message}</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
