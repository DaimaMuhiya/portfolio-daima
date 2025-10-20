import { Calendar, Monitor, Smile, Award } from "lucide-react";

const stats = [
  { icon: Calendar, value: "5", label: "Années d'expérience" },
  { icon: Monitor, value: "26", label: "Projets réalisés" },
  // { icon: Smile, value: "10", label: "Clients satisfaits" },
  { icon: Award, value: "2", label: "Certifications" },
];

export default function StatsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 mb-20">
      <div className="bg-[#121212] rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <stat.icon className="w-6 h-6 text-[#057A55] mb-3 mx-auto" />
            <div className="text-4xl font-medium text-[#D7DFEE] mb-2 font-mono">
              {stat.value}
            </div>
            <div className="text-[#6B7280] font-mono">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
