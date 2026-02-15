'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: '1',
    title: 'Coach Rollers',
    company: 'GESCO ROLLERS CLUB',
    location: 'Abidjan',
    period: '04/2021 – 07/2024',
    description: [
      'Accueil des clients, réponse à leurs demandes de renseignements avec efficacité et courtoisie',
      'Présentation des caractéristiques et des avantages des produits, démonstration des fonctionnalités',
      'Définition des besoins du client, conseil et proposition de produits adaptés',
      'Processus assure une gestion efficace des abonnements et garantit la conformité aux normes'
    ],
    technologies: ['Communication', 'Service client', 'Vente', 'Gestion']
  },
  {
    id: '2',
    title: 'Agent Commercial',
    company: 'MTN CÔTE D\'IVOIRE',
    location: 'Abidjan',
    period: '05/2020 – 09/2020',
    description: [
      'Conseil et vente des produits et services MTN',
      'Relation client et suivi des dossiers',
      'Atteinte des objectifs commerciaux',
      'Travail en équipe et coordination'
    ],
    technologies: ['Vente', 'Communication', 'Relation client', 'Objectifs commerciaux']
  },
  {
    id: '3',
    title: 'Étudiant en Licence 2 Développement Web',
    company: 'Digital Campus Paris',
    location: 'Paris',
    period: '09/2025 – aujourd\'hui',
    description: [
      'Formation spécialisée en développement web et mobile',
      'Apprentissage des technologies modernes : React, Node.js, TypeScript',
      'Réalisation de projets pratiques et académiques',
      'Utilisation de l\'IA pour optimiser l\'apprentissage'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'MongoDB']
  },
  {
    id: '4',
    title: 'Étudiant en Bachelors 1 Gestion de Projet',
    company: 'Web School Factory',
    location: 'Paris',
    period: '09/2024 – 05/2025',
    description: [
      'Formation en gestion de projet web',
      'Méthodologies agiles et gestion d\'équipe',
      'Planification et suivi de projets',
      'Coordination avec les équipes techniques'
    ],
    technologies: ['Gestion de projet', 'Méthodes agiles', 'Planification', 'Coordination']
  },
  {
    id: '5',
    title: 'Étudiant en Licence 2 Développement Web',
    company: 'GECOS FORMATION',
    location: 'Abidjan',
    period: '09/2023 – 04/2024',
    description: [
      'Formation approfondie en développement web',
      'Programmation JavaScript et frameworks',
      'Création de sites web dynamiques',
      'Initiation aux bases de données'
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'PHP', 'MySQL', 'Web dynamique']
  },
  {
    id: '6',
    title: 'Étudiant en Licence 1 Développement Web',
    company: 'GECOS FORMATION',
    location: 'Abidjan',
    period: '09/2022 – 07/2023',
    description: [
      'Initiation au développement web',
      'Bases de HTML, CSS et JavaScript',
      'Premiers projets web personnels',
      'Apprentissage des fondamentaux de la programmation'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Algorithmes', 'Logique de programmation']
  },
  {
    id: '7',
    title: 'Étudiant en Licence 1 Réseau et Génie Logiciel',
    company: 'PIGIER CÔTE D\'IVOIRE',
    location: 'Abidjan',
    period: '09/2021 – 06/2022',
    description: [
      'Formation en réseaux informatiques',
      'Initiation au génie logiciel',
      'Bases de la programmation et algorithmes',
      'Concepts fondamentaux des systèmes d\'information'
    ],
    technologies: ['Réseaux', 'Génie logiciel', 'Algorithmes', 'Systèmes d\'information']
  },
  {
    id: '8',
    title: 'Baccalauréat',
    company: 'COLLEGE YADA CLEMENT',
    location: 'Abidjan',
    period: '09/2020 – 07/2021',
    description: [
      'Obtention du baccalauréat',
      'Spécialisation scientifique',
      'Projet personnel d\'initiation à la programmation',
      'Premiers pas dans le monde numérique'
    ],
    technologies: ['Baccalauréat', 'Scientifique', 'Culture générale', 'Numérique']
  }
];

export function Experience() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4"
          >
            Parcours Professionnel
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-primary-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary-200 dark:bg-primary-700" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-secondary-800 z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3 md:justify-end">
                      <Briefcase className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                        {experience.title}
                      </h3>
                    </div>

                    <div className={`mb-3 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}>
                      <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-1">
                        {experience.company}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-secondary-600 dark:text-secondary-400 md:justify-end">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {experience.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {experience.period}
                        </div>
                      </div>
                    </div>

                    <ul className={`space-y-2 mb-4 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}>
                      {experience.description.map((desc, descIndex) => (
                        <li
                          key={descIndex}
                          className="text-sm text-secondary-600 dark:text-secondary-300 flex items-start gap-2 md:justify-end"
                        >
                          {index % 2 === 0 && (
                            <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                          )}
                          <span>{desc}</span>
                          {index % 2 !== 0 && (
                            <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                          )}
                        </li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              7+
            </div>
            <div className="text-sm text-secondary-600 dark:text-secondary-400">
              Années d&apos;expérience
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              4
            </div>
            <div className="text-sm text-secondary-600 dark:text-secondary-400">
              Entreprises
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              20+
            </div>
            <div className="text-sm text-secondary-600 dark:text-secondary-400">
              Projets livrés
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              5
            </div>
            <div className="text-sm text-secondary-600 dark:text-secondary-400">
              Personnes mentorées
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
