import "./Home.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import React from "react";

function Home({ isDarkMode }) {
  const whyRef = useRef(null);
  const activitiesRef = useRef(null);
  const newsRef = useRef(null);

  const whyVisible = useScrollReveal(whyRef);
  const activitiesVisible = useScrollReveal(activitiesRef);
  const newsVisible = useScrollReveal(newsRef);

  return (
    <div className={`home-wrapper ${isDarkMode ? "dark" : "light"}`}>
      {/* Section Héros */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Complexe Scolaire Bilingue "Les Jumelles"</h1>
          <p>
            Une école maternelle, primaire et secondaire à Porto-Novo, qui a pour mission de former des élèves bilingues compétents grâce à une pédagogie innovante et un suivi rigoureux.
          </p>
          <p>
            <strong>Notre devise :</strong> <em>Discipline - Suivi - Innovation</em>
          </p>
          <p>
            <strong>Notre vision :</strong> Offrir un enseignement bilingue (français-anglais) dès la maternelle, favorisant l'excellence et l'ouverture sur le monde.
          </p>

          <Link to="/formations" className="cta-button">
            Découvrir nos formations
          </Link>

          {/* Bouton WhatsApp contact rapide */}
          <a
            href="https://wa.me/22997858951"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            style={{ display: "inline-block", marginTop: "1rem", backgroundColor: "#25d366", color: "#fff", padding: "0.8rem 1.5rem", borderRadius: "10px", fontWeight: "700", textDecoration: "none" }}
          >
            💬 Contact rapide via WhatsApp
          </a>
        </div>
        <img src={logo} alt="École Les Jumelles" className="hero-img" />
      </section>

      {/* Pourquoi nous choisir */}
      <section
        ref={whyRef}
        className={`why-choose scroll-reveal ${whyVisible ? "visible" : ""}`}
      >
        <h2>Pourquoi choisir Les Jumelles ?</h2>
        <ul className="key-points">
          <li>👩‍🏫 Enseignement bilingue (français-anglais) dès la maternelle</li>
          <li>🎓 Équipe pédagogique spécialisée et expérimentée</li>
          <li>📈 Suivi rigoureux et accompagnement personnalisé de chaque élève</li>
          <li>🥇 Spécialité en série D au collège, avec d’excellents résultats</li>
          <li>🕒 Garderie et cantine pour un meilleur encadrement</li>
          <li>📚 Cours de renforcement en français et club de journalisme</li>
        </ul>
      </section>

      {/* Vie scolaire */}
      <section
        ref={activitiesRef}
        className={`activities scroll-reveal ${activitiesVisible ? "visible" : ""}`}
      >
        <h2>Vie scolaire</h2>
        <p>
          Explorez les activités, les uniformes, les sorties pédagogiques et les événements festifs qui rythment la vie de nos élèves.
        </p>
        <Link to="/vie-scolaire" className="cta-button">
          Découvrir la vie scolaire
        </Link>
      </section>

      {/* Inscription */}
      <section className="inscription-section">
        <h2>Inscription</h2>
        <p>Retrouvez toutes les informations nécessaires pour inscrire votre enfant au Complexe Scolaire Bilingue Les Jumelles.</p>
        <Link to="/inscription" className="cta-button">Informations sur l'inscription</Link>
      </section>


      {/* Actualités */}
      <section
        ref={newsRef}
        className={`news scroll-reveal ${newsVisible ? "visible" : ""}`}
      >
        <h2>Actualités</h2>
        <p>
          Restez informés des dernières annonces, concours, résultats et événements à venir.
        </p>
        <Link to="/actualites" className="cta-button">
          Voir les actualités
        </Link>
      </section>

      {/* Contact */}
      <section className="contact-quick">
        <h2>Nous contacter</h2>
        <p>Une question ? Un renseignement ? N’hésitez pas à nous joindre rapidement via WhatsApp.</p>
        <a
          href="https://wa.me/22997858951"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          💬 Contact rapide via WhatsApp
        </a>
        <p style={{ marginTop: "1rem" }}>
          Ou par téléphone : <a href="tel:+2290197294434">+229 01 97 29 44 34</a>
        </p>
      </section>

    </div>
  );
}

export default Home;
