import { Phone, Mail } from "lucide-react";
import Image from "next/image";

const companies = [
  { name: "Spotify", color: "#2DE26C" },
  { name: "Stripe", color: "#7B75FF" },
  { name: "Visa", color: "#254AA5" },
  { name: "Google", color: "#4F95F8" },
  { name: "Samsung", color: "#172FB7" },
  { name: "Intercom", color: "#D7DFEE" },
  { name: "PayPal", color: "#D7DFEE" },
  { name: "Mastercard", color: "#FF6E1A" },
  { name: "Toyota", color: "#D7DFEE" },
  { name: "Tesla", color: "#D7DFEE" },
];

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

export default function CooperationSection() {
  return (
    <section className="max-w-[1120px] mx-auto px-5 mb-20">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1 bg-[#121212] border border-[#1F2A37] rounded-xl p-10">
          <div className="mb-8">
            <span className="text-[#057A55] font-mono">Cooperation</span>
            <h3 className="text-2xl font-medium text-white mt-1 font-mono">
              Ils m&apos;ont fait confiance_
            </h3>
          </div>
          <div className="bg-[#121212] font-mono border border-[#1F2228] rounded-xl p-6 grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            {companies.map((company) => (
              <div
                key={company.name}
                className="text-sm"
                style={{ color: company.color }}
              >
                {company.name}
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-6">
            <div className="relative">
              <div className="w-[100px] h-[100px] rounded-full border border-[#2F343C] p-4 flex items-center justify-center">
                {/* <div className="w-15 h-15 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full"></div> */}
                <Image
                  src="/daima-m.jpg"
                  alt="daima muhiya"
                  width={100}
                  height={100}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-2 right-2 w-[10px] h-[10px] bg-[#057A55] rounded-full"></div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-[#6B7280] font-mono" />
                {/* <span className="text-white text-xs">
                  &#123;téléphone&#125;
                </span> */}
                <span className="text-[#F98080] text-xs font-mono">
                  +243 995 825 417
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-[#6B7280] font-mono" />
                {/* <span className="text-white text-xs">&#123;email&#125;</span> */}
                <span className="text-[#F98080] text-xs font-mono">
                  muhiyabenjamin@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[300px] bg-[#121212] border border-[#1F2A37] rounded-xl p-6">
          <div className="flex items-center gap-1 mb-6">
            <div className="w-[6px] h-[6px] bg-[#057A55] rounded-full"></div>
            <span className="text-[#057A55] text-sm font-mono">
              Journalisation Git
            </span>
          </div>
          <div className="relative">
            <div className="absolute left-[3px] top-0 w-[0.5px] h-full bg-[#2F343C]"></div>
            <div className="space-y-6 relative z-10">
              {gitJournal.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div
                    className="w-[6px] h-[6px] rounded-full mt-1"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div
                    className="text-xs leading-tight font-mono"
                    style={{ color: item.color }}
                  >
                    {item.date}: {item.project}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
