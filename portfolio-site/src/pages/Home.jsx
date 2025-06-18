import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const letras = "códigos".split("");
  const [hover, setHover] = useState(false);

  const letraAnimada = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
      },
    }),
    loop: (i) => ({
      y: [0, -1.5, 0, 1.5, 0],
      rotate: [0, -2, 0, 2, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.05,
      },
    }),
    big: (i) => ({
      scale: 2.5,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.05,
      },
    }),
  };

  return (
    <motion.section
      id="inicio"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-gray-100"
    >
      {/* Decoração de fundo */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-transparent z-0 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl z-0 pointer-events-none" />

      {/* Título principal com animação por letra */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6 relative z-10 text-white"
      >
        Transformando{" "}
        <motion.span
          className="text-blue-400 inline-flex cursor-pointer relative z-20"
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          style={{
            display: "inline-flex",
            gap: hover ? "0.2em" : "0.02em",
            transition: "gap 0.6s ease",
            overflow: "visible",
          }}
        >
          {letras.map((letra, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letraAnimada}
              initial="visible"
              animate={hover ? "gap" : ["visible", "loop"]}
              className="inline-block"
              style={{
                zIndex: 30,
                transformOrigin: "center bottom",
              }}
            >
              {letra}
            </motion.span>
          ))}
        </motion.span>{" "}
        em soluções reais
      </motion.h1>

      {/* Efeito máquina de escrever */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-xl sm:text-2xl font-medium text-white mb-6 relative z-10"
      >
        <Typewriter
          words={[
            "Desenvolvedor Front-End apaixonado por UI.",
            "Interfaces modernas e intuitivas.",
            "Experiências digitais com impacto real.",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </motion.p>

      {/* Subtítulo fixo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 text-gray-300 relative z-10"
      >
        Sou Rodrigo, desenvolvedor fullstack com foco em interfaces modernas,
        APIs eficientes e aplicações que geram impacto. Vamos construir algo
        incrível?
      </motion.p>

      {/* Botões com animação no hover */}
      <div className="flex flex-wrap justify-center gap-6 relative z-10">
        <motion.div
          whileHover={{
            scale: 1.08,
            y: -4,
            boxShadow: "0px 8px 20px rgba(59,130,246,0.35)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Link
            to="projetos"
            smooth={true}
            duration={600}
            className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-full text-sm sm:text-base font-medium shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Ver Projetos
          </Link>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.08,
            y: -4,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <Link
            to="sobre"
            smooth={true}
            duration={600}
            className="cursor-pointer border border-blue-400 text-blue-400 px-8 py-3 rounded-full text-sm sm:text-base font-medium shadow-md backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            Sobre Mim
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
