import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaFileAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-gray-300 py-10 px-6 text-center relative z-10"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto gap-4">
        {/* Frase */}
        <p className="text-sm">
          © {new Date().getFullYear()} Rodrigo • Desenvolvedor Full Stack •
        </p>

        {/* Links sociais */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform hover:scale-125"
          >
            <SiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform hover:scale-125"
          >
            <SiLinkedin size={24} />
          </a>
          <a
            href="/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform hover:scale-125"
          >
            <FaFileAlt size={24} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
