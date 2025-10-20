"use client";

import {
  Code2,
  Instagram,
  Linkedin,
  Facebook,
  // Download,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  // onResumeDownload: () => void;
}

export default function Navbar({
  onScrollToSection,
  // onResumeDownload,
}: NavbarProps) {
  return (
    <nav className="top-5 left-1/2 transform -translate-x-1/2 w-[1120px] max-w-[calc(100vw-40px)] bg-[#121212] border-l border-[#057A55E5] border-b rounded-xl px-5 py-5 flex justify-between items-center z-50 font-mono relative">
      {/* Gradient border bottom */}
      {/* <div
        className="absolute bottom-0 left-0 right-0 h-[1px] rounded-b-xl z-10"
        style={{
          background: "linear-gradient(to right, #057A55E5, #09E09C00)",
        }}
      /> */}

      <div className="flex items-center gap-1">
        <div className="w-8 h-8 rounded flex items-center justify-center">
          <Code2 className="w-8 h-8 text-[#84E1BC]" />
        </div>
        <span className="text-2xl font-medium text-white ml-1">Daima</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <button
          onClick={() => onScrollToSection("about")}
          className="text-white hover:text-[#84E1BC] transition-colors"
        >
          À propos de moi
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onScrollToSection("resume")}
            className="text-white hover:text-[#84E1BC] transition-colors"
          >
            Expériences
          </button>
          {/* <button
            onClick={onResumeDownload}
            className="p-1 text-white hover:text-[#84E1BC] transition-colors"
            title="Download Resume"
          >
            <Download className="w-4 h-4" />
          </button> */}
        </div>
        <button
          onClick={() => onScrollToSection("contacts")}
          className="text-white hover:text-[#84E1BC] transition-colors"
        >
          Contacts
        </button>
      </div>

      <div className="flex items-center gap-6">
        <a
          href="https://www.facebook.com/daima.muhiya"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compte Facebook de Daima Muhiya"
        >
          <Facebook className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/daima_muhiya"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compte Instagram de Daima Muhiya"
        >
          <Instagram className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/daima-muhiya-3b179722b"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compte LinkedIn de Daima Muhiya"
        >
          <Linkedin className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
        </a>
        <a
          href="https://x.com/Daima_Muhiya"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compte Twitter de Daima Muhiya"
        >
          <FaXTwitter className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
        </a>
      </div>
    </nav>
  );
}
