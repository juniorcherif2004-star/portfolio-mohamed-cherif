# Portfolio - Mohamed Cherif Junior

Portfolio web moderne et interactif développé avec Next.js, React, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design Moderne**: Interface épurée et professionnelle avec animations fluides
- **Mode Sombre/Clair**: Thème adaptable avec persistance localStorage
- **Responsive Design**: Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Navigation Intuitive**: Navbar sticky avec scroll spy et menu mobile
- **Projets Interactifs**: Filtres par technologie, modal détails, liens GitHub/live
- **Formulaire de Contact**: Validation complète avec notifications toast
- **Animations**: Transitions Framer Motion, effets hover, scroll animations
- **SEO Optimisé**: Meta tags, OpenGraph, structure sémantique
- **Performance**: Lazy loading, image optimization, code splitting

## 🛠️ Technologies

### Frontend
- **Next.js 14** - Framework React avec App Router
- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations et transitions
- **Lucide React** - Icônes modernes

### Outils
- **ESLint** - Linting du code
- **PostCSS** - Processing CSS
- **Autoprefixer** - Compatibilité navigateurs

## 📁 Structure du Projet

```
portfolio/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx          # Layout racine
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Styles globaux
│   ├── loading.tsx         # Page de chargement
│   └── error.tsx           # Page d'erreur
├── components/             # Composants React
│   ├── Navbar.tsx          # Barre de navigation
│   ├── Hero.tsx            # Section hero
│   ├── About.tsx           # Section à propos
│   ├── Skills.tsx          # Section compétences
│   ├── Projects.tsx        # Section projets
│   ├── Experience.tsx      # Section expérience
│   ├── Contact.tsx         # Section contact
│   ├── Footer.tsx          # Pied de page
│   ├── ThemeToggle.tsx     # Bouton thème
│   └── ThemeProvider.tsx   # Contexte thème
├── data/                   # Données statiques
│   ├── profile.ts          # Profil utilisateur
│   ├── projects.ts         # Projets
│   └── skills.ts          # Compétences
├── lib/                    # Utilitaires
│   └── utils.ts           # Fonctions utilitaires
├── public/                 # Fichiers statiques
│   └── images/            # Images du site
├── package.json            # Dépendances
├── tsconfig.json          # Configuration TypeScript
├── tailwind.config.js     # Configuration Tailwind
└── README.md              # Documentation
```

## 🚀 Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/juniorcherif2004-star/portfolio.git
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir le navigateur**
   ```
   http://localhost:3000
   ```

## 📜 Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build pour production
- `npm run start` - Serveur production
- `npm run lint` - Linting du code

## 🎨 Personnalisation

### Profil Utilisateur
Modifier les informations dans `data/profile.ts`:
```typescript
export const profile: Profile = {
  name: "Votre Nom",
  title: "Votre Titre",
  email: "votre@email.com",
  phone: "06 12 34 56 78",
  linkedin: "https://linkedin.com/in/votre-profil",
  github: "https://github.com/votre-username",
  // ...
};
```

### Projets
Ajouter/modifier les projets dans `data/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Nom du Projet",
    description: "Description courte",
    longDescription: "Description détaillée",
    technologies: ["React", "Node.js", "TypeScript"],
    category: "Web",
    githubUrl: "https://github.com/...",
    liveUrl: "https://votre-projet.com",
    imageUrl: "/images/projects/projet.jpg",
    featured: true,
    date: "2024-01"
  },
  // ...
];
```

### Compétences
Mettre à jour les compétences dans `data/skills.ts`:
```typescript
export const skills: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    level: 95,
    icon: "⚛️"
  },
  // ...
];
```

### Thème et Styles
- Personnaliser les couleurs dans `tailwind.config.js`
- Modifier les styles globaux dans `app/globals.css`
- Ajuster les animations dans les composants

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connecter le dépôt GitHub à Vercel
2. Configurer les variables d'environnement si nécessaire
3. Déployer automatiquement

### GitHub Pages
1. Build le projet: `npm run build`
2. Copier le contenu du dossier `out/`
3. Configurer GitHub Pages pour servir depuis `gh-pages`

### Autres Plateformes
Le projet est compatible avec:
- Netlify
- AWS Amplify
- Firebase Hosting
- Tout service supportant les builds Next.js

## 🔧 Configuration

### Variables d'Environnement
Créer un fichier `.env.local`:
```env
NEXT_PUBLIC_GITHUB_TOKEN=votre_token_github
NEXT_PUBLIC_EMAIL_SERVICE=votre_service_email
```

### TypeScript
La configuration TypeScript est dans `tsconfig.json` avec:
- Strict mode activé
- Chemins absoluts configurés
- Support des derniers standards

### ESLint
Règles configurées pour:
- Next.js recommandations
- TypeScript strict
- Bonnes pratiques React

## 📱 Compatibilité

- **Navigateurs**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Appareils**: Mobile (iOS 12+, Android 8+), Tablet, Desktop
- **Performance**: Score 95+ Lighthouse

## 🤝 Contribuer

1. Forker le projet
2. Créer une branche feature: `git checkout -b feature/nouvelle-fonctionnalite`
3. Commiter les changements: `git commit -m 'Ajout nouvelle fonctionnalité'`
4. Pusher: `git push origin feature/nouvelle-fonctionnalite`
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Email**: juniorcherif2004@gmail.com
- **Téléphone**: 0767247415
- **LinkedIn**: https://www.linkedin.com/in/mohamed-cherif-18166739a/
- **GitHub**: https://github.com/juniorcherif2004-star

---

Développé avec ❤️ par Mohamed Cherif Junior
