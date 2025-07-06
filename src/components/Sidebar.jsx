import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import custom_close_icon from "../assets/close-icon.png";

const Sidebar = ({ isDarkMode, closeSidebar }) => {
  return (
    <aside className={`sidebar ${isDarkMode ? "dark" : "light"}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-title">Navigation</h2>
        <button
          className="close-button"
          onClick={closeSidebar}
          aria-label="Fermer la barre latérale"
        >
          <img
            src={custom_close_icon}
            alt="Fermer"
            className="custom-close-icon"
          />
        </button>
      </div>

      <ul className="sidebar-links">
        <li><Link to="/" onClick={closeSidebar}>Accueil</Link></li>
        <li><Link to="/formations" onClick={closeSidebar}>Formations</Link></li>
        <li><Link to="/inscription" onClick={closeSidebar}>Inscription</Link></li>
        <li><Link to="/vie-scolaire" onClick={closeSidebar}>Vie scolaire</Link></li>
        <li><Link to="/actualites" onClick={closeSidebar}>Actualités</Link></li>
        <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
      </ul>
    </aside>
  );
};

Sidebar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
