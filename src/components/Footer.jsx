import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  const { pathname } = useLocation();

  // Fonction scroll vers le haut, utilisée au clic sur lien
  const handleClick = (to) => {
    if (to === pathname) {
      // Si on clique sur un lien vers la page actuelle, on force scroll top
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    // Sinon, ScrollToTop interviendra après changement de route
  };

  return (
    <footer className={`footer ${isDarkMode ? "dark" : "light"}`}>
      <div className="footer-content">
        {/* SLOGAN EN TÊTE */}
        <div className="footer-section slogan-section">
          <p className="slogan">« Les Jumelles » – Discipline. Suivi. Innovation.</p>
        </div>
        <div className="footer-sections-container">
          {/* CONTACT */}
          <div className="footer-section contact-us">
            <h3>Contact</h3>
            <p><FaMapMarkerAlt /> Tokpota, Porto-Novo (près de l’Hôtel Porto-La Belle)</p>
            <p><FaPhoneAlt /> 01 97 29 44 34 / 01 96 67 70 04 </p>
            <p><FaEnvelope /> ecole.jumelles@gmail.com</p>
          </div>
          {/* NAVIGATION */}
          <div className="footer-section links">
            <h3 className="centered-title">Navigation</h3>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link" onClick={() => handleClick("/")}>Accueil</Link></li>
              <li><Link to="/formations" className="nav-link" onClick={() => handleClick("/formations")}>Formations</Link></li>
              <li><Link to="/inscription" className="nav-link" onClick={() => handleClick("/inscription")}>Inscription</Link></li>
              <li><Link to="/vie-scolaire" className="nav-link" onClick={() => handleClick("/vie-scolaire")}>Vie scolaire</Link></li>
              <li><Link to="/actualites" className="nav-link" onClick={() => handleClick("/actualites")}>Actualités</Link></li>
              <li><Link to="/contact" className="nav-link" onClick={() => handleClick("/contact")}>Contact</Link></li>
            </ul>
          </div>
          {/* À PROPOS */}
          <div className="footer-section about-site">
            <h4>À propos</h4>
            <p className="about-text">
              Le Complexe Scolaire Bilingue « Les Jumelles » forme des élèves de la maternelle à la terminale avec rigueur, innovation et excellence. L’apprentissage de l’anglais y débute dès la maternelle.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Footer;
