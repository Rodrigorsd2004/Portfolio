import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import tecnologiaIcons from "../utils/tecnologiasIcons";

const fadeZoom = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function ProjectCard({ projeto, index, onPreview }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#fff"
      glarePosition="all"
      scale={1.02}
      transitionSpeed={1000}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="rounded-2xl overflow-hidden"
    >
      <motion.div
        variants={fadeZoom}
        initial="hidden"
        whileInView="visible"
        custom={index}
        viewport={{ once: true }}
        onClick={() => onPreview(projeto)}
        className="group relative cursor-pointer h-full min-h-[460px] flex flex-col justify-between rounded-2xl overflow-hidden 
           border backdrop-blur-lg transition-all duration-500
           bg-white/60 dark:bg-white/5 border-gray-300 dark:border-white/10 shadow-lg
           hover:ring-2 hover:ring-blue-400/30 hover:border-blue-400/30 hover:shadow-2xl hover:scale-[1.02]"
      >
        {/* Imagem de capa */}
        <div className="overflow-hidden">
          <img
            src={projeto.imagem}
            alt={`Imagem do projeto ${projeto.titulo}`}
            className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Conteúdo */}
        <div className="p-6 flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white drop-shadow">
            {projeto.titulo}
          </h3>

          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {projeto.descricao}
          </p>

          {/* Ícones das tecnologias */}
          <div className="flex flex-wrap gap-3 mb-4">
            {projeto.tecnologias.map((tec, i) => (
              <div
                key={i}
                title={tec}
                className="p-2 bg-gray-100/50 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg shadow-sm hover:scale-110 transition-transform duration-300"
              >
                {tecnologiaIcons[tec] || (
                  <Code2 title={tec} className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
              </div>
            ))}
          </div>

          {/* Botões de links */}
          <div className="flex gap-4 mt-auto text-sm">
            <a
              href={projeto.link}
              target="_blank"
              rel="noreferrer"
              title="Ver Projeto"
              className="text-blue-500 hover:text-blue-700 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href={projeto.github}
              target="_blank"
              rel="noreferrer"
              title="Código Fonte"
              className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}
