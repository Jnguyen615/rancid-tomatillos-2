import React from 'react';
import './Header.scss';


const Header = () => {
  return (
    <header className="movie-header">
      {/* <img src={tomatilloIcon} alt="Tomatillo Icon" className="tomatillo-icon" /> */}
      <h1>Rancid Green Tomatillos</h1>
      <nav className="header-nav">
        <button className="nav-button">Home</button>
      </nav>
    </header>
  );
};

export default Header;
