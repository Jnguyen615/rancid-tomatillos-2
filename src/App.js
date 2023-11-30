import './App.scss';
import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Movies from './components/Movies/Movies'
import movieData  from './movieData'
import { retrieveData } from './Api-call'

function App() {

  const [movies, setMovies] = useState(movieData);
  const [apiMovieData, setApiMovieData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState('');

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

  return (
    <div className="App">
      <Header />
      <Movies movies={movies} apiMovieData={apiMovieData}/>
    </div>
  );
}

export default App;
