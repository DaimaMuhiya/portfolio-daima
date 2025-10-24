export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  date: string;
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

// Technology icons and colors mapping
export const techStack: Record<
  string,
  {
    icon: string;
    color: string;
    name: string;
  }
> = {
  "Next.js": {
    icon: "/icons/skills/Next.js.svg",
    color: "#000000",
    name: "Next.js",
  },
  TypeScript: {
    icon: "/icons/skills/TypeScript.svg",
    color: "#3178C6",
    name: "TypeScript",
  },
  "Tailwind CSS": {
    icon: "/icons/skills/Tailwind CSS.svg",
    color: "#06B6D4",
    name: "Tailwind",
  },
  "GitHub API": {
    icon: "/icons/skills/GitHub.svg",
    color: "#24292E",
    name: "GitHub API",
  },
  React: { icon: "/icons/skills/React.svg", color: "#61DAFB", name: "React" },
  "Node.js": {
    icon: "/icons/skills/Node.js.svg",
    color: "#339933",
    name: "Node.js",
  },
  MongoDB: {
    icon: "/icons/skills/MongoDB.svg",
    color: "#47A248",
    name: "MongoDB",
  },
  Stripe: { icon: "💳", color: "#635BFF", name: "Stripe" },
  Redux: { icon: "/icons/skills/Redux.svg", color: "#764ABC", name: "Redux" },
  "Vue.js": {
    icon: "/icons/skills/Vue.js.svg",
    color: "#4FC08D",
    name: "Vue.js",
  },
  Firebase: {
    icon: "/icons/skills/Firebase.svg",
    color: "#FFCA28",
    name: "Firebase",
  },
  Vuex: { icon: "/icons/skills/Vue.js.svg", color: "#4FC08D", name: "Vuex" },
  "Socket.io": { icon: "🔌", color: "#010101", name: "Socket.io" },
  "Chart.js": { icon: "📊", color: "#FF6384", name: "Chart.js" },
  "OpenWeatherMap API": { icon: "🌤️", color: "#EB6E4B", name: "Weather API" },
  Prisma: { icon: "P", color: "#2D3748", name: "Prisma" },
  PostgreSQL: {
    icon: "/icons/skills/PostgresSQL.svg",
    color: "#336791",
    name: "PostgreSQL",
  },
  Express: {
    icon: "/icons/skills/Express.svg",
    color: "#000000",
    name: "Express",
  },
  WebRTC: { icon: "📹", color: "#333333", name: "WebRTC" },
  "React Native": {
    icon: "/icons/skills/React.svg",
    color: "#61DAFB",
    name: "React Native",
  },
  Angular: {
    icon: "/icons/skills/AngularJS.svg",
    color: "#DD0031",
    name: "Angular",
  },
  RxJS: { icon: "🔀", color: "#B7178C", name: "RxJS" },
  "Spoonacular API": { icon: "🍽️", color: "#4CAF50", name: "Spoonacular" },
  Vuetify: {
    icon: "/icons/skills/Vue.js.svg",
    color: "#1867C0",
    name: "Vuetify",
  },
  "Web Audio API": { icon: "🎵", color: "#FF6B6B", name: "Web Audio" },
  IndexedDB: { icon: "💾", color: "#FFA500", name: "IndexedDB" },
};

export const projects: Project[] = [
  {
    id: "optsolution",
    title: "OptSolution",
    description:
      "Plateforme numérique de gestion académique et administrative pour les établissements d’enseignement supérieur en RDC.",
    longDescription:
      "OptSolution est une solution web complète permettant la gestion intégrée des inscriptions, paiements, résultats et documents académiques. Conçue pour moderniser les établissements universitaires congolais, elle intègre des fonctionnalités de suivi en temps réel, génération sécurisée de documents (QR Code) et interconnexion avec les services bancaires et institutionnels.",
    image: "/projects/optsolution.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    date: "2024-11",
    category: "Système",
    githubUrl: "",
    liveUrl: "https://www.optsolution.cd/",
    featured: true,
  },
  {
    id: "eale-express-fret",
    title: "EALE Express Fret",
    description:
      "Système de gestion de fret et de logistique pour le suivi des expéditions, clients et facturation en ligne.",
    longDescription:
      "Plateforme web mise en place pour EALE Express Fret, permettant la gestion complète des expéditions (air, mer), le suivi en temps réel, la facturation en ligne ainsi que l’administration des clients et des documents logistiques.",
    image: "/projects/eale_express.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Base de données",
    ],
    date: "2024-XX",
    category: "Système",
    githubUrl: "",
    liveUrl: "https://www.eale-express-fret.com/",
    featured: true,
  },
  {
    id: "task-manager",
    title: "Gestionnaire de Tâches Collaboratif",
    description:
      "Application de gestion de tâches en équipe avec collaboration en temps réel",
    longDescription:
      "Application collaborative inspirée de Trello permettant la gestion de projets avec des tableaux Kanban. Fonctionnalités de drag & drop, assignation de tâches, commentaires, et notifications en temps réel.",
    image: "/projects/taskmanager.jpg",
    technologies: ["Vue.js", "Firebase", "Vuex", "Socket.io"],
    date: "2024-06",
    category: "Web",
    githubUrl: "https://github.com/DaimaMuhiya/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    featured: true,
  },
  {
    id: "weather-dashboard",
    title: "Tableau de Bord Météo",
    description:
      "Application météo avec prévisions détaillées et visualisations graphiques",
    longDescription:
      "Dashboard météorologique moderne avec prévisions sur 7 jours, alertes météo, graphiques interactifs, et géolocalisation automatique. Utilise l'API OpenWeatherMap pour des données en temps réel.",
    image: "/projects/weather.jpg",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeatherMap API"],
    date: "2024-05",
    category: "Web",
    githubUrl: "https://github.com/DaimaMuhiya/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    featured: false,
  },
  {
    id: "blog-cms",
    title: "Système de Gestion de Blog",
    description: "CMS complet pour la création et gestion de contenu de blog",
    longDescription:
      "Système de gestion de contenu avec éditeur Markdown, gestion des médias, catégories, tags, commentaires, et SEO optimisé. Interface d'administration intuitive et prévisualisation en temps réel.",
    image: "/projects/blog-cms.jpg",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    date: "2024-04",
    category: "Système",
    githubUrl: "https://github.com/DaimaMuhiya/blog-cms",
    featured: false,
  },
  {
    id: "chat-application",
    title: "Application de Chat en Temps Réel",
    description:
      "Messagerie instantanée avec salons de discussion et appels vidéo",
    longDescription:
      "Application de chat en temps réel avec messagerie instantanée, création de salons, partage de fichiers, et appels vidéo. Architecture WebSocket pour une communication fluide et notifications push.",
    image: "/projects/chat-app.jpg",
    technologies: ["React", "Socket.io", "Node.js", "WebRTC", "Express"],
    date: "2024-03",
    category: "Web",
    githubUrl: "https://github.com/DaimaMuhiya/chat-application",
    featured: true,
  },
  {
    id: "salongo-app",
    title: "Salongo App",
    description:
      "Application de suivi d'activités sportives avec statistiques détaillées",
    longDescription:
      "Application de suivi de fitness permettant l'enregistrement d'exercices, calcul de calories, suivi de progression, et objectifs personnalisés. Graphiques et statistiques détaillées pour analyser les performances.",
    image: "/projects/salongoApp.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    date: "2024-02",
    category: "Mobile",
    githubUrl: "https://github.com/DaimaMuhiya/salongo-app",
    featured: false,
  },
  {
    id: "recipe-finder",
    title: "Recherche de Recettes",
    description: "Plateforme de découverte de recettes avec filtres avancés",
    longDescription:
      "Application de recherche et découverte de recettes culinaires avec filtres par ingrédients, temps de préparation, niveau de difficulté. Sauvegarde de favoris et liste de courses automatique.",
    image: "/projects/recipes.jpg",
    technologies: ["Angular", "TypeScript", "RxJS", "Spoonacular API"],
    date: "2024-01",
    category: "Web",
    githubUrl: "https://github.com/DaimaMuhiya/recipe-finder",
    featured: false,
  },
  {
    id: "expense-tracker",
    title: "Gestionnaire de Dépenses",
    description:
      "Application de suivi des finances personnelles avec visualisations",
    longDescription:
      "Gestionnaire de finances personnelles permettant le suivi des dépenses et revenus, catégorisation automatique, budgets mensuels, et rapports financiers détaillés avec graphiques.",
    image: "/projects/expense-tracker.jpg",
    technologies: ["Vue.js", "Vuetify", "Firebase", "Chart.js"],
    date: "2023-12",
    category: "Web",
    githubUrl: "https://github.com/DaimaMuhiya/expense-tracker",
    featured: false,
  },
  {
    id: "music-player",
    title: "Lecteur de Musique",
    description: "Player audio moderne avec playlists et égaliseur",
    longDescription:
      "Lecteur de musique web avec lecture de fichiers locaux, création de playlists, égaliseur graphique, visualisations audio, et mode shuffle/repeat. Interface inspirée de Spotify.",
    image: "/projects/music-player.jpg",
    technologies: ["React", "Web Audio API", "IndexedDB", "Tailwind CSS"],
    date: "2023-11",
    category: "Web",
    githubUrl: "https://github.com/DaimaMuhiya/music-player",
    featured: false,
  },
  {
    id: "CraftStore",
    title: "Craft Store",
    description:
      "Boutique en ligne d’artisanat avec système de paiement international et interface moderne.",
    longDescription:
      "Craft Store est une plateforme e-commerce dédiée à la vente d’articles d’artisanat local. Le système intègre un module de paiement international sécurisé, la gestion complète du catalogue (produits, commandes, utilisateurs) et une interface fluide et responsive optimisée pour l’expérience client.",
    image: "/projects/craft_store.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe API",
      "PostgreSQL",
    ],
    date: "2024-09",
    category: "E-commerce",
    githubUrl: "",
    liveUrl: "https://www.craftstore.com/",
    featured: false,
  },
  {
    id: "gecan",
    title: "Gestion Électronique de Courrier et d’Archivage Numérique",
    description:
      "Application web de gestion du courrier administratif et d’archivage numérique, avec traçabilité complète et stockage sécurisé.",
    longDescription:
      "Cette solution permet la gestion électronique du courrier entrant et sortant au sein d’une institution publique ou privée. Elle offre des fonctionnalités de suivi des correspondances, de classification des documents, d’archivage numérique, de recherche avancée et de gestion des utilisateurs avec différents niveaux d’accès. L’application vise à améliorer la productivité, la traçabilité et la dématérialisation des échanges administratifs.",
    image: "/projects/gec.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    date: "2024-06",
    category: "Système",
    githubUrl: "",
    liveUrl: "",
    featured: false,
  },
];

export const categories = ["Tous", "Web", "Mobile", "E-commerce", "Système"];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "Tous") {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}
