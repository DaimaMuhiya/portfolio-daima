"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type React from "react";

interface AnimatedTextProps {
  text: string;
  el?: keyof React.JSX.IntrinsicElements;
  className?: string;
  blinkCount?: number;
  blinkSpeed?: number;
  onBlinkComplete?: () => void;
}

export default function AnimatedText({
  text,
  el: Wrapper = "p",
  className,
  blinkCount = 5,
  blinkSpeed = 500,
  onBlinkComplete,
}: AnimatedTextProps) {
  const [showUnderscore, setShowUnderscore] = useState(true);

  useEffect(() => {
    let blinkCounter = 0;
    let mounted = true;

    const blinkInterval = setInterval(() => {
      if (!mounted) {
        clearInterval(blinkInterval);
        return;
      }

      setShowUnderscore((prev) => {
        const newValue = !prev;

        // Compter seulement quand l'underscore réapparaît
        if (newValue) {
          blinkCounter++;
          if (blinkCounter > blinkCount) {
            clearInterval(blinkInterval);
            // Notifier le parent que le cycle est terminé
            setTimeout(() => {
              if (mounted && onBlinkComplete) {
                onBlinkComplete();
              }
            }, blinkSpeed);
          }
        }

        return newValue;
      });
    }, blinkSpeed);

    return () => {
      mounted = false;
      clearInterval(blinkInterval);
    };
  }, [blinkCount, blinkSpeed, onBlinkComplete]);

  // Séparer le texte et l'underscore
  const textWithoutUnderscore = text.replace(/_$/, "");
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

  return (
    <Wrapper className={className}>
      <motion.span
        style={{ display: "inline-block" }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={`${text}-${index}`}
            style={{ display: "inline-block" }}
            variants={letterAnimation}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
        <motion.span
          style={{ display: "inline-block" }}
          animate={{ opacity: showUnderscore ? 1 : 0 }}
          transition={{ duration: 0.1 }}
        >
          _
        </motion.span>
      </motion.span>
    </Wrapper>
  );
}
