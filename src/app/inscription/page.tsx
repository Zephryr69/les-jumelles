import Link from "next/link";
import { ArrowRight, Check, ChevronRight, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Inscription | Les Jumelles",
  description:
    "Pièces à fournir, étapes d'admission et grille tarifaire réelle pour inscrire votre enfant au CSB Les Jumelles.",
};

export default function InscriptionPage() {
  return (
    <div className="page" data-page="inscription">
      <div className="admission-intro">
        <div className="container">
          <div className="breadcrumb"><Link href="/">Accueil</Link><ChevronRight className="icon" /><span>Inscription</span></div>
          <div className="page-intro">
            <h1>Son prochain chapitre<br /><em>commence ici.</em></h1>
            <p>Parlons de votre enfant, de son parcours et de vos attentes. Notre équipe vous accompagne dans les démarches d&apos;inscription.</p>
          </div>
        </div>
      </div>

      <div className="container admission-layout">
        <div className="admission-main">
          <h2>Trois étapes pour se rencontrer.</h2>
          <div className="admission-steps">
            <div><span className="step-number">1</span><h3>Prenons contact</h3><p>Présentez-nous votre enfant et le niveau souhaité.</p></div>
            <div><span className="step-number">2</span><h3>Entretien à l&apos;école</h3><p>Un entretien avec les parents est obligatoire, avec une évaluation diagnostique écrite si nécessaire.</p></div>
            <div><span className="step-number">3</span><h3>Préparons son dossier</h3><p>Réunissez les pièces et finalisez l&apos;inscription au secrétariat.</p></div>
          </div>

          <section className="documents">
            <h3>Les pièces à préparer</h3>
            <p>Documents demandés pour toute inscription.</p>
            <ul className="check-list">
              <li><Check className="icon" /> Acte de naissance de l&apos;enfant</li>
              <li><Check className="icon" /> Bulletins de notes / carnet de correspondance</li>
              <li><Check className="icon" /> Certificat de scolarité (pour la maternelle)</li>
              <li><Check className="icon" /> 3 photos d&apos;identité récentes (2 à l&apos;inscription, 1 à la réinscription)</li>
            </ul>
          </section>

          <section className="documents">
            <h3>Grille tarifaire détaillée</h3>
            <p>Les frais comprennent l&apos;inscription, la scolarité, les travaux dirigés (TD) et les activités.
              Le paiement peut se faire en plusieurs tranches — aucune somme encaissée ne peut être remboursée.</p>
            <div style={{ overflowX: "auto" }}>
              <table className="fee-table" aria-label="Détail des tarifs par niveau" style={{ color: "var(--ink)", width: "100%" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--line)" }}>
                    <th scope="col" style={{ textAlign: "left", padding: "10px 8px" }}>Classe</th>
                    <th scope="col" style={{ textAlign: "right", padding: "10px 8px" }}>Inscription</th>
                    <th scope="col" style={{ textAlign: "right", padding: "10px 8px" }}>Scolarité</th>
                    <th scope="col" style={{ textAlign: "right", padding: "10px 8px" }}>TD</th>
                    <th scope="col" style={{ textAlign: "right", padding: "10px 8px" }}>Activités</th>
                    <th scope="col" style={{ textAlign: "right", padding: "10px 8px", color: "var(--blue-deep)", fontWeight: 600 }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid var(--line)" }}>
                    <td style={{ padding: "10px 8px" }}>Pré-maternelle</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>5 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>85 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>—</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>10 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px", fontWeight: 600 }}>100 000 F</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--line)" }}>
                    <td style={{ padding: "10px 8px" }}>Maternelle 1 &amp; 2</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>5 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>78 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>—</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>10 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px", fontWeight: 600 }}>93 000 F</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--line)" }}>
                    <td style={{ padding: "10px 8px" }}>Primaire (CP à CM2)</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>5 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>83 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>13 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>10 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px", fontWeight: 600 }}>111 000 F</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid var(--line)" }}>
                    <td style={{ padding: "10px 8px" }}>Collège</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>5 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>113 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>15 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>10 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px", fontWeight: 600 }}>143 000 F</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px 8px" }}>Lycée (Série D)</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>5 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>130 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>25 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px" }}>10 000 F</td>
                    <td style={{ textAlign: "right", padding: "10px 8px", fontWeight: 600 }}>170 000 F</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Vous pouvez télécharger le tableau complet des frais au format PDF :{" "}
              <a href="/docs/frais-inscription.pdf" target="_blank" rel="noopener noreferrer" className="text-link" style={{ display: "inline" }}>
                Télécharger ici
              </a>
            </p>
          </section>

          <section className="form-panel">
            <h2>Faisons connaissance.</h2>
            <p>Ce formulaire prépare une demande de renseignements. L&apos;inscription définitive se fait auprès de l&apos;école. Les champs marqués * sont obligatoires.</p>
            <form id="admission-form">
              <div className="form-grid">
                <div className="field"><label htmlFor="parent-name">Nom du parent / responsable *</label><input id="parent-name" name="parent" autoComplete="name" placeholder="Votre nom complet" required maxLength={100} /></div>
                <div className="field"><label htmlFor="parent-phone">Téléphone / WhatsApp *</label><input id="parent-phone" name="phone" type="tel" autoComplete="tel" placeholder="+229 01 …" required minLength={8} maxLength={25} /></div>
                <div className="field"><label htmlFor="parent-email">Adresse e-mail <span className="optional">(facultatif)</span></label><input id="parent-email" name="email" type="email" autoComplete="email" placeholder="vous@exemple.com" maxLength={150} /></div>
                <div className="field"><label htmlFor="child-name">Prénom de l&apos;enfant <span className="optional">(facultatif)</span></label><input id="child-name" name="child" placeholder="Son prénom" maxLength={80} /></div>
                <div className="field">
                  <label htmlFor="admission-level">Niveau souhaité *</label>
                  <select id="admission-level" name="level" required defaultValue="">
                    <option value="" disabled>Choisir un niveau</option>
                    <option value="Pré-maternelle">Pré-maternelle</option>
                    <option value="Maternelle">Maternelle</option>
                    <option value="Primaire — CP à CM2">Primaire — CP à CM2</option>
                    <option value="Secondaire — 1er cycle">Secondaire — 1er cycle</option>
                    <option value="Secondaire — 2e cycle">Secondaire — 2e cycle</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="admission-campus">Site de préférence *</label>
                  <select id="admission-campus" name="campus" required defaultValue="">
                    <option value="" disabled>Choisir un site</option>
                    <option value="École-mère — Tokpota 1">École-mère — Tokpota 1</option>
                    <option value="Annexe — zone de l'Hôtel Palais Oriental 2">Annexe — zone de l&apos;Hôtel Palais Oriental 2</option>
                    <option value="À définir avec l'équipe">À définir avec l&apos;équipe</option>
                  </select>
                </div>
                <div className="field full"><label htmlFor="admission-message">Un mot sur votre demande <span className="optional">(facultatif)</span></label><textarea id="admission-message" name="message" placeholder="Classe actuelle, questions, disponibilité pour une visite…" maxLength={2000} /></div>
              </div>
              <label className="consent"><input type="checkbox" required name="consent" /><span>J&apos;accepte de transmettre ces informations à l&apos;école afin d&apos;être recontacté(e) au sujet de ma demande. *</span></label>
              <a
                href="https://wa.me/2290197858951?text=Bonjour%2C%20je%20souhaite%20faire%20une%20demande%20d%E2%80%99inscription."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Envoyer ma demande sur WhatsApp <ArrowRight className="icon" />
              </a>
              <p className="form-footnote">Ce formulaire vous aide à préparer votre message ; il est ensuite à envoyer vous-même via WhatsApp ou e-mail. Aucune donnée n&apos;est enregistrée sur ce site.</p>
            </form>
          </section>
        </div>

        <aside className="admission-sidebar">
          <section className="fees-box">
            <h2>Parlons des frais<br />de scolarité.</h2>
            <p>Total tout compris par niveau (inscription, scolarité, TD et activités inclus).</p>
            <table className="fee-table" aria-label="Tarifs totaux par niveau">
              <tbody>
                <tr><th scope="row">Pré-maternelle</th><td>100 000 F</td></tr>
                <tr><th scope="row">Maternelle 1 &amp; 2</th><td>93 000 F</td></tr>
                <tr><th scope="row">Primaire</th><td>111 000 F</td></tr>
                <tr><th scope="row">Collège</th><td>143 000 F</td></tr>
                <tr><th scope="row">Lycée (Série D)</th><td>170 000 F</td></tr>
              </tbody>
            </table>
            <p>Le paiement peut se faire en plusieurs tranches. Aucune somme encaissée ne pourra être remboursée.</p>
            <a className="btn btn-whatsapp" href="https://wa.me/2290197858951?text=Bonjour%2C%20j%E2%80%99ai%20une%20question%20sur%20les%20tarifs%20et%20l%E2%80%99inscription." target="_blank" rel="noopener noreferrer" style={{ marginTop: 23 }}>
              <MessageCircle className="icon" /> Une question sur les frais ?
            </a>
          </section>
          <div className="sidebar-help">
            <h3>Besoin d&apos;être guidé(e) ?</h3>
            <p>Nous sommes joignables du lundi au vendredi, de 07h00 à 19h00, et le samedi jusqu&apos;à 18h00.</p>
            <a href="tel:+2290197294434">+229 01 97 29 44 34</a>
          </div>
        </aside>
      </div>
    </div>
  );
}
