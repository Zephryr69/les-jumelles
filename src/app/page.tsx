import Link from "next/link";
import { ArrowRight, BookOpen, Bus, Check, GraduationCap, Globe, MapPin, MessageCircle, Palette, PartyPopper, Quote, ShieldCheck, Users, UtensilsCrossed } from "lucide-react";

export const metadata = {
  title: "Accueil | Les Jumelles",
  description:
    "À Porto-Novo, Les Jumelles accompagnent chaque enfant de la pré-maternelle à la terminale. Le français et l'anglais dès la maternelle.",
};

export default function HomePage() {
  return (
    <div className="page" data-page="accueil">
      <section className="hero">
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1548102245-c79dbcfa9f92?auto=format&fit=crop&w=1800&q=85" alt="" fetchPriority="high" width={1800} height={1000} />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-heading-row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo/les-jumelles-mark-white.png" alt="" className="hero-logo" width={168} height={168} />
              <h1>Complexe Scolaire Bilingue «Les Jumelles»</h1>
            </div>
            <p className="hero-description">
              Une école maternelle, primaire et secondaire à Porto-Novo, qui a pour mission de
              former des élèves bilingues compétents grâce à une pédagogie innovante et un
              suivi rigoureux.
            </p>
            <div className="hero-highlights">
              <div className="hero-highlight">
                <span className="hero-highlight-icon"><ShieldCheck className="icon" /></span>
                <div className="hero-highlight-text"><span>Notre devise</span><strong>Discipline · Suivi · Innovation</strong></div>
              </div>
              <div className="hero-highlight">
                <span className="hero-highlight-icon"><Globe className="icon" /></span>
                <div className="hero-highlight-text"><span>Notre vision</span><strong>Un enseignement bilingue dès la maternelle, pour l&apos;excellence et l&apos;ouverture sur le monde.</strong></div>
              </div>
            </div>
            <div className="hero-actions">
              <Link href="/formations" className="btn btn-primary">
                Découvrir nos formations <ArrowRight className="icon" />
              </Link>
              <a
                href="https://wa.me/2290197858951"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle className="icon" /> Contact rapide via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-strip" aria-label="L'essentiel de notre école">
        <div className="container feature-grid">
          <div className="feature"><Globe className="icon feature-emoji" /><div><strong>Bilingue dès la maternelle</strong><span>Français &amp; anglais au quotidien</span></div></div>
          <div className="feature"><Users className="icon feature-emoji" /><div><strong>Suivi individualisé</strong><span>Chaque élève accompagné de près</span></div></div>
          <Link className="feature" href="/contact"><MapPin className="icon feature-emoji" /><div><strong>2 sites à Porto-Novo</strong><span>École-mère et annexe</span></div></Link>
          <div className="feature"><GraduationCap className="icon feature-emoji" /><div><strong>De la pré-maternelle à la terminale</strong><span>Un parcours complet</span></div></div>
        </div>
      </section>

      <section className="section why-us">
        <div className="container">
          <div className="section-heading">
            <h2>Ce qui nous rend<br />différents.</h2>
          </div>
          <div className="why-us-grid">
            <div className="why-us-card">
              <span className="why-us-number">01</span>
              <h3>Un bilinguisme vivant</h3>
              <p>L&apos;anglais ne se limite pas à une matière enseignée en classe. Il accompagne progressivement l&apos;enfant dans son apprentissage et son quotidien scolaire.</p>
            </div>
            <div className="why-us-card">
              <span className="why-us-number">02</span>
              <h3>Un suivi attentif</h3>
              <p>Chaque élève bénéficie d&apos;un accompagnement permettant à l&apos;équipe pédagogique et aux familles de suivre ses progrès.</p>
            </div>
            <div className="why-us-card">
              <span className="why-us-number">03</span>
              <h3>Un cadre structurant et bienveillant</h3>
              <p>Des règles claires, un environnement sécurisé et une attention portée au développement de chaque enfant.</p>
            </div>
            <div className="why-us-card">
              <span className="why-us-number">04</span>
              <h3>Une ouverture sur le monde</h3>
              <p>Projets, activités, sorties et découvertes pour développer la curiosité et l&apos;autonomie.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Un chemin clair,<br />de la petite enfance à la terminale.</h2>
            <div className="section-heading-right">
              <p>À chaque âge, de nouvelles découvertes. À chaque étape, un accompagnement pour avancer.</p>
              <Link href="/formations" className="text-link">Tous nos niveaux <ArrowRight className="icon" /></Link>
            </div>
          </div>
          <div className="level-cards">
            <Link href="/formations" className="level-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1548102249-acdce64fffbd?auto=format&fit=crop&w=700&q=85" alt="Pré-maternelle et maternelle — photographie d'illustration" loading="lazy" width={700} height={933} />
              <div className="level-card-overlay">
                <h3>Pré-maternelle &amp; Maternelle</h3>
                <p>S&apos;éveiller, explorer et découvrir deux langues par le jeu.</p>
                <span className="level-card-cta">Découvrir <ArrowRight className="icon" /></span>
              </div>
            </Link>
            <Link href="/formations" className="level-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1473649085228-583485e6e4d7?auto=format&fit=crop&w=700&q=85" alt="Primaire — photographie d'illustration" loading="lazy" width={700} height={933} />
              <div className="level-card-overlay">
                <h3>Primaire</h3>
                <p>Du CP au CM2, construire des bases solides.</p>
                <span className="level-card-cta">Découvrir <ArrowRight className="icon" /></span>
              </div>
            </Link>
            <Link href="/formations" className="level-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1617056239820-8ce90ba48193?auto=format&fit=crop&w=700&q=85" alt="Collège — photographie d'illustration" loading="lazy" width={700} height={933} />
              <div className="level-card-overlay">
                <h3>Collège</h3>
                <p>1er cycle du secondaire, approfondir et s&apos;organiser.</p>
                <span className="level-card-cta">Découvrir <ArrowRight className="icon" /></span>
              </div>
            </Link>
            <Link href="/formations" className="level-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=700&q=85" alt="Lycée — photographie d'illustration" loading="lazy" width={700} height={933} />
              <div className="level-card-overlay">
                <h3>Lycée</h3>
                <p>2e cycle, spécialité série D, jusqu&apos;au BAC.</p>
                <span className="level-card-cta">Découvrir <ArrowRight className="icon" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section results-teaser">
        <div className="container results-teaser-inner">
          <div className="results-teaser-copy">
            <h2>Préparer aujourd&apos;hui<br />les réussites de demain.</h2>
            <p>Nos élèves obtiennent d&apos;excellents résultats aux examens nationaux, année après année.</p>
            <Link href="/actualites" className="text-link">Voir toutes les actualités <ArrowRight className="icon" /></Link>
          </div>
          <div className="results-stats">
            <div className="results-stat"><strong>100%</strong><span>de réussite au CEP <em>(2026)</em></span></div>
            <div className="results-stat"><strong>98%</strong><span>de réussite au BEPC <em>(2026)</em></span></div>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container mission-grid">
          <div className="mission-copy">
            <h2>De l&apos;exigence.<br />Et beaucoup d&apos;attention.</h2>
            <p>Bien apprendre, c&apos;est aussi se sentir accompagné. Au Complexe Scolaire Bilingue «Les Jumelles», notre vision de l&apos;éducation relie les savoirs, les repères et l&apos;épanouissement de l&apos;enfant.</p>
            <div className="mission-points">
              <div className="mission-point"><Check className="icon" /> Un cadre structurant pour prendre confiance</div>
              <div className="mission-point"><Check className="icon" /> Le dialogue avec les familles, au cœur du suivi</div>
              <div className="mission-point"><Check className="icon" /> L&apos;ouverture au monde grâce au bilinguisme</div>
            </div>
            <Link className="text-link" href="/a-propos">Notre vision de l&apos;éducation <ArrowRight className="icon" /></Link>
          </div>
          <div className="mission-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/flagged/photo-1555251255-e9a095d6eb9d?auto=format&fit=crop&w=1000&q=85" alt="Une classe attentive pendant un apprentissage collectif — photographie d'illustration" loading="lazy" width={1000} height={850} />
            <div className="mission-quote"><Quote className="icon" /><p>Apprendre à réussir.<br />Mais surtout, apprendre<br />à devenir soi.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Plus qu&apos;une école,<br />un quotidien.</h2>
            <Link href="/vie-scolaire" className="text-link">La vie au Complexe Scolaire Bilingue «Les Jumelles» <ArrowRight className="icon" /></Link>
          </div>
          <div className="life-gallery">
            <Link href="/vie-scolaire" className="life-tile">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1567057420215-0afa9aa9253a?auto=format&fit=crop&w=500&q=80" alt="En classe — photographie d'illustration" loading="lazy" width={500} height={500} />
              <span><BookOpen className="icon" /> En classe</span>
            </Link>
            <Link href="/vie-scolaire" className="life-tile">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1627423896085-e3e694d88e40?auto=format&fit=crop&w=500&q=80" alt="À la cantine — photographie d'illustration" loading="lazy" width={500} height={500} />
              <span><UtensilsCrossed className="icon" /> À la cantine</span>
            </Link>
            <Link href="/vie-scolaire" className="life-tile">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?auto=format&fit=crop&w=500&q=80" alt="Activités et projets — photographie d'illustration" loading="lazy" width={500} height={500} />
              <span><Palette className="icon" /> Activités et projets</span>
            </Link>
            <Link href="/vie-scolaire" className="life-tile">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1459183885421-5cc683b8dbba?auto=format&fit=crop&w=500&q=80" alt="Sorties scolaires — photographie d'illustration" loading="lazy" width={500} height={500} />
              <span><Bus className="icon" /> Sorties scolaires</span>
            </Link>
            <Link href="/vie-scolaire" className="life-tile">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1567057419565-4349c49d8a04?auto=format&fit=crop&w=500&q=80" alt="Fêtes et événements — photographie d'illustration" loading="lazy" width={500} height={500} />
              <span><PartyPopper className="icon" /> Fêtes et événements</span>
            </Link>
            <Link href="/vie-scolaire" className="life-tile">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1543689604-6fe8dbcd1f59?auto=format&fit=crop&w=500&q=80" alt="Vie avec les enseignants — photographie d'illustration" loading="lazy" width={500} height={500} />
              <span><Users className="icon" /> Vie avec les enseignants</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
