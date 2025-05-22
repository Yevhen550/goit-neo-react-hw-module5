import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";

function App() {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}

export default App;
