'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Shield, LogOut, Users, MessageSquare, X, User, Bot } from 'lucide-react';
import { io, Socket } from 'socket.io-client';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'admin';
  timestamp: Date;
  senderName?: string;
}

interface UserSession {
  socketId: string;
  userName?: string;
  userEmail?: string;
  lastSeen: Date;
}

export function AdminChat() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [connectedUsers, setConnectedUsers] = useState<UserSession[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isAdminOnline, setIsAdminOnline] = useState(false);
  
  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAuthenticated && !socketRef.current) {
      // Connexion au serveur WebSocket
      socketRef.current = io('http://localhost:3001', {
        transports: ['websocket', 'polling']
      });

      socketRef.current.on('connect', () => {
        console.log('Connecté au serveur Socket.IO');
        // Authentification admin
        socketRef.current?.emit('admin-auth', password);
      });

      socketRef.current.on('admin-auth-success', () => {
        setIsAdminOnline(true);
        console.log('Authentification admin réussie');
      });

      socketRef.current.on('admin-auth-error', () => {
        setAuthError('Mot de passe incorrect');
        setIsAuthenticated(false);
        setIsAdminOnline(false);
      });

      socketRef.current.on('message-history', (history: Message[]) => {
        setMessages(history);
      });

      socketRef.current.on('message', (message: Message) => {
        setMessages(prev => [...prev, message]);
      });

      socketRef.current.on('typing', (typing: boolean) => {
        setIsTyping(typing);
      });

      socketRef.current.on('new-message-notification', (data) => {
        console.log('Nouveau message:', data);
      });

      socketRef.current.on('disconnect', () => {
        setIsAdminOnline(false);
        console.log('Déconnecté du serveur');
      });

      return () => {
        if (socketRef.current) {
          socketRef.current.disconnect();
          socketRef.current = null;
        }
      };
    }
  }, [isAuthenticated, password]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    if (!password.trim()) {
      setAuthError('Le mot de passe est requis');
      return;
    }

    setIsAuthenticated(true);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || !socketRef.current) return;

    const message: Message = {
      id: Date.now().toString(),
      text: inputMessage.trim(),
      sender: 'admin',
      timestamp: new Date(),
      senderName: 'Mohamed (Admin)'
    };

    setMessages(prev => [...prev, message]);
    socketRef.current.emit('message', message);
    setInputMessage('');
  };

  const handleLogout = () => {
    if (socketRef.current) {
      socketRef.current.disconnect();
      socketRef.current = null;
    }
    setIsAuthenticated(false);
    setIsAdminOnline(false);
    setPassword('');
    setMessages([]);
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-secondary-900 dark:to-secondary-800 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-secondary-900 rounded-2xl shadow-xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">
              Administration Chat
            </h1>
            <p className="text-secondary-600 dark:text-secondary-300">
              Accédez au panneau d'administration du chat
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                Mot de passe administrateur
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Entrez le mot de passe"
                required
              />
            </div>

            {authError && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                <p className="text-red-600 dark:text-red-400 text-sm">{authError}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Se connecter
            </button>
          </form>

          <div className="mt-6 p-4 bg-secondary-50 dark:bg-secondary-800 rounded-lg">
            <p className="text-xs text-secondary-500 dark:text-secondary-400 text-center">
              Mot de passe par défaut: <code className="bg-secondary-200 dark:bg-secondary-700 px-1 rounded">admin123</code>
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-secondary-900 dark:to-secondary-800">
      {/* Header */}
      <header className="bg-white dark:bg-secondary-900 shadow-sm border-b border-secondary-200 dark:border-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <MessageSquare className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Panneau d'Administration
                </h1>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isAdminOnline ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-sm text-secondary-600 dark:text-secondary-300">
                    {isAdminOnline ? 'En ligne' : 'Hors ligne'}
                  </span>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Zone de chat */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-lg h-[600px] flex flex-col">
              {/* En-tête du chat */}
              <div className="p-4 border-b border-secondary-200 dark:border-secondary-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-secondary-900 dark:text-white">
                    Messages des visiteurs
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-300">
                    <Users className="w-4 h-4" />
                    <span>{connectedUsers.length} connecté(s)</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.length === 0 ? (
                  <div className="text-center py-8">
                    <MessageSquare className="w-12 h-12 text-secondary-300 dark:text-secondary-600 mx-auto mb-4" />
                    <p className="text-secondary-500 dark:text-secondary-400">
                      Aucun message pour le moment
                    </p>
                  </div>
                ) : (
                  messages.map((message, index) => {
                    const showDate = index === 0 || 
                      formatDate(messages[index - 1].timestamp) !== formatDate(message.timestamp);
                    
                    return (
                      <div key={message.id}>
                        {showDate && (
                          <div className="text-center my-4">
                            <span className="text-xs text-secondary-500 dark:text-secondary-400 bg-secondary-100 dark:bg-secondary-800 px-2 py-1 rounded">
                              {formatDate(message.timestamp)}
                            </span>
                          </div>
                        )}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${message.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`flex gap-2 max-w-[80%] ${message.sender === 'admin' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              message.sender === 'admin' 
                                ? 'bg-primary-600 text-white' 
                                : 'bg-secondary-200 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300'
                            }`}>
                              {message.sender === 'admin' ? (
                                <Shield className="w-4 h-4" />
                              ) : (
                                <User className="w-4 h-4" />
                              )}
                            </div>
                            <div>
                              {message.senderName && (
                                <p className="text-xs text-secondary-500 dark:text-secondary-400 mb-1">
                                  {message.senderName}
                                </p>
                              )}
                              <div className={`px-3 py-2 rounded-lg ${
                                message.sender === 'admin'
                                  ? 'bg-primary-600 text-white'
                                  : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-900 dark:text-white'
                              }`}>
                                <p className="text-sm">{message.text}</p>
                              </div>
                              <p className="text-xs text-secondary-500 dark:text-secondary-400 mt-1">
                                {formatTime(message.timestamp)}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })
                )}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary-200 dark:bg-secondary-700 flex items-center justify-center">
                        <User className="w-4 h-4 text-secondary-700 dark:text-secondary-300" />
                      </div>
                      <div className="bg-secondary-100 dark:bg-secondary-800 px-3 py-2 rounded-lg">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-secondary-200 dark:border-secondary-700">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Tapez votre réponse..."
                    className="flex-1 px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim()}
                    className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar avec statistiques */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
                Statistiques
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600 dark:text-secondary-300">Total messages</span>
                  <span className="font-semibold text-secondary-900 dark:text-white">
                    {messages.length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600 dark:text-secondary-300">Messages aujourd'hui</span>
                  <span className="font-semibold text-secondary-900 dark:text-white">
                    {messages.filter(m => {
                      const today = new Date().toDateString();
                      return new Date(m.timestamp).toDateString() === today;
                    }).length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600 dark:text-secondary-300">Utilisateurs connectés</span>
                  <span className="font-semibold text-secondary-900 dark:text-white">
                    {connectedUsers.length}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-secondary-900 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
                Actions rapides
              </h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-lg hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors text-left">
                  Voir l'historique complet
                </button>
                <button className="w-full px-4 py-2 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-lg hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors text-left">
                  Exporter les messages
                </button>
                <button className="w-full px-4 py-2 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-lg hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors text-left">
                  Paramètres du chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
