"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Star, Github, Globe, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { projects, categories, techStack } from "@/data/projects";
import type { Project } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsHeaderVisible(true);
      }
      // Hide header when scrolling down (and not at top)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-[#161616] text-white">
      {/* Header with auto-hide on scroll */}
      <div
        className={`bg-[#121212] border-b border-[#1F2A37] sticky top-0 z-40 transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#057A55] transition-colors font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au portfolio
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-medium text-white font-mono mb-2">
              Tous mes projets ({filteredProjects.length})
            </h1>
            <p className="text-[#6B7280] font-mono text-sm">
              Une sélection de mes meilleurs projets et réalisations
            </p>
          </div>

          {/* Category Filter */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-[#057A55] text-white"
                    : "bg-[#0D0D0D] border border-[#1F2A37] text-[#6B7280] hover:border-[#057A55] hover:text-[#057A55]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#6B7280] font-mono text-lg">
              Aucun projet trouvé dans cette catégorie
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[#121212] border border-[#1F2A37] rounded-xl overflow-hidden hover:border-[#057A55] transition-all duration-300 group flex flex-col">
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 relative overflow-hidden">
        <ImageWithFallback
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
        {project.featured && (
          <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 bg-[#057A55] rounded text-[10px] font-mono text-white">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-medium text-white font-mono group-hover:text-[#057A55] transition-colors line-clamp-1">
            {project.title}
          </h3>
        </div>

        <p className="text-[#6B7280] text-sm font-mono mb-4 line-clamp-2 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Technologies Icons */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => {
            const techInfo = techStack[tech];
            const isIconPath = techInfo?.icon?.startsWith("/icons/");
            return (
              <div
                key={index}
                className="relative group/tech inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#1F2A37] hover:border-[#057A55] transition-all cursor-help"
                style={{ backgroundColor: `${techInfo?.color}15` }}
                title={techInfo?.name || tech}
              >
                {isIconPath ? (
                  <Image
                    src={techInfo.icon}
                    alt={techInfo.name || tech}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <span
                    className="text-base font-bold"
                    style={{
                      color: techInfo?.color || "#6B7280",
                    }}
                  >
                    {techInfo?.icon || tech.slice(0, 2)}
                  </span>
                )}
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#0D0D0D] border border-[#1F2A37] rounded text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover/tech:opacity-100 transition-opacity pointer-events-none z-10">
                  {techInfo?.name || tech}
                </div>
              </div>
            );
          })}
        </div>

        {/* Metadata */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3 text-[#6B7280]" />
            <span className="text-[10px] font-mono text-[#6B7280]">
              {new Date(project.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
              })}
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#6B7280] bg-[#0D0D0D] px-2 py-1 rounded">
            {project.category}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#057A55] hover:bg-[#046545] text-white font-mono rounded-lg transition-colors text-sm"
            >
              <Globe className="w-4 h-4" />
              Voir le projet
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                project.liveUrl ? "" : "flex-1"
              } inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#1F2A37] hover:border-[#057A55] text-[#6B7280] hover:text-[#057A55] font-mono rounded-lg transition-colors text-sm`}
              title="Voir sur GitHub"
            >
              <Github className="w-4 h-4" />
              {!project.liveUrl && "Code"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
