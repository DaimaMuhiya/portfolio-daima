import { Code2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function HeroSection() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-5 mb-20">
      <div className="bg-[#121212] rounded-xl p-10 flex flex-col lg:flex-row justify-between items-center gap-20">
        <div className="flex-1 max-w-[541px]">
          <div className="mb-6">
            <p className="text-[#F98080] text-base mb-3 font-mono">
              &lt;span&gt; Salut! Je suis Daima MUHIYA &lt;/span&gt;
            </p>
            <h1 className="text-4xl lg:text-[40px] font-medium text-white leading-tight mb-6 font-mono">
              Développeur Web & Mobile &#123;Full Stack&#125;_
            </h1>
            <p className="text-[#F98080] text-base leading-relaxed font-mono">
              &lt;p&gt; Fort d&apos;une expertise dans les technologies de
              pointe, je fournis des solutions web à la fois innovantes et
              robustes. &lt;/p&gt;
            </p>
          </div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-end gap-3">
              <img src="/icons/css.png" alt="Javascript" className="w-6 h-6" />
            </div>
            <span className="text-[#6B7280] font-mono">... et plus encore</span>
          </div>
        </div>
        <div className="relative">
          <div className="w-[500px] h-[500px] bg-gradient-to-br from-gray-600 to-gray-800 rounded-[32px] relative overflow-hidden">
            <ImageWithFallback
              src="/daima.jpg"
              alt="daima muhiya"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-7 right-20 w-14 h-14 bg-[#057A55] rounded flex items-center justify-center">
            <Code2 className="w-10 h-10 text-[#0D0D0D]" />
          </div>
        </div>
      </div>
    </section>
  );
}
