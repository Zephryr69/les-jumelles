import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export const metadata = {
  title: "À propos | Les Jumelles",
  description:
    "Une école à Porto-Novo, ancrée dans la discipline, le suivi et l'innovation, ouverte sur le monde grâce au bilinguisme.",
};

export default function AboutPage() {
  return (
    <div className="page" data-page="a-propos">
      <div className="container">
        <div className="breadcrumb"><Link href="/">Accueil</Link><ChevronRight className="icon" /><span>À propos</span></div>
        <div className="split-intro">
          <div className="page-intro">
            <h1>Ancrés ici.<br /><em>Ouverts sur<br />le monde.</em></h1>
            <p>Une école à Porto-Novo. Une conviction : offrir à chaque enfant des repères pour grandir et des langues pour aller à la rencontre du monde.</p>
          </div>
          <div className="split-intro-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?auto=format&fit=crop&w=950&q=85" alt="Des enfants réunis autour d'un même avenir — photographie d'illustration" loading="lazy" width={950} height={800} />
          </div>
        </div>
        <section className="about-story">
          <h2>Notre histoire se construit<br />avec vos enfants.</h2>
          <div>
            <p>Le Complexe Scolaire Bilingue « Les Jumelles » accompagne les familles de Porto-Novo dans un parcours scolaire qui va de la pré-maternelle à la terminale.</p>
            <p>Notre école-mère est située au quartier Tokpota 1, près de l&apos;Hôtel Porto-La Belle. Notre annexe, dans la zone de l&apos;Hôtel Palais Oriental 2, prolonge cette présence au cœur de la ville.</p>
            <p>Ce qui donne du sens à notre projet : associer la rigueur des apprentissages, l&apos;attention portée à chaque élève et une ouverture linguistique dès la maternelle.</p>
            <p>
              Notre équipe d&apos;enseignants qualifiés, notamment en bilinguisme, assure un encadrement
              bienveillant et rigoureux — avec, chaque année, d&apos;excellents résultats aux examens
              nationaux. Le directeur est lui-même professeur certifié d&apos;anglais, spécialiste de
              l&apos;approche bilingue. Nous accueillons aussi les enfants issus d&apos;écoles non
              bilingues : ils ne sont jamais rétrogradés dans une classe inférieure, mais accompagnés
              pour combler l&apos;écart.
            </p>
          </div>
        </section>
      </div>

      <section className="values-section">
        <div className="container values-layout">
          <div><h2>Trois mots.<br />Un engagement.</h2><p>Notre slogan n&apos;est pas une formule. Il exprime le cap de notre projet éducatif.</p></div>
          <div>
            <div className="value-line"><h3>Discipline.</h3><p>Des règles claires, le respect de chacun et le goût de l&apos;effort : un cadre pour apprendre à vivre ensemble et devenir autonome.</p></div>
            <div className="value-line"><h3>Suivi.</h3><p>Être attentifs aux progrès et aux difficultés, garder le lien avec les parents et accompagner le cheminement de l&apos;élève.</p></div>
            <div className="value-line"><h3>Innovation.</h3><p>Nourrir la curiosité, diversifier les façons d&apos;apprendre et faire de l&apos;ouverture linguistique une richesse dès les premières années.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container language-section">
          <div className="language-art">
            <div className="language-word">Je découvre.</div>
            <div className="language-word english" lang="en">I discover.</div>
            <p>Le français et l&apos;anglais, dès la maternelle.</p>
          </div>
          <div className="language-copy">
            <h2>Deux langues pour<br />penser plus grand.</h2>
            <p>Le bilinguisme français-anglais fait partie de l&apos;identité des Jumelles. Dès la maternelle, l&apos;enfant découvre une autre langue et, avec elle, une autre façon de s&apos;exprimer.</p>
            <p>Notre approche vise à développer le plaisir de comprendre, d&apos;oser parler et d&apos;échanger. Les modalités pédagogiques de chaque niveau sont présentées aux familles lors de leur rencontre avec l&apos;école.</p>
            <Link href="/formations" className="text-link">Explorer le parcours scolaire <ArrowRight className="icon" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
