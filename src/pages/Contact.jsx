// src/pages/Contact.jsx
import "./Contact.css";
import PropTypes from "prop-types";
import React from "react";

function Contact({ isDarkMode }) {
  return (
    <div className={`contact-page ${isDarkMode ? "dark" : ""}`}>
      <section className="contact-header">
        <h1>📞 Contactez le CSB "Les Jumelles"</h1>
        <p>Une question sur l’inscription, la scolarité ou les horaires ? Nous sommes disponibles pour vous répondre.</p>
      </section>

      <section className="contact-section">
        <div className="contact-block">
          <h2>📍 Adresses</h2>
          <p><strong>École-mère :</strong> Quartier Tokpota 1, près de l’Hôtel Porto-La Belle</p>
          <p><strong>Annexe :</strong> Proximité de l’Hôtel Palais Oriental</p>
          <p><strong>Ville :</strong> Porto-Novo, Bénin</p>
          <p><strong>Boîte postale :</strong> 02 BP 2906</p>
        </div>

        <div className="contact-block">
          <h2>📞 Téléphones</h2>
          <p><a href="tel:+22997254434">+229 01 97 29 44 34</a></p>
          <p><a href="tel:+22996677004">+229 01 96 67 70 04</a></p>
        </div>

        <div className="contact-block">
          <h2>📧 Email</h2>
          <p><a href="mailto:ecole.jumelles@gmail.com">ecole.jumelles@gmail.com</a></p>
        </div>

        <div className="contact-block">
          <h2>🕒 Horaires</h2>
          <p>Lundi à Vendredi : 07h00 – 19h00</p>
        </div>
      </section>

      <section className="contact-whatsapp-center">
        <a
          href="https://wa.me/22997294434"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          💬 Discuter sur WhatsApp
        </a>
      </section>

      <section className="contact-cta">
        <a href="/inscription" className="cta-button">
          📄 Voir les conditions d’inscription
        </a>
      </section>
    </div>
  );
}

Contact.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Contact;
