import React from "react";
import "./Header.scss";
import Search from "../Search/Search";
import tomatilloIcon from "../../greenTomato.png";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ setModalIsOpen, setApiMovieData, setError }) => {
  const navigate = useNavigate();

  function handleBackArrowClick() {
    setModalIsOpen(false);
    navigate("/");
  }
  return (
    <header className="movie-header">
      <img
        src={tomatilloIcon}
        alt="Tomatillo Icon"
        className="tomatillo-icon"
      />
      <h1>Rancid Green Tomatillos</h1>
      <nav className="header-nav">
        <button onClick={handleBackArrowClick} className="nav-button">
          Home
        </button>
      </nav>
      <Search setError={setError} setApiMovieData={setApiMovieData} />
    </header>
  );
};

Header.propTypes = {
  setModalIsOpen: PropTypes.func.isRequired,
  setApiMovieData: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default Header;
