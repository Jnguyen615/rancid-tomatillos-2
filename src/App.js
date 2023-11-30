import './App.css';
import { useState } from 'react'
import Header from './components/Header/Header'
import Movies from './components/Movies/Movies'
import movieData  from './movieData'


function App() {

  const [movies, setMovies] = useState(movieData) 

  return (
    <div className="App">
      <Header />
      <Movies movies={movies}/>
    </div>
  );
}

export default App;
