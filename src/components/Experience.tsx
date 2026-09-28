'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { profile } from '@/data/profile';
import MacWindow from '@/components/ui/MacWindow';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Sleek Dark Container Box */}
      <MacWindow
        label="experience.log"
        barClassName="mac-window-bar-dark"
        className="rounded-3xl sm:rounded-[36px] border border-neutral-800 shadow-2xl"
        bodyClassName="relative bg-neutral-950 text-white p-6 sm:p-10 md:p-14"
      >
        {/* Editorial Watermark */}
        <div className="absolute top-4 right-8 font-display font-black text-6xl sm:text-8xl md:text-9xl text-white/5 select-none pointer-events-none uppercase tracking-widest">
          EXPERIENCE
        </div>

        {/* Section Header */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16 border-b border-neutral-800 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-400">
                /EXPERIENCE & REPOSITORY SNAPSHOT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
              Professional Journey
            </h2>
          </div>

          <div className="text-xs font-mono text-neutral-400">
            1+ Year Hands-On Focus
          </div>
        </div>

        {/* Experience List */}
        <div className="relative z-10 flex flex-col divide-y divide-neutral-800/80">
          {profile.experience.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`group py-8 sm:py-10 transition-colors duration-300 rounded-2xl px-4 sm:px-6 -mx-4 sm:-mx-6 ${
                exp.badge
                  ? 'bg-emerald-500/[0.06] border border-emerald-500/20 hover:bg-emerald-500/10'
                  : 'hover:bg-neutral-900/40'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-4">
                {/* Role & Org */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className={`font-display font-bold text-white group-hover:text-emerald-400 transition-colors ${
                      exp.badge ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                    }`}>
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-mono border border-emerald-500/30">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                        </span>
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-neutral-400">
                    <Briefcase className="w-3.5 h-3.5 text-neutral-500" />
                    <span className={exp.badge ? 'text-neutral-200 font-semibold' : ''}>{exp.organization}</span>
                    <span>•</span>
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-neutral-400 shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed mb-6 max-w-4xl">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 border-t border-neutral-800/60">
                {exp.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-neutral-300 leading-relaxed"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </MacWindow>
    </section>
  );
}
