"use client";

import { Code2, ArrowUp, Instagram, Linkedin, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaXTwitter } from "react-icons/fa6";

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

  // Animation pour les icônes sociales
  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.9 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="max-w-[1120px] mx-auto px-5 pb-10">
      <motion.div
        className="rounded-xl p-5 flex flex-col items-center gap-6 relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="flex items-center gap-1" variants={itemVariants}>
          <motion.div
            className="w-8 h-8 rounded flex items-center justify-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Code2 className="w-8 h-8 text-[#84E1BC]" />
          </motion.div>
          <motion.span
            className="text-2xl font-mono font-medium text-[#D7DFEE] ml-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Daima MUHIYA
          </motion.span>
        </motion.div>
        <motion.div className="flex items-center gap-6" variants={itemVariants}>
          <motion.a
            href="https://www.facebook.com/daima.muhiya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compte Facebook de Daima Muhiya"
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Facebook className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/daima_muhiya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compte Instagram de Daima Muhiya"
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Instagram className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/daima-muhiya-3b179722b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compte LinkedIn de Daima Muhiya"
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Linkedin className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
          </motion.a>
          <motion.a
            href="https://x.com/Daima_Muhiya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Compte Twitter de Daima Muhiya"
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaXTwitter className="w-6 h-6 text-[#D7DFEE] hover:text-[#057A55] cursor-pointer" />
          </motion.a>
        </motion.div>
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
      </motion.div>

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
