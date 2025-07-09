// src/pages/Actualites.jsx
import "./Actualites.css";
import React from "react";

function Actualites() {
  return (
    <section className="actualites-page">
      <h1 className="page-title">📢 Actualités du CSB "Les Jumelles"</h1>

      {/* Résultats majeurs */}
      <section className="resultats-section">
        <h2 className="big-news-title">🎓 Résultats aux examens 2025</h2>
        <div className="resultats-highlight">
          <div className="exam-result">
            <h3>CEP</h3>
            <p className="pourcentage">100%</p>
            <p className="desc">Réussite complète en primaire</p>
          </div>
          <div className="exam-result">
            <h3>BEPC</h3>
            <p className="pourcentage">98%</p>
            <p className="desc">Collège : presque 100% !</p>
          </div>
          <div className="exam-result">
            <h3>BAC</h3>
            <p className="pourcentage">100%</p>
            <p className="desc">Réussite complète au lycée!</p>
          </div>
        </div>
        <p className="congrats">
          🏆 Félicitations à nos brillants élèves, à toute l’équipe pédagogique et aux familles pour leur implication !
        </p>
      </section>

      {/* Cours de vacances */}
      <article className="news-card orange">
        <h2>📚 Cours de vacances</h2>
        <p>
          Les cours de vacances commencent le <strong>Lundi 28 juillet</strong> pour les classes du primaire et du secondaire.
        </p>
        <p>
          Objectif : consolider les acquis et préparer sereinement la rentrée scolaire.
        </p>
      </article>
    </section>
  );
}

export default Actualites;
