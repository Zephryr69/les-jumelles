"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import closeIcon from "@/assets/close-icon.png";
import "./Sidebar.css";

interface SidebarProps {
  closeSidebar: () => void;
}

export default function Sidebar({ closeSidebar }: SidebarProps) {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <aside className={`sidebar ${isDarkMode ? "dark" : "light"}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-title">Navigation</h2>
        <button
          className="close-button"
          onClick={closeSidebar}
          aria-label="Fermer la barre latérale"
        >
          <Image src={closeIcon} alt="Fermer" className="custom-close-icon" />
        </button>
      </div>

      <ul className="sidebar-links">
        <li><Link href="/" onClick={closeSidebar}>Accueil</Link></li>
        <li><Link href="/formations" onClick={closeSidebar}>Formations</Link></li>
        <li><Link href="/inscription" onClick={closeSidebar}>Inscription</Link></li>
        <li><Link href="/vie-scolaire" onClick={closeSidebar}>Vie scolaire</Link></li>
        <li><Link href="/actualites" onClick={closeSidebar}>Actualités</Link></li>
        <li><Link href="/contact" onClick={closeSidebar}>Contact</Link></li>
      </ul>
    </aside>
  );
}
