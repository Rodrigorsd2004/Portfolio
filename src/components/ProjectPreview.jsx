import React, { useEffect } from "react";
import { X } from "lucide-react";
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
      {/* Botão de Fechar - fixo no canto superior direito da tela */}
      <button
        onClick={onClose}
        aria-label="Fechar preview"
        className="fixed top-6 right-6 z-[999] text-white dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
      >
        <X className="w-7 h-7 color" />
      </button>

      <div className={`
        relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-10
        rounded-2xl shadow-2xl border
        bg-white/60 dark:bg-white/5
        backdrop-blur-xl
        border-white/30 dark:border-white/10
        text-gray-800 dark:text-gray-200
      `}>
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

        <div className="flex flex-wrap justify-center gap-3">
          {projeto.tecnologias.map((tec, index) => (
            <div
              key={index}
              title={tec}
              className="p-2 bg-white/30 dark:bg-white/10 border border-white/30 dark:border-white/20 rounded-lg shadow-sm backdrop-blur-sm"
            >
              {tecnologiaIcons[tec] || (
                <span className="text-sm">{tec}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
