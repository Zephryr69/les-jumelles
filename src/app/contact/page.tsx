import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Contact | Les Jumelles",
  description: "Adresses, téléphones, email et horaires du CSB Les Jumelles à Porto-Novo.",
};

export default function ContactPage() {
  return (
    <div className="page" data-page="contact">
      <div className="container">
        <div className="breadcrumb"><Link href="/">Accueil</Link><ChevronRight className="icon" /><span>Contact</span></div>
        <div className="contact-intro">
          <div className="page-intro"><h1>Faisons le premier pas.<br /><em>Rencontrons-nous.</em></h1><p>Une question, un projet d&apos;inscription, une visite ? Nous sommes à votre écoute à Porto-Novo.</p></div>
          <a href="https://wa.me/2290197858951?text=Bonjour%2C%20je%20souhaite%20contacter%20le%20Complexe%20Scolaire%20Bilingue%20Les%20Jumelles." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            <MessageCircle className="icon" /> Écrire sur WhatsApp
          </a>
        </div>

        <section className="campus-layout" aria-label="Nos deux sites à Porto-Novo">
          <div className="map-panel">
            <iframe title="Carte générale de Porto-Novo, Bénin. Pour la localisation précise des sites, contactez l'école." loading="lazy" referrerPolicy="no-referrer" src="https://www.openstreetmap.org/export/embed.html?bbox=2.582%2C6.464%2C2.662%2C6.520&layer=mapnik" />
            <span className="map-caption">Vue de Porto-Novo · Contactez l&apos;école pour confirmer l&apos;itinéraire précis.</span>
          </div>
          <div className="campus-addresses">
            <div className="campus-address">
              <h2><MapPin className="icon" /> L&apos;école-mère</h2>
              <p>Quartier Tokpota 1,<br />près de l&apos;Hôtel Porto-La Belle.<br />Porto-Novo, Bénin</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Complexe+Scolaire+Bilingue+Les+Jumelles+Tokpota+1+Porto+Novo+Benin" target="_blank" rel="noopener noreferrer" className="text-link">Rechercher l&apos;itinéraire <ArrowUpRight className="icon" /></a>
            </div>
            <div className="campus-address">
              <h2><MapPin className="icon" /> L&apos;annexe</h2>
              <p>Dans la zone de l&apos;Hôtel Palais Oriental 2.<br />Porto-Novo, Bénin</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Hotel+Palais+Oriental+2+Porto+Novo+Benin" target="_blank" rel="noopener noreferrer" className="text-link">Repérer l&apos;Hôtel Palais Oriental 2 <ArrowUpRight className="icon" /></a>
            </div>
          </div>
        </section>

        <div className="contact-bottom">
          <section className="contact-information">
            <h2>Gardons le contact.</h2>
            <div className="contact-info-row">
              <Phone className="icon" />
              <div>
                <strong>Téléphone</strong>
                <p><a href="tel:+2290197294434">+229 01 97 29 44 34</a></p>
              </div>
            </div>
            <div className="contact-info-row">
              <MessageCircle className="icon" />
              <div>
                <strong>WhatsApp</strong>
                <p><a href="https://wa.me/2290197858951" target="_blank" rel="noopener noreferrer">+229 01 97 85 89 51</a></p>
              </div>
            </div>
            <div className="contact-info-row"><Mail className="icon" /><div><strong>Adresse e-mail</strong><a href="mailto:ecole.jumelles@gmail.com">ecole.jumelles@gmail.com</a></div></div>
            <div className="contact-info-row"><Clock className="icon" /><div><strong>Horaires d&apos;accueil</strong><p>Du lundi au vendredi<br />07h00 – 19h00<br />Samedi jusqu&apos;à 18h00</p><small>Pour une visite, convenons d&apos;un rendez-vous.</small></div></div>
            <div className="contact-info-row"><MapPin className="icon" /><div><strong>Adresse postale</strong><p>BP : 02 BP 2906<br />Porto-Novo, Bénin</p></div></div>
          </section>

          <section className="contact-form">
            <h2>Et si on échangeait ?</h2>
            <p>Préparez votre message ici, puis envoyez-le par e-mail ou WhatsApp. Les champs marqués * sont obligatoires.</p>
            <form id="contact-form">
              <div className="form-grid">
                <div className="field"><label htmlFor="contact-name">Votre nom *</label><input id="contact-name" name="name" autoComplete="name" placeholder="Nom et prénom" required maxLength={100} /></div>
                <div className="field"><label htmlFor="contact-email">Votre e-mail *</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="vous@exemple.com" required maxLength={150} /></div>
                <div className="field full">
                  <label htmlFor="contact-subject">Votre sujet *</label>
                  <select id="contact-subject" name="subject" required defaultValue="">
                    <option value="" disabled>Que souhaitez-vous savoir ?</option>
                    <option value="Inscription et tarifs">Inscription et tarifs</option>
                    <option value="Organiser une visite">Organiser une visite</option>
                    <option value="Formations et bilinguisme">Formations et bilinguisme</option>
                    <option value="Vie scolaire">Vie scolaire</option>
                    <option value="Autre demande">Autre demande</option>
                  </select>
                </div>
                <div className="field full"><label htmlFor="contact-message">Votre message *</label><textarea id="contact-message" name="message" placeholder="Nous vous écoutons…" required minLength={10} maxLength={3000} style={{ minHeight: 135 }} /></div>
              </div>
              <label className="consent"><input type="checkbox" name="consent" required /><span>J&apos;accepte de transmettre ces informations à l&apos;école pour obtenir une réponse à ma demande. *</span></label>
              <a href="mailto:ecole.jumelles@gmail.com" className="btn btn-primary">
                Envoyer par e-mail <ArrowRight className="icon" />
              </a>
              <p className="form-footnote">Ce formulaire vous aide à préparer votre message ; il est ensuite à envoyer vous-même par e-mail ou WhatsApp. Aucune donnée n&apos;est enregistrée sur ce site.</p>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
