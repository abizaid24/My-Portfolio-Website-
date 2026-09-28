'use client';

import { motion } from 'framer-motion';
import { Search, Blocks, Code2, Bug, CheckCircle2, RefreshCcw } from 'lucide-react';
import { profile } from '@/data/profile';
import { fadeUpItem, staggerContainer } from '@/lib/motion';
import MacWindow from '@/components/ui/MacWindow';

const stageIcons: Record<string, typeof Search> = {
  Research: Search,
  Architecture: Blocks,
  Implementation: Code2,
  Debugging: Bug,
  Testing: CheckCircle2,
  Iteration: RefreshCcw,
};

export default function AIAssistedEngineering() {
  const { aiEngineering } = profile;

  return (
    <section id="ai-engineering" className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div variants={fadeUpItem} className="max-w-3xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
              /AI-ASSISTED ENGINEERING
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-neutral-900 dark:text-white mb-5 leading-tight">
            Engineering with AI
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
            {aiEngineering.intro}
          </p>
          <div className="inline-flex items-start sm:items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/30 text-xs sm:text-sm font-mono text-emerald-700 dark:text-emerald-400 leading-relaxed">
            {aiEngineering.distinction}
          </div>
        </motion.div>

        {/* Workflow — human ownership + AI acceleration, stage by stage */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10 sm:mb-14"
        >
          {aiEngineering.workflow.map((step, idx) => {
            const Icon = stageIcons[step.stage] ?? Search;
            const isAI = step.lead === 'AI-Assisted';
            return (
              <motion.div
                key={step.stage}
                variants={fadeUpItem}
                className="group p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:-translate-y-1 hover:shadow-card transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
                    0{idx + 1}
                  </span>
                  <Icon className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                </div>
                <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-1.5">
                  {step.stage}
                </h3>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3 flex-1">
                  {step.desc}
                </p>
                <span
                  className={`self-start text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    isAI
                      ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                      : 'bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {step.lead}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Capabilities + applied toolkit */}
        <motion.div variants={fadeUpItem}>
          <MacWindow
            label="ai_workflow.config.ts"
            className="border border-neutral-200/80 dark:border-neutral-800 shadow-card"
            bodyClassName="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md p-6 sm:p-8"
          >
            <div className="mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-3">
                Workflow Capabilities
              </span>
              <div className="flex flex-wrap gap-2">
                {aiEngineering.capabilities.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-mono"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-3">
                Applied Toolkit
              </span>
              <div className="flex flex-wrap gap-2">
                {aiEngineering.toolkit.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/50 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </MacWindow>
        </motion.div>

        {/* Project philosophy */}
        <motion.p
          variants={fadeUpItem}
          className="mt-8 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl italic border-l-2 border-neutral-300 dark:border-neutral-700 pl-4"
        >
          {aiEngineering.philosophy}
        </motion.p>
      </motion.div>
    </section>
  );
}
