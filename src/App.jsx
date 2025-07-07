import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import APropos from "./pages/About";
import Contact from "./pages/Contact";
import Formations from "./pages/Formations";
import Inscription from "./pages/Inscription";
import VieScolaire from "./pages/VieScolaire";
import Actualites from "./pages/Actualites";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Ajouté
import ScrollToTopButton from "./components/ScrollToTopButton"; // ✅ Ajouté

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("isDarkMode");
    return saved === "true";
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const redirect = sessionStorage.getItem("redirect");
    if (redirect) {
      sessionStorage.removeItem("redirect");
      window.history.replaceState(null, "", redirect);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", newMode);
  };

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className={`containner ${isDarkMode ? "dark" : "light"}`}>
      <ScrollToTop /> {/* ✅ Scroll automatique au changement de page */}
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        onMenuClick={toggleSidebar}
      />

      {/* ✅ Affichage animé de la Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <Sidebar
            isDarkMode={isDarkMode}
            closeSidebar={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ✅ Affichage animé des routes */}
      <main className="content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/a-propos" element={<APropos isDarkMode={isDarkMode} />} />
            <Route path="/formations" element={<Formations isDarkMode={isDarkMode} />} />
            <Route path="/inscription" element={<Inscription isDarkMode={isDarkMode} />} />
            <Route path="/vie-scolaire" element={<VieScolaire isDarkMode={isDarkMode} />} />
            <Route path="/actualites" element={<Actualites isDarkMode={isDarkMode} />} />
            <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
            <Route path="*" element={<Home isDarkMode={isDarkMode} />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer isDarkMode={isDarkMode} />
      <ScrollToTopButton /> {/* ✅ Bouton animé pour retour en haut */}
    </div>
  );
}

export default App;
