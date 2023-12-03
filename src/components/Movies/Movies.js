import "./Movies.scss";
import MovieCard from "../MovieCard/MovieCard";
import StarRating from "../StarRating/StarRating";
import PropTypes from "prop-types";

const Movies = ({ apiMovieData, handleMovieClick }) => {
  const movieCards = apiMovieData.map(movie => (

    <div onClick={() => handleMovieClick(movie.id)} className="movie-card" key={movie.id}> 
      <img src={movie.poster_path} alt={movie.title} className="movie-image" />

      <div className="movie-info">
        
        <div className="movie-title">{movie.title}</div>
        <StarRating rating={Math.round(movie.average_rating)} />
      </div>
    </div>
  ));

  return (
    <div className="gallery"> 
      {movieCards}
    </div>
  );
};

Movies.propTypes = {
  apiMovieData: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleMovieClick: PropTypes.func.isRequired
};

export default Movies;
