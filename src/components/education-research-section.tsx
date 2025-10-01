import { BookOpen, Beaker } from "lucide-react";

const education = [
  {
    period: "2016-2020 : Doctorat",
    degree: "Licence en Informatique",
    color: "#D7DFEE",
  },
  {
    period: "2018-2022 : Université Harvard",
    degree: "Certificat en React et Redux, Cours Développeur Node.Js",
    color: "#C8D3E0",
  },
  {
    period: "2010-2012 : Université d’Oxford",
    degree: "Certification en Développement Web Full Stack",
    color: "#374151",
  },
  {
    period: "2016-2020 : Université d’Oxford",
    degree: "Certificat en React et Redux, Cours Développeur Node.Js",
    color: "#4B5563",
  },
];

const research = [
  {
    period: "2016-2020 : Analyse Avancée de Données avec Outils Big Data",
    description:
      "Utilisation d’outils Big Data pour l’analyse et la génération d’insights.",
    color: "#D7DFEE",
  },
  {
    period: "2018-2022 : Architectures d’Applications Cloud-Natives",
    description:
      "Étude des bonnes pratiques de conception d’applications cloud-native.",
    color: "#C8D3E0",
  },
  {
    period: "2016-2020 : Personnalisation de l’Expérience Utilisateur par l’IA",
    description:
      "Exploitation de l’IA pour adapter l’expérience utilisateur selon les comportements.",
    color: "#4B5563",
  },
];

export default function EducationResearchSection() {
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recherches */}
        <div className="flex-1 bg-[#121212] border border-[#1F2A37] rounded-xl p-6">
          <div className="flex items-center gap-1 mb-8">
            <Beaker className="w-6 h-6 text-[#057A55]" />
            <span className="text-xl text-[#D7DFEE] font-mono">Recherches</span>
          </div>
          <div className="space-y-6 relative">
            <div className="absolute left-[3px] top-0 w-[0.5px] h-full bg-[#2F343C]"></div>
            {research.map((item, index) => (
              <div key={index} className="flex items-start gap-2 relative z-10">
                <div
                  className="w-[6px] h-[6px] rounded-full mt-1"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div>
                  <div className="text-[#6B7280] font-mono">{item.period}</div>
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
