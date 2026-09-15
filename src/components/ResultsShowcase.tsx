"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface ResultRingProps {
  label: string;
  value: number;
  year: string;
  delay?: number;
}

function ResultRing({ label, value, year, delay = 0 }: ResultRingProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);
  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (count / 100) * circumference;

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let start: number | null = null;
    const duration = 1500;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    const timeout = setTimeout(() => {
      raf = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [inView, value, delay]);

  return (
    <motion.div
      ref={ref}
      className="result-ring-wrap"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <svg viewBox="0 0 180 180" width="180" height="180" className="result-ring-svg">
        <circle cx="90" cy="90" r={radius} fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="13" />
        <circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke="#f3d98c"
          strokeWidth="13"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 90 90)"
          style={{ transition: "stroke-dashoffset 0.1s linear" }}
        />
      </svg>
      <div className="result-ring-center">
        <span className="result-ring-number">{count}%</span>
        <span className="result-ring-year">{year}</span>
      </div>
      <p className="result-ring-label">{label}</p>
    </motion.div>
  );
}

export default function ResultsShowcase() {
  return (
    <motion.div
      className="results-showcase"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="results-rings">
        <ResultRing label="Réussite au CEP" value={100} year="2026" delay={0} />
        <ResultRing label="Réussite au BEPC" value={98} year="2026" delay={0.2} />
      </div>
      <motion.p
        className="results-caption"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Félicitations à nos brillants élèves, à toute l&apos;équipe pédagogique et aux familles
        pour leur implication !
      </motion.p>
    </motion.div>
  );
}
