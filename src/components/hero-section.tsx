"use client";

import { Code2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { lazy, Suspense, useState } from "react";
import {
  fadeInLeft,
  fadeInRight,
  scaleIn,
  container,
  fadeInUp,
} from "@/lib/motionVariants";

const MotionImage = motion(Image);
const AnimatedText = lazy(() => import("./animations/animated-text"));

export default function HeroSection() {
  const [showAlternateText, setShowAlternateText] = useState(false);
  const [componentKey, setComponentKey] = useState(0);

  const handleBlinkComplete = () => {
    // Attendre un peu avant de changer de texte
    setTimeout(() => {
      setShowAlternateText((prev) => !prev);
      setComponentKey((prev) => prev + 1);
    }, 500);
  };

  return (
    <section id="about" className="max-w-[1200px] mx-auto px-5 mb-20">
      <motion.div
        className="bg-[#121212] rounded-xl p-10 flex flex-col lg:flex-row justify-between items-center gap-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <motion.div className="relative" variants={fadeInLeft}>
          <motion.div
            className="rounded-full object-contain md:w-[400px] md:h-[400px] w-[300px] h-[300px] bg-gradient-to-br from-gray-600 to-gray-800 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithFallback
              src="/profile/daima_m.png"
              alt="daima muhiya"
              className="rounded-full w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-7 right-20 w-14 h-14 rounded flex items-center justify-center"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Code2 className="w-10 h-10 text-[#057A55]" />
          </motion.div>
        </motion.div>
        <motion.div className="flex-1 max-w-[541px]" variants={fadeInRight}>
          <div className="mb-6">
            <motion.p
              className="text-[#F98080] text-base mb-3 font-mono"
              variants={fadeInUp}
            >
              Salut ! Je suis DAIMA MUHIYA,
            </motion.p>
            <motion.div
              className="text-4xl lg:text-[40px] font-medium leading-tight mb-6 font-mono"
              variants={fadeInUp}
            >
              <AnimatePresence mode="wait">
                {!showAlternateText ? (
                  <motion.div
                    key="main-text"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-white mb-2">Ingénieur</p>
                    <div className="bg-gradient-to-r from-[#057A55] to-[#09E09C] bg-clip-text text-transparent">
                      <Suspense
                        fallback={
                          <span className="text-[#057A55E5]">
                            &#123;Logiciel&#125;_
                          </span>
                        }
                      >
                        <AnimatedText
                          key={`main-${componentKey}`}
                          text="{Logiciel}_"
                          el="h1"
                          className="text-4xl lg:text-[40px]"
                          blinkCount={5}
                          blinkSpeed={500}
                          onBlinkComplete={handleBlinkComplete}
                        />
                      </Suspense>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="alternate-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-r from-[#057A55] to-[#09E09C] bg-clip-text text-transparent"
                  >
                    <Suspense
                      fallback={
                        <span className="text-[#057A55E5]">
                          &#123;Samouraï_x88&#125;_
                        </span>
                      }
                    >
                      <AnimatedText
                        key={`alternate-${componentKey}`}
                        text="{Samouraï_x88}_"
                        el="h1"
                        className="text-4xl lg:text-[40px]"
                        blinkCount={5}
                        blinkSpeed={500}
                        onBlinkComplete={handleBlinkComplete}
                      />
                    </Suspense>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.p
              className="text-[#F98080] text-base leading-relaxed font-mono"
              variants={fadeInUp}
            >Fort d&apos;une expertise dans les technologies de
              pointe, je fournis des solutions à la fois innovantes et robustes.
            </motion.p>
          </div>
          <motion.div
            className="flex items-center flex-wrap mb-8"
            variants={container}
          >
            <div className="flex items-end flex-wrap gap-3">
              <MotionImage
                src="/icons/skills/AWS.svg"
                alt="AWS"
                className="w-14 h-14"
                width={56}
                height={56}
                variants={scaleIn}
                whileHover={{ scale: 1.2, rotate: 5 }}
              />
              <MotionImage
                src="/icons/skills/Docker.svg"
                alt="Docker"
                className="w-14 h-14"
                width={56}
                height={56}
                variants={scaleIn}
                whileHover={{ scale: 1.2, rotate: 5 }}
              />
              <MotionImage
                src="/icons/skills/Kubernetes.svg"
                alt="Kubernetes"
                className="w-14 h-14"
                width={56}
                height={56}
                variants={scaleIn}
                whileHover={{ scale: 1.2, rotate: 5 }}
              />
              <MotionImage
                src="/icons/skills/Linux.svg"
                alt="Linux"
                className="w-14 h-14"
                width={56}
                height={56}
                variants={scaleIn}
                whileHover={{ scale: 1.2, rotate: 5 }}
              />
            </div>
            <motion.span
              className="text-[#6B7280] font-mono"
              variants={fadeInUp}
            >
              ... et plus encore
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
