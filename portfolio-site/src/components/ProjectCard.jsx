import React from "react";
import { motion } from "framer-motion";

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

export default function ProjectCard({ projeto, index }) {
  return (
    <motion.div
      key={index}
      variants={fadeZoom}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="rounded-xl overflow-hidden border backdrop-blur-md shadow-md hover:shadow-2xl transform transition-all duration-300
                 bg-white/70 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700"
    >
      <div className="overflow-hidden">
        <img
          src={projeto.imagem}
          alt={`Imagem do projeto ${projeto.titulo}`}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col justify-between">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {projeto.titulo}
        </h3>

        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {projeto.descricao}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {projeto.tecnologias.map((tec, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full font-medium
                         bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300
                         border border-blue-200 dark:border-blue-400"
            >
              {tec}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto text-sm font-medium">
          <a
            href={projeto.link}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Ver Projeto
          </a>
          <a
            href={projeto.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:underline"
          >
            Código
          </a>
        </div>
      </div>
    </motion.div>
  );
}
