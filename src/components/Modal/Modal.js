import "./Modal.scss";
import styles from "./Modal.scss";
import PropTypes from "prop-types";

//selectedMovie propType is expecting an object with a movie property that is an object
//setModalIsOpen propType is expecting a function that changes the state if the modal is open or not
const Modal = ({ selectedMovie, setModalIsOpen }) => {
  console.log(selectedMovie)

  const handleClick = (isOpen) => {
    setModalIsOpen(isOpen);
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <img src={selectedMovie.movie.poster_path} alt={selectedMovie.movie.title} className="movie-image" />
        <h1 className={styles.modalHeader}>{selectedMovie.movie.title}</h1>
        <p className={styles.modalOverview}>{selectedMovie.movie.overview}</p>
        <p className={styles.modalReleaseDate}>{selectedMovie.movie.release_date}</p>
        <p className={styles.modalRating}>{selectedMovie.movie.average_rating}</p>
        <p className={styles.modalGenres}>{selectedMovie.movie.genres.join(', ')}</p>
        <button className={styles.closeButton} onClick={() => handleClick(false)}>❎</button>
      </div>
    </div>
  )
}

//I wrote a simple test for prop types but figured to get the most out of using prop types I would write out the prop types for each component
  //Let me know if this looks right! I'm not sure if I need to write out the prop types for each property in the movie object 👇  
Modal.propTypes = {
  selectedMovie: PropTypes.shape({
    movie: PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string,
      overview: PropTypes.string,
      release_date: PropTypes.string,
      average_rating: PropTypes.number,
      genres: PropTypes.arrayOf(PropTypes.string)
    })
  }).isRequired,
  setModalIsOpen: PropTypes.func.isRequired
};

//simple test for prop types 👇

// Modal.propTypes = {
//   selectedMovie: PropTypes.object.isRequired,
//   setModalIsOpen: PropTypes.func.isRequired
// };

export default Modal;