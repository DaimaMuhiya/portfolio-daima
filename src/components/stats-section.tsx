"use client";

import { Calendar, Monitor, Award } from "lucide-react";
import { motion } from "framer-motion";
import { container, scaleIn } from "@/lib/motionVariants";

const stats = [
  { icon: Calendar, value: "5", label: "Années d'expérience" },
  { icon: Monitor, value: "36", label: "Projets réalisés" },
  // { icon: Smile, value: "10", label: "Clients satisfaits" },
  { icon: Award, value: "2", label: "Certifications" },
];

export default function StatsSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 mb-20">
      <motion.div
        className="bg-[#121212] rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            variants={scaleIn}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 360 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <stat.icon className="w-6 h-6 text-[#057A55] mb-3 mx-auto" />
            </motion.div>
            <motion.div
              className="text-4xl font-medium text-[#D7DFEE] mb-2 font-mono"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.2 + 0.3,
              }}
              viewport={{ once: true }}
            >
              {stat.value}
            </motion.div>
            <div className="text-[#6B7280] font-mono">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
