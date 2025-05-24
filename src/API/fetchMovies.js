import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDYyNTllODFlZWY5YzA2MmI1N2NjYmI5NWJlNjMxZiIsIm5iZiI6MTc0NzgxMjE0MS4yNDgsInN1YiI6IjY4MmQ3ZjJkNzVlMGU3ZTkzMzhjMTAzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hBIgnp4sMARmvixXgUB5LnhF4bSvPlorqjxz7HrC05Q";

const fetchMovies = async (query, page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;

  const options = {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const res = await axios.get(url, options);
  return res.data;
};

export default fetchMovies;
