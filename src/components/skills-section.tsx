import Image from "next/image";

const skillIcons = [
  { name: "HTML5", icon: "/icons/skills/HTML5.svg" },
  { name: "CSS3", icon: "/icons/skills/CSS3.svg" },
  { name: "WordPress", icon: "/icons/skills/WordPress.svg" },
  { name: "Git", icon: "/icons/skills/Git.svg" },
  { name: "GitHub", icon: "/icons/skills/GitHub.svg" },
  { name: "GitLab", icon: "/icons/skills/GitLab.svg" },
  { name: "TailwindCss", icon: "/icons/skills/Tailwind CSS.svg" },
  { name: "JavaScript", icon: "/icons/skills/JavaScript.svg" },
  { name: "TypeScript", icon: "/icons/skills/TypeScript.svg" },
  { name: "Redux", icon: "/icons/skills/Redux.svg" },
  { name: "React", icon: "/icons/skills/React.svg" },
  { name: "Next.js", icon: "/icons/skills/Next.js.svg" },
  { name: "Vue.js", icon: "/icons/skills/Vue.js.svg" },
  { name: "Nuxt.js", icon: "/icons/skills/Nuxt JS.svg" },
  { name: "Angular", icon: "/icons/skills/AngularJS.svg" },
  { name: "Node.js", icon: "/icons/skills/Node.js.svg" },
  { name: "Linux", icon: "/icons/skills/Linux.svg" },
  { name: "Firebase", icon: "/icons/skills/Firebase.svg" },
  { name: "AWS", icon: "/icons/skills/AWS.svg" },
  { name: "Azure", icon: "/icons/skills/Azure.svg" },
  { name: "Docker", icon: "/icons/skills/Docker.svg" },
  { name: "Kubernetes", icon: "/icons/skills/Kubernetes.svg" },
  { name: "NGINX", icon: "/icons/skills/NGINX.svg" },
  { name: "Google Cloud", icon: "/icons/skills/Google Cloud.svg" },
  { name: "MongoDB", icon: "/icons/skills/MongoDB.svg" },
  { name: "PostgreSQL", icon: "/icons/skills/PostgresSQL.svg" },
  { name: "MySQL", icon: "/icons/skills/MySQL.svg" },
  { name: "Laravel", icon: "/icons/skills/Laravel.svg" },
  { name: "Express", icon: "/icons/skills/Express.svg" },
  { name: "Nest.js", icon: "/icons/skills/Nest.js.svg" },
  { name: "Redis", icon: "/icons/skills/Redis.svg" },
  { name: "Figma", icon: "/icons/skills/Figma.svg" },
  { name: "Jest", icon: "/icons/skills/Jest.svg" },
  { name: "Postman", icon: "/icons/skills/Postman.svg" },
  { name: "Swagger", icon: "/icons/skills/Swagger.svg" },
];

// const skillCategories = [
//   "Front-End : HTML, CSS, JavaScript, React, Angular, TypeScript",
//   "Back-End : Node.js, Express, Python, Django",
//   "Bases de données : MySQL, PostgreSQL, MongoDB",
//   "Outils & Plateformes : Git, Docker, AWS, Heroku, Kubernetes, Linux",
//   "Autres : APIs RESTful, GraphQL, Méthodologies Agiles",
// ];

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
        {/* <div className="flex flex-col lg:flex-row gap-16"> */}
          <div className="bg-[#0D0D0D] border border-[#1F2A37] rounded-xl p-6 grid grid-cols-4 md:grid-cols-10 gap-5">
            {skillIcons.map((skill, index) => (
              <div
                key={index}
                className="md:w-20 md:h-20 w-14 h-14 rounded-full flex items-center justify-center bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors"
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
          {/* <div className="flex-1 border border-[#1F2A37] rounded-xl p-6">
            <div className="space-y-4">
              {skillCategories.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-[6px] h-[6px] bg-[#C8D3E0] rounded-full"></div>
                  <span className="text-[#C8D3E0] font-mono">{skill}</span>
                </div>
              ))}
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}
