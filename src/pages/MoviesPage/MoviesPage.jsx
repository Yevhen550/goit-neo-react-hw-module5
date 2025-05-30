import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesSearch } from "../../API/fetchMovies";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/Error/ErrorMessage";
import SearchBar from "../../components/SearchBar/SearchBar";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;
      try {
        setLoading(true);
        const data = await fetchMoviesSearch(query);
        setMovies(data);
      } catch (error) {
        setError(
          `Oops... Something went wrong. The error encountered was: ${error.message}.`
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  const handleSearch = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <SearchBar preValue={query} onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
