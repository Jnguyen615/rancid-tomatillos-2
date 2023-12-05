import "./Movies.scss";
import MovieCard from "../MovieCard/MovieCard";
import StarRating from "../StarRating/StarRating";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Movies = ({ apiMovieData, handleMovieClick }) => {
  const navigate = useNavigate();

  const handleMovieCardClick = (id) => {
    handleMovieClick(id);
    navigate(`/${id}`);
  };

  const movieCards = apiMovieData.map((movie) => (
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

  return <div className="gallery">{movieCards}</div>;
};

Movies.propTypes = {
  apiMovieData: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleMovieClick: PropTypes.func.isRequired,
};

export default Movies;
