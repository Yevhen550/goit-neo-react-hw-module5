import { NavLink, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import fetchMovies from "./API/fetchMovies";

const Loader = lazy(() => import("./components/Loader/Loader"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const Container = lazy(() => import("./components/Container/Container"));
const SearchBar = lazy(() => import("./components/SearchBar/SearchBar"));

console.log(fetchMovies("cars"));

function App() {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <SearchBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
