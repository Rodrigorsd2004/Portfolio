import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contato"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center bg-gradient-to-br from-white via-slate-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100"
    >
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400"
      >
        Entre em Contato
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center text-gray-600 dark:text-gray-300 max-w-xl mb-10"
      >
        Estou disponível para parcerias, freelas ou qualquer ideia que você tenha! Me mande uma mensagem e vamos conversar.
      </motion.p>

      {/* Formulário de contato (apenas front por enquanto) */}
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="w-full max-w-md space-y-6 bg-white/60 dark:bg-gray-800/60 p-8 rounded-xl backdrop-blur-sm shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Seu email"
          className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          rows="5"
          placeholder="Sua mensagem..."
          className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
        >
          Enviar Mensagem
        </button>
      </motion.form>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/5599999999999?text=Olá%20Rodrigo!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="mt-8 inline-flex items-center gap-2 text-green-600 hover:underline"
      >
        <FaWhatsapp className="text-2xl" />
        Fale comigo no WhatsApp
      </motion.a>
    </motion.section>
  );
}
