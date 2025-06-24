import React, { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import tecnologiaIcons from "../utils/tecnologiasIcons";

export default function ProjectPreview({ projeto, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Botão de Fechar */}
      <button
        onClick={onClose}
        aria-label="Fechar preview"
        className="fixed top-6 right-6 z-[999] text-white dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
      >
        <X className="w-7 h-7" />
      </button>

      <div
        className={`
        relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-10
        rounded-2xl shadow-2xl border
        bg-white/60 dark:bg-white/5
        backdrop-blur-xl
        border-white/30 dark:border-white/10
        text-gray-800 dark:text-gray-200
      `}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Preview de {projeto.titulo}
        </h2>

        {/* Vídeo */}
        <div className="aspect-video mb-6 rounded-xl overflow-hidden border border-white/20 dark:border-white/10">
          <video
            src={projeto.video}
            controls
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-center text-base sm:text-lg mb-6 leading-relaxed">
          {projeto.descricao}
        </p>

        {/* Tecnologias + Botão */}
        <div className="flex flex-wrap items-center gap-3 mt-4">
          {projeto.tecnologias.map((tec, index) => (
            <div
              key={index}
              title={tec}
              className="p-2 bg-white/10 border border-white/20 rounded-lg shadow-sm transition-all duration-300 transform hover:scale-105 hover:bg-white/20 dark:hover:bg-white/10"
            >
              {tecnologiaIcons[tec] || (
                <span className="text-sm text-gray-300">{tec}</span>
              )}
            </div>
          ))}

          {/* Botão Ver Projeto */}
          {projeto.link && (
            <a
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto relative overflow-hidden group px-4 py-2 text-sm font-medium rounded-lg border border-white/20 text-white dark:text-white bg-white/10 dark:bg-white/10 transition-transform duration-300 hover:scale-105"
            >
              {/* Background animado */}
              <span className="absolute inset-0 w-0 bg-[#1f3fde] transition-all duration-300 ease-in-out group-hover:w-full z-0" />

              {/* Conteúdo sobreposto */}
              <span className="relative z-10 flex items-center gap-2">
                <ExternalLink size={16} />
                Ver Projeto
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
