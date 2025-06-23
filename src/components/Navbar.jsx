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
    const onScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 20);
      }
    };
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

  const getTextColor = () => {
    if (window.innerWidth >= 768 && !scrolled) return "text-white";
    return dark ? "text-white" : "text-black";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        window.innerWidth >= 768
          ? scrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        
        {/* Botão Mobile totalmente transparente */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden z-50 ${getTextColor()} 
            bg-transparent rounded-full p-2 
            transition-transform hover:scale-110`}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Desktop */}
        <ul className={`hidden md:flex items-center gap-10 mx-auto font-medium text-xs ${getTextColor()}`}>
          {[{ href: "#inicio", label: "Início", icon: <Home size={18} /> },
            { href: "#sobre", label: "Sobre", icon: <User size={18} /> },
            { href: "#projetos", label: "Projetos", icon: <Folder size={18} /> },
            { href: "#contato", label: "Contato", icon: <Mail size={18} /> },
          ].map(({ href, label, icon }) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-center gap-2 hover:text-teal-400 transition"
              >
                {icon} {label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 hover:text-teal-400 transition"
            >
              {dark ? <Moon size={18} /> : <Sun size={18} />}
              {dark ? "Dark" : "Light"}
            </button>
          </li>
        </ul>

        {/* Menu Mobile lateral */}
        <div
          className={`fixed top-0 right-0 w-[80%] max-w-xs h-full 
            bg-gradient-to-b from-gray-900/90 to-gray-800/90 
            backdrop-blur-2xl border-l border-white/10 
            shadow-2xl transform transition-transform duration-300 
            z-50 rounded-l-xl ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <ul className="flex flex-col gap-6 px-6 pt-24 text-base font-medium text-white">
            {[{ href: "#inicio", label: "Início", icon: <Home size={20} /> },
              { href: "#sobre", label: "Sobre", icon: <User size={20} /> },
              { href: "#projetos", label: "Projetos", icon: <Folder size={20} /> },
              { href: "#contato", label: "Contato", icon: <Mail size={20} /> },
            ].map(({ href, label, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 hover:text-teal-500 transition"
                >
                  {icon} {label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  toggleTheme();
                  setMenuOpen(false);
                }}
                className="flex items-center gap-3 hover:text-teal-500 transition"
              >
                {dark ? <Moon size={20} /> : <Sun size={20} />}
                {dark ? "Dark" : "Light"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
