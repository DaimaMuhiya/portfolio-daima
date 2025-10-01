const skillIcons = [
  { name: "Node.js", color: "#8ED24D", letter: "N" },
  { name: "Angular", color: "#E5484E", letter: "A" },
  { name: "CSS", color: "#0289D6", letter: "C" },
  { name: "HTML", color: "#E55F33", letter: "H" },
  { name: "React", color: "#91D7E3", letter: "R" },
  { name: "Git", color: "#F25146", letter: "G" },
  { name: "MySQL", color: "#008AA9", letter: "M" },
  { name: "API", color: "#FFFFFF", letter: "API" },
  { name: "Python", color: "#306998", letter: "P" },
  { name: "Express", color: "#C7CCDB", letter: "E" },
];

const skillCategories = [
  "Front-End : HTML, CSS, JavaScript, React, Angular",
  "Back-End : Node.js, Express, Python, Django",
  "Bases de données : MySQL, PostgreSQL, MongoDB",
  "Outils & Plateformes : Git, Docker, AWS, Heroku",
  "Autres : APIs RESTful, GraphQL, Méthodologies Agiles",
];

export default function SkillsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 mb-20">
      <div className="bg-[#121212] rounded-xl p-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mb-3">
            <div className="w-[6px] h-[6px] bg-[#057A55] rounded-full"></div>
            <span className="text-[#057A55] font-mono">Compétences</span>
          </div>
          <h2 className="text-2xl font-medium text-[#D7DFEE] font-mono">
            Mes Compétences
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="bg-[#0D0D0D] border border-[#1F2A37] rounded-xl p-6 grid grid-cols-2 md:grid-cols-5 gap-10">
            {skillIcons.map((skill, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded flex items-center justify-center font-bold"
                style={{
                  backgroundColor: skill.color,
                  color: skill.color === "#FFFFFF" ? "#0D0D0D" : "white",
                }}
              >
                {skill.letter}
              </div>
            ))}
          </div>
          <div className="flex-1 border border-[#1F2A37] rounded-xl p-6">
            <div className="space-y-4">
              {skillCategories.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-[6px] h-[6px] bg-[#C8D3E0] rounded-full"></div>
                  <span className="text-[#1F2A37] font-mono">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
