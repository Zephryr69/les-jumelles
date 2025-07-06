// src/pages/VieScolaire.jsx
import "./VieScolaire.css";

function VieScolaire() {
  return (
    <div className="vie-scolaire-page">
      <section className="vie-header">
        <h1>🎒 Vie Scolaire au CSB "Les Jumelles"</h1>
        <p>Découvrez l’environnement quotidien de nos élèves : uniformes, activités, fêtes et frais associés.</p>
      </section>

      {/* Uniformes */}
      <section className="vie-section">
        <h2>👕 Uniformes Scolaires</h2>

        <div className="uniform-block">
          <h3>Maternelle & Primaire</h3>
          <p><strong>Lundi à Mercredi :</strong><br />Filles : Jupe kaki + chemise bleu nuit<br />Garçons : Culotte kaki + chemise bleu nuit</p>
          <p><strong>Jeudi & Vendredi :</strong><br />Filles : Jupe kaki + chemise marron<br />Garçons : Culotte kaki + chemise marron</p>
          <p><strong>Coût :</strong><br />
            Chemises + macarons offerts (nouveaux élèves)<br />
            Kaki à charge des parents<br />
            T-shirt de sport : 2 000 F CFA
          </p>
        </div>

        <div className="uniform-block">
          <h3>Secondaire (1<sup>er</sup> cycle)</h3>
          <p><strong>Lundi à Mercredi :</strong><br />Filles : Chemise rose claire + jupe bleu nuit<br />Garçons : Chemise rose claire + pantalon bleu nuit</p>
          <p><strong>Jeudi & Vendredi :</strong><br />Lacoste beige + bas bleu nuit</p>
          <p><strong>Coût :</strong><br />
            Uniformes + Lacoste : 11 000 F CFA<br />
            T-shirt de sport : 2 000 F CFA
          </p>
        </div>

        <div className="uniform-block">
          <h3>Secondaire (2<sup>e</sup> cycle)</h3>
          <p><strong>Lundi à Mercredi :</strong><br />Filles : Chemise beige + jupe marron<br />Garçons : Chemise beige + pantalon marron</p>
          <p><strong>Jeudi & Vendredi :</strong><br />Lacoste vert foncé + bas bleu nuit</p>
          <p><strong>Coût :</strong><br />
            Uniformes + Lacoste : 14 000 F CFA<br />
            T-shirt de sport : 2 000 F CFA
          </p>
        </div>
      </section>

      {/* Activités */}
      <section className="vie-section">
        <h2>🎯 Activités & Clubs</h2>
        <p>
          Nos élèves participent à des sorties pédagogiques, des fêtes annuelles
          (Noël, fin d’année), et à des <strong>clubs mensuels d’anglais</strong> pour
          renforcer leur expression et leur compréhension.
        </p>
      </section>

      {/* Frais divers */}
      <section className="vie-section">
        <h2>💰 Frais Divers</h2>
        <ul className="liste-frais">
          <li>Sortie pédagogique : 4 000 F</li>
          <li>Fête de Noël : 3 000 F</li>
          <li>Fête de fin d’année : 3 000 F</li>
        </ul>
        <p><strong>Total :</strong> Environ 10 000 F CFA à régler avant ou lors de l’inscription.</p>
      </section>
    </div>
  );
}

export default VieScolaire;
