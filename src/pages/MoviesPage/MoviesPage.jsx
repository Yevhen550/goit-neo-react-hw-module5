import { useEffect, useState } from "react";
import fetchPhotoCard from "../../API/tmdbApi";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      // if (!query.trim()) return;
      try {
        const data = await fetchPhotoCard(query, page);
        setMovies((prev) => [...prev, ...data.results]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return <div>MoviesPage</div>;
};

export default MoviesPage;
