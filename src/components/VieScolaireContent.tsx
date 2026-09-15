"use client";

import { motion } from "framer-motion";
import { Backpack, Bus, Coins, Globe2, PartyPopper, Shirt, UtensilsCrossed, Users } from "lucide-react";
import UniformSwatch from "./UniformSwatch";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
};

const dailyLife = [
  {
    icon: UtensilsCrossed,
    title: "Une école à cantine",
    text: "Trois options de menu sont proposées chaque jour. Élèves, enseignants et personnel y mangent ensemble, pour une alimentation saine et sécurisée.",
  },
  {
    icon: Users,
    title: "Garderie",
    text: "Un système de garderie accueille les enfants qui passent le midi à l'école.",
  },
];

const activities = [
  {
    icon: Bus,
    title: "Sorties pédagogiques",
    text: "Des sorties pour découvrir, observer et apprendre autrement, en dehors des murs de la classe.",
  },
  {
    icon: PartyPopper,
    title: "Fêtes annuelles",
    text: "Noël et fête de fin d'année : des moments conviviaux à partager en famille.",
  },
  {
    icon: Globe2,
    title: "Clubs d'anglais mensuels",
    text: "Un rendez-vous régulier pour renforcer l'expression orale et la compréhension.",
  },
];

const fees = [
  { label: "Sortie pédagogique", amount: "4 000 F" },
  { label: "Fête de Noël", amount: "3 000 F" },
  { label: "Fête de fin d'année", amount: "3 000 F" },
];

interface UniformItem {
  text: string;
  top: string;
  bottom: string;
}

interface UniformCycle {
  title: string;
  monWed: { label: string; items: UniformItem[] };
  thuFri: { label: string; items: UniformItem[] };
  cost: string[];
}

const cycles: UniformCycle[] = [
  {
    title: "Maternelle & Primaire",
    monWed: {
      label: "Lundi à mercredi",
      items: [
        { text: "Filles : jupe kaki + chemise bleu nuit", top: "#1b2a4a", bottom: "#c3b091" },
        { text: "Garçons : culotte kaki + chemise bleu nuit", top: "#1b2a4a", bottom: "#c3b091" },
      ],
    },
    thuFri: {
      label: "Jeudi & vendredi",
      items: [
        { text: "Filles : jupe kaki + chemise marron", top: "#6b4423", bottom: "#c3b091" },
        { text: "Garçons : culotte kaki + chemise marron", top: "#6b4423", bottom: "#c3b091" },
      ],
    },
    cost: [
      "Chemises et macarons offerts aux nouveaux élèves (4 000 F pour les anciens élèves)",
      "Kaki à la charge des parents",
      "T-shirt de sport : 2 000 F CFA",
    ],
  },
  {
    title: "Secondaire — 1er cycle",
    monWed: {
      label: "Lundi à mercredi",
      items: [
        { text: "Filles : chemise rose claire + jupe bleu nuit", top: "#f4c2c2", bottom: "#1b2a4a" },
        { text: "Garçons : chemise rose claire + pantalon bleu nuit", top: "#f4c2c2", bottom: "#1b2a4a" },
      ],
    },
    thuFri: {
      label: "Jeudi & vendredi",
      items: [{ text: "Lacoste beige + bas bleu nuit", top: "#e8dcc0", bottom: "#1b2a4a" }],
    },
    cost: ["Uniformes + Lacoste : 11 000 F CFA", "T-shirt de sport : 2 000 F CFA"],
  },
  {
    title: "Secondaire — 2e cycle",
    monWed: {
      label: "Lundi à mercredi",
      items: [
        { text: "Filles : chemise beige + jupe marron", top: "#e8dcc0", bottom: "#6b4423" },
        { text: "Garçons : chemise beige + pantalon marron", top: "#e8dcc0", bottom: "#6b4423" },
      ],
    },
    thuFri: {
      label: "Jeudi & vendredi",
      items: [{ text: "Lacoste vert foncé + bas bleu nuit", top: "#1e4d2b", bottom: "#1b2a4a" }],
    },
    cost: ["Uniformes + Lacoste : 14 000 F CFA", "T-shirt de sport : 3 000 F CFA"],
  },
];

export default function VieScolaireContent() {
  return (
    <>
      <motion.section
        className="vs-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <div className="section-heading">
          <h2><Shirt className="icon" /> Les uniformes scolaires</h2>
          <p>Une tenue par cycle, avec ses couleurs et ses coûts.</p>
        </div>
        <motion.div
          className="uniform-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {cycles.map((cycle) => (
            <motion.div
              key={cycle.title}
              className="uniform-card"
              variants={item}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(19,51,106,.16)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3>{cycle.title}</h3>

              <div className="uniform-days">
                <span className="uniform-days-label">{cycle.monWed.label}</span>
                <div className="outfit-row">
                  {cycle.monWed.items.map((entry, idx) => (
                    <motion.div
                      key={entry.text}
                      className="outfit-swatch"
                      whileHover={{ rotate: idx % 2 === 0 ? -6 : 6, scale: 1.12 }}
                      transition={{ type: "spring", stiffness: 300, damping: 12 }}
                    >
                      <UniformSwatch top={entry.top} bottom={entry.bottom} />
                      <span>{entry.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="uniform-days">
                <span className="uniform-days-label">{cycle.thuFri.label}</span>
                <div className="outfit-row">
                  {cycle.thuFri.items.map((entry, idx) => (
                    <motion.div
                      key={entry.text}
                      className="outfit-swatch"
                      whileHover={{ rotate: idx % 2 === 0 ? -6 : 6, scale: 1.12 }}
                      transition={{ type: "spring", stiffness: 300, damping: 12 }}
                    >
                      <UniformSwatch top={entry.top} bottom={entry.bottom} />
                      <span>{entry.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="uniform-cost">
                <Coins className="icon" />
                <ul>
                  {cycle.cost.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="vs-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <div className="section-heading">
          <h2><UtensilsCrossed className="icon" /> Cantine &amp; garderie</h2>
          <p>Le quotidien des enfants qui déjeunent et passent le midi à l&apos;école.</p>
        </div>
        <motion.div
          className="activity-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {dailyLife.map((entry) => {
            const Icon = entry.icon;
            return (
              <motion.div
                key={entry.title}
                className="activity-card"
                variants={item}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(19,51,106,.16)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="activity-icon"><Icon className="icon" /></span>
                <h3>{entry.title}</h3>
                <p>{entry.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        className="vs-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <div className="section-heading">
          <h2><Backpack className="icon" /> Activités &amp; clubs</h2>
          <p>Ce qui rythme la vie des élèves en dehors des cours.</p>
        </div>
        <motion.div
          className="activity-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.title}
                className="activity-card"
                variants={item}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(19,51,106,.16)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="activity-icon"><Icon className="icon" /></span>
                <h3>{activity.title}</h3>
                <p>{activity.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      <motion.section
        className="vs-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <div className="section-heading">
          <h2><Coins className="icon" /> Frais divers</h2>
          <p>Les frais ponctuels liés aux sorties et aux fêtes, organisées pour les enfants de la Maternelle et du Primaire.</p>
        </div>
        <motion.div
          className="fees-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {fees.map((fee) => (
            <motion.div
              key={fee.label}
              className="fee-card"
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="fee-amount">{fee.amount}</span>
              <span className="fee-label">{fee.label}</span>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="fees-total-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <span>Total</span>
          <strong>Environ 10 000 F CFA</strong>
          <small>à régler avant ou lors de l&apos;inscription</small>
        </motion.div>
      </motion.section>
    </>
  );
}
