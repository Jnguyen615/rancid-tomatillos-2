import "./Modal.scss";
import styles from './Modal.scss';

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

export default Modal;