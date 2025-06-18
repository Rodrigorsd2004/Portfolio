import React from "react";
import { motion } from "framer-motion";
import { projetos } from "../utils/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <motion.section
      id="projetos"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-white via-slate-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400"
      >
        Projetos
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projetos.map((projeto, index) => (
          <ProjectCard key={index} projeto={projeto} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
