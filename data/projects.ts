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
    title: "Jeu de Combat - Ippo vs Challenger",
    description: "Jeu de combat textuel programmé en JavaScript avec système de rounds et techniques",
    longDescription: "Premier projet de programmation réalisé en JavaScript. Un jeu de combat textuel mettant en scène deux combattants avec des caractéristiques différentes (force, défense, stamina, vitesse). Le jeu inclut un système de rounds, des techniques avec bonus, des coups critiques aléatoires, et une gestion de la stamina. J'ai appris les bases de la programmation : les objets, les fonctions, les conditions, les boucles, et la logique algorithmique. Ce projet m'a initié à la structure de code et à la résolution de problèmes.",
    technologies: ["JavaScript", "Algorithmes", "Logique de programmation", "Objets"],
    category: "Learning",
    githubUrl: "https://github.com/juniorcherif2004-star/combat-game",
    imageUrl: "/images/projects/combat.jpg",
    featured: true,
    date: "2025-10-19"
  },
  {
    id: "2",
    title: "Portfolio Web Personnel",
    description: "Mon portfolio moderne développé avec React, Next.js et Tailwind CSS",
    longDescription: "Ce portfolio présente mes compétences et projets réalisés durant ma formation à Digital Campus Paris. Développé avec React, Next.js, TypeScript et Tailwind CSS. Inclut des animations fluides, un mode sombre/clair, et un design responsive. J'ai utilisé l'IA pour optimiser le développement et l'apprentissage des meilleures pratiques.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web",
    githubUrl: "https://github.com/juniorcherif2004-star/portfolio",
    liveUrl: "https://portfolio-mohamed-cherif.vercel.app",
    imageUrl: "/images/projects/portfolio.jpg",
    featured: true,
    date: "2024-02"
  },
  {
    id: "3",
    title: "API REST avec Node.js",
    description: "API RESTful complète avec Node.js, Express.js et MongoDB",
    longDescription: "Projet académique consistant à créer une API REST complète pour une application de gestion de tâches. Utilisation de Node.js, Express.js, MongoDB avec Mongoose. Implémentation de l'authentification JWT, validation des données, et documentation avec Swagger. J'ai appris les principes REST et les bonnes pratiques de développement backend.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Swagger"],
    category: "Backend",
    githubUrl: "https://github.com/juniorcherif2004-star/task-api",
    imageUrl: "/images/projects/api.jpg",
    featured: true,
    date: "2024-01"
  },
  {
    id: "4",
    title: "Application React avec TypeScript",
    description: "Application web interactive avec React, TypeScript et intégration d'API",
    longDescription: "Application de gestion de dépenses personnelles développée avec React et TypeScript. Connectée à une API Node.js/Express, elle permet de suivre les dépenses, les catégoriser et générer des statistiques. J'ai appris à utiliser les hooks React, la gestion d'état, et l'intégration d'API externes.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "Chart.js"],
    category: "Web",
    githubUrl: "https://github.com/juniorcherif2004-star/expense-tracker",
    imageUrl: "/images/projects/expense.jpg",
    featured: false,
    date: "2023-12"
  },
  {
    id: "5",
    title: "Site Web avec HTML/CSS/JavaScript",
    description: "Site web responsive avec HTML5, CSS3 et JavaScript vanilla",
    longDescription: "Premier projet web important consistant à créer un site vitrine pour une petite entreprise. Utilisation de HTML5 sémantique, CSS3 avec Flexbox/Grid, et JavaScript vanilla pour l'interactivité. J'ai appris les bases du développement web et les principes du responsive design.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "Web",
    githubUrl: "https://github.com/juniorcherif2004-star/business-website",
    imageUrl: "/images/projects/business.jpg",
    featured: false,
    date: "2023-11"
  },
  {
    id: "6",
    title: "Mini-projet NestJS",
    description: "Exploration de NestJS pour créer une API structurée et modulaire",
    longDescription: "Petit projet d'exploration de NestJS pour comprendre l'architecture basée sur les modules et les décorateurs. Création d'une API simple avec des contrôleurs, services et repositories. J'ai découvert les avantages de TypeScript côté serveur et la structure imposée par NestJS.",
    technologies: ["NestJS", "TypeScript", "MongoDB", "Decorators"],
    category: "Backend",
    githubUrl: "https://github.com/juniorcherif2004-star/nestjs-starter",
    imageUrl: "/images/projects/nestjs.jpg",
    featured: false,
    date: "2023-10"
  },
  {
    id: "7",
    title: "Exercices JavaScript et React",
    description: "Collection d'exercices et mini-projets pour pratiquer JavaScript et React",
    longDescription: "Répertoire GitHub contenant mes exercices d'apprentissage en JavaScript et React. Inclut des algorithmes, des composants React réutilisables, des hooks personnalisés, et des mini-projets. J'utilise l'IA pour générer des exercices et obtenir des corrections optimisées.",
    technologies: ["JavaScript", "React", "TypeScript", "Algorithmes"],
    category: "Learning",
    githubUrl: "https://github.com/juniorcherif2004-star/js-react-exercises",
    imageUrl: "/images/projects/exercises.jpg",
    featured: false,
    date: "2023-09"
  }
];

export const projectCategories = [
  "All",
  "Web",
  "Backend",
  "Learning"
];
