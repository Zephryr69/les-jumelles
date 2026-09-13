import type { Metadata } from "next";
import IconSprite from "@/components/IconSprite";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Les Jumelles — Grandir, apprendre, s'ouvrir au monde",
  description:
    "Le Complexe Scolaire Bilingue Les Jumelles à Porto-Novo accompagne les enfants de la pré-maternelle à la terminale. Français et anglais dès la maternelle. Discipline. Suivi. Innovation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#1A4FAA" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,500;1,600&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <IconSprite />
        <a className="skip-link" href="#main-content">Aller au contenu principal</a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
