'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Bot, Target, GitBranch, Layers } from 'lucide-react';
import { profile } from '@/data/profile';
import { fadeUpItem, staggerContainer } from '@/lib/motion';
import MacWindow from '@/components/ui/MacWindow';

const approachIcons = [Target, GitBranch, Layers];
const approachAccents = [
  { icon: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400', bar: 'from-emerald-400 to-emerald-300' },
  { icon: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400', bar: 'from-amber-400 to-amber-300' },
  { icon: 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400', bar: 'from-blue-400 to-blue-300' },
];

const manifestLines = (name: string, location: string) => [
  { key: 'Developer', value: name },
  { key: 'Location', value: location },
  { key: 'Specialization', value: 'Agentic AI & FastAPI' },
  { key: 'Core Runtime', value: 'Python 3.12' },
];

export default function About() {
  const manifest = manifestLines(profile.name.full, profile.location);

  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
      >
        {/* Left Editorial Statement */}
        <motion.div variants={fadeUpItem} className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
              /ABOUT & APPROACH
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-neutral-900 dark:text-white mb-6 leading-tight">
            I build software systems that turn complex workflows into practical, high-throughput software.
          </h2>

          <MacWindow
            label="profile_manifest.json"
            barClassName="mac-window-bar-dark"
            className="border border-neutral-800 shadow-card"
            bodyClassName="p-6 bg-neutral-950"
          >
            <div className="space-y-2.5 text-sm font-mono">
              {manifest.map((line, idx) => (
                <motion.div
                  key={line.key}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.12 }}
                  className="text-neutral-200"
                >
                  <span className="text-emerald-400">{line.key}:</span>{' '}
                  <span className="text-neutral-300">"{line.value}"</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: manifest.length * 0.12 }}
                className="flex items-center gap-1 pt-1 text-neutral-500"
              >
                <span>{'>'}</span>
                <span className="w-1.5 h-3.5 bg-emerald-400 animate-pulse" />
              </motion.div>
            </div>
          </MacWindow>
        </motion.div>

        {/* Right Structured 3-Block Layout */}
        <div className="lg:col-span-7 space-y-6">
          <motion.p
            variants={fadeUpItem}
            className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 font-normal leading-relaxed mb-6"
          >
            {profile.detailedAbout}
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {profile.aboutApproach.map((block, idx) => {
              const Icon = approachIcons[idx] ?? Target;
              const accent = approachAccents[idx] ?? approachAccents[0];
              return (
                <motion.div
                  key={idx}
                  variants={fadeUpItem}
                  className="group relative rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.bar} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-10`} />
                  <div className="p-5 sm:p-6">
                    <div className={`w-9 h-9 rounded-lg ${accent.icon} flex items-center justify-center mb-3.5`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="block text-neutral-800 dark:text-neutral-200 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                      0{idx + 1} / {block.title}
                    </span>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                      {block.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Core Technical Principles Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
          >
            <motion.div
              variants={fadeUpItem}
              className="group p-5 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/70 dark:border-neutral-800 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:bg-white dark:hover:bg-neutral-900"
            >
              <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5">Production Standards</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Pydantic v2 type safety, Alembic migrations, atomic database transactions, and JWT authentication.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpItem}
              className="group p-5 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/70 dark:border-neutral-800 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:bg-white dark:hover:bg-neutral-900"
            >
              <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                <Bot className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5">Grounded AI Engineering</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Integrating Gemini, Mistral, and OpenAI with function calling and MCP (Model Context Protocol).
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
