import { Code2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function HeroSection() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-5 mb-20">
      <div className="bg-[#121212] rounded-xl p-10 flex flex-col lg:flex-row justify-between items-center gap-20">
        <div className="relative">
          <div className="rounded-full w-[400px] h-[400px] bg-gradient-to-br from-gray-600 to-gray-800 relative overflow-hidden">
            <ImageWithFallback
              src="/daima_muhiya.png"
              alt="daima muhiya"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-7 right-20 w-14 h-14 rounded flex items-center justify-center">
            <Code2 className="w-10 h-10 text-[#057A55]" />
          </div>
        </div>
        <div className="flex-1 max-w-[541px]">
          <div className="mb-6">
            <p className="text-[#F98080] text-base mb-3 font-mono">
              &lt;span&gt; Salut! Je suis Daima MUHIYA &lt;/span&gt;
            </p>
            <h1 className="text-4xl lg:text-[40px] font-medium text-white leading-tight mb-6 font-mono">
              {/* Développeur Web & Mobile &#123;Full Stack&#125;_ */}
              Ingénieur en Développement{" "}
              <span className="text-[#057A55E5]">&#123;Logiciel&#125;</span>_
            </h1>
            <p className="text-[#F98080] text-base leading-relaxed font-mono">
              &lt;p&gt; Fort d&apos;une expertise dans les technologies de
              pointe, je fournis des solutions à la fois innovantes et robustes.
              &lt;/p&gt;
            </p>
          </div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-end gap-3">
              <img
                src="/icons/skills/AWS.svg"
                alt="AWS"
                className="w-14 h-14"
              />
              <img
                src="/icons/skills/Docker.svg"
                alt="Docker"
                className="w-14 h-14"
              />
              <img
                src="/icons/skills/Kubernetes.svg"
                alt="Kubernetes"
                className="w-14 h-14"
              />
              <img
                src="/icons/skills/Linux.svg"
                alt="Linux"
                className="w-14 h-14"
              />
            </div>
            <span className="text-[#6B7280] font-mono">... et plus encore</span>
          </div>
        </div>
      </div>
    </section>
  );
}
