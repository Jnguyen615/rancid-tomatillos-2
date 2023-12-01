import './MovieCard.scss'

const MovieCard = ({ title, rating, poster, id}) => {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <img
              id={id}
              src={poster}
              alt={title}
              className="movie-image"
            />
    </div>
  )
}

export default MovieCard