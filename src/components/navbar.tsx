"use client";

import {
  Code2,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  Download,
} from "lucide-react";

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  onResumeDownload: () => void;
}

export default function Navbar({
  onScrollToSection,
  onResumeDownload,
}: NavbarProps) {
  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[1120px] max-w-[calc(100vw-40px)] bg-[#121212] rounded-xl px-4 py-5 flex justify-between items-center z-50">
      <div className="flex items-center gap-1">
        <div className="w-8 h-8 bg-[#84E1BC] rounded flex items-center justify-center">
          <Code2 className="w-5 h-5 text-[#0D0D0D]" />
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
            CV
          </button>
          <button
            onClick={onResumeDownload}
            className="p-1 text-white hover:text-[#84E1BC] transition-colors"
            title="Download Resume"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
        <button
          onClick={() => onScrollToSection("contacts")}
          className="text-white hover:text-[#84E1BC] transition-colors"
        >
          Contacts
        </button>
      </div>

      <div className="flex items-center gap-6">
        <Twitter className="w-4 h-4 text-white hover:text-[#84E1BC] cursor-pointer" />
        <Instagram className="w-6 h-6 text-white hover:text-[#84E1BC] cursor-pointer" />
        <Linkedin className="w-6 h-6 text-white hover:text-[#84E1BC] cursor-pointer" />
        <Facebook className="w-6 h-6 text-white hover:text-[#84E1BC] cursor-pointer" />
      </div>
    </nav>
  );
}
