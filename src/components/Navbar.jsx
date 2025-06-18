import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  Home,
  User,
  Folder,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved === "dark" || (!saved && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Estilo de texto baseado no tema + scroll
  const getTextColor = () => {
    if (!scrolled) return "text-white";
    return dark ? "text-white" : "text-black";
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/10 dark:bg-gray-900/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Barra de navegação"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center relative">
        <button
          onClick={toggleMenu}
          className={`md:hidden ${getTextColor()} absolute left-6`}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={`md:flex md:gap-6 md:items-center text-sm font-medium absolute md:static top-16 left-0 w-full md:w-auto justify-center transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          } ${scrolled ? "" : "bg-transparent"} ${getTextColor()}`}
        >
          {[
            { href: "#inicio", label: "Início", icon: <Home size={16} /> },
            { href: "#sobre", label: "Sobre", icon: <User size={16} /> },
            { href: "#projetos", label: "Projetos", icon: <Folder size={16} /> },
            { href: "#contato", label: "Contato", icon: <Mail size={16} /> },
          ].map(({ href, label, icon }) => (
            <li key={label} className="p-4 md:p-0">
              <a
                href={href}
                className="flex items-center gap-2 transition hover:text-teal-400"
              >
                {icon} {label}
              </a>
            </li>
          ))}

          <li className="p-4 md:p-0">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 hover:text-teal-400 transition"
              aria-label="Alternar tema"
            >
              {dark ? <Moon size={16} /> : <Sun size={16} />}
              {dark ? "Dark" : "Light"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
