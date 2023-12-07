import "./Modal.scss";
import PropTypes from "prop-types";
import StarRating from "../StarRating/StarRating";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { singleMovieId } from "../../Api-call";

const Modal = ({
  selectedMovie,
  setSelectedMovie,
  setModalIsOpen,
  setError,
}) => {
  const { movieId } = useParams(); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (movieId) {
      singleMovieId(movieId)
        .then((data) => {
          setSelectedMovie(data);
        })
        .catch((err) => {
          setError(err.message || "An unknown error occurred.");
          navigate("*");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [movieId, setSelectedMovie, setError]);

  if (loading) {
    return (
      <main className="loading-page">
        <div className="loading-screen">
          <h1 className="loading">Loading...</h1>
          <div id="img1" className="img"></div>
          <div id="img2" className="img"></div>
          <div id="img3" className="img"></div>
          <div id="img4" className="img"></div>
          <div id="img5" className="img"></div>
        </div>
      </main>
    );
  }

  return (
    <div className="modal">
      {selectedMovie && selectedMovie.movie && (
        <div className="modal-content">
          <img
            src={selectedMovie.movie.poster_path}
            alt={selectedMovie.movie.title}
            className="modal-movie-image"
          />
          <h1 className="modal-header">{selectedMovie.movie.title}</h1>
          <StarRating
            rating={selectedMovie.movie.average_rating}
            className="modal-rating"
          />
          <p className="modal-overview">{selectedMovie.movie.overview}</p>
          <p className="modal-release-date">
            Release Date: {selectedMovie.movie.release_date}
          </p>
          <p className="modal-genres">
            Genres: {selectedMovie.movie.genres.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

Modal.propTypes = {
  selectedMovie: PropTypes.shape({
    movie: PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string,
      overview: PropTypes.string,
      release_date: PropTypes.string,
      average_rating: PropTypes.number,
      genres: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default Modal;
