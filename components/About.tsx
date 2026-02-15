'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export function About() {
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
    <section id="about" className="py-20 bg-white dark:bg-secondary-900">
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
            À Propos de Moi
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-primary-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Étudiant Passionné
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed mb-6">
                {profile.about}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="card p-6">
              <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                 Objectifs Professionnels
              </h4>
              <ul className="space-y-2 text-secondary-600 dark:text-secondary-300">
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                  Développer des solutions innovantes et performantes
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                  Contribuer à des projets à fort impact social
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                  Mentoriser les développeurs juniors
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6">
              <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                 Valeurs
              </h4>
              <ul className="space-y-2 text-secondary-600 dark:text-secondary-300">
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                  Excellence technique et qualité du code
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                  Collaboration et communication transparente
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                  Apprentissage continu et adaptation
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6">
              <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">
                 Localisation & Contact
              </h4>
              <div className="space-y-2 text-secondary-600 dark:text-secondary-300">
                <p> {profile.location}</p>
                <p> {profile.email}</p>
                <p> {profile.phone}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
