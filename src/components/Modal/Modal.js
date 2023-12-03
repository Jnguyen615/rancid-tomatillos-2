import "./Modal.scss";
import StarRating from '../StarRating/StarRating'



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

export default Modal;