'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageCircle, X, Minimize2, Maximize2, User, Bot } from 'lucide-react';
import { io, Socket } from 'socket.io-client';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'admin';
  timestamp: Date;
  senderName?: string;
}

interface ChatState {
  isOpen: boolean;
  isMinimized: boolean;
  messages: Message[];
  isConnected: boolean;
  isTyping: boolean;
  userName: string;
  userEmail: string;
  userPhone: string;
  isRegistered: boolean;
}

export function Chat() {
  const [chatState, setChatState] = useState<ChatState>({
    isOpen: false,
    isMinimized: false,
    messages: [],
    isConnected: false,
    isTyping: false,
    userName: '',
    userEmail: '',
    userPhone: '',
    isRegistered: false
  });

  const [inputMessage, setInputMessage] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (chatState.isOpen && !socketRef.current) {
      // Connexion au serveur WebSocket
      socketRef.current = io('http://localhost:3001', {
        transports: ['websocket', 'polling']
      });

      socketRef.current.on('connect', () => {
        setChatState(prev => ({ ...prev, isConnected: true }));
      });

      socketRef.current.on('disconnect', () => {
        setChatState(prev => ({ ...prev, isConnected: false }));
      });

      socketRef.current.on('message', (message: Message) => {
        setChatState(prev => ({
          ...prev,
          messages: [...prev.messages, message],
          isTyping: false
        }));
      });

      socketRef.current.on('typing', (isTyping: boolean) => {
        setChatState(prev => ({ ...prev, isTyping }));
      });

      return () => {
        if (socketRef.current) {
          socketRef.current.disconnect();
          socketRef.current = null;
        }
      };
    }
  }, [chatState.isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistrationError('');

    if (!chatState.userName.trim() || !chatState.userEmail.trim()) {
      setRegistrationError('Le nom et l\'email sont requis');
      return;
    }

    // Validation email simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(chatState.userEmail)) {
      setRegistrationError('L\'email n\'est pas valide');
      return;
    }

    setChatState(prev => ({ ...prev, isRegistered: true }));

    // Envoyer message de bienvenue
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: `Bonjour ${chatState.userName} ! Je suis Mohamed, l'étudiant développeur. Comment puis-je vous aider aujourd'hui ?`,
      sender: 'admin',
      timestamp: new Date(),
      senderName: 'Mohamed'
    };

    setChatState(prev => ({
      ...prev,
      messages: [welcomeMessage]
    }));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || !socketRef.current) return;

    const message: Message = {
      id: Date.now().toString(),
      text: inputMessage.trim(),
      sender: 'user',
      timestamp: new Date(),
      senderName: chatState.userName
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));

    socketRef.current.emit('message', message);
    setInputMessage('');

    // Simuler réponse automatique si l'admin n'est pas connecté
    setTimeout(() => {
      const autoReply: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Merci pour votre message ! En tant qu\'étudiant, je vous répondrai dès que possible. Vous pouvez aussi me contacter directement par email ou téléphone.',
        sender: 'admin',
        timestamp: new Date(),
        senderName: 'Mohamed (Auto-réponse)'
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, autoReply]
      }));
    }, 2000);
  };

  const handleTyping = () => {
    if (socketRef.current) {
      socketRef.current.emit('typing', true);
      setTimeout(() => {
        socketRef.current?.emit('typing', false);
      }, 1000);
    }
  };

  const toggleChat = () => {
    setChatState(prev => ({ ...prev, isOpen: !prev.isOpen }));
  };

  const toggleMinimize = () => {
    setChatState(prev => ({ ...prev, isMinimized: !prev.isMinimized }));
  };

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      {/* Bouton de chat flottant */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {chatState.isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {chatState.isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white dark:bg-secondary-900 rounded-lg shadow-2xl border border-secondary-200 dark:border-secondary-700 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-primary-600 text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                <div>
                  <h3 className="font-semibold">Chat avec Mohamed</h3>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${chatState.isConnected ? 'bg-green-400' : 'bg-red-400'}`} />
                    <span className="text-xs">
                      {chatState.isConnected ? 'En ligne' : 'Hors ligne'}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={toggleMinimize}
                className="p-1 hover:bg-primary-700 rounded transition-colors"
              >
                {chatState.isMinimized ? (
                  <Maximize2 className="w-4 h-4" />
                ) : (
                  <Minimize2 className="w-4 h-4" />
                )}
              </button>
            </div>

            {!chatState.isMinimized && (
              <>
                {!chatState.isRegistered ? (
                  /* Formulaire d'inscription */
                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          value={chatState.userName}
                          onChange={(e) => setChatState(prev => ({ ...prev, userName: e.target.value }))}
                          className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={chatState.userEmail}
                          onChange={(e) => setChatState(prev => ({ ...prev, userEmail: e.target.value }))}
                          className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          value={chatState.userPhone}
                          onChange={(e) => setChatState(prev => ({ ...prev, userPhone: e.target.value }))}
                          className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                      {registrationError && (
                        <p className="text-red-500 text-sm">{registrationError}</p>
                      )}
                      <button
                        type="submit"
                        className="w-full py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Commencer à discuter
                      </button>
                    </form>
                  </div>
                ) : (
                  <>
                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                      {chatState.messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              message.sender === 'user' 
                                ? 'bg-primary-600 text-white' 
                                : 'bg-secondary-200 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300'
                            }`}>
                              {message.sender === 'user' ? (
                                <User className="w-4 h-4" />
                              ) : (
                                <Bot className="w-4 h-4" />
                              )}
                            </div>
                            <div>
                              {message.senderName && (
                                <p className="text-xs text-secondary-500 dark:text-secondary-400 mb-1">
                                  {message.senderName}
                                </p>
                              )}
                              <div className={`px-3 py-2 rounded-lg ${
                                message.sender === 'user'
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
                      ))}
                      
                      {chatState.isTyping && (
                        <div className="flex justify-start">
                          <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-full bg-secondary-200 dark:bg-secondary-700 flex items-center justify-center">
                              <Bot className="w-4 h-4 text-secondary-700 dark:text-secondary-300" />
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
                          onKeyPress={handleTyping}
                          placeholder="Tapez votre message..."
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
                  </>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
