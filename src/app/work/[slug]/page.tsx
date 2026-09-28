import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Cpu, CheckCircle2, Layers, ShieldCheck } from 'lucide-react';
import { profile } from '@/data/profile';
import ProjectVideoPlayer from '@/components/ProjectVideoPlayer';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return profile.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = profile.projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Find next project in array for bottom loop link
  const currentIndex = profile.projects.findIndex((p) => p.slug === resolvedParams.slug);
  const nextProject = profile.projects[(currentIndex + 1) % profile.projects.length];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto">
      {/* Top Back Navigation Link */}
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-xs font-mono font-medium text-neutral-600 hover:text-neutral-900 mb-8 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>Back to Selected Work</span>
      </Link>

      {/* Hero Case Study Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-mono font-medium">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-mono font-medium">
            {project.highlightTag}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-neutral-900 mb-4">
          {project.name}
        </h1>

        <p className="text-base sm:text-xl text-neutral-700 font-normal leading-relaxed max-w-3xl">
          {project.shortDescription || project.oneLiner}
        </p>
      </div>

      {/* Metadata Pill Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-subtle mb-10 text-xs sm:text-sm">
        <div>
          <span className="block text-neutral-400 font-mono text-[11px] uppercase tracking-wider mb-1">Role</span>
          <span className="font-semibold text-neutral-900">{project.role}</span>
        </div>
        <div>
          <span className="block text-neutral-400 font-mono text-[11px] uppercase tracking-wider mb-1">Domain</span>
          <span className="font-semibold text-neutral-900">{project.category}</span>
        </div>
        <div>
          <span className="block text-neutral-400 font-mono text-[11px] uppercase tracking-wider mb-1">Stack Core</span>
          <span className="font-semibold text-neutral-900">{project.technologies.slice(0, 2).join(' & ')}</span>
        </div>
        <div>
          <span className="block text-neutral-400 font-mono text-[11px] uppercase tracking-wider mb-1">Architecture</span>
          <span className="font-semibold text-neutral-900">Python FastAPI Backend</span>
        </div>
      </div>

      {/* Main Project Video/Image Showcase Player */}
      <div className="mb-14">
        <ProjectVideoPlayer project={project} className="h-64 sm:h-96 md:h-[450px]" />
      </div>

      {/* Project Storytelling Sections */}
      <div className="space-y-12">
        {/* System Overview */}
        {project.overview && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-card">
            <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-neutral-700" /> System Overview
            </h2>
            <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">
              {project.overview}
            </p>
          </div>
        )}

        {/* Problem vs Solution Grid */}
        {(project.problem || project.solution) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.problem && (
              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 shadow-xs">
                <h3 className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold mb-2">
                  The Engineering Challenge
                </h3>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 shadow-xs">
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold mb-2">
                  Architectural Solution
                </h3>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Key Engineering Accomplishments */}
        {project.engineeringHighlights.length > 0 && (
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white shadow-xl border border-neutral-800">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Key Technical Achievements
            </h2>
            <ul className="space-y-3">
              {project.engineeringHighlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies & Code Repositories */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-card">
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-4 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-neutral-700" /> Technologies & Repositories
          </h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-neutral-100 text-neutral-800 text-xs font-mono font-medium border border-neutral-200/60"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-neutral-100">
            {project.links.backend && (
              <a
                href={project.links.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-subtle"
              >
                <Github className="w-4 h-4" />
                <span>Backend Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links.frontend && (
              <a
                href={project.links.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-100 text-neutral-900 border border-neutral-200 text-xs font-semibold hover:bg-neutral-200 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Frontend Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links.github && !project.links.backend && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors shadow-subtle"
              >
                <Github className="w-4 h-4" />
                <span>View Code on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-subtle"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Next Project Footer Loop */}
      <div className="mt-16 pt-12 border-t border-neutral-200/80 flex items-center justify-between">
        <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Next Project</span>
        <Link
          href={`/work/${nextProject.slug}`}
          className="group flex items-center gap-3 text-lg sm:text-2xl font-display font-bold text-neutral-900 hover:text-emerald-700 transition-colors"
        >
          <span>{nextProject.name}</span>
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </div>
  );
}
