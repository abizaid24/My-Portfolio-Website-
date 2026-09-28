'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus, Cpu, Layers, Sparkles } from 'lucide-react';
import { profile, Service } from '@/data/profile';
import MacWindow from '@/components/ui/MacWindow';

export default function Services() {
  // Default first service open
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(profile.services[0].id);

  const toggleService = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <section id="services" className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col mb-12 sm:mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
            /SERVICES & CAPABILITIES
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-neutral-900 dark:text-white">
          Core Engineering Practice
        </h2>
      </div>

      {/* Accordion Editorial List */}
      <div className="flex flex-col divide-y divide-neutral-300/70 dark:divide-neutral-700/60 border-t border-b border-neutral-300/70 dark:border-neutral-700/60">
        {profile.services.map((service, index) => {
          const isExpanded = expandedServiceId === service.id;

          return (
            <div
              key={service.id}
              className={`group transition-colors duration-300 ${
                isExpanded
                  ? 'bg-white/90 dark:bg-neutral-900/60 shadow-subtle rounded-2xl my-2 border-none'
                  : 'hover:bg-white/50 dark:hover:bg-white/5'
              }`}
            >
              {/* Accordion Row Header */}
              <button
                onClick={() => toggleService(service.id)}
                className="w-full flex items-center justify-between py-6 sm:py-8 px-4 sm:px-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4 sm:gap-8">
                  <span className="text-xs sm:text-sm font-mono text-neutral-400 dark:text-neutral-500 font-semibold">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-neutral-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isExpanded
                        ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rotate-45'
                        : 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 group-hover:border-neutral-900 dark:group-hover:border-white'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform" />
                  </div>
                </div>
              </button>

              {/* Accordion Collapsible Content */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                    className="overflow-hidden px-4 sm:px-6 pb-8 pt-2"
                  >
                    <MacWindow
                      label={`${service.id}.service.ts`}
                      barClassName="mac-window-bar-dark"
                      className="shadow-dark-card"
                      bodyClassName="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 bg-neutral-900 text-white"
                    >
                      <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-mono font-medium mb-3">
                            Service Architecture
                          </span>
                          <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-emerald-400" /> Deliverables & Core Logic
                          </h4>
                          <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                            {service.whatIBuild}
                          </p>
                        </div>
                      </div>

                      {/* Right Column: Tech Stack & Use Cases */}
                      <div className="lg:col-span-5 flex flex-col justify-between space-y-6 border-t lg:border-t-0 lg:border-l border-neutral-800 pt-6 lg:pt-0 lg:pl-6">
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-blue-400" /> Primary Stack
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {service.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md bg-white/10 text-neutral-200 text-xs font-mono border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Use Case Profile
                          </h4>
                          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                            {service.useCases}
                          </p>
                        </div>
                      </div>
                    </MacWindow>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
