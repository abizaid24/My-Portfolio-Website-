'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, MessageCircle, Mail, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';
import {
  heroItemVariants,
  heroTextRevealLeft,
  heroTextRevealRight,
  heroPortraitVariants,
} from '@/lib/motion';

export default function Hero() {
  // profile.title carries both identities as "Primary | Secondary" — split so
  // Agentic AI Engineer can dominate and Python Backend Developer supports it.
  const [primaryTitle, secondaryTitle] = profile.title.split('|').map((t) => t.trim());

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col items-center justify-center pt-28 md:pt-32 pb-14 md:pb-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">

      {/* 200ms: Availability + positioning badge */}
      <motion.div
        variants={heroItemVariants(0.2)}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-3 mb-4 sm:mb-6"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-700/80 shadow-subtle text-xs font-mono text-neutral-700 dark:text-neutral-300 backdrop-blur-xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          <span>{profile.location}</span>
        </div>
        <div className="hidden sm:inline-block text-neutral-400 dark:text-neutral-500 text-xs font-mono">•</div>
        <div className="hidden sm:inline-block text-xs font-mono text-neutral-500 dark:text-neutral-400">
          Agentic AI &amp; FastAPI Specialist
        </div>
      </motion.div>

      {/* ============ Stacked name + portrait composition ============ */}
      {/* Layer order (back to front): HAFIZ (outline, behind) -> portrait -> ABI ZAID BABAR (white pop, front) */}
      {/* The portrait is the hero's central visual anchor, so its box gets the most room. */}
      <div className="relative w-full max-w-[480px] sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1100px] 2xl:max-w-[1220px] h-[380px] sm:h-[480px] md:h-[580px] lg:h-[680px] mx-auto select-none">

        {/* 300ms: HAFIZ — large, sits behind the portrait, outlined so it reads against the page */}
        <motion.span
          variants={heroTextRevealLeft}
          initial="hidden"
          animate="visible"
          className="absolute inset-x-0 top-0 z-0 text-center font-display font-extrabold uppercase text-outline-dark leading-none"
          style={{ fontSize: 'clamp(3.6rem, 18vw, 11rem)' }}
        >
          {profile.name.first}
        </motion.span>

        {/* 600ms: Portrait — rises up from the bottom, layered in front of HAFIZ, the dominant visual element */}
        <motion.div
          variants={heroPortraitVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-x-0 bottom-0 z-10 flex justify-center"
        >
          <div className="relative w-[300px] sm:w-[380px] md:w-[460px] lg:w-[560px] aspect-square">
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-300/50 dark:from-neutral-700/30 via-white/10 dark:via-neutral-900/10 to-transparent rounded-full filter blur-3xl scale-90" />
            <Image
              src={profile.profileImage}
              alt={profile.name.full}
              fill
              priority
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 460px, 560px"
              className="relative object-contain object-bottom drop-shadow-[0_25px_30px_rgba(0,0,0,0.18)]"
            />
          </div>
        </motion.div>

        {/* 900ms: ABI ZAID BABAR — pops in front, overlapping the lower portrait. Gradient-textured
            white fill with a thin dark stroke keeps it legible over both the dark shirt and the light page. */}
        <motion.span
          variants={heroTextRevealRight}
          initial="hidden"
          animate="visible"
          className="absolute inset-x-0 -bottom-1 sm:bottom-1 z-20 text-center font-display font-extrabold uppercase text-hero-pop leading-none px-1 whitespace-nowrap"
          style={{ fontSize: 'clamp(2.4rem, 11.8vw, 7.4rem)', letterSpacing: '-0.015em' }}
        >
          {profile.name.last}
        </motion.span>
      </div>

      {/* 1050ms / 1200ms: Title hierarchy + positioning statement */}
      <motion.div
        variants={heroItemVariants(1.05)}
        initial="hidden"
        animate="visible"
        className="mt-6 sm:mt-8 max-w-2xl text-center"
      >
        <h1
          className="font-display font-extrabold uppercase tracking-tight text-neutral-900 dark:text-white leading-[1.05]"
          style={{ fontSize: 'clamp(1.6rem, 4.4vw, 2.75rem)' }}
        >
          {primaryTitle}
        </h1>
        <p className="mt-1.5 text-sm sm:text-base font-medium text-neutral-500 dark:text-neutral-400 tracking-wide">
          {secondaryTitle}
        </p>
        <motion.p
          variants={heroItemVariants(1.2)}
          initial="hidden"
          animate="visible"
          className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal max-w-xl mx-auto"
        >
          {profile.bio}
        </motion.p>
      </motion.div>

      {/* 1350ms: CTAs */}
      <motion.div
        variants={heroItemVariants(1.35)}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap items-center justify-center gap-3 mt-8"
      >
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-semibold tracking-wide transition-all shadow-subtle hover:shadow-md hover:-translate-y-0.5"
        >
          <span>Let's Work Together</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/80 dark:bg-neutral-900/80 hover:bg-white dark:hover:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 shadow-xs text-xs font-semibold tracking-wide transition-all hover:-translate-y-0.5"
        >
          <span>View Selected Work</span>
        </a>
      </motion.div>

      {/* Floating Social Desktop Sidebar Pills */}
      <motion.div
        variants={heroItemVariants(1.35)}
        initial="hidden"
        animate="visible"
        className="hidden xl:flex flex-col gap-2.5 fixed right-8 top-1/2 -translate-y-1/2 z-30 pointer-events-auto"
      >
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/80 shadow-subtle text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:scale-110 transition-all"
          aria-label="GitHub Profile"
          title="GitHub"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={profile.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/80 shadow-subtle text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:scale-110 transition-all"
          aria-label="Message on WhatsApp"
          title="WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/80 shadow-subtle text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:scale-110 transition-all"
          aria-label="Send Email"
          title="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
