// src/pages/Inscription.jsx
import "./Inscription.css";

function Inscription() {
  return (
    <main className="inscription-page">
      <h1>Inscription au CSB "Les Jumelles"</h1>
      <div className="intro-text">
        <p>
          Merci de bien vouloir préparer les documents et informations suivants
          pour l’inscription de votre enfant.
        </p>
      </div>

      {/* Pièces à fournir */}
      <article className="inscription-info">
        <h2>Pièces à fournir</h2>
        <ul>
          <li>Acte de naissance de l’enfant</li>
          <li>Bulletins de notes / Carnet de correspondance</li>
          <li>Certificat de scolarité (pour maternelle)</li>
          <li>Photos d'identité récentes (3 photos : 2 à l'inscription, 1 à la réinscription)</li>
        </ul>
      </article>

      {/* Tests de niveau */}
      <article className="inscription-info">
        <h2>Tests de niveau</h2>
        <p>
          Un entretien avec les parents est obligatoire avant l'inscription.
          <br />
          Une évaluation diagnostique écrite est réalisée si nécessaire, notamment pour les nouveaux élèves dont le dossier ne rassure pas l'administration.
        </p>
      </article>

      {/* Frais et modalités */}
      <article className="inscription-info">
        <h2>Frais et modalités de paiement</h2>
        <p>Les frais comprennent :</p>
        <ul>
          <li>Frais d’inscription / réinscription</li>
          <li>Frais de scolarité</li>
          <li>Travaux dirigés (TD)</li>
          <li>Frais d’activités (sorties, fêtes, etc.)</li>
        </ul>

        <p>
          Le paiement peut se faire en plusieurs tranches, selon un calendrier défini.
          <br />
          <strong>Note :</strong> Aucune somme encaissée ne pourra être remboursée.
        </p>

        {/* Tableau des frais avec conteneur responsive */}
        <div className="table-container">
          <table className="fees-table">
            <thead>
              <tr>
                <th>Classe</th>
                <th>Inscription</th>
                <th>Scolarité</th>
                <th>Travaux dirigés</th>
                <th>Activités</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pré-maternelle</td>
                <td>5 000 F</td>
                <td>85 000 F</td>
                <td>—</td>
                <td>10 000 F</td>
                <td>100 000 F</td>
              </tr>
              <tr>
                <td>Maternelle 1 & 2</td>
                <td>5 000 F</td>
                <td>78 000 F</td>
                <td>—</td>
                <td>10 000 F</td>
                <td>93 000 F</td>
              </tr>
              <tr>
                <td>Primaire (CP à CM2)</td>
                <td>5 000 F</td>
                <td>83 000 F</td>
                <td>13 000 F</td>
                <td>10 000 F</td>
                <td>111 000 F</td>
              </tr>
              <tr>
                <td>Collège</td>
                <td>5 000 F</td>
                <td>113 000 F</td>
                <td>15 000 F</td>
                <td>10 000 F</td>
                <td>143 000 F</td>
              </tr>
              <tr>
                <td>Lycée (Série D)</td>
                <td>5 000 F</td>
                <td>130 000 F</td>
                <td>25 000 F</td>
                <td>10 000 F</td>
                <td>170 000 F</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Vous pouvez télécharger le tableau complet des frais au format PDF :{" "}
          <a href="/docs/frais-inscription.pdf" target="_blank" rel="noopener noreferrer">
            Télécharger ici
          </a>
        </p>
      </article>
    </main>
  );
}

export default Inscription;
