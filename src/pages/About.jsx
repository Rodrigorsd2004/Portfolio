import React from "react";
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
  { name: "React Native", icon: <FaReact className="text-cyan-300" /> },
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
  { name: "GitHub", icon: <SiGithub className="dark:text-white" /> },
  { name: "RESTful APIs", icon: <SiApollographql className="text-purple-500" /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function About() {
  return (
    <section
      id="sobre"
      className="min-h-screen flex flex-col justify-center px-6 py-20 text-center text-gray-800 dark:text-gray-100 bg-gradient-to-br from-white via-gray-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6"
      >
        Sobre Mim
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className="max-w-3xl mx-auto text-base sm:text-lg mb-4"
      >
        Me chamo <span className="text-blue-600 dark:text-blue-400 font-medium">Rodrigo</span>, tenho 21 anos
        e sou desenvolvedor fullstack em formação. Atualmente curso <strong>Análise e Desenvolvimento de Sistemas</strong> e sou apaixonado por transformar ideias em soluções reais.
      </motion.p>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-10"
      >
        Tenho experiência no desenvolvimento de aplicações web completas, do frontend ao backend, sempre buscando performance, organização e boa experiência para o usuário.
      </motion.p>

      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
        className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-6"
      >
        Tecnologias e Ferramentas
      </motion.h3>

      <div className="flex flex-wrap justify-center gap-5 mb-10 px-4">
        {techList.map((tec, i) => (
          <motion.div
            key={i}
            title={tec.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i / 10 + 4} // escalonando o delay
            whileHover={{ scale: 1.2, rotate: 6 }}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/60 dark:bg-gray-700/50 backdrop-blur-md shadow-md transition-all"
          >
            {tec.icon}
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-8 mt-4">
        <motion.a
          href="https://github.com/Rodrigorsd2004"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
          whileHover={{ scale: 1.2 }}
        >
          <SiGithub className="text-3xl dark:text-white text-gray-800 transition-transform" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/rodrigo-rocha-59b653322/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5.2}
          whileHover={{ scale: 1.2 }}
        >
          <SiLinkedin className="text-3xl text-blue-600 transition-transform" />
        </motion.a>
        <motion.a
          href="/curriculo.pdf"
          target="_blank"
          rel="noreferrer"
          title="Currículo"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5.4}
          whileHover={{ scale: 1.2 }}
        >
          <FaFileAlt className="text-3xl text-green-600 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}
