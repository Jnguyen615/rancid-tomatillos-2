import "./Modal.scss";

const Modal = ({ selectedMovie, setModalIsOpen}) => {
  console.log(selectedMovie)

  const handleClick = (isOpen) => {
    setModalIsOpen(isOpen);
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>{selectedMovie.movie.title}</h1>
        <p>{selectedMovie.movie.overview}</p>
        <p>{selectedMovie.movie.release_date}</p>
        <p>{selectedMovie.movie.average_rating}</p>
        <p>{selectedMovie.movie.genres}</p>
        <button onClick={() => handleClick(false)}>❎</button>
      </div>
    </div>
  )
}

export default Modal;
