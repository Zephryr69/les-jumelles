"use client";

import { useState } from "react";
import { ArrowRight, Info } from "lucide-react";

type LifeKey = "uniformes" | "cantine" | "garderie" | "sorties" | "fetes";

interface LifeData {
  tab: string;
  title: string;
  description: string;
  practicalLabel: string;
  practical: string;
  image: string;
  alt: string;
  whatsappText: string;
}

const topics: Record<LifeKey, LifeData> = {
  uniformes: {
    tab: "Les uniformes",
    title: "Une tenue, un esprit d'école.",
    description:
      "L'uniforme est un repère partagé. Il contribue au sentiment d'appartenance à l'école et rappelle l'importance de la présentation, du respect et de la vie collective.",
    practicalLabel: "Détail par cycle",
    practical:
      "Maternelle & Primaire — lundi à mercredi : kaki + chemise bleu nuit ; jeudi-vendredi : kaki + chemise marron. Chemises et macarons offerts aux nouveaux élèves, kaki à charge des parents, sport 2 000 F. Secondaire 1er cycle — lundi à mercredi : rose claire + bleu nuit ; jeudi-vendredi : Lacoste beige + bleu nuit (pack 11 000 F, sport 2 000 F). Secondaire 2e cycle — lundi à mercredi : beige + marron ; jeudi-vendredi : Lacoste vert foncé + bleu nuit (pack 14 000 F, sport 3 000 F).",
    image: "flagged/photo-1555251255-e9a095d6eb9d",
    alt: "Des enfants réunis — photographie d'illustration",
    whatsappText: "Bonjour%2C%20j%E2%80%99aimerais%20des%20renseignements%20sur%20les%20uniformes.",
  },
  cantine: {
    tab: "La cantine",
    title: "Une pause pour reprendre des forces.",
    description:
      "La pause déjeuner fait partie du rythme de l'enfant. La cantine s'inscrit dans ce quotidien, entre les apprentissages du matin et ceux de l'après-midi, avec le plaisir de partager un repas.",
    practicalLabel: "Le repère des parents",
    practical:
      "Pour connaître les menus, les tarifs, les modalités d'inscription et signaler une allergie ou un besoin alimentaire particulier, contactez le secrétariat.",
    image: "photo-1627423896085-e3e694d88e40",
    alt: "Un repas et des produits alimentaires — photographie d'illustration",
    whatsappText: "Bonjour%2C%20j%E2%80%99aimerais%20des%20renseignements%20sur%20la%20cantine.",
  },
  garderie: {
    tab: "La garderie",
    title: "Un relais pour les familles.",
    description:
      "L'organisation familiale ne s'arrête pas à la fin de la classe. La garderie permet de penser la continuité de la journée et de prévoir avec l'école les modalités d'accueil de l'enfant.",
    practicalLabel: "Le repère des parents",
    practical:
      "Les horaires, les âges accueillis, les places et les frais de garderie sont à confirmer auprès du secrétariat. Les horaires généraux de l'école (07h00 – 19h00 en semaine, jusqu'à 18h00 le samedi) ne constituent pas les horaires contractuels de ce service.",
    image: "photo-1567057419565-4349c49d8a04",
    alt: "Un jeune enfant pendant une activité — photographie d'illustration",
    whatsappText: "Bonjour%2C%20j%E2%80%99aimerais%20des%20renseignements%20sur%20la%20garderie.",
  },
  sorties: {
    tab: "Les sorties pédagogiques",
    title: "Le monde aussi est une salle de classe.",
    description:
      "Observer, poser des questions, relier ce que l'on apprend à ce que l'on voit : les sorties pédagogiques donnent une autre dimension aux savoirs et nourrissent la curiosité des élèves.",
    practicalLabel: "Le repère des parents",
    practical:
      "Frais de sortie pédagogique : 4 000 F CFA. Le programme, les dates et les autorisations parentales sont communiqués aux familles pour chaque sortie.",
    image: "photo-1459183885421-5cc683b8dbba",
    alt: "Des enfants à l'extérieur — photographie d'illustration",
    whatsappText: "Bonjour%2C%20j%E2%80%99aimerais%20des%20renseignements%20sur%20les%20sorties%20p%C3%A9dagogiques.",
  },
  fetes: {
    tab: "Les fêtes et rencontres",
    title: "Des souvenirs à construire ensemble.",
    description:
      "Les fêtes et les rencontres sont l'occasion de se retrouver autrement, de valoriser les talents des enfants et de tisser des liens entre les élèves, les familles et l'équipe de l'école.",
    practicalLabel: "Le repère des parents",
    practical:
      "Fête de Noël : 3 000 F CFA. Fête de fin d'année : 3 000 F CFA. Les invitations et modalités sont transmises aux familles à l'approche des événements.",
    image: "photo-1543689604-6fe8dbcd1f59",
    alt: "Un moment chaleureux partagé en famille — photographie d'illustration",
    whatsappText: "Bonjour%2C%20j%E2%80%99aimerais%20des%20renseignements%20sur%20les%20f%C3%AAtes%20et%20rencontres.",
  },
};

export default function LifeTabs() {
  const [active, setActive] = useState<LifeKey>("uniformes");
  const topic = topics[active];

  return (
    <div className="life-content">
      <aside className="life-aside">
        <h2>Le quotidien au Complexe<br />Scolaire Bilingue «Les Jumelles».</h2>
        <p>Des repères pour les enfants. Des informations utiles pour les parents.</p>
        <div className="life-nav" role="tablist" aria-label="Les thèmes de la vie scolaire">
          {(Object.keys(topics) as LifeKey[]).map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={active === key}
              aria-controls="life-panel"
              tabIndex={active === key ? 0 : -1}
              onClick={() => setActive(key)}
            >
              {topics[key].tab}
            </button>
          ))}
        </div>
      </aside>

      <section className="life-detail" id="life-panel" role="tabpanel">
        <h2>{topic.title}</h2>
        <p>{topic.description}</p>
        <div className="life-detail-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://images.unsplash.com/${topic.image}?auto=format&fit=crop&w=1000&q=85`} alt={topic.alt} loading="lazy" width={1000} height={600} />
        </div>
        <div className="life-practical">
          <Info className="icon" />
          <p><strong>{topic.practicalLabel}</strong><span>{topic.practical}</span></p>
        </div>
        <a
          href={`https://wa.me/2290197858951?text=${topic.whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
          style={{ alignSelf: "start", marginTop: 24 }}
        >
          Poser une question à l&apos;équipe <ArrowRight className="icon" />
        </a>
      </section>
    </div>
  );
}
