'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile } from '@/data/profile';
import { scrollToSection } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* About Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">Mohamed Cherif Junior</h3>
            <p className="text-secondary-300 mb-4 leading-relaxed">
              Ingénieur logiciel senior passionné par la création d&apos;applications web modernes et performantes.
            </p>
            <div className="flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-800 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-800 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 bg-secondary-800 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  À Propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  Projets
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a
                  href={`mailto:${profile.email}`}
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  {profile.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-secondary-300">
                  {profile.location}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-secondary-700 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p variants={itemVariants} className="text-secondary-300 text-center md:text-left">
              © {currentYear} Mohamed Cherif Junior. Tous droits réservés.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-secondary-300 hover:text-white transition-colors duration-200"
              >
                <ArrowUp className="w-4 h-4" />
                Retour en haut
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
