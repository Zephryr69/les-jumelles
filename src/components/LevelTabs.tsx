"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

type LevelKey = "pre-maternelle" | "maternelle" | "primaire" | "secondaire";

interface LevelData {
  tab: string;
  tag: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  alt: string;
}

const levels: Record<LevelKey, LevelData> = {
  "pre-maternelle": {
    tab: "Pré-maternelle",
    tag: "Les tout premiers apprentissages",
    title: "Un premier pas,<br>en toute confiance.",
    description:
      "La pré-maternelle est une transition douce entre la maison et l'école. L'enfant découvre la vie en groupe, explore son environnement et prend progressivement ses premiers repères.",
    points: [
      "S'éveiller par le jeu, le mouvement et les découvertes",
      "Apprendre à partager et à vivre avec les autres",
      "Développer le langage et les premiers gestes d'autonomie",
    ],
    image: "photo-1548102249-acdce64fffbd",
    alt: "L'éveil d'un jeune enfant — photographie d'illustration",
  },
  maternelle: {
    tab: "Maternelle",
    tag: "Le bilinguisme commence ici",
    title: "La curiosité<br>dans deux langues.",
    description:
      "En maternelle, les découvertes prennent mille formes : les mots, les sons, les nombres, les couleurs. L'apprentissage du français et de l'anglais commence dès cette étape, dans un univers où l'enfant est encouragé à essayer.",
    points: [
      "Découvrir et pratiquer le français et l'anglais",
      "Préparer les bases du langage, de l'écriture et des nombres",
      "Cultiver la créativité, la motricité et la confiance",
    ],
    image: "photo-1521493959102-bdd6677fdd81",
    alt: "La découverte et les premiers apprentissages en classe — photographie d'illustration",
  },
  primaire: {
    tab: "Primaire",
    tag: "Du CP au CM2",
    title: "Des fondations solides.<br>Le goût de progresser.",
    description:
      "Le primaire est le temps des apprentissages fondamentaux. Lire, écrire, raisonner, comprendre : chaque acquisition prépare la suivante et aide l'élève à devenir plus autonome dans son travail.",
    points: [
      "Consolider la lecture, l'expression écrite et le calcul",
      "Poursuivre un parcours scolaire bilingue français-anglais",
      "Développer les méthodes de travail et préparer l'entrée au collège",
    ],
    image: "photo-1567057420215-0afa9aa9253a",
    alt: "Des élèves attentifs en classe — photographie d'illustration",
  },
  secondaire: {
    tab: "Secondaire",
    tag: "1er et 2e cycle · De la 6e à la terminale",
    title: "Construire son parcours.<br>Préparer demain.",
    description:
      "Au secondaire, les savoirs s'approfondissent et le projet de l'élève se précise. Les Jumelles accompagnent ce parcours au 1er cycle, de la 6e à la 3e, puis au 2e cycle, de la seconde à la terminale, avec une spécialité série D.",
    points: [
      "Approfondir les disciplines et la capacité de raisonnement",
      "Développer l'autonomie, l'organisation et le sens des responsabilités",
      "Préparer les examens officiels (BEPC et BAC) et réfléchir à son orientation",
    ],
    image: "flagged/photo-1555251255-e9a095d6eb9d",
    alt: "Un groupe d'élèves pendant un cours — photographie d'illustration",
  },
};

export default function LevelTabs() {
  const [active, setActive] = useState<LevelKey>("pre-maternelle");
  const level = levels[active];

  return (
    <>
      <div className="level-tabs" role="tablist" aria-label="Choisir un niveau scolaire">
        {(Object.keys(levels) as LevelKey[]).map((key) => (
          <button
            key={key}
            className="level-tab"
            role="tab"
            aria-selected={active === key}
            aria-controls="training-panel"
            tabIndex={active === key ? 0 : -1}
            onClick={() => setActive(key)}
          >
            {levels[key].tab}
          </button>
        ))}
      </div>
      <section className="training-panel" id="training-panel" role="tabpanel">
        <div className="training-panel-copy">
          <span className="level-tag">{level.tag}</span>
          <h2 dangerouslySetInnerHTML={{ __html: level.title }} />
          <p>{level.description}</p>
          <ul className="check-list">
            {level.points.map((point) => (
              <li key={point}><Check className="icon" /> {point}</li>
            ))}
          </ul>
          <Link href="/inscription" className="btn btn-primary">
            Préparer son inscription <ArrowRight className="icon" />
          </Link>
        </div>
        <div className="training-panel-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://images.unsplash.com/${level.image}?auto=format&fit=crop&w=950&q=85`} alt={level.alt} loading="lazy" width={950} height={950} />
        </div>
      </section>
    </>
  );
}
