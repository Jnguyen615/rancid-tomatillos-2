import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { retrieveData } from "../../Api-call";
import "./Search.scss";

function SearchBar({ setApiMovieData, setError }) {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    getMoviesFromApi(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchInput("");
      getMoviesFromApi("");
    }
  };

  const getMoviesFromApi = async (input) => {
    try {
      let filteredMovies = [];
      if (!input || input.trim() === "") {
        const data = await retrieveData();
        filteredMovies = data.movies;
      } else {
        const response = await fetch(
          "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
        );
        if (!response.ok) {
          throw new Error(
            "Oops! Something went wrong on the server. Please try again later."
          );
        }
        const data = await response.json();
        filteredMovies = data.movies.filter((movie) =>
          movie.title.toLowerCase().startsWith(input.toLowerCase())
        );
      }
      setApiMovieData(filteredMovies);
    } catch (error) {
      setError(error.message || "An unknown error occurred.");
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for a movie"
        value={searchInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

SearchBar.propTypes = {
  setApiMovieData: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default SearchBar;
