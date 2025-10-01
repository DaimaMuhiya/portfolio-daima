"use client";

import {
  Code2,
  ArrowUp,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer className="max-w-[1120px] mx-auto px-5 pb-10">
      <div className="rounded-xl p-5 flex flex-col items-center gap-6 relative">
        <div className="flex items-center gap-1">
          <div className="w-8 h-8 bg-[#057A55] rounded flex items-center justify-center">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-mono font-medium text-[#D7DFEE] ml-1">
            Daima MUHIYA
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Facebook className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
          <Instagram className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
          <Linkedin className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
          <Twitter className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
        </div>
        {/* <div className="flex items-center gap-8">
          <button
            onClick={() => onScrollToSection("about")}
            className="text-[#D7DFEE] hover:text-[#057A55] transition-colors font-mono"
          >
            À propos
          </button>
          <button
            onClick={() => onScrollToSection("resume")}
            className="text-[#D7DFEE] hover:text-[#057A55] transition-colors font-mono"
          >
            Parcours
          </button>
          <button
            onClick={() => onScrollToSection("contacts")}
            className="text-[#D7DFEE] hover:text-[#057A55] transition-colors font-mono"
          >
            Contacts
          </button>
        </div> */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 w-11 h-11 bg-[#111928] rounded-lg flex items-center justify-center hover:bg-[#057A55] transition-colors"
          title="Retour en haut de la page"
        >
          <ArrowUp className="w-6 h-6 text-[#057A55] hover:text-white" />
        </button>
      </div>
    </footer>
  );
}
