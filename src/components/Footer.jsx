import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`footer ${isDarkMode ? "dark" : "light"}`}>
      <div className="footer-content">

        {/* SLOGAN EN TÊTE */}
        <div className="footer-section slogan-section">
          <p className="slogan">
            « Les Jumelles » – Discipline. Suivi. Innovation.
          </p>
        </div>

        <div className="footer-sections-container">
          {/* CONTACT */}
          <div className="footer-section contact-us">
            <h3>Contact</h3>
            <p><FaMapMarkerAlt /> Tokpota, Porto-Novo (près de l’Hôtel Porto-La Belle)</p>
            <p><FaPhoneAlt /> 97 29 44 34 / 96 67 70 04 </p>
            <p><FaEnvelope /> ecole.jumelles@gmail.com</p>
          </div>

          {/* NAVIGATION */}
          <div className="footer-section links">
            <h3 className="centered-title">Navigation</h3>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Accueil</Link></li>
              <li><Link to="/formations" className="nav-link">Formations</Link></li>
              <li><Link to="/inscription" className="nav-link">Inscription</Link></li>
              <li><Link to="/vie-scolaire" className="nav-link">Vie scolaire</Link></li>
              <li><Link to="/actualites" className="nav-link">Actualités</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
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
