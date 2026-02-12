export interface Skill {
  name: string;
  category: string;
  level: number;
  icon: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: 85, icon: "/icons/react.svg" },
  { name: "HTML5", category: "Frontend", level: 90, icon: "/icons/html5.svg" },
  { name: "CSS3", category: "Frontend", level: 85, icon: "/icons/css3.svg" },
  { name: "Tailwind CSS", category: "Frontend", level: 80, icon: "/icons/tailwindcss.svg" },
  { name: "JavaScript", category: "Frontend", level: 85, icon: "/icons/javascript.svg" },
  { name: "TypeScript", category: "Frontend", level: 75, icon: "/icons/typescript.svg" },
  
  // Backend
  { name: "Node.js", category: "Backend", level: 80, icon: "/icons/nodejs.svg" },
  { name: "Express.js", category: "Backend", level: 75, icon: "/icons/express.svg" },
  { name: "NestJS", category: "Backend", level: 70, icon: "/icons/nestjs.svg" },
  { name: "MongoDB", category: "Backend", level: 75, icon: "/icons/mongodb.svg" },
  
  // Tools & DevOps
  { name: "Git", category: "Tools", level: 80, icon: "/icons/git.svg" },
  { name: "VS Code", category: "Tools", level: 90, icon: "/icons/vscode.svg" },
  
  // AI & Development
  { name: "ChatGPT", category: "AI", level: 85, icon: "/icons/chatgpt.svg" },
  { name: "GitHub Copilot", category: "AI", level: 80, icon: "/icons/copilot.svg" }
];

export const skillCategories = [
  "Frontend",
  "Backend", 
  "Tools",
  "AI"
];
