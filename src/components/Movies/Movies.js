import "./Movies.scss";
import MovieCard from "../MovieCard/MovieCard";
import StarRating from '../StarRating/StarRating'

const Movies = ({ apiMovieData }) => {
  const movieCards = apiMovieData.map(movie => {
    return (
      <div>
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        rating={movie.average_rating}
      />
      <StarRating rating={Math.round(movie.average_rating)} />
    </div>
    );
  });

  return (
    <main className="all-movies-display">
      {movieCards}
    </main>
  );
};

export default Movies;
