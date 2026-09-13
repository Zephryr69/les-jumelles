"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/formations", label: "Formations" },
  { href: "/vie-scolaire", label: "Vie scolaire" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Les Jumelles — Accueil">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/les-jumelles-mark-black.png" alt="" className="brand-logo-img" width={52} height={52} />
            <span className="brand-name">Complexe Scolaire Bilingue «Les Jumelles»</span>
          </Link>
          <div className="nav-wrap">
            <nav className={`main-nav ${isOpen ? "is-open" : ""}`} id="main-navigation" aria-label="Navigation principale">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link href="/inscription" className="btn btn-primary btn-small">
              S&apos;inscrire <ArrowUpRight className="icon" />
            </Link>
            <button
              className="menu-toggle"
              id="menu-toggle"
              aria-label="Ouvrir le menu"
              aria-expanded={isOpen}
              aria-controls="main-navigation"
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
