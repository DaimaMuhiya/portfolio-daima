import {
  Globe,
  Database,
  Zap,
  RefreshCw,
  ShoppingCart,
  Brain,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Développement d'applications web et mobiles",
    description:
      "Création d'interfaces visuellement attrayantes et conviviales grace au technologies modernes.",
  },
  {
    icon: Database,
    title: "Création & gestion de base de données",
    description:
      "Création de bases de données performantes et sécurisées pour stocker et gérer vos données.",
  },
  {
    icon: Zap,
    title: "Développement d'API",
    description:
      "Création d'API performantes et sécurisées pour connecter vos applications et services.",
  },
  {
    icon: RefreshCw,
    title: "Optimisation de performance",
    description:
      "Optimisation des performances de vos applications et sites web pour une meilleure expérience utilisateur.",
  },
  {
    icon: ShoppingCart,
    title: "Création de sites e-commerce",
    description:
      "Création de sites e-commerce performants et sécurisés pour vendre vos produits en ligne.",
  },
  {
    icon: Brain,
    title: "Intégration d'IA",
    description:
      "Intégration d'IA pour améliorer la performance de vos applications et sites web.",
  },
];

export default function ServicesSection() {
  const router = useRouter();
  // Animation pour les boutons
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };
  return (
    <section className="max-w-[1200px] mx-auto px-5 mb-20">
      <div className="bg-[#121212] border border-[#2F343C] rounded-xl p-10">
        <div className="text-center mb-8">
          <span className="text-[#057A55] font-mono">Ce que je propose</span>
          <h2 className="text-2xl font-medium text-white mt-1 font-mono max-w-2xl mx-auto">
            Création de solutions personnalisées pour répondre à vos besoins
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <div key={index} className="border border-[#1F2A37] rounded-xl p-6">
              <service.icon className="w-6 h-6 text-[#6B7280] mb-3" />
              <h3 className="text-xl font-medium text-white mb-2 font-mono">
                {service.title}
              </h3>
              <p className="text-[#6B7280] text-sm font-mono">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-[#6B7280] text-sm font-mono">
            Envie de vous lancer dans de nouveaux projets et collaborations ?
            Parlons de vos idées.{" "}
            <motion.span
              className="text-[#057A55] cursor-pointer underline underline-offset-4 decoration"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                // Vérifie si nous sommes déjà sur la page d'accueil
                if (window.location.pathname === "/") {
                  // Fait défiler jusqu'à la section Contacts
                  document.getElementById("contacts")?.scrollIntoView({
                    behavior: "smooth",
                  });
                } else {
                  // Rediriger vers la page d'accueil avec l'ancre
                  router.push("/#contacts");
                }
              }}
            >
              Contactez-moi
            </motion.span>
          </p>
        </div>
      </div>
    </section>
  );
}
