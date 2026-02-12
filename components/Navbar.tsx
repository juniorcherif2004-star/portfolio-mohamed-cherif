'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { scrollToSection } from '@/lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = useMemo(() => [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'experience', label: 'Expérience' },
    { id: 'contact', label: 'Contact' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold gradient-text cursor-pointer" onClick={() => handleNavClick('home')}>
              MCJ
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                      : 'text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/juniorcherif2004-star"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary-200 dark:bg-secondary-700 hover:bg-secondary-300 dark:hover:bg-secondary-600 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-cherif-18166739a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary-200 dark:bg-secondary-700 hover:bg-secondary-300 dark:hover:bg-secondary-600 transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-secondary-200 dark:bg-secondary-700 hover:bg-secondary-300 dark:hover:bg-secondary-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-secondary-800 rounded-lg shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                      : 'text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex space-x-2 px-3 py-2">
                <a
                  href="https://github.com/juniorcherif2004-star"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary-200 dark:bg-secondary-700 hover:bg-secondary-300 dark:hover:bg-secondary-600 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-cherif-18166739a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary-200 dark:bg-secondary-700 hover:bg-secondary-300 dark:hover:bg-secondary-600 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:juniorcherif2004@gmail.com"
                  className="p-2 rounded-lg bg-secondary-200 dark:bg-secondary-700 hover:bg-secondary-300 dark:hover:bg-secondary-600 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
