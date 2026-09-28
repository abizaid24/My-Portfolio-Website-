'use client';

import { motion } from 'framer-motion';
import { Cpu, Bot, Server, Database, Smartphone, Wrench } from 'lucide-react';
import { profile } from '@/data/profile';
import { fadeUpItem, staggerContainer } from '@/lib/motion';
import MacWindow from '@/components/ui/MacWindow';

const categoryIcons: Record<string, typeof Bot> = {
  'AI Engineering & Agents': Bot,
  'Backend Engineering': Server,
  'Databases & Storage': Database,
  'Mobile & Frontend': Smartphone,
  'Tools & Infrastructure': Wrench,
};

const categoryAccents: Record<string, { icon: string; ring: string }> = {
  'AI Engineering & Agents': {
    icon: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    ring: 'group-hover:border-emerald-300/70 dark:group-hover:border-emerald-500/40',
  },
  'Backend Engineering': {
    icon: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400',
    ring: 'group-hover:border-blue-300/70 dark:group-hover:border-blue-500/40',
  },
  'Databases & Storage': {
    icon: 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400',
    ring: 'group-hover:border-purple-300/70 dark:group-hover:border-purple-500/40',
  },
  'Mobile & Frontend': {
    icon: 'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400',
    ring: 'group-hover:border-sky-300/70 dark:group-hover:border-sky-500/40',
  },
  'Tools & Infrastructure': {
    icon: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400',
    ring: 'group-hover:border-amber-300/70 dark:group-hover:border-amber-500/40',
  },
};

export default function TechStack() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUpItem}
      >
        <MacWindow
          label="tech_stack.config.ts"
          className="border border-neutral-200/80 dark:border-neutral-800 shadow-card"
          bodyClassName="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-6 sm:p-10"
        >
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                Technical Tooling &amp; Ecosystem
              </span>
            </div>
            <span className="hidden sm:inline text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
              {profile.skills.reduce((n, g) => n + g.items.length, 0)} tools · {profile.skills.length} domains
            </span>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {profile.skills.map((skillGroup, idx) => {
              const Icon = categoryIcons[skillGroup.category] ?? Cpu;
              const accent = categoryAccents[skillGroup.category] ?? categoryAccents['Tools & Infrastructure'];
              const isPrimary = idx === 0;
              return (
                <motion.div
                  key={skillGroup.category}
                  variants={fadeUpItem}
                  className={`group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    isPrimary
                      ? 'bg-emerald-50/40 dark:bg-emerald-500/[0.04] border-emerald-200/70 dark:border-emerald-500/20'
                      : 'bg-neutral-50/60 dark:bg-white/[0.02] border-neutral-200/70 dark:border-neutral-800'
                  } ${accent.ring}`}
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${accent.icon}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3
                      className={`text-sm font-mono font-bold uppercase tracking-wider ${
                        isPrimary ? 'text-emerald-700 dark:text-emerald-400' : 'text-neutral-900 dark:text-neutral-100'
                      }`}
                    >
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 hover:border-neutral-900 dark:hover:border-white text-neutral-700 dark:text-neutral-300 text-xs font-mono transition-all duration-200 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </MacWindow>
      </motion.div>
    </section>
  );
}
