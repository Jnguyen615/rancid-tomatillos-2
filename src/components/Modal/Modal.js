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
        document.body.style.overflow='hidden'
        document.doctype.scrollTop= 0 
    }
  }, [movieId, setSelectedMovie, setError]);

  if (!selectedMovie || loading) {
    return (
      <main className="loading-page">
        <div className="loading-screen"></div>
      </main>
    );
  }

  return (
    <div className="modal" style={{ position: "relative" }}>
      {selectedMovie?.movie?.backdrop_path && (
        <div
          className="modal-background"
          style={{
            backgroundImage: `url(${selectedMovie.movie.backdrop_path})`,
          }}
        ></div>
      )}

      <div className="modal-content">
        {selectedMovie && selectedMovie.movie && (
          <>
            <img
              src={selectedMovie.movie.poster_path}
              alt={selectedMovie.movie.title}
              className="modal-movie-image"
            />
            <h1>{selectedMovie.movie.title}</h1>
            <p className="modal-genres">
              {selectedMovie.movie.genres.map((genre, index) => (
                <span key={index} className="genre">
                  {genre}
                </span>
              ))}
            </p>
            <StarRating rating={selectedMovie.movie.average_rating} />
            <p className="modal-overview">{selectedMovie.movie.overview}</p>
            <p className="modal-release-date">
              Release Date:{" "}
              {selectedMovie.movie.release_date.replace(/^(\d{4})-(\d{2})-(\d{2})$/,"$2/$3/$1")}
            </p>
          </>
        )}
      </div>
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
