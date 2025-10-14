"use client";

import {
  Code2,
  ArrowUp,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const MotionButton = motion(Button);

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Le bouton apparaît après avoir dépassé la hero section (~600px)
      if (window.pageYOffset > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Animation pour les boutons
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <footer className="max-w-[1120px] mx-auto px-5 pb-10">
      <div className="rounded-xl p-5 flex flex-col items-center gap-6 relative">
        <div className="flex items-center gap-1">
          <div className="w-8 h-8 rounded flex items-center justify-center">
            <Code2 className="w-8 h-8 text-[#84E1BC]" />
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
      </div>

      {/* Bouton de retour en haut - positionné en fixed */}
      {isVisible && (
        <MotionButton
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="fixed right-14 border-[#057A55E5] border-b bottom-10 w-11 h-11 bg-[#111928] rounded-lg flex items-center justify-center hover:bg-[#057A55] transition-colors z-50"
          title="Retour en haut de la page"
        >
          <ArrowUp className="w-6 h-6 text-[#057A55] hover:text-white" />
        </MotionButton>
      )}
    </footer>
  );
}
