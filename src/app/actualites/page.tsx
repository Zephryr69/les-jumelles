import Link from "next/link";
import ResultsShowcase from "@/components/ResultsShowcase";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Actualités | Les Jumelles",
  description: "Résultats aux examens 2026 du CSB Les Jumelles à Porto-Novo : CEP 100%, BEPC 98%.",
};

export default function ActualitesPage() {
  return (
    <div className="page" data-page="actualites">
      <div className="container">
        <div className="breadcrumb"><Link href="/">Accueil</Link><ChevronRight className="icon" /><span>Actualités</span></div>
        <div className="page-intro" style={{ marginBottom: 8 }}>
          <h1>Nos résultats<br /><em>parlent pour nous.</em></h1>
          <p>Les examens nationaux 2026, réussis avec brio par nos élèves.</p>
        </div>
      </div>

      <ResultsShowcase />
    </div>
  );
}
