import "./About.css";
import PropTypes from "prop-types";
import React from "react";

function About({ isDarkMode }) {
  return (
    <div className={`about-page ${isDarkMode ? "dark" : "light"}`}>
      <h2 className="about-title">À propos du Complexe Scolaire Bilingue "Les Jumelles"</h2>
      <p className="about-intro">
        Située à Porto-Novo, « Les Jumelles » accueille les élèves de la maternelle jusqu’à la terminale, avec une approche bilingue rigoureuse et innovante.  
        Nous plaçons l’élève au cœur de l’apprentissage en introduisant l’anglais dès la maternelle à travers des méthodes actives et adaptées.
      </p>

      <section className="about-section">
        <h3>Notre identité</h3>
        <p>
          Fondée sur la discipline, le suivi individualisé et l’innovation pédagogique, notre école s’engage à former des apprenants responsables, ouverts et compétents.  
          Notre équipe d’enseignants qualifiés, notamment en bilinguisme, assure un encadrement bienveillant et rigoureux, garantissant d’excellents résultats aux examens nationaux.
        </p>
      </section>

      <section className="about-section">
        <h3>Nos valeurs éducatives</h3>
        <ul className="about-values">
          <li>📘 Discipline et rigueur quotidienne</li>
          <li>🧠 Apprentissage bilingue français-anglais dès la maternelle</li>
          <li>👩‍🏫 Suivi personnalisé pour chaque élève</li>
          <li>📈 Excellence et résultats probants aux examens</li>
          <li>🎓 Formation d’élèves leaders et citoyens responsables</li>
          <li>🍽️ Services de cantine et garderie pour un encadrement complet</li>
          <li>📚 Spécialité série D avec cours renforcés en français et journalisme</li>
        </ul>
      </section>

      <section className="about-section">
        <h3>Pourquoi choisir "Les Jumelles" ?</h3>
        <p>
          Notre pédagogie active, notre spécialisation en bilinguisme, et la rigueur de notre suivi font des Jumelles un cadre idéal pour le développement harmonieux et l’épanouissement scolaire.  
          Nous accueillons également les enfants issus d’écoles non bilingues sans les pénaliser, assurant une intégration adaptée.  
          Avec une cantine saine et un système de garderie, nous offrons un environnement sécurisant et stimulant pour tous nos élèves.
        </p>
      </section>

      <div className="about-contact">
        <a
          className="whatsapp-btn"
          href="https://wa.me/22997294434"
          target="_blank"
          rel="noopener noreferrer"
        >
          📲 Contactez-nous rapidement sur WhatsApp
        </a>
      </div>
    </div>
  );
}

About.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default About;
