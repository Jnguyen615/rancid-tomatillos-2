import "./App.scss";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import { retrieveData, singleMovieId } from "./Api-call";
import Modal from "./components/Modal/Modal";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [apiMovieData, setApiMovieData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState("");
  const [movieId, setMovieId] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    retrieveData()
      .then(data => {
        setApiMovieData(data.movies);
      })
      .catch(error => {
        setError(error.message || "An unknown error occurred.");
      });
  }, [navigate]);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [modalIsOpen]);

  const handleMovieClick = async id => {
    setMovieId(id);
    try {
      const movieDetails = await singleMovieId(id);
      setSelectedMovie(movieDetails);
      setModalIsOpen(true);
    } catch (error) {
      setError(error.message || "An unknown error occurred.");
    }
  };

  return (
    <div className="App">
      <Header setModalIsOpen={setModalIsOpen} setApiMovieData={setApiMovieData} setError={setError}/>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Movies
              handleMovieClick={handleMovieClick}
              apiMovieData={apiMovieData}
              setApiMovieData={setApiMovieData}
            />
          }
        />
        <Route
          exact 
          path="/:movieId"
          element={
              <Modal
                selectedMovie={selectedMovie}
                setModalIsOpen={setModalIsOpen}
                setError={setError}
                setSelectedMovie={setSelectedMovie}
              /> 
          }
        />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
