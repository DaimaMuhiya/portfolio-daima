"use client";

import {
  Code2,
  Instagram,
  Linkedin,
  Facebook,
  // Download,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeInDown } from "@/lib/motionVariants";

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  // onResumeDownload: () => void;
}

export default function Navbar({
  onScrollToSection,
}: // onResumeDownload,
NavbarProps) {
  return (
    <motion.nav
      className="top-5 left-1/2 transform -translate-x-1/2 w-[1120px] max-w-[calc(100vw-40px)] bg-[#121212] border-l border-[#057A55E5] border-b rounded-xl px-5 py-5 flex justify-between items-center z-50 font-mono relative"
      initial="hidden"
      animate="show"
      variants={fadeInDown}
    >
      {/* Gradient border bottom */}
      {/* <div
        className="absolute bottom-0 left-0 right-0 h-[1px] rounded-b-xl z-10"
        style={{
          background: "linear-gradient(to right, #057A55E5, #09E09C00)",
        }}
      /> */}

      <motion.div
        className="flex items-center gap-1"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="w-8 h-8 rounded flex items-center justify-center"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 className="w-8 h-8 text-[#84E1BC]" />
        </motion.div>
        <span className="text-2xl font-medium text-white ml-1">Daima</span>
      </motion.div>

      <div className="hidden md:flex items-center gap-8">
        <motion.button
          onClick={() => onScrollToSection("about")}
          className="text-white hover:text-[#84E1BC] transition-colors"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          À propos de moi
        </motion.button>
        <div className="flex items-center gap-2">
          <motion.button
            onClick={() => onScrollToSection("resume")}
            className="text-white hover:text-[#84E1BC] transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Expériences
          </motion.button>
          {/* <button
            onClick={onResumeDownload}
            className="p-1 text-white hover:text-[#84E1BC] transition-colors"
            title="Download Resume"
          >
            <Download className="w-4 h-4" />
          </button> */}
        </div>
        <motion.button
          onClick={() => onScrollToSection("contacts")}
          className="text-white hover:text-[#84E1BC] transition-colors"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Contacts
        </motion.button>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <motion.a
          href="https://www.facebook.com/daima.muhiya"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compte Facebook de Daima Muhiya"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Facebook className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/daima_muhiya"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compte Instagram de Daima Muhiya"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Instagram className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/daima-muhiya-3b179722b"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compte LinkedIn de Daima Muhiya"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Linkedin className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
        </motion.a>
        <motion.a
          href="https://x.com/Daima_Muhiya"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compte Twitter de Daima Muhiya"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaXTwitter className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
        </motion.a>
      </div>
    </motion.nav>
  );
}
