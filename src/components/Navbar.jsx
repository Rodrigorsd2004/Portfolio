import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Home, User, Folder, Mail } from "lucide-react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detecta scroll para aplicar fundo
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Inicializa tema baseado no localStorage ou sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Alterna o tema e salva no localStorage
  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/90 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Menu de navegação"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Rodrigo.dev</h1>

        {/* Botão menu mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Itens de navegação */}
        <ul
          className={`md:flex md:gap-6 md:items-center text-white text-sm font-medium absolute md:static top-16 left-0 w-full bg-gray-900 md:bg-transparent md:w-auto transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li className="p-4 md:p-0">
            <a href="#inicio" className="flex items-center gap-2 hover:text-teal-400">
              <Home size={16} /> Início
            </a>
          </li>
          <li className="p-4 md:p-0">
            <a href="#sobre" className="flex items-center gap-2 hover:text-teal-400">
              <User size={16} /> Sobre
            </a>
          </li>
          <li className="p-4 md:p-0">
            <a href="#projetos" className="flex items-center gap-2 hover:text-teal-400">
              <Folder size={16} /> Projetos
            </a>
          </li>
          <li className="p-4 md:p-0">
            <a href="#contato" className="flex items-center gap-2 hover:text-teal-400">
              <Mail size={16} /> Contato
            </a>
          </li>
          <li className="p-4 md:p-0">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 hover:text-teal-400 transition"
              aria-label="Alternar tema"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              {dark ? "Claro" : "Escuro"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
