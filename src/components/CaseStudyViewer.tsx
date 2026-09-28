'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { Project } from '@/data/profile';
import MacWindow from '@/components/ui/MacWindow';
import { DURATION, EASE } from '@/lib/motion';

interface CaseStudyViewerProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Small, isolated PDF viewer for the "Case Study" buttons on featured
 * project cards. Reuses the same MacWindow chrome + backdrop pattern as
 * ProjectModal so it reads as part of the existing design language,
 * without touching ProjectModal itself. Loads the PDF lazily — nothing
 * is fetched until a project's case study is actually opened.
 */
export default function CaseStudyViewer({ project, onClose }: CaseStudyViewerProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project || !project.caseStudyPdf) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} case study PDF`}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/75 backdrop-blur-md"
        />

        {/* Viewer Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: DURATION.MEDIUM, ease: EASE }}
          className="relative w-full max-w-4xl h-[88vh] z-10"
        >
          <MacWindow
            label={`${project.name} — Case Study.pdf`}
            className="h-full flex flex-col border border-neutral-200 dark:border-neutral-800 shadow-2xl"
            bodyClassName="relative flex-1 bg-neutral-100 dark:bg-neutral-950"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors z-20 shadow-subtle"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Download / open-in-new-tab fallback */}
            <a
              href={project.caseStudyPdf}
              download
              className="absolute top-3 right-14 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors z-20 shadow-subtle"
              aria-label={`Download ${project.name} case study PDF`}
            >
              <Download className="w-5 h-5" />
            </a>

            <iframe
              src={project.caseStudyPdf}
              title={`${project.name} case study`}
              className="w-full h-full rounded-b-2xl"
            />
          </MacWindow>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
