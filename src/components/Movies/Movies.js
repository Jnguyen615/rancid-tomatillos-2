import "./Movies.scss";
import MovieCard from "../MovieCard/MovieCard";
import StarRating from "../StarRating/StarRating";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Movies = ({ apiMovieData, handleMovieClick }) => {
  const [noMoviesFound, setNoMoviesFound] = useState(false);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setMovies(apiMovieData);
    setNoMoviesFound(apiMovieData.length === 0);
  }, [apiMovieData]);

  const handleMovieCardClick = (id) => {
    handleMovieClick(id);
    navigate(`/${id}`);
  };

  const movieCards = movies.map((movie) => (
    <div
      key={movie.id}
      onClick={() => handleMovieCardClick(movie.id)}
      className="movie-card"
    >
      <img src={movie.poster_path} alt={movie.title} className="movie-image" />

      <div className="movie-info">
        <div className="movie-title">{movie.title}</div>
        <StarRating rating={Math.round(movie.average_rating)} />
      </div>
    </div>
  ));

  return (
    <div>
      {noMoviesFound && <h1 className="no-movies">No movies found!</h1>}
      <div className="gallery">{movieCards}</div>
    </div>
  );
};

Movies.propTypes = {
  apiMovieData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      average_rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleMovieClick: PropTypes.func.isRequired,
};

export default Movies;
