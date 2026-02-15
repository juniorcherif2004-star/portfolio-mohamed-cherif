export interface Skill {
  name: string;
  category: string;
  level: number;
  icon: string;
  description: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: 85, icon: "/icons/react.svg", description: "Composants, hooks, état, routing, création d'interfaces interactives" },
  { name: "HTML5", category: "Frontend", level: 90, icon: "/icons/html5.svg", description: "Structure sémantique, formulaires, accessibilité, balises modernes" },
  { name: "CSS3", category: "Frontend", level: 85, icon: "/icons/css3.svg", description: "Flexbox, Grid, animations, responsive design, pseudo-éléments" },
  { name: "Tailwind CSS", category: "Frontend", level: 80, icon: "/icons/tailwindcss.svg", description: "Utility-first, responsive, dark mode, personnalisation, composants" },
  { name: "JavaScript", category: "Frontend", level: 85, icon: "/icons/javascript.svg", description: "ES6+, async/await, DOM, événements, manipulation de données" },
  { name: "TypeScript", category: "Frontend", level: 75, icon: "/icons/typescript.svg", description: "Types, interfaces, génériques, configuration tsconfig" },
  
  // Backend
  { name: "Node.js", category: "Backend", level: 80, icon: "/icons/nodejs.svg", description: "Modules, npm, filesystem, événements, streams, environnement" },
  { name: "Express.js", category: "Backend", level: 75, icon: "/icons/express.svg", description: "Routes, middleware, API REST, gestion des erreurs, templates" },
  { name: "NestJS", category: "Backend", level: 70, icon: "/icons/nestjs.svg", description: "Architecture modulaire, décorateurs, injection de dépendances, modules" },
  { name: "MongoDB", category: "Backend", level: 75, icon: "/icons/mongodb.svg", description: "NoSQL, documents, schémas, agrégations, Mongoose ODM" },
  
  // Tools & DevOps
  { name: "Git", category: "Tools", level: 80, icon: "/icons/git.svg", description: "Branches, commits, merge, pull requests, workflow Git" },
  { name: "VS Code", category: "Tools", level: 90, icon: "/icons/vscode.svg", description: "Extensions, debugging, terminal, snippets, configuration" },
  
  // AI & Development
  { name: "ChatGPT", category: "AI", level: 85, icon: "/icons/chatgpt.svg", description: "Génération de code, debugging, explications, optimisation, apprentissage" },
  { name: "GitHub Copilot", category: "AI", level: 80, icon: "/icons/copilot.svg", description: "Auto-complétion, suggestions, refactoring, documentation, productivité" }
];

export const skillCategories = [
  "Frontend",
  "Backend", 
  "Tools",
  "AI"
];
