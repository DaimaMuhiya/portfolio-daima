"use client";

import { Github, ExternalLink, Loader2, RefreshCw } from "lucide-react";
import { GitHubContributions } from "./github-contributions";
import { useGitHubRepositories } from "@/hooks/use-github-repositories";

const GITHUB_USERNAME = "DaimaMuhiya";

export default function GitJournalSection() {
  const githubUrl = `https://github.com/${GITHUB_USERNAME}`;
  const { repositories, loading, error, isDemoMode, refetch } =
    useGitHubRepositories(GITHUB_USERNAME);

  return (
    <section className="max-w-[1120px] mx-auto px-5 mb-20">
      <div className="flex flex-col gap-16">
        <div className="flex-1 bg-[#121212] border border-[#1F2A37] rounded-xl p-10">
          <div className="mb-8 flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-1 mb-3">
                <div className="w-[6px] h-[6px] bg-[#057A55] rounded-full" />
                <span className="text-[#057A55] text-sm font-mono">
                  Activité GitHub
                </span>
              </div>
            </div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#057A55] hover:bg-[#046545] text-white font-mono rounded-lg transition-colors group"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">Visiter mon GitHub</span>
              <span className="sm:hidden">GitHub</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          <GitHubContributions username={GITHUB_USERNAME} />

          {/* Git Commit Messages */}
          <div className="mt-8 bg-[#0D0D0D] border border-[#1F2228] rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-1">
                <div className="w-[6px] h-[6px] bg-[#057A55] rounded-full"></div>
                <span className="text-[#057A55] text-sm font-mono">
                  Messages de commit récents
                </span>
                {isDemoMode && (
                  <div className="inline-flex items-center gap-2 px-2 py-1 bg-yellow-500 bg-opacity-20 border border-yellow-500 rounded text-[10px] font-mono text-yellow-500">
                    Données démo
                  </div>
                )}
              </div>
              <a
                href={`${githubUrl}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#057A55] hover:text-[#84E1BC] text-xs font-mono transition-colors inline-flex items-center gap-1"
              >
                Voir tout
                <ExternalLink className="w-3 h-3" />
              </a>
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
              <div className="flex flex-col items-center gap-3 py-6">
                <p className="text-[#F98080] text-xs font-mono text-center">
                  {error}
                </p>
                <button
                  onClick={refetch}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-[#057A55] hover:bg-[#046545] text-white font-mono rounded text-xs transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  Réessayer
                </button>
              </div>
            ) : (
              <div className="relative">
                <div className="absolute left-[3px] top-0 w-[0.5px] h-full bg-[#2F343C]"></div>
                <div className="space-y-6 relative z-10">
                  {repositories.slice(0, 8).map((repo, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div
                        className="w-[6px] h-[6px] rounded-full mt-1 flex-shrink-0"
                        style={{ backgroundColor: repo.languageColor }}
                      ></div>
                      <div className="flex-1 min-w-0">
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs leading-tight font-mono hover:underline transition-all block group"
                          style={{ color: repo.languageColor }}
                        >
                          <span className="block font-medium">
                            {repo.date}: {repo.name}
                          </span>
                          <span className="block text-[#6B7280] mt-1 italic">
                            "{repo.commitMessage}"
                          </span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
