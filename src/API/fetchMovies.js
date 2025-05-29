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

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);
  return response.data.results;
};

export const fetchMoviesSearch = async (searchText) => {
  const response = await axios.get(
    `/search/movie?query=${searchText}`,
    options
  );
  return response.data.results;
};
