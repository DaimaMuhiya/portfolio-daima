import { Phone, Mail, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { GitHubContributions } from "./github-contributions";

interface GitJournalSectionProps {
  githubUsername?: string;
}

const gitJournal = [
  {
    date: "25 Jul",
    project: "Berulla-streaming-API-services-for-python",
    color: "#F9FAFB",
  },
  {
    date: "25 Jun",
    project: "ChatHub-Chat-application-vuejs-mongodb",
    color: "#F3F4F6",
  },
  {
    date: "10 May",
    project: "Dineeasy-coffee-tea-reservation-system",
    color: "#E5E7EB",
  },
  {
    date: "5 May",
    project: "Financebuddy-personal-finance-tracker",
    color: "#D1D5DB",
  },
  {
    date: "5 May",
    project: "Tunestream-music-streaming-service-API",
    color: "#9CA3AF",
  },
  {
    date: "5 May",
    project: "Dineeasy-coffee-tea-reservation-system",
    color: "#6B7280",
  },
  {
    date: "5 May",
    project: "ChatHub-Chat-application-vuejs-mongodb",
    color: "#4B5563",
  },
  {
    date: "5 Apr",
    project: "Berulla-streaming-API-services-for-python",
    color: "#374151",
  },
];

export default function GitJournalSection({
  githubUsername = "DaimaMuhiya",
}: GitJournalSectionProps) {
  const githubUrl = `https://github.com/${githubUsername}`;

  return (
    <section className="max-w-[1120px] mx-auto px-5 mb-20">
      <div className="flex flex-col gap-16">
        <div className="flex-1 bg-[#121212] border border-[#1F2A37] rounded-xl p-10">
          <div className="mb-8 flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-1 mb-3">
                <div className="w-[6px] h-[6px] bg-[#057A55] rounded-full"></div>
                <span className="text-[#057A55] text-sm font-mono">Activité GitHub</span>
              </div>
              {/* <h3 className="text-2xl font-medium text-white font-mono">
                1,247 contributions_
              </h3> */}
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
          <GitHubContributions username={githubUsername} />

          {/* Git Journaling */}
          {/* <div className="mt-8 bg-[#0D0D0D] border border-[#1F2228] rounded-xl p-6"> */}
            {/* <div className="flex items-center justify-between mb-6"> */}
              {/* <div className="flex items-center gap-1">
                <div className="w-[6px] h-[6px] bg-[#057A55] rounded-full"></div>
                <span className="text-[#057A55] text-sm font-mono">
                  Journalisation Git
                </span>
              </div> */}
              {/* <a
                href={`${githubUrl}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#057A55] hover:text-[#84E1BC] text-xs font-mono transition-colors inline-flex items-center gap-1"
              >
                Voir tout
                <ExternalLink className="w-3 h-3" />
              </a> */}
            {/* </div> */}
            {/* <div className="relative">
              <div className="absolute left-[3px] top-0 w-[0.5px] h-full bg-[#2F343C]"></div>
              <div className="space-y-6 relative z-10">
                {gitJournal.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div
                      className="w-[6px] h-[6px] rounded-full mt-1"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <a
                      href={`${githubUrl}/${item.project}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs leading-tight font-mono hover:underline transition-all"
                      style={{ color: item.color }}
                    >
                      {item.date}: {item.project}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* <div className="mt-8 flex items-center gap-6">
            <div className="relative">
              <div className="w-[100px] h-[100px] rounded-full border border-[#2F343C] p-4 flex items-center justify-center">
                <Image
                  src="/daima_m.png"
                  alt="daima muhiya"
                  width={100}
                  height={100}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-2 right-2 w-[10px] h-[10px] bg-[#057A55] rounded-full"></div>
            </div>
            <div className="space-y-3">
              <a
                href="tel:+243995825417"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="w-6 h-6 text-[#6B7280] font-mono" />
                <span className="text-[#F98080] text-xs font-mono">
                  +243 995 825 417
                </span>
              </a>
              <a
                href="mailto:muhiyabenjamin@gmail.com"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail className="w-6 h-6 text-[#6B7280] font-mono" />
                <span className="text-[#F98080] text-xs font-mono">
                  muhiyabenjamin@gmail.com
                </span>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
