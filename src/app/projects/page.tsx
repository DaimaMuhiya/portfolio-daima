"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Loader2, Star, Github, Globe, Search } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

interface Repository {
  name: string;
  url: string;
  date: string;
  fullDate: string;
  description: string | null;
  stars: number;
  language: string;
  languageColor: string;
}

// Remplacez par votre vrai username GitHub
const GITHUB_USERNAME = "DaimaMuhiya";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");

  useEffect(() => {
    fetchAllProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [searchTerm, selectedLanguage, projects]);

  const fetchAllProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/github/repositories?username=${GITHUB_USERNAME}&limit=100`
      );

      if (!response.ok) {
        throw new Error("Échec du chargement des projets");
      }

      const data = await response.json();
      setProjects(data.repositories);
      setFilteredProjects(data.repositories);
    } catch (error) {
      console.error("Erreur lors du chargement des projets:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterProjects = () => {
    let filtered = [...projects];

    // Filtrer par recherche
    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrer par langage
    if (selectedLanguage !== "all") {
      filtered = filtered.filter(
        (project) => project.language === selectedLanguage
      );
    }

    setFilteredProjects(filtered);
  };

  // Extraire les langages uniques
  const languages = [
    "all",
    ...new Set(projects.map((p) => p.language).filter(Boolean)),
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#161616] text-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-[#057A55] animate-spin" />
          <p className="text-[#6B7280] font-mono">Chargement des projets...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#161616] text-white">
      {/* Header */}
      <div className="bg-[#121212] border-b border-[#1F2A37] sticky top-0 z-40">
        <div className="max-w-[1200px] mx-auto px-5 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#057A55] transition-colors font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au portfolio
            </Link>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#057A55] hover:bg-[#046545] text-white font-mono rounded-lg transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              Voir sur GitHub
            </a>
          </div>

          <div>
            <h1 className="text-3xl font-medium text-white font-mono mb-2">
              Tous mes projets ({filteredProjects.length})
            </h1>
            <p className="text-[#6B7280] font-mono text-sm">
              Une collection de mes projets open source et contributions
            </p>
          </div>

          {/* Filtres */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            {/* Recherche */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#0D0D0D] border border-[#1F2A37] rounded-lg text-white font-mono placeholder-[#6B7280] focus:border-[#057A55] focus:outline-none transition-colors text-sm"
              />
            </div>

            {/* Filtre par langage */}
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              aria-label="Filtrer les projets par langage de programmation"
              className="px-4 py-2 bg-[#0D0D0D] border border-[#1F2A37] rounded-lg text-white font-mono focus:border-[#057A55] focus:outline-none transition-colors text-sm cursor-pointer"
            >
              <option value="all">Tous les langages</option>
              {languages.slice(1).map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#6B7280] font-mono text-lg">
              {searchTerm || selectedLanguage !== "all"
                ? "Aucun projet trouvé avec ces critères"
                : "Aucun projet trouvé"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#121212] border border-[#1F2A37] rounded-xl overflow-hidden hover:border-[#057A55] transition-all duration-300 group flex flex-col"
              >
                {/* Project Image/Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden">
                  <ImageWithFallback
                    src={`https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${project.name}`}
                    alt={project.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
                </div>

                {/* Project Info */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-medium text-white font-mono group-hover:text-[#057A55] transition-colors line-clamp-1">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-[#6B7280] text-sm font-mono mb-4 line-clamp-3 leading-relaxed flex-1">
                    {project.description || "Pas de description disponible"}
                  </p>

                  {/* Metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      {project.language && (
                        <span className="inline-flex items-center gap-1 text-xs font-mono">
                          <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: project.languageColor }}
                          ></span>
                          <span className="text-[#6B7280]">
                            {project.language}
                          </span>
                        </span>
                      )}
                      {project.stars > 0 && (
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-[#6B7280]">
                          <Star className="w-3 h-3" />
                          {project.stars}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-[#6B7280]">
                      {project.date}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto flex items-center gap-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#057A55] hover:bg-[#046545] text-white font-mono rounded-lg transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Voir le code
                    </a>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2 border border-[#1F2A37] hover:border-[#057A55] text-[#6B7280] hover:text-[#057A55] font-mono rounded-lg transition-colors"
                      title="Voir sur GitHub"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
