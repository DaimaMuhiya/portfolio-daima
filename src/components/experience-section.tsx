"use client";

import { Download } from "lucide-react";

const jobs = [
  { company: "Google", period: "2017-Present", icon: "🔴" },
  { company: "X(Twitter)", period: "2019-2022", icon: "⚫" },
  { company: "Amazon", period: "2015-2020", icon: "🟠" },
  { company: "Paypal", period: "2014-Present", icon: "🔵" },
];

const achievements = [
  "A conduit le développement d'applications web évolutives, améliorant les performances et l'expérience utilisateur à grande échelle.",
  "Implémentation d'algorithmes de machine learning pour améliorer la fonctionnalité de recherche.",
  "Collaboration avec des équipes pluridisciplinaires pour intégrer des fonctionnalités de manière transparente.",
];

// const technologies = ["Python", "Tensorflow", "Angular", "Kubernotes"];

interface ExperienceSectionProps {
  onResumeDownload: () => void;
}

export default function ExperienceSection({
  onResumeDownload,
}: ExperienceSectionProps) {
  return (
    <section id="resume" className="max-w-[1200px] mx-auto px-5 mb-20">
      <div className="bg-[#121212] rounded-xl p-10">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-1 mb-3">
              <div className="w-[6px] h-[6px] bg-[#057A55] rounded-full"></div>
              <span className="text-[#057A55] font-mono">Expérience</span>
            </div>
            <h2 className="text-2xl font-medium text-white font-mono">
              5 ans de passion en programmation
            </h2>
          </div>
          <button
            onClick={onResumeDownload}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#057A55] hover:bg-[#046545] text-white font-mono rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            Télécharger mon CV
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="space-y-3">
            {jobs.map((item, index) => (
              <div
                key={index}
                className="bg-[#121212] border border-[#1F2A37] rounded-xl p-3 flex items-center gap-3"
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <div className="text-xl text-white font-mono">
                    {item.company}
                  </div>
                  <div className="text-[#6B7280] text-xs font-mono">
                    {item.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-medium text-[#057A55] mb-6 font-mono">
              Ingénieur en développement logiciel
            </h3>
            <div className="space-y-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-[6px] h-[6px] bg-white rounded-full mt-1"></div>
                  <p className="text-white font-mono">{achievement}</p>
                </div>
              ))}
            </div>
            {/* <div className="flex items-center gap-3">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-[#121212] border border-[#111928] rounded px-3 py-2 text-white text-xs font-mono"
                >
                  {tech}
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
