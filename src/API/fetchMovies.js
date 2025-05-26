import axios from "axios";
import { API_TOKEN } from "./apiToken";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const fetchMovies = async (query, page = 1) => {
  const url = `/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  const options = {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const res = await axios.get(url, options);
  return res.data;
};

export default fetchMovies;
