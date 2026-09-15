import Link from "next/link";
import LevelTabs from "@/components/LevelTabs";
import { Check, ChevronRight, Quote } from "lucide-react";

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
          <p>L&apos;école bilingue moderne de vos rêves. Un parcours continu, de la pré-maternelle à la terminale, pour construire les apprentissages sans perdre le plaisir de découvrir.</p>
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

        <section className="section">
          <div className="section-heading">
            <h2>Pourquoi choisir<br />«Les Jumelles».</h2>
          </div>
          <p className="vs-text" style={{ marginBottom: 36 }}>
            L&apos;enseignement de l&apos;anglais aux petits enfants de la maternelle et du primaire,
            dans un espace francophone comme le Bénin, est un projet pédagogique à la fois pertinent
            et délicat. Il exige un grand professionnalisme — il ne suffit pas d&apos;être professeur
            d&apos;anglais pour le réussir.
          </p>
          <div className="why-us-grid">
            <div className="why-us-card">
              <span className="why-us-number">02</span>
              <h3>Un directeur spécialiste</h3>
              <p>Le directeur est lui-même professeur certifié d&apos;anglais, spécialiste de l&apos;approche bilingue français-anglais.</p>
            </div>
            <div className="why-us-card">
              <span className="why-us-number">03</span>
              <h3>Des clubs d&apos;anglais mensuels</h3>
              <p>Organisés une fois par mois pour tous les apprenants, de la maternelle au collège, afin de renforcer leurs aptitudes à parler la langue.</p>
            </div>
            <div className="why-us-card">
              <span className="why-us-number">04</span>
              <h3>Aucune rétrogradation</h3>
              <p>Les enfants venus d&apos;écoles non bilingues ne sont jamais retournés dans une classe inférieure, contrairement à ce qui se fait ailleurs.</p>
            </div>
            <div className="why-us-card">
              <span className="why-us-number">05</span>
              <h3>Une garderie</h3>
              <p>Au profit des enfants qui passent le midi à l&apos;école.</p>
            </div>
            <div className="why-us-card">
              <span className="why-us-number">06</span>
              <h3>Une école à cantine</h3>
              <p>Trois options de menu disponibles ; élèves et personnel mangent en toute sécurité. <Link href="/vie-scolaire" className="text-link" style={{ display: "inline" }}>En savoir plus</Link></p>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="mission-quote" style={{ position: "static", maxWidth: 560 }}>
            <Quote className="icon" />
            <p>À «Les Jumelles», nous formons pour un label.<br />L&apos;approche bilingue est un art.</p>
          </div>
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
            <p>Notre équipe vous renseigne par téléphone ou WhatsApp au +229 01 97 29 44 34. La répartition des niveaux entre l&apos;école-mère et l&apos;annexe est à confirmer avec le secrétariat.</p>
          </details>
        </section>
      </div>
    </div>
  );
}
