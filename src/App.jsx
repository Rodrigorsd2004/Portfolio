// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white scroll-smooth">
      <Navbar />

      <main>
        <section id="inicio">
          <Home />
        </section>

        <section id="sobre">
          <About />
        </section>

        <section id="projetos">
          <Projects />
        </section>

        <section id="contato">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
