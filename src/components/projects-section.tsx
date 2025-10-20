"use client";

import { Eye, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectsSectionProps {
  onViewProject: (projectId: string) => void;
  onViewAllProjects: () => void;
}

export default function ProjectsSection({
  onViewProject,
  onViewAllProjects,
}: ProjectsSectionProps) {
  return (
    <section className="max-w-[1200px] mx-auto px-5 mb-20">
      <div className="bg-[#121212] rounded-xl p-10">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-1 mb-3">
              <div className="w-[6px] h-[6px] bg-[#057A55] rounded-full" />
              <span className="text-[#057A55] font-mono">Projets</span>
            </div>
            <h2 className="text-2xl font-medium text-[#D7DFEE] font-mono">
              Mes travaux récents
            </h2>
          </div>
          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#057A55] hover:bg-[#046545] text-white font-mono rounded-lg transition-colors"
          >
            <Eye className="w-4 h-4" />
            Voir tous les projets
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="md:w-[440px] md:h-[329px] w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl overflow-hidden relative group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=440&h=329&fit=crop"
              alt="Capture du projet"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <button
                onClick={() => onViewProject("ai-ecommerce")}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2 px-6 py-3 bg-[#057A55] hover:bg-[#046545] text-white font-mono rounded-lg"
              >
                <Eye className="w-4 h-4" />
                Voir le projet
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-8">
              <h3 className="text-xl font-medium text-[#057A55] mb-2 font-mono">
                Développement d’une plateforme d’apprentissage en ligne
              </h3>
              <p className="text-[#6B7280] text-sm font-mono mb-1">
                Conception d’un système complet de gestion des cours, quiz
                interactifs, suivi des progrès et recommandations personnalisées
                basées sur l’IA.
              </p>
              <p className="text-[#F98080] font-mono">Infos projet</p>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#C8D3E0] font-mono">Client</span>
                  <span className="text-[#C8D3E0] font-mono">
                    Conceptual JSC
                  </span>
                </div>
                <div className="h-[0.5px] bg-[#6B7280] w-full"></div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#C8D3E0] font-mono">
                    Durée de réalisation
                  </span>
                  <span className="text-[#C8D3E0] font-mono">6 mois</span>
                </div>
                <div className="h-[0.5px] bg-[#6B7280] w-full"></div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#C8D3E0] font-mono">Technologies</span>
                  <span className="text-[#C8D3E0] font-mono">
                    Node.js, React, MongoDB, Stripe
                  </span>
                </div>
                <div className="h-[0.5px] bg-[#6B7280] w-full"></div>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <button
                  onClick={() => onViewProject("ai-ecommerce")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#057A55] hover:bg-[#046545] text-white font-mono rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Démo en ligne
                </button>
                <button
                  onClick={() => window.open("https://github.com", "_blank")}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#1F2A37] hover:border-[#057A55] text-[#C8D3E0] hover:text-[#057A55] font-mono rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Voir sur Github
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-[#6B7280] text-sm font-mono mb-4">
            Ceci est seulement l’un des 26 projets que j’ai réalisés. Chaque
            projet met en valeur différentes technologies et approches de
            résolution de problèmes.
          </p>
          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#057A55] hover:bg-[#057A55] text-[#057A55] hover:text-white font-mono rounded-lg transition-colors"
          >
            <Eye className="w-4 h-4" />
            Explorer tout le portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
