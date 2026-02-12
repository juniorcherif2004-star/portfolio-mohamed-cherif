export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Plateforme e-commerce moderne avec panier, paiement et gestion des stocks",
    longDescription: "Application e-commerce complète développée avec Next.js et Stripe. Fonctionnalités incluent la gestion des produits, panier d'achat, traitement des paiements, tableau de bord administratif, et notifications en temps réel. Architecture microservices avec API RESTful et base de données PostgreSQL.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
    category: "Web",
    githubUrl: "https://github.com/juniorcherif2004-star/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    imageUrl: "/images/projects/ecommerce.jpg",
    featured: true,
    date: "2024-01"
  },
  {
    id: "2", 
    title: "Task Management App",
    description: "Application de gestion de tâches collaborative avec tableaux Kanban",
    longDescription: "Application de gestion de projet inspirée de Trello avec tableaux Kanban, drag & drop, collaboration en temps réel, notifications, et système de permissions. Utilisation de WebSocket pour la synchronisation en temps réel et authentification JWT.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express.js", "JWT"],
    category: "Web",
    githubUrl: "https://github.com/juniorcherif2004-star/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    imageUrl: "/images/projects/taskmanager.jpg",
    featured: true,
    date: "2023-11"
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Dashboard météo interactif avec prévisions et visualisations",
    longDescription: "Dashboard météo moderne avec prévisions détaillées, cartes interactives, graphiques de tendances, et alertes météo. Intégration de multiples APIs météo, géolocalisation, et système de favoris. Design responsive avec animations fluides.",
    technologies: ["Next.js", "Chart.js", "OpenWeather API", "Geolocation API", "Tailwind CSS"],
    category: "Web",
    githubUrl: "https://github.com/juniorcherif2004-star/weather-dashboard",
    liveUrl: "https://weather-dashboard.vercel.app",
    imageUrl: "/images/projects/weather.jpg",
    featured: false,
    date: "2023-09"
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description: "Outil d'analyse de réseaux sociaux avec dashboard et rapports",
    longDescription: "Plateforme d'analyse complète pour les réseaux sociaux avec suivi des métriques, génération de rapports personnalisés, alertes automatisées, et API d'intégration. Traitement de big data avec visualisations interactives.",
    technologies: ["Python", "React", "FastAPI", "Redis", "PostgreSQL", "D3.js"],
    category: "Analytics",
    githubUrl: "https://github.com/juniorcherif2004-star/social-analytics",
    imageUrl: "/images/projects/analytics.jpg",
    featured: true,
    date: "2023-07"
  },
  {
    id: "5",
    title: "Mobile Banking App",
    description: "Application bancaire mobile avec transactions et sécurité",
    longDescription: "Application mobile bancaire sécurisée avec gestion de comptes, virements, cartes virtuelles, et authentification biométrique. Architecture microservices avec chiffrement bout-en-bout et conformité PCI-DSS.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "Biometric Auth"],
    category: "Mobile",
    githubUrl: "https://github.com/juniorcherif2004-star/mobile-banking",
    imageUrl: "/images/projects/banking.jpg",
    featured: false,
    date: "2023-05"
  },
  {
    id: "6",
    title: "AI Content Generator",
    description: "Générateur de contenu avec IA et personnalisation",
    longDescription: "Plateforme de génération de contenu assistée par IA avec modèles personnalisables, templates, et optimisation SEO. Intégration d'OpenAI GPT-4, traitement du langage naturel, et système d'apprentissage continu.",
    technologies: ["Next.js", "OpenAI API", "Python", "TensorFlow", "PostgreSQL"],
    category: "AI/ML",
    githubUrl: "https://github.com/juniorcherif2004-star/ai-content-generator",
    liveUrl: "https://ai-content.vercel.app",
    imageUrl: "/images/projects/aigenerator.jpg",
    featured: true,
    date: "2024-02"
  }
];

export const projectCategories = [
  "All",
  "Web",
  "Mobile", 
  "Analytics",
  "AI/ML"
];
