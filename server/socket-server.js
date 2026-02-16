const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Configuration CORS
app.use(cors({
  origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  methods: ["GET", "POST"],
  credentials: true
}));

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Stockage des messages et des utilisateurs connectés
let messages = [];
let connectedUsers = new Map();
let adminSocket = null;

// Interface pour les messages
class Message {
  constructor(text, sender, senderName = null) {
    this.id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    this.text = text;
    this.sender = sender; // 'user' ou 'admin'
    this.timestamp = new Date();
    this.senderName = senderName;
  }
}

// Connexion des clients
io.on('connection', (socket) => {
  console.log(`Nouvel utilisateur connecté: ${socket.id}`);

  // Gestion de l'authentification admin
  socket.on('admin-auth', (password) => {
    if (password === process.env.ADMIN_PASSWORD || password === 'admin123') {
      adminSocket = socket;
      socket.emit('admin-auth-success');
      socket.broadcast.emit('admin-status', { online: true });
      console.log('Admin connecté');
      
      // Envoyer l'historique des messages à l'admin
      socket.emit('message-history', messages);
    } else {
      socket.emit('admin-auth-error');
    }
  });

  // Réception des messages
  socket.on('message', (data) => {
    const message = new Message(data.text, data.sender, data.senderName);
    messages.push(message);

    // Diffuser le message à tous les clients
    io.emit('message', message);

    // Notifier l'admin si connecté
    if (adminSocket && adminSocket.id !== socket.id) {
      adminSocket.emit('new-message-notification', {
        message: message,
        userSocketId: socket.id
      });
    }

    console.log(`Message de ${message.sender}: ${message.text}`);
  });

  // Gestion de l'indicateur "en train d'écrire"
  socket.on('typing', (isTyping) => {
    socket.broadcast.emit('typing', isTyping);
  });

  // Marquer les messages comme lus
  socket.on('mark-as-read', (messageIds) => {
    // Logique pour marquer les messages comme lus
    socket.broadcast.emit('messages-read', messageIds);
  });

  // Gestion de la déconnexion
  socket.on('disconnect', () => {
    console.log(`Utilisateur déconnecté: ${socket.id}`);
    
    // Si c'est l'admin qui se déconnecte
    if (socket.id === adminSocket?.id) {
      adminSocket = null;
      socket.broadcast.emit('admin-status', { online: false });
      console.log('Admin déconnecté');
    }
    
    connectedUsers.delete(socket.id);
  });

  // Envoyer le statut de l'admin aux nouveaux utilisateurs
  socket.emit('admin-status', { online: adminSocket !== null });
  
  // Envoyer l'historique des messages aux nouveaux utilisateurs
  if (messages.length > 0) {
    socket.emit('message-history', messages);
  }
});

// Route pour vérifier le statut du serveur
app.get('/status', (req, res) => {
  res.json({
    status: 'Server running',
    connectedUsers: connectedUsers.size,
    adminOnline: adminSocket !== null,
    totalMessages: messages.length
  });
});

// Route pour récupérer les messages (API REST)
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

// Démarrage du serveur
const PORT = process.env.SOCKET_PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 Serveur Socket.IO démarré sur le port ${PORT}`);
  console.log(`📡 WebSocket disponible sur ws://localhost:${PORT}`);
  console.log(`🌐 API REST disponible sur http://localhost:${PORT}/status`);
});

// Gestion des erreurs
process.on('uncaughtException', (err) => {
  console.error('Erreur non capturée:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Promesse rejetée non gérée:', reason);
});
