# Messagerie en Temps Réel - Portfolio Mohamed Cherif

## 🚀 Fonctionnalités

### Chat Visiteur
- **Interface de chat flottante** accessible depuis n'importe quelle page du portfolio
- **Inscription simple** avec nom, email et téléphone
- **Messages en temps réel** avec WebSocket (Socket.io)
- **Indicateurs de connexion** et notifications de saisie
- **Design responsive** avec animations fluides (Framer Motion)
- **Mode sombre/clair** compatible avec le thème du portfolio

### Panneau d'Administration
- **Interface sécurisée** avec authentification par mot de passe
- **Visualisation des messages** en temps réel
- **Statistiques du chat** (nombre de messages, utilisateurs connectés)
- **Réponses directes** aux visiteurs
- **Historique complet** des conversations

## 🛠️ Installation et Démarrage

### Prérequis
- Node.js 18+ installé
- npm ou yarn

### Installation des dépendances
```bash
npm install
```

### Démarrage complet (Portfolio + Serveur WebSocket)
```bash
npm run dev:full
```

### Démarrage séparé
```bash
# Terminal 1: Serveur WebSocket
npm run server

# Terminal 2: Portfolio Next.js
npm run dev
```

## 📡 Configuration du Serveur

Le serveur WebSocket fonctionne sur le port **3001** par défaut.

### Variables d'environnement
```bash
# Mot de passe admin (optionnel, défaut: admin123)
ADMIN_PASSWORD=votre_mot_de_passe_securise

# Port du serveur WebSocket (optionnel, défaut: 3001)
SOCKET_PORT=3001
```

## 🌐 Accès aux Interfaces

### Portfolio avec Chat
- URL: `http://localhost:3000`
- Le bouton de chat apparaît en bas à droite de l'écran

### Panneau d'Administration
- URL: `http://localhost:3000/chat`
- Mot de passe par défaut: `admin123`

### API du Serveur
- Status: `http://localhost:3001/status`
- Messages: `http://localhost:3001/api/messages`

## 💡 Utilisation

### Pour les Visiteurs
1. Cliquez sur l'icône de message en bas à droite
2. Remplissez le formulaire d'inscription (nom, email, téléphone)
3. Commencez à discuter en temps réel
4. Recevez des réponses immédiates si l'admin est connecté

### Pour l'Administrateur
1. Accédez à `/chat` dans votre navigateur
2. Entrez le mot de passe admin
3. Visualisez et répondez aux messages en temps réel
4. Consultez les statistiques d'utilisation

## 🔧 Architecture Technique

### Frontend (Next.js)
- **React 18** avec TypeScript
- **Socket.io Client** pour la communication WebSocket
- **Framer Motion** pour les animations
- **Tailwind CSS** pour le style
- **Lucide React** pour les icônes

### Backend (Node.js)
- **Express.js** comme serveur HTTP
- **Socket.io** pour la communication WebSocket
- **CORS** configuré pour le développement local
- **Stockage en mémoire** des messages (pour démo)

### Composants Principaux
- `Chat.tsx` - Interface de chat pour les visiteurs
- `AdminChat.tsx` - Panneau d'administration
- `socket-server.js` - Serveur WebSocket

## 🚨 Sécurité

### En Production
- Changer le mot de passe admin par défaut
- Utiliser HTTPS pour les connexions WebSocket
- Implémenter une persistance des messages (base de données)
- Ajouter une authentification plus robuste (JWT)
- Limiter le nombre de connexions par IP

## 🔄 Déploiement

### Vercel (Frontend)
Le portfolio Next.js peut être déployé sur Vercel comme d'habitude.

### Serveur WebSocket
Pour la production, déployez le serveur sur:
- Heroku
- Railway
- AWS EC2
- DigitalOcean Droplets
- Ou tout autre service Node.js

N'oubliez pas de mettre à jour l'URL du serveur dans les composants:
```typescript
// Dans Chat.tsx et AdminChat.tsx
socketRef.current = io('https://votre-serveur-websocket.com', {
  transports: ['websocket', 'polling']
});
```

## 🐛 Dépannage

### Problèmes Communs
1. **Connexion refusée**: Vérifiez que le serveur WebSocket tourne sur le port 3001
2. **CORS errors**: Assurez-vous que les origines sont correctement configurées
3. **Messages qui n'apparaissent pas**: Vérifiez la console du navigateur pour les erreurs

### Logs de Débogage
Le serveur affiche des logs détaillés dans la console:
- Connexions/déconnexions
- Messages échangés
- Authentifications admin

## 📈 Améliorations Futures

- [ ] Persistance des messages dans MongoDB/PostgreSQL
- [ ] Notifications push pour les nouveaux messages
- [ ] File upload (images, documents)
- [ ] Chatbots et réponses automatiques
- [ ] Multi-langues
- [ ] Modération et signalement
- [ ] Statistiques avancées et analytics
- [ ] Intégration avec CRM

## 📝 Licence

Ce projet est sous licence MIT.
