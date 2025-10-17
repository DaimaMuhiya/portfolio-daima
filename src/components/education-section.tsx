import { BookOpen, Beaker } from "lucide-react";

const education = [
  {
    period: "Mai 2023 - Juin 2024",
    degree: "Développement logiciel",
    institution: "Kadea Academy, Kinshasa",
    description:
      "Maîtrise du cycle complet de développement d'applications : analyse des besoins, front-end, back-end et gestion de projet jusqu'à la mise en ligne.",
    color: "#D7DFEE",
  },
  {
    period: "Juin 2021 - Juillet 2021",
    degree: "Administration système et réseau",
    institution: "Centre UniversiTIC ISTA/Kin, Kinshasa",
    description: "Fonctionnement, configuration des équipements et conception.",
    color: "#C8D3E0",
  },
  {
    period: "2016 - 2022",
    degree: "Licence en informatique appliquée",
    institution:
      "Institut Supérieur de Techniques Appliquées de Kinshasa (ISTA/Kin), Kinshasa",
    color: "#9CA3AF",
  },
  {
    period: "2010 - 2016",
    degree: "Diplôme d’État",
    institution: "Institut Technique de Nseke, Mukaka, Nseke, Lualaba",
    color: "#4B5563",
  },
  {
    period: "2004 - 2010",
    degree: "Certificat d’études primaires",
    institution: "E.P. Maendeleo, Mukaka, Nseke, Lualaba",
    color: "#374151",
  },
];

const atouts = [
  {
    title: "Autonomie & sens des responsabilités",
    description:
      "Capacité à travailler en équipe ou de manière indépendante, avec rigueur et esprit d’initiative.",
    color: "#D7DFEE",
  },
  {
    title: "Adaptabilité",
    description:
      "Facilité à apprendre de nouvelles technologies et à s’adapter aux environnements changeants.",
    color: "#C8D3E0",
  },
  {
    title: "Communication & collaboration",
    description:
      "Bon relationnel, esprit d’équipe et capacité à expliquer clairement des concepts techniques.",
    color: "#9CA3AF",
  },
  {
    title: "Résolution de problèmes",
    description:
      "Esprit analytique et méthodique, capable d’identifier rapidement les causes d’un problème et de proposer des solutions efficaces.",
    color: "#6B7280",
  },
  {
    title: "Créativité & innovation",
    description:
      "Capacité à proposer des idées originales et à concevoir des solutions modernes alliant esthétique, performance et expérience utilisateur.",
    color: "#4B5563",
  },
];

export default function EducationSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 mb-20">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Éducation */}
        <div className="flex-1 bg-[#121212] border border-[#1F2A37] rounded-xl p-6">
          <div className="flex items-center gap-1 mb-8">
            <BookOpen className="w-6 h-6 text-[#057A55]" />
            <span className="text-xl text-[#D7DFEE] font-mono">Éducation</span>
          </div>
          <div className="space-y-6 relative">
            <div className="absolute left-[3px] top-0 w-[0.5px] h-full bg-[#2F343C]"></div>
            {education.map((item, index) => (
              <div key={index} className="flex items-start gap-2 relative z-10">
                <div
                  className="w-[6px] h-[6px] rounded-full mt-1"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div>
                  <div className="text-[#6B7280] font-mono">{item.period}</div>
                  <div className="text-[#D7DFEE] font-mono">{item.degree}</div>
                  <div className="text-[#6B7280] font-mono">
                    {item.institution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Atouts */}
        <div className="flex-1 bg-[#121212] border border-[#1F2A37] rounded-xl p-6">
          <div className="flex items-center gap-1 mb-8">
            <Beaker className="w-6 h-6 text-[#057A55]" />
            <span className="text-xl text-[#D7DFEE] font-mono">Atouts</span>
          </div>
          <div className="space-y-6 relative">
            <div className="absolute left-[3px] top-0 w-[0.5px] h-full bg-[#2F343C]"></div>
            {atouts.map((item, index) => (
              <div key={index} className="flex items-start gap-2 relative z-10">
                <div
                  className="w-[6px] h-[6px] rounded-full mt-1"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div>
                  <div className="text-[#6B7280] font-mono">{item.title}</div>
                  <div className="text-[#D7DFEE] font-mono">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
