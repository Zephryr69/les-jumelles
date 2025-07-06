// src/pages/Actualites.jsx
import "./Actualites.css";

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
            <p className="pourcentage">99%</p>
            <p className="desc">Collège : presque 100% !</p>
          </div>
        </div>
        <p className="congrats">
          🏆 Félicitations à nos brillants élèves, à toute l’équipe pédagogique et aux familles pour leur implication !
        </p>
      </section>

      {/* Résultats BAC à venir */}
      <article className="news-card grey">
        <h2>📄 Résultats du BAC 2025</h2>
        <p>
          Les résultats du <strong>Baccalauréat (Série D)</strong> seront publiés prochainement. Nous attendons avec impatience les performances de nos terminales.
        </p>
        <p className="stay-tuned">Restez connectés pour suivre cette dernière étape !</p>
      </article>

      {/* Cours de vacances */}
      <article className="news-card orange">
        <h2>📚 Cours de vacances</h2>
        <p>
          Les cours de vacances commencent le <strong>samedi 27 juillet</strong> pour les classes du primaire et du secondaire.
        </p>
        <p>
          Objectif : consolider les acquis et préparer sereinement la rentrée scolaire.
        </p>
      </article>
    </section>
  );
}

export default Actualites;
