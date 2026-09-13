import Link from "next/link";
import VieScolaireContent from "@/components/VieScolaireContent";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Vie scolaire | Les Jumelles",
  description:
    "Uniformes, activités, fêtes et frais associés : le quotidien des élèves au CSB Les Jumelles.",
};

export default function VieScolairePage() {
  return (
    <div className="page" data-page="vie-scolaire">
      <div className="container">
        <div className="breadcrumb"><Link href="/">Accueil</Link><ChevronRight className="icon" /><span>Vie scolaire</span></div>
        <section className="school-life-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?auto=format&fit=crop&w=1700&q=85" alt="La joie d'être ensemble en dehors de la classe — photographie d'illustration" loading="lazy" width={1700} height={650} />
          <div className="school-life-hero-text">
            <h1>Apprendre à l&apos;école.<br />Grandir dans la vie.</h1>
            <p>Les petites habitudes, les grandes découvertes et tous ces moments qui donnent le goût d&apos;être ensemble.</p>
          </div>
        </section>

        <VieScolaireContent />
      </div>
    </div>
  );
}
