import type { Variants } from "framer-motion";

export const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1] as const, // cubic-bezier(0.42, 0, 0.58, 1) for easeOut
    },
  },
};

export const float: Variants = {
  hidden: { y: 0 },
  hover: {
    y: [-4, 4],
    transition: {
      repeat: Infinity,
      repeatType: "reverse" as const, // use const assertion to fix type
      duration: 2,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  },
};
