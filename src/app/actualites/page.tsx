import Link from "next/link";
import { ArrowUpRight, BookOpen, Calendar, ChevronRight, Clock, GraduationCap, Heart } from "lucide-react";

export const metadata = {
  title: "Actualités | Les Jumelles",
  description: "Résultats aux examens 2026 et actualités du CSB Les Jumelles à Porto-Novo.",
};

export default function ActualitesPage() {
  return (
    <div className="page" data-page="actualites">
      <div className="container">
        <div className="breadcrumb"><Link href="/">Accueil</Link><ChevronRight className="icon" /><span>Actualités</span></div>
        <div className="news-top">
          <div className="page-intro"><h1>Les Jumelles,<br /><em>au fil des jours.</em></h1><p>Les événements, les réussites et les moments de vie de notre communauté scolaire.</p></div>
          <div className="news-intro-note">Une sortie qui fait découvrir. Une réussite qui rend fier. Une rencontre qui rapproche. La vie de l&apos;école mérite d&apos;être partagée.</div>
        </div>

        <div className="news-layout">
          <div>
            <div className="news-empty" style={{ borderColor: "var(--gold)" }}>
              <Heart className="icon" />
              <h2><GraduationCap className="icon" /> Résultats aux examens 2026</h2>
              <p style={{ marginBottom: 20 }}>
                CEP <strong>100%</strong> · BEPC <strong>98%</strong>
                <br />
                Félicitations à nos brillants élèves, à toute l&apos;équipe pédagogique et aux familles pour leur implication !
              </p>
            </div>

            <div className="news-empty" style={{ marginTop: 24 }}>
              <Calendar className="icon" />
              <h2><BookOpen className="icon" /> Cours de vacances</h2>
              <p>
                Les cours de vacances commencent le <strong>lundi 28 juillet</strong> pour les classes du
                primaire et du secondaire, afin de consolider les acquis et préparer sereinement la rentrée.
              </p>
            </div>

            <p className="news-note"><Clock className="icon" /> Les prochaines publications apparaîtront ici par ordre chronologique décroissant.</p>
          </div>

          <aside className="news-sidebar">
            <h3>Les liens utiles<br />aux familles.</h3>
            <Link href="/inscription" className="news-resource"><span>Préparer la rentrée</span><strong>Tout savoir sur l&apos;inscription <ArrowUpRight className="icon" /></strong></Link>
            <Link href="/vie-scolaire" className="news-resource"><span>Au quotidien</span><strong>Les repères de la vie scolaire <ArrowUpRight className="icon" /></strong></Link>
            <Link href="/contact" className="news-resource"><span>Restons en lien</span><strong>Contacter le secrétariat <ArrowUpRight className="icon" /></strong></Link>
            <div className="sidebar-help" style={{ marginTop: 27 }}>
              <h3>Un moment à partager ?</h3>
              <p>Familles et communauté scolaire : adressez vos informations à l&apos;équipe.</p>
              <a href="mailto:ecole.jumelles@gmail.com" style={{ fontSize: 14 }}>ecole.jumelles@gmail.com</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
