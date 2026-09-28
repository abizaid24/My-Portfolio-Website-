'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Cpu, CheckCircle2, Layers, ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/profile';
import ProjectVideoPlayer from '@/components/ProjectVideoPlayer';
import MacWindow from '@/components/ui/MacWindow';
import IPhoneFrame from '@/components/ui/IPhoneFrame';
import MuxVideo from '@/components/ui/MuxVideo';
import { DURATION, EASE } from '@/lib/motion';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const isMobileDemo = project.videoAspect === 'mobile' && Boolean(project.muxPlaybackId);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/75 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: DURATION.MEDIUM, ease: EASE }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10"
        >
          <MacWindow
            label={`yoursite.dev/work/${project.slug}`}
            className="border border-neutral-200 dark:border-neutral-800 shadow-2xl"
            bodyClassName="relative bg-white dark:bg-neutral-900 p-6 sm:p-8 md:p-10 text-neutral-900 dark:text-neutral-100"
          >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors z-20"
            aria-label="Close Project Details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Tag & Title */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-mono font-medium">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-500/30 text-xs font-mono font-medium">
              {project.highlightTag}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
            {project.name}
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-6 font-normal leading-relaxed">
            {project.shortDescription || project.oneLiner}
          </p>

          {/* Visual Showcase Player */}
          {isMobileDemo ? (
            <div className="mb-6 flex justify-center">
              <IPhoneFrame className="w-[160px] sm:w-[190px]">
                <MuxVideo
                  playbackId={project.muxPlaybackId as string}
                  fallbackImage={project.image}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </IPhoneFrame>
            </div>
          ) : (
            <div className="mb-6 rounded-2xl overflow-hidden">
              <ProjectVideoPlayer project={project} className="h-48 sm:h-64" />
            </div>
          )}

          {/* Role & Tech Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-neutral-800 mb-6 text-xs sm:text-sm">
            <div>
              <span className="block text-neutral-400 dark:text-neutral-500 font-mono text-[11px] uppercase tracking-wider mb-1">Role</span>
              <span className="font-semibold text-neutral-900 dark:text-white">{project.role}</span>
            </div>
            <div>
              <span className="block text-neutral-400 dark:text-neutral-500 font-mono text-[11px] uppercase tracking-wider mb-1">Architecture</span>
              <span className="font-semibold text-neutral-900 dark:text-white">Python Backend & AI Services</span>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-neutral-600 dark:text-neutral-400" /> System Overview
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.overview || project.description}
            </p>
          </div>

          {/* Engineering Highlights */}
          {project.engineeringHighlights.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Key Engineering Accomplishments
              </h3>
              <ul className="space-y-2.5">
                {project.engineeringHighlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div className="mb-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-neutral-600 dark:text-neutral-400" /> Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-mono font-medium border border-neutral-200/50 dark:border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <Link
              href={`/work/${project.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors shadow-subtle"
            >
              <span>Full Case Study Page</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {project.links.backend && (
              <a
                href={project.links.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-subtle"
              >
                <Github className="w-4 h-4" />
                <span>Backend Repo</span>
              </a>
            )}

            {project.links.frontend && (
              <a
                href={project.links.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700 text-xs font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Frontend Repo</span>
              </a>
            )}

            {project.links.github && !project.links.backend && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-subtle"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>
          </MacWindow>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
