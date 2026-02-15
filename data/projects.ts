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
    githubUrl: "https://github.com/juniorcherif2004-star/Tp_combat_ippo-_vs_chalenger",
    imageUrl: "/images/projects/combat.jpg",
    featured: true,
    date: "2025-10-19"
  }
];

export const projectCategories = [
  "All",
  "Learning"
];
