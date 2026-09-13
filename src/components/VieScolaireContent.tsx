"use client";

import { motion } from "framer-motion";
import { Backpack, Coins, Shirt } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

interface UniformCycle {
  title: string;
  monWed: { label: string; items: { text: string; colors: string[] }[] };
  thuFri: { label: string; items: { text: string; colors: string[] }[] };
  cost: string[];
}

const cycles: UniformCycle[] = [
  {
    title: "Maternelle & Primaire",
    monWed: {
      label: "Lundi à mercredi",
      items: [
        { text: "Filles : jupe kaki + chemise bleu nuit", colors: ["#c3b091", "#1b2a4a"] },
        { text: "Garçons : culotte kaki + chemise bleu nuit", colors: ["#c3b091", "#1b2a4a"] },
      ],
    },
    thuFri: {
      label: "Jeudi & vendredi",
      items: [
        { text: "Filles : jupe kaki + chemise marron", colors: ["#c3b091", "#6b4423"] },
        { text: "Garçons : culotte kaki + chemise marron", colors: ["#c3b091", "#6b4423"] },
      ],
    },
    cost: [
      "Chemises et macarons offerts aux nouveaux élèves",
      "Kaki à la charge des parents",
      "T-shirt de sport : 2 000 F CFA",
    ],
  },
  {
    title: "Secondaire — 1er cycle",
    monWed: {
      label: "Lundi à mercredi",
      items: [
        { text: "Filles : chemise rose claire + jupe bleu nuit", colors: ["#f4c2c2", "#1b2a4a"] },
        { text: "Garçons : chemise rose claire + pantalon bleu nuit", colors: ["#f4c2c2", "#1b2a4a"] },
      ],
    },
    thuFri: {
      label: "Jeudi & vendredi",
      items: [{ text: "Lacoste beige + bas bleu nuit", colors: ["#e8dcc0", "#1b2a4a"] }],
    },
    cost: ["Uniformes + Lacoste : 11 000 F CFA", "T-shirt de sport : 2 000 F CFA"],
  },
  {
    title: "Secondaire — 2e cycle",
    monWed: {
      label: "Lundi à mercredi",
      items: [
        { text: "Filles : chemise beige + jupe marron", colors: ["#e8dcc0", "#6b4423"] },
        { text: "Garçons : chemise beige + pantalon marron", colors: ["#e8dcc0", "#6b4423"] },
      ],
    },
    thuFri: {
      label: "Jeudi & vendredi",
      items: [{ text: "Lacoste vert foncé + bas bleu nuit", colors: ["#1e4d2b", "#1b2a4a"] }],
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
        <div className="uniform-grid">
          {cycles.map((cycle, i) => (
            <motion.div
              key={cycle.title}
              className="uniform-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <h3>{cycle.title}</h3>

              <div className="uniform-days">
                <span className="uniform-days-label">{cycle.monWed.label}</span>
                <ul>
                  {cycle.monWed.items.map((item) => (
                    <li key={item.text}>
                      <span className="color-dots">
                        {item.colors.map((c, idx) => (
                          <span key={idx} className="color-dot" style={{ backgroundColor: c }} />
                        ))}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="uniform-days">
                <span className="uniform-days-label">{cycle.thuFri.label}</span>
                <ul>
                  {cycle.thuFri.items.map((item) => (
                    <li key={item.text}>
                      <span className="color-dots">
                        {item.colors.map((c, idx) => (
                          <span key={idx} className="color-dot" style={{ backgroundColor: c }} />
                        ))}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
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
        </div>
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
        </div>
        <p className="vs-text">
          Nos élèves participent à des sorties pédagogiques, des fêtes annuelles (Noël, fin
          d&apos;année), et à des <strong>clubs mensuels d&apos;anglais</strong> pour renforcer
          leur expression et leur compréhension.
        </p>
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
        </div>
        <ul className="vs-fees-list">
          <li><span>Sortie pédagogique</span><strong>4 000 F</strong></li>
          <li><span>Fête de Noël</span><strong>3 000 F</strong></li>
          <li><span>Fête de fin d&apos;année</span><strong>3 000 F</strong></li>
        </ul>
        <p className="vs-fees-total">Total : environ 10 000 F CFA à régler avant ou lors de l&apos;inscription.</p>
      </motion.section>
    </>
  );
}
