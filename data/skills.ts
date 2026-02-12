export interface Skill {
  name: string;
  category: string;
  level: number;
  icon: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: 95, icon: "/icons/react.svg" },
  { name: "Next.js", category: "Frontend", level: 90, icon: "/icons/nextjs.svg" },
  { name: "TypeScript", category: "Frontend", level: 88, icon: "/icons/typescript.svg" },
  { name: "Tailwind CSS", category: "Frontend", level: 92, icon: "/icons/tailwindcss.svg" },
  { name: "JavaScript", category: "Frontend", level: 95, icon: "/icons/javascript.svg" },
  { name: "HTML5", category: "Frontend", level: 98, icon: "/icons/html5.svg" },
  { name: "CSS3", category: "Frontend", level: 90, icon: "/icons/css3.svg" },
  
  // Backend
  { name: "Node.js", category: "Backend", level: 85, icon: "/icons/nodejs.svg" },
  { name: "Python", category: "Backend", level: 80, icon: "/icons/python.svg" },
  { name: "PostgreSQL", category: "Backend", level: 75, icon: "/icons/postgresql.svg" },
  { name: "MongoDB", category: "Backend", level: 82, icon: "/icons/mongodb.svg" },
  { name: "Express.js", category: "Backend", level: 88, icon: "/icons/express.svg" },
  
  // Tools & DevOps
  { name: "Git", category: "Tools", level: 92, icon: "/icons/git.svg" },
  { name: "Docker", category: "Tools", level: 78, icon: "/icons/docker.svg" },
  { name: "AWS", category: "Tools", level: 70, icon: "/icons/aws.svg" },
  { name: "Vercel", category: "Tools", level: 85, icon: "/icons/vercel.svg" },
  { name: "Figma", category: "Tools", level: 75, icon: "/icons/figma.svg" },
  
  // Mobile
  { name: "React Native", category: "Mobile", level: 72, icon: "/icons/reactnative.svg" },
  { name: "Flutter", category: "Mobile", level: 65, icon: "/icons/flutter.svg" },
  
  // Testing
  { name: "Jest", category: "Testing", level: 80, icon: "/icons/jest.svg" },
  { name: "Cypress", category: "Testing", level: 75, icon: "/icons/cypress.svg" },
];

export const skillCategories = [
  "Frontend",
  "Backend", 
  "Tools",
  "Mobile",
  "Testing"
];
