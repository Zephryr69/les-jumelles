import Link from "next/link";
import LevelTabs from "@/components/LevelTabs";
import { Check, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Formations | Les Jumelles",
  description:
    "Un parcours continu, de la pré-maternelle à la terminale, bilingue français-anglais, avec une spécialité série D au lycée.",
};

export default function FormationsPage() {
  return (
    <div className="page" data-page="formations">
      <div className="container">
        <div className="breadcrumb"><Link href="/">Accueil</Link><ChevronRight className="icon" /><span>Formations</span></div>
        <div className="training-heading">
          <div className="page-intro"><h1>Du premier pas<br /><em>au projet d&apos;avenir.</em></h1></div>
          <p>Un parcours continu, de la pré-maternelle à la terminale, pour construire les apprentissages sans perdre le plaisir de découvrir.</p>
        </div>

        <LevelTabs />
      </div>

      <section className="training-common">
        <div className="container training-common-inner">
          <h3>Un fil conducteur :<br />le français et l&apos;anglais.</h3>
          <p>Dès la maternelle, l&apos;apprentissage bilingue ouvre de nouvelles perspectives. Tout au long du parcours, notre ambition reste la même : des bases solides, de la curiosité et la confiance pour progresser.</p>
        </div>
      </section>

      <div className="container">
        {/* Particularités pédagogiques — spécificités réelles de l'école */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="section-heading">
            <h2>Ce qui distingue<br />notre pédagogie.</h2>
          </div>
          <ul className="check-list" style={{ maxWidth: 720 }}>
            <li><Check className="icon" /> Spécialité <strong>série D</strong> au lycée, avec des cours renforcés en français</li>
            <li><Check className="icon" /> <strong>Clubs d&apos;anglais</strong> mensuels pour favoriser l&apos;expression orale</li>
            <li><Check className="icon" /> Formation à la <strong>F.E.N.</strong> (Fiche d&apos;Élévation de Niveau) et initiation au <strong>journalisme scolaire</strong></li>
            <li><Check className="icon" /> <strong>Tests de niveau trimestriels</strong> pour suivre les progrès de chaque élève</li>
            <li><Check className="icon" /> <strong>Travaux dirigés</strong> obligatoires au collège et au lycée pour renforcer les acquis</li>
          </ul>
        </section>

        <section className="faq-section">
          <h2>Vos questions, simplement.</h2>
          <details>
            <summary>À partir de quel âge mon enfant peut-il être accueilli ?</summary>
            <p>L&apos;école propose un accueil en pré-maternelle. L&apos;âge d&apos;admission et le niveau adapté à votre enfant sont à confirmer auprès du secrétariat, en fonction de sa situation et des places disponibles.</p>
          </details>
          <details>
            <summary>Faut-il déjà parler anglais pour rejoindre l&apos;école ?</summary>
            <p>Le français et l&apos;anglais sont appris dès la maternelle. Les enfants venant d&apos;une école non bilingue sont accueillis sans être pénalisés, avec un accompagnement adapté à leur intégration.</p>
          </details>
          <details>
            <summary>Quels niveaux comprend le secondaire ?</summary>
            <p>Le secondaire comprend le 1er cycle, de la 6e à la 3e, et le 2e cycle, de la seconde à la terminale (spécialité série D). Contactez le secrétariat pour toute précision sur les conditions d&apos;admission.</p>
          </details>
          <details>
            <summary>Comment connaître les places disponibles sur chaque site ?</summary>
            <p>Notre équipe vous renseigne par téléphone ou WhatsApp au +229 01 97 29 44 34 ou au +229 01 96 67 70 04. La répartition des niveaux entre l&apos;école-mère et l&apos;annexe est à confirmer avec le secrétariat.</p>
          </details>
        </section>
      </div>
    </div>
  );
}
