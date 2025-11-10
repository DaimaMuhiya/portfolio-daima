"use client";

import { Github, ExternalLink, Loader2, RefreshCw } from "lucide-react";
import { GitHubContributions } from "./github-contributions";
import { useGitHubRepositories } from "@/hooks/use-github-repositories";
import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/motionVariants";

const GITHUB_USERNAME = "DaimaMuhiya";

export default function GitJournalSection() {
  const githubUrl = `https://github.com/${GITHUB_USERNAME}`;
  const { repositories, loading, error, isDemoMode, refetch } =
    useGitHubRepositories(GITHUB_USERNAME);

  return (
    <section className="max-w-[1120px] mx-auto px-5 mb-20">
      <motion.div
        className="flex flex-col gap-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.div
          className="flex-1 bg-[#121212] rounded-xl p-10"
          variants={fadeInUp}
        >
          <motion.div
            className="mb-8 flex items-start justify-between flex-wrap gap-4"
            variants={fadeInUp}
          >
            <div>
              <div className="flex items-center gap-1 mb-3">
                <div className="w-[6px] h-[6px] bg-[#057A55] rounded-full" />
                <span className="text-[#057A55] text-sm font-mono">
                  Activité GitHub
                </span>
              </div>
            </div>
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#057A55] hover:bg-[#046545] text-white font-mono rounded-lg transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">Visiter mon GitHub</span>
              <span className="sm:hidden">GitHub</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>
          <GitHubContributions username={GITHUB_USERNAME} />

          {/* Git Commit Messages */}
          <motion.div
            className="mt-8 bg-[#0D0D0D] border border-[#1F2A37] rounded-xl p-6"
            variants={fadeInUp}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-1">
                <span className="text-white text-xs font-mono">
                  Messages de commit récents_
                </span>
                {isDemoMode && (
                  <motion.div
                    className="inline-flex items-center gap-2 px-2 py-1 bg-yellow-500 bg-opacity-20 border border-yellow-500 rounded text-[10px] font-mono text-yellow-500"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Données démo
                  </motion.div>
                )}
              </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="w-6 h-6 text-[#057A55] animate-spin" />
                  <p className="text-[#6B7280] text-xs font-mono">
                    Chargement des commits...
                  </p>
                </div>
              </div>
            ) : error ? (
              <motion.div
                className="flex flex-col items-center gap-3 py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-[#F98080] text-xs font-mono text-center">
                  {error}
                </p>
                <motion.button
                  onClick={refetch}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-[#057A55] hover:bg-[#046545] text-white font-mono rounded text-xs transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RefreshCw className="w-3 h-3" />
                  Réessayer
                </motion.button>
              </motion.div>
            ) : (
              <div className="relative">
                <div className="absolute left-[3px] top-0 w-[0.5px] h-full bg-[#2F343C]"></div>
                <div className="space-y-6 relative z-10">
                  {repositories.slice(0, 8).map((repo, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <div
                        className="w-[6px] h-[6px] rounded-full mt-1 flex-shrink-0"
                        style={{ backgroundColor: repo.languageColor }}
                      ></div>
                      <div className="flex-1 min-w-0">
                        <div
                          className="text-xs leading-tight font-mono transition-all block group"
                          style={{ color: repo.languageColor }}
                        >
                          <span className="block font-medium">
                            {repo.date}: {repo.name}
                          </span>
                          <span className="block text-[#6B7280] mt-1 italic">
                            &ldquo;{repo.commitMessage}&rdquo;
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
