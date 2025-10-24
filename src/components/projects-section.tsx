"use client";

import { Eye, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { getFeaturedProjects } from "@/data/projects";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  container,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  buttonVariants,
} from "@/lib/motionVariants";

interface ProjectsSectionProps {
  onViewProject?: (projectId: string) => void;
  onViewAllProjects?: () => void;
}

export default function ProjectsSection({
  onViewProject,
  onViewAllProjects,
}: ProjectsSectionProps) {
  const featuredProjects = getFeaturedProjects();
  const mainProject = featuredProjects[0];

  const handleViewAllProjects = () => {
    if (onViewAllProjects) {
      onViewAllProjects();
    }
  };

  const handleViewProject = () => {
    if (onViewProject && mainProject) {
      onViewProject(mainProject.id);
    } else if (mainProject?.liveUrl) {
      window.open(mainProject.liveUrl, "_blank");
    }
  };

  return (
    <section className="max-w-[1200px] mx-auto px-5 mb-20">
      <motion.div
        className="bg-[#121212] rounded-xl p-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.div
          className="mb-8 flex justify-between items-start"
          variants={fadeInUp}
        >
          <div>
            <div className="flex items-center gap-1 mb-3">
              <div className="w-[6px] h-[6px] bg-[#057A55] rounded-full" />
              <span className="text-[#057A55] font-mono">Projets</span>
            </div>
            <h2 className="text-2xl font-medium text-[#D7DFEE] font-mono">
              Mes travaux récents
            </h2>
          </div>
          {/* <Link href="/projects">
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#057A55] hover:bg-[#046545] text-white font-mono rounded-lg transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Eye className="w-4 h-4" />
              Voir tous les projets
            </motion.button>
          </Link> */}
        </motion.div>

        {mainProject && (
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div
              className="md:w-[440px] md:h-[329px] w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl overflow-hidden relative group"
              variants={fadeInLeft}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src={mainProject.image || "/placeholder.svg"}
                alt={mainProject.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                {mainProject.liveUrl && (
                  <motion.a
                    href={mainProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2 px-6 py-3 bg-[#057A55] hover:bg-[#046545] text-white font-mono rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="w-4 h-4" />
                    Voir le projet
                  </motion.a>
                )}
              </div>
            </motion.div>

            <motion.div className="flex-1" variants={fadeInRight}>
              <motion.div className="mb-8" variants={fadeInUp}>
                <h3 className="text-xl font-medium text-[#057A55] mb-2 font-mono">
                  {mainProject.title}
                </h3>
                <p className="text-[#6B7280] text-sm font-mono mb-2">
                  {mainProject.longDescription || mainProject.description}
                </p>
                <p className="text-[#F98080] font-mono">Infos projet</p>
              </motion.div>

              <div className="space-y-6">
                {[
                  { label: "Catégorie :", value: mainProject.category },
                  {
                    label: "Date :",
                    value: new Date(mainProject.date).toLocaleDateString(
                      "fr-FR",
                      {
                        year: "numeric",
                        month: "long",
                      }
                    ),
                  },
                  {
                    label: "Technologies :",
                    value: mainProject.technologies.slice(0, 4).join(", "),
                  },
                ].map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#C8D3E0] font-mono">
                        {info.label}
                      </span>
                      <span className="text-[#C8D3E0] font-mono text-right">
                        {info.value}
                      </span>
                    </div>
                    <div className="h-[0.5px] bg-[#6B7280] w-full"></div>
                  </motion.div>
                ))}

                <motion.div
                  className="flex items-center gap-8 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {mainProject.liveUrl && (
                    <motion.a
                      href={mainProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#057A55] hover:bg-[#046545] text-white font-mono rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Démo en ligne
                    </motion.a>
                  )}
                  {mainProject.githubUrl && (
                    <motion.a
                      href={mainProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-[#1F2A37] hover:border-[#057A55] text-[#C8D3E0] hover:text-[#057A55] font-mono rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Voir sur Github
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}

        <motion.div className="mt-8 text-center" variants={fadeInUp}>
          <p className="text-[#6B7280] text-sm font-mono mb-4">
            Découvrez tous mes projets ({featuredProjects.length} projets mis en
            avant). Chaque projet met en valeur différentes technologies et
            approches de résolution de problèmes.
          </p>
          <Link href="/projects">
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#057A55] hover:bg-[#057A55] text-[#057A55] hover:text-white font-mono rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-4 h-4" />
              Explorer tout le portfolio
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
