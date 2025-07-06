// src/pages/Formations.jsx
import "./Formations.css";

function Formations() {
  return (
    <main className="formations-page">
      <header className="formations-header">
        <h1>🎓 Nos Formations</h1>
        <p>
          Le Complexe Scolaire Bilingue <strong>« Les Jumelles »</strong> offre un
          parcours éducatif structuré et exigeant, de la maternelle à la terminale,
          avec une pédagogie axée sur le bilinguisme, la rigueur et l’innovation.
        </p>
      </header>

      {/* Présentation des cycles */}
      <section className="formations-section">
        <h2>🏫 Présentation des Cycles</h2>
        <div className="cycle-cards">
          <div className="cycle-card">
            <h3>Maternelle bilingue</h3>
            <p>
              Immersion en français et en anglais dès le plus jeune âge,
              avec un apprentissage par le jeu, les comptines, et les chants.
            </p>
          </div>
          <div className="cycle-card">
            <h3>Primaire</h3>
            <p>
              Acquisition solide des fondamentaux (français, mathématiques, sciences),
              éveil à la culture et aux langues vivantes.
            </p>
          </div>
          <div className="cycle-card">
            <h3>Secondaire</h3>
            <p>
              Collège et lycée général avec une orientation vers la <strong>série D</strong>,
              incluant la préparation aux examens officiels (BEPC et BAC).
            </p>
          </div>
        </div>
      </section>

      {/* Particularités pédagogiques */}
      <section className="formations-section">
        <h2>💡 Particularités pédagogiques</h2>
        <ul className="pedagogie-list">
          <li>
            📘 <strong>Clubs d’anglais</strong> mensuels pour favoriser l’expression orale
          </li>
          <li>
            ✍️ Formation à la <strong>F.E.N.</strong> (Fiche d’Élévation de Niveau) et
            introduction au <strong>journalisme scolaire</strong>
          </li>
          <li>
            📊 <strong>Tests de niveau</strong> trimestriels pour suivre les progrès
          </li>
          <li>
            🧠 <strong>Travaux dirigés</strong> obligatoires au collège et au lycée pour
            renforcer les acquis
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Formations;
