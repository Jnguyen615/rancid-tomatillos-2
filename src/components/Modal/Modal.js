import "./Modal.scss";
import styles from './Modal.scss';
import PropTypes from 'prop-types'
import StarRating from '../StarRating/StarRating'

//selectedMovie propType is expecting an object with a movie property that is an object
//setModalIsOpen propType is expecting a function that changes the state if the modal is open or not
const Modal = ({ selectedMovie, setModalIsOpen }) => {
  
  const handleClick = (isOpen) => {
    setModalIsOpen(isOpen);
  }

  return (
    <div className="modal">
        <button className="close-button" onClick={() => handleClick(false)}>❎</button>
      <div className="modal-content">
        <img src={selectedMovie.movie.poster_path} alt={selectedMovie.movie.title} className="modal-movie-image" />
        <h1 className="modal-header">{selectedMovie.movie.title}</h1>
        <StarRating rating={selectedMovie.movie.average_rating} className='modal-rating' />
        <p className="modal-overview">{selectedMovie.movie.overview}</p>
        <p className="modal-release-date">Release Date: {selectedMovie.movie.release_date}</p>
        {/* <p className="modal-rating">Rating: {selectedMovie.movie.average_rating}/10</p> */}
        <p className="modal-genres">Genres: {selectedMovie.movie.genres.join(', ')}</p>
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