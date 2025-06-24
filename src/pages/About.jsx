import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiExpo, SiNodedotjs, SiExpress, SiPrisma,
  SiTailwindcss, SiHtml5, SiCss3, SiMongodb, SiPostgresql, SiSqlite, SiDocker, SiGit,
  SiGithub, SiFirebase, SiApollographql, SiLinkedin
} from "react-icons/si";
import { FaReact, FaFileAlt } from "react-icons/fa";

const techList = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="dark:text-white" /> },
  { name: "Expo", icon: <SiExpo className="dark:text-white" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="dark:text-gray-200 text-gray-700" /> },
  { name: "Prisma", icon: <SiPrisma className="text-indigo-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "SQLite", icon: <SiSqlite className="dark:text-white" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "RESTful APIs", icon: <SiApollographql className="text-purple-500" /> },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-20 text-gray-800 dark:text-gray-100"
    >
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 dark:from-cyan-300 dark:to-blue-300 animate-gradient-x">
          Sobre Mim
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 animate-fadeIn">
          Sou Rodrigo, desenvolvedor fullstack apaixonado por criar experiências digitais memoráveis. Busco unir design moderno, código limpo e tecnologia de ponta em soluções funcionais e elegantes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center px-4">
        {/* Foto animada com Tilt */}
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.15}
          scale={1.05}
          tiltMaxAngleX={12}
          tiltMaxAngleY={12}
          className="mx-auto overflow-hidden rounded-2xl"
        >
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="group relative w-80 h-80 md:w-96 md:h-96 hover:scale-105 transition-transform duration-500"
          >
            <div className="absolute inset-0 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-pulseGlow transition duration-500 dark:bg-white/20 bg-black/20 z-0"></div>
            <img
              src="/perfil.jpg"
              alt="Rodrigo"
              className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700 relative z-10"
            />
          </motion.div>
        </Tilt>

        {/* Descrição e Tecnologias */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="space-y-6"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Com domínio em JavaScript, TypeScript, React, Node.js, bancos SQL/NoSQL e ferramentas modernas como Prisma e Docker, entrego projetos com alta performance, foco em experiência do usuário e interfaces refinadas.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-5">
            {techList.map((tec, i) => (
              <Tilt
                key={tec.name}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.1}
                className="w-14 h-14"
              >
                <motion.div
                  variants={fade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i / 10 + 2.2}
                  className="group relative w-full h-full flex items-center justify-center rounded-full transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 group-hover:animate-pulseGlow dark:bg-white/20 bg-black/20 pointer-events-none z-0 transition-all duration-500" />
                  <div className="relative z-10 bg-white/60 dark:bg-gray-800 backdrop-blur-md shadow-md w-full h-full flex items-center justify-center rounded-full">
                    {tec.icon}
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>

          {/* Botões sociais */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-10">
            <a
              href="https://github.com/Rodrigorsd2004"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium px-5 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-md hover:scale-105 transition-transform"
            >
              <SiGithub className="text-xl" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigo-rocha-59b653322/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium px-5 py-3 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              <SiLinkedin className="text-xl" /> LinkedIn
            </a>
            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium px-5 py-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              <FaFileAlt className="text-xl" /> Currículo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
