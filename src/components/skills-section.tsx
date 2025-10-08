import Image from "next/image";

const skillIcons = [
  { name: "HTML5", icon: "/icons/HTML5.svg" },
  { name: "CSS3", icon: "/icons/CSS3.svg" },
  { name: "WordPress", icon: "/icons/WordPress.svg" },
  { name: "Git", icon: "/icons/Git.svg" },
  { name: "GitHub", icon: "/icons/GitHub.svg" },
  { name: "GitLab", icon: "/icons/GitLab.svg" },
  { name: "TailwindCss", icon: "/icons/Tailwind CSS.svg" },
  { name: "JavaScript", icon: "/icons/JavaScript.svg" },
  { name: "TypeScript", icon: "/icons/TypeScript.svg" },
  { name: "Redux", icon: "/icons/Redux.svg" },
  { name: "React", icon: "/icons/React.svg" },
  { name: "Next.js", icon: "/icons/Next.js.svg" },
  { name: "Vue.js", icon: "/icons/Vue.js.svg" },
  { name: "Nuxt.js", icon: "/icons/Nuxt JS.svg" },
  { name: "Angular", icon: "/icons/AngularJS.svg" },
  { name: "Node.js", icon: "/icons/Node.js.svg" },
  { name: "Linux", icon: "/icons/Linux.svg" },
  { name: "Firebase", icon: "/icons/Firebase.svg" },
  { name: "AWS", icon: "/icons/AWS.svg" },
  { name: "Azure", icon: "/icons/Azure.svg" },
  { name: "Docker", icon: "/icons/Docker.svg" },
  { name: "Kubernetes", icon: "/icons/Kubernetes.svg" },
  { name: "NGINX", icon: "/icons/NGINX.svg" },
  { name: "Google Cloud", icon: "/icons/Google Cloud.svg" },
  { name: "MongoDB", icon: "/icons/MongoDB.svg" },
  { name: "PostgreSQL", icon: "/icons/PostgresSQL.svg" },
  { name: "MySQL", icon: "/icons/MySQL.svg" },
  { name: "Laravel", icon: "/icons/Laravel.svg" },
  { name: "Express", icon: "/icons/Express.svg" },
  { name: "Nest.js", icon: "/icons/Nest.js.svg" },
  { name: "Redis", icon: "/icons/Redis.svg" },
  { name: "Figma", icon: "/icons/Figma.svg" },
  { name: "Jest", icon: "/icons/Jest.svg" },
  { name: "Postman", icon: "/icons/Postman.svg" },
  { name: "Swagger", icon: "/icons/Swagger.svg" },
];

const skillCategories = [
  "Front-End : HTML, CSS, JavaScript, React, Angular, TypeScript",
  "Back-End : Node.js, Express, Python, Django",
  "Bases de données : MySQL, PostgreSQL, MongoDB",
  "Outils & Plateformes : Git, Docker, AWS, Heroku, Kubernetes, Linux",
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
          <div className="bg-[#0D0D0D] border border-[#1F2A37] rounded-xl p-6 grid grid-cols-3 md:grid-cols-5 gap-10">
            {skillIcons.map((skill, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded flex items-center justify-center bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors"
                title={skill.name}
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex-1 border border-[#1F2A37] rounded-xl p-6">
            <div className="space-y-4">
              {skillCategories.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-[6px] h-[6px] bg-[#C8D3E0] rounded-full"></div>
                  <span className="text-[#C8D3E0] font-mono">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
