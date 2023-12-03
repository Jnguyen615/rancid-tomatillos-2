import './App.scss';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import movieData  from './movieData';
import { retrieveData, singleMovieId } from './Api-call';
import Modal from "./components/Modal/Modal";
import ErrorPage from './components/ErrorPage/ErrorPage'

function App() {

  const [movies, setMovies] = useState(movieData);
  const [apiMovieData, setApiMovieData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState('');
  const [movieId, setMovieId] = useState(''); 
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    retrieveData()
    .then((data) => {
      setApiMovieData(data.movies)
    })
    .catch((error) => {
      setError(error.message || 'An unknown error occurred.')
    })
    setApiMovieData(apiMovieData)
  }, [])

  const handleMovieClick = async (id) => {
    setMovieId(id);
    try {
      const movieDetails = await singleMovieId(id);
      setSelectedMovie(movieDetails); 
      setModalIsOpen(true);
    } catch (error) {
      setError(error.message || 'An unknown error occurred.')
    }
  }
  
  return (
    <div className="App">
      <Header />
      {!error ? ( 
        !modalIsOpen ? (
          <Movies handleMovieClick={handleMovieClick} movies={movies} apiMovieData={apiMovieData} />
        ) : (
          <Modal selectedMovie={selectedMovie} setModalIsOpen={setModalIsOpen} />
        )
      ) : (
        <ErrorPage /> 
      )}
    </div>
  );
}


export default App;
