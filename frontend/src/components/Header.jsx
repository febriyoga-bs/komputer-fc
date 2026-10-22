import React from "react";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { instagram, navigation } from "../data/club";
import { ClubMark } from "./ui";

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <ClubMark small />
        <span>
          KOMPUTER FC<small>FOOTBALL & BROTHERHOOD</small>
        </span>
      </a>
      <nav
        id="main-navigation"
        className={open ? "is-open" : ""}
        aria-label="Navigasi utama"
      >
        {navigation.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="mobile-join"
          href={instagram}
          target="_blank"
          rel="noreferrer"
        >
          Gabung komunitas ↗
        </a>
      </nav>
      <a
        className="header-cta"
        href={instagram}
        target="_blank"
        rel="noreferrer"
      >
        JADI BAGIAN KAMI <ArrowUpRight size={16} />
      </a>
      <button
        className="menu-toggle icon-button"
        aria-label={open ? "Tutup menu" : "Buka menu"}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
