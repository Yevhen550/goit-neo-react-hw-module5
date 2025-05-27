import axios from "axios";
import { API_TOKEN } from "./apiToken";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day", options);
  return response.data.results;
};
