import React from 'react';
import './Header.scss';
import tomatilloIcon from '../../greenTomato.png'
import { useNavigate } from 'react-router-dom'

const Header = ({ setModalIsOpen }) => {
  const navigate = useNavigate()
  
  function handleBackArrowClick() {
    setModalIsOpen(false);
    navigate("/");
  }
  return (
    <header className="movie-header">
      <img src={tomatilloIcon} alt="Tomatillo Icon" className="tomatillo-icon" />
      <h1>Rancid Green Tomatillos</h1>
      <nav className="header-nav">
        <button onClick={handleBackArrowClick} className="nav-button">Home</button>
      </nav>
    </header>
  );
};

export default Header;
