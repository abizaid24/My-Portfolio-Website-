'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { profile, Project } from '@/data/profile';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';

export default function SelectedWork() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Homepage shows only the featured case studies — other projects keep
  // their data and detail routes, they're just not part of this showcase.
  const featuredProjects = profile.projects.filter((p) => p.featured);
  const categories = ['All', ...Array.from(new Set(featuredProjects.map((p) => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section id="work" className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
              /SELECTED WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-neutral-900 dark:text-white">
            Architected &amp; Built Systems
          </h2>
        </div>

        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/80 dark:bg-neutral-900/80 hover:bg-white dark:hover:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80 shadow-subtle text-xs font-medium transition-all shrink-0"
        >
          <span>View GitHub Ecosystem</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-subtle'
                : 'bg-white/80 dark:bg-neutral-900/80 hover:bg-white dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-700/60 shadow-xs'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Editorial Project List — large media, alternating sides, not a card grid */}
      <motion.div
        key={selectedCategory}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onClick={() => setActiveModalProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
