'use client';

import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-neutral-200/60 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
      <div>
        © 2026 {profile.name.full}. Built with precision.
      </div>

      <div className="flex items-center gap-4">
        <span>Python</span>
        <span>•</span>
        <span>FastAPI</span>
        <span>•</span>
        <span>Agentic AI</span>
      </div>
    </footer>
  );
}
