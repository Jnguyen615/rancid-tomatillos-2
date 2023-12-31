import "./MovieCard.scss";
import PropTypes from "prop-types";

const MovieCard = ({ title, poster, id }) => {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <img id={id} src={poster} alt={title} className="movie-image" />
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieCard;
