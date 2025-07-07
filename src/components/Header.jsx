import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Header.css";
import React from "react";
import menuIcon from "../assets/menu-icon.png";;
import logo1 from "../assets/logo-navbar.png";  // tu peux le remplacer par un logo des Jumelles
import sunIcon from "../assets/Sun.png";
import moonIcon from "../assets/Crescent Moon.png";

const Header = ({ isDarkMode, toggleTheme, onMenuClick }) => {
  return (
    <header className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <div className="header">
        <img src={logo1} alt='Logo CSB "Les Jumelles"' className="logo" />
        <div className="title-container">
          <h2 className="title-one-line">CSB "Les Jumelles"</h2>
          <p className="slogan">Discipline. Suivi. Innovation.</p>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/" className="nav-link">Accueil</Link>
        </li>
        <li>
          <Link to="/a-propos" className="nav-link">À propos</Link>
        </li>
        <li>
          <Link to="/formations" className="nav-link">Formations</Link>
        </li>
        <li>
          <Link to="/inscription" className="nav-link">Inscription</Link>
        </li>
        <li>
          <Link to="/vie-scolaire" className="nav-link">Vie scolaire</Link>
        </li>
        <li>
          <Link to="/actualites" className="nav-link">Actualités</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>

      <img
        src={isDarkMode ? sunIcon : moonIcon}
        alt="Changer de thème"
        className="toggle-icon"
        onClick={toggleTheme}
      />

      <button className="burger mobile-only" onClick={onMenuClick}>
        <img src={menuIcon} alt="Menu" className="custom-menu-icon" />
      </button>
    </header>
  );
};

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default Header;
