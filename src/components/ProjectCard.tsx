'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { Project } from '@/data/profile';
import ProjectVideoPlayer from '@/components/ProjectVideoPlayer';
import MacWindow from '@/components/ui/MacWindow';
import IPhoneFrame from '@/components/ui/IPhoneFrame';
import MuxVideo from '@/components/ui/MuxVideo';
import CaseStudyViewer from '@/components/CaseStudyViewer';
import { DURATION, EASE } from '@/lib/motion';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

export default function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  const reversed = index % 2 === 1;
  const primaryLink = project.links.github || project.links.backend || project.links.frontend;
  const isMobileDemo = project.videoAspect === 'mobile' && Boolean(project.muxPlaybackId);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { y: 48, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: DURATION.SLOW, ease: EASE } },
      }}
      className="group relative py-10 sm:py-14 border-t border-neutral-200/80 dark:border-neutral-800 first:border-t-0 first:pt-0"
    >
      <div
        className={`flex flex-col ${
          reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } gap-8 lg:gap-12 items-center`}
      >
        {/* Media — the dominant, large visual area */}
        {isMobileDemo ? (
          // App demo: shown inside a real iPhone frame instead of a browser window
          <div
            onClick={onClick}
            data-cursor="view"
            className="w-full lg:w-[38%] shrink-0 cursor-pointer flex justify-center"
          >
            <IPhoneFrame className="w-[220px] sm:w-[260px] md:w-[280px] transition-transform duration-500 group-hover:-translate-y-1">
              <MuxVideo
                playbackId={project.muxPlaybackId as string}
                fallbackImage={project.image}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </IPhoneFrame>
          </div>
        ) : (
          <div
            onClick={onClick}
            data-cursor="view"
            className="w-full lg:w-[58%] shrink-0 cursor-pointer"
          >
            <MacWindow
              label={`yoursite.dev/work/${project.slug}`}
              className="border border-neutral-200/80 dark:border-neutral-800 shadow-card transition-transform duration-500 group-hover:-translate-y-1"
            >
              <ProjectVideoPlayer project={project} className="h-64 sm:h-80 lg:h-[420px]" />
            </MacWindow>
          </div>
        )}

        {/* Copy — supports the visual, never repeats the README */}
        <div className={`w-full ${isMobileDemo ? 'lg:w-[62%]' : 'lg:w-[42%]'} flex flex-col`}>
          <div className="flex items-start justify-between gap-4 mb-3">
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 tracking-widest">
              {String(index + 1).padStart(2, '0')} / {project.category}
            </span>
            {project.featured && (
              <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                {project.highlightTag}
              </span>
            )}
          </div>

          <h3
            onClick={onClick}
            data-cursor="view"
            className="cursor-pointer font-display font-bold tracking-tight text-neutral-900 dark:text-white text-3xl sm:text-4xl leading-[1.05] mb-3 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors"
          >
            {project.name}
          </h3>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
            {project.oneLiner}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-neutral-100/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[11px] font-mono font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-1.5 mb-6 text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
            <Sparkles className="w-3 h-3 text-emerald-500" />
            <span>Built with AI-Assisted Development</span>
          </div>

          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">{project.role}</span>
            <div className="flex-1" />
            {project.caseStudyPdf ? (
              <button
                type="button"
                onClick={() => setIsCaseStudyOpen(true)}
                className="group/link inline-flex items-center gap-1 text-xs font-mono font-semibold text-neutral-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400"
              >
                <span>Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </button>
            ) : (
              <Link
                href={`/work/${project.slug}`}
                className="group/link inline-flex items-center gap-1 text-xs font-mono font-semibold text-neutral-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400"
              >
                <span>Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            )}
            {primaryLink && (
              <Link
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-900 dark:hover:bg-white hover:text-white dark:hover:text-neutral-900 transition-colors shrink-0"
                aria-label={`${project.name} on GitHub`}
              >
                <Github className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {project.caseStudyPdf && isCaseStudyOpen && (
        <CaseStudyViewer project={project} onClose={() => setIsCaseStudyOpen(false)} />
      )}
    </motion.div>
  );
}
