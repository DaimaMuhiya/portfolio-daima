"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type React from "react";

interface AnimatedTextProps {
  text: string;
  alternateText?: string;
  el?: keyof React.JSX.IntrinsicElements;
  className?: string;
  blinkCount?: number;
  blinkSpeed?: number;
  onCycleChange?: (isAlternate: boolean) => void;
}

export default function AnimatedText({
  text,
  alternateText,
  el: Wrapper = "p",
  className,
  blinkCount = 5,
  blinkSpeed = 500,
  onCycleChange,
}: AnimatedTextProps) {
  const [currentText, setCurrentText] = useState(text);
  const [showUnderscore, setShowUnderscore] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAlternate, setIsAlternate] = useState(false);

  useEffect(() => {
    let blinkCounter = 0;
    let mounted = true;

    const startBlinkCycle = () => {
      blinkCounter = 0;
      const blinkInterval = setInterval(() => {
        if (!mounted) {
          clearInterval(blinkInterval);
          return;
        }

        setShowUnderscore((prev) => {
          if (!prev) {
            blinkCounter++;
            if (blinkCounter >= blinkCount) {
              clearInterval(blinkInterval);
              // Attendre avant de changer le texte
              setTimeout(() => {
                if (!mounted) return;

                setIsAnimating(true);
                // Notifier le parent pour masquer/afficher les autres éléments
                const nextIsAlternate = !isAlternate;
                setIsAlternate(nextIsAlternate);
                onCycleChange?.(nextIsAlternate);

                // Changer le texte après une courte pause
                setTimeout(() => {
                  if (!mounted) return;

                  if (nextIsAlternate && alternateText) {
                    setCurrentText(alternateText);
                  } else {
                    setCurrentText(text);
                  }
                  setShowUnderscore(true);
                  setIsAnimating(false);

                  // Relancer le cycle
                  setTimeout(() => {
                    if (mounted) startBlinkCycle();
                  }, 1000);
                }, 300);
              }, blinkSpeed);
            }
          }
          return !prev;
        });
      }, blinkSpeed);
    };

    startBlinkCycle();

    return () => {
      mounted = false;
    };
  }, [blinkCount, blinkSpeed, alternateText, text, isAlternate, onCycleChange]);

  // Séparer le texte et l'underscore
  const textWithoutUnderscore = currentText.replace(/_$/, "");
  const letters = Array.from(textWithoutUnderscore);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const underscoreAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Wrapper className={className}>
      <motion.span
        style={{ display: "inline-block" }}
        variants={container}
        initial={isAnimating ? "hidden" : "visible"}
        animate={isAnimating ? "visible" : "visible"}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={`${currentText}-${index}`}
            style={{ display: "inline-block" }}
            variants={
              isAnimating ? letterAnimation : { visible: { opacity: 1 } }
            }
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
        <motion.span
          style={{ display: "inline-block" }}
          variants={underscoreAnimation}
          animate={showUnderscore ? "visible" : "hidden"}
          transition={{ duration: 0.1 }}
        >
          _
        </motion.span>
      </motion.span>
    </Wrapper>
  );
}
