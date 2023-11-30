import "./Movies.scss";
import MovieCard from "../MovieCard/MovieCard";

const Movies = ({ movies }) => {
  const movieCards = movieData.movies.map(movie => {
    return (
      <MovieCard
        title={movie.title}
        poster={movie.poster_path}
        rating={movie.average_rating}
      />
    );
  });

  return (
    <main className="all-movies-display">
      <MovieCard />
    </main>
  );
};

export default Movies;
