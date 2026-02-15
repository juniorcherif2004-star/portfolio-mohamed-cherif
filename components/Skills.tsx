'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { skills, skillCategories } from '@/data/skills';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'All') {
      return skills;
    }
    return skills.filter(skill => skill.category === selectedCategory);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <section id="skills" className="py-20 bg-secondary-50 dark:bg-secondary-800">
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
            Compétences Techniques
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-primary-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="card p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Image 
                    src={skill.icon} 
                    alt={skill.name}
                    width={32}
                    height={32}
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div className="w-8 h-8 flex items-center justify-center bg-secondary-100 dark:bg-secondary-700 rounded" style={{display: 'none'}}>
                    <span className="text-xs font-bold text-secondary-600 dark:text-secondary-300">
                      {skill.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-secondary-500 dark:text-secondary-400">
                      {skill.category}
                    </p>
                    <p className="text-xs text-secondary-600 dark:text-secondary-300 mt-1 line-clamp-2">
                      {skill.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full ${getSkillColor(skill.level)} rounded-full`}
                />
              </div>

              {/* Skill Level Description */}
              <div className="mt-3">
                <span className={`text-xs font-medium ${
                  skill.level >= 90 ? 'text-green-600 dark:text-green-400' :
                  skill.level >= 80 ? 'text-blue-600 dark:text-blue-400' :
                  skill.level >= 70 ? 'text-yellow-600 dark:text-yellow-400' :
                  'text-orange-600 dark:text-orange-400'
                }`}>
                  {skill.level >= 90 ? 'Expert' :
                   skill.level >= 80 ? 'Avancé' :
                   skill.level >= 70 ? 'Intermédiaire' :
                   'Débutant'}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {skills.filter(s => s.category === 'Frontend').length}
            </div>
            <div className="text-sm text-secondary-600 dark:text-secondary-400">
              Technologies Frontend
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {skills.filter(s => s.category === 'Backend').length}
            </div>
            <div className="text-sm text-secondary-600 dark:text-secondary-400">
              Technologies Backend
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {skills.filter(s => s.category === 'Tools').length}
            </div>
            <div className="text-sm text-secondary-600 dark:text-secondary-400">
              Outils & DevOps
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%
            </div>
            <div className="text-sm text-secondary-600 dark:text-secondary-400">
              Niveau moyen
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
