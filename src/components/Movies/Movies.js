import "./Movies.scss";
import MovieCard from "../MovieCard/MovieCard";

const Movies = ({ apiMovieData }) => {
  const movieCards = apiMovieData.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        rating={movie.average_rating}
      />
    );
  });

  return (
    <main className="all-movies-display">
      {movieCards}
    </main>
  );
};

export default Movies;
