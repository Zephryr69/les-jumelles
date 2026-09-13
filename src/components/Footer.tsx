import Link from "next/link";
import { ArrowRight, Clock, Mail, MessageCircle, Phone, Sun } from "lucide-react";

export default function Footer() {
  return (
    <>
      <section className="visit-band" aria-label="Rencontrer l'école">
        <div className="container visit-inner">
          <div className="visit-text">
            <Sun className="icon" />
            <div>
              <h2>Construisons ensemble le parcours de votre enfant.</h2>
              <p>Venez découvrir Les Jumelles, visiter nos espaces et échanger avec notre équipe pédagogique.</p>
            </div>
          </div>
          <div className="visit-actions">
            <Link href="/contact" className="btn btn-primary">
              Prendre rendez-vous <ArrowRight className="icon" />
            </Link>
            <a href="https://wa.me/2290197858951" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle className="icon" /> Nous écrire sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="brand">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo/les-jumelles-mark-white.png" alt="" className="brand-logo-img" width={52} height={52} />
                <span className="brand-name">Complexe Scolaire Bilingue «Les Jumelles»</span>
              </Link>
              <p className="footer-motto">Discipline. Suivi. Innovation.</p>
              <p className="footer-description">
                De la pré-maternelle à la terminale.<br />
                Le français et l&apos;anglais dès la maternelle.<br />
                Ensemble, donnons de l&apos;élan à leur avenir.
              </p>
            </div>

            <div className="footer-column">
              <h3>Découvrir l&apos;école</h3>
              <nav className="footer-links" aria-label="Navigation de pied de page">
                <Link href="/">Accueil</Link>
                <Link href="/a-propos">À propos</Link>
                <Link href="/formations">Nos formations</Link>
                <Link href="/inscription">Inscription</Link>
                <Link href="/vie-scolaire">Vie scolaire</Link>
                <Link href="/actualites">Actualités</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>

            <div className="footer-column">
              <h3>Nous retrouver</h3>
              <p><strong>École-mère</strong><br />Quartier Tokpota 1,<br />près de l&apos;Hôtel Porto-La Belle.</p>
              <p><strong>Annexe</strong><br />Dans la zone de l&apos;Hôtel Palais Oriental 2.</p>
              <p>Porto-Novo, Bénin<br />BP : 02 BP 2906</p>
            </div>

            <div className="footer-column">
              <h3>Restons en lien</h3>
              <div className="footer-contact-line">
                <Phone className="icon" />
                <div><a href="tel:+2290197294434">+229 01 97 29 44 34</a></div>
              </div>
              <a className="footer-contact-line" href="mailto:ecole.jumelles@gmail.com">
                <Mail className="icon" /><span>ecole.jumelles@gmail.com</span>
              </a>
              <div className="footer-contact-line">
                <Clock className="icon" /><span>Lundi – vendredi<br />07h00 – 19h00<br />Samedi jusqu&apos;à 18h00</span>
              </div>
              <a className="footer-contact-line" href="https://wa.me/2290197858951" target="_blank" rel="noopener noreferrer" style={{ color: "#e6cc93", marginTop: 16 }}>
                <MessageCircle className="icon" /><span>Écrivez-nous sur WhatsApp ↗</span>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Complexe Scolaire Bilingue Les Jumelles. Tous droits réservés.</span>
            <span>Porto-Novo, Bénin · Photographies d&apos;illustration.</span>
          </div>
        </div>
      </footer>

      <a
        className="floating-contact"
        href="https://wa.me/2290197858951?text=Bonjour%2C%20j%E2%80%99ai%20une%20question%20sur%20l%E2%80%99%C3%A9cole%20Les%20Jumelles."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Les Jumelles sur WhatsApp, dans un nouvel onglet"
      >
        <MessageCircle className="icon" />
      </a>
    </>
  );
}
