'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Filter, X } from 'lucide-react';
import { projects, projectCategories, Project } from '@/data/projects';
import { formatDate } from '@/lib/utils';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  const featuredProjects = useMemo(() => {
    return projects.filter(project => project.featured);
  }, []);

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-secondary-900">
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
            Projets Réalisés
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-primary-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-semibold text-secondary-900 dark:text-white mb-8 text-center"
          >
            Projets Vedettes
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card overflow-hidden group cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative h-48 bg-gradient-to-br from-primary-400 to-secondary-400 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Vedette
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-secondary-500 dark:text-secondary-400">
                        +{project.technologies.length - 3} autres
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-400">
                      <Calendar className="w-4 h-4" />
                      {formatDate(project.date)}
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-700 hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-700 hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-600'
              }`}
            >
              <Filter className="w-4 h-4" />
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card overflow-hidden group cursor-pointer"
              onClick={() => openProjectModal(project)}
            >
              <div className="relative h-40 bg-gradient-to-br from-primary-400 to-secondary-400 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-lg font-bold text-white text-center px-4">{project.title}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-secondary-600 dark:text-secondary-300 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="text-xs text-secondary-500 dark:text-secondary-400">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-secondary-500 dark:text-secondary-400">
                    {formatDate(project.date)}
                  </span>
                  <div className="flex gap-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 rounded bg-secondary-100 dark:bg-secondary-700 hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors"
                      >
                        <Github className="w-3 h-3" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 rounded bg-secondary-100 dark:bg-secondary-700 hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={closeProjectModal}
            >
              <motion.div
                variants={modalVariants}
                className="bg-white dark:bg-secondary-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 bg-gradient-to-br from-primary-400 to-secondary-400">
                  <button
                    onClick={closeProjectModal}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-3xl font-bold text-white text-center px-4">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
                      Description du projet
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
                      Technologies utilisées
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
                      Informations
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-secondary-500 dark:text-secondary-400">Catégorie:</span>
                        <span className="ml-2 text-secondary-900 dark:text-white font-medium">
                          {selectedProject.category}
                        </span>
                      </div>
                      <div>
                        <span className="text-secondary-500 dark:text-secondary-400">Date:</span>
                        <span className="ml-2 text-secondary-900 dark:text-white font-medium">
                          {formatDate(selectedProject.date)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Voir le code
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Voir le site
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
