'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Mail, Github, MessageCircle } from 'lucide-react';
import { profile } from '@/data/profile';
import MacWindow from '@/components/ui/MacWindow';

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <MacWindow
        label="contact.sh"
        barClassName="mac-window-bar-dark"
        className="rounded-3xl sm:rounded-[40px] border border-neutral-800 shadow-2xl"
        bodyClassName="relative bg-neutral-900 text-white p-8 sm:p-14 md:p-20 text-center flex flex-col items-center"
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none" />

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono text-emerald-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Currently Accepting New Opportunities</span>
        </div>

        {/* Big Editorial Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight text-white mb-6 max-w-5xl leading-none">
          HAVE A PROJECT IN MIND?
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg md:text-xl text-neutral-400 font-normal leading-relaxed mb-10 max-w-2xl">
          Let's build something useful, intelligent, and technically strong. Available for backend architecture, FastAPI development, and Agentic AI integrations.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-white text-neutral-900 text-sm font-semibold tracking-wide hover:bg-neutral-100 transition-all shadow-lg hover:scale-105 active:scale-100"
          >
            <Mail className="w-4 h-4 text-neutral-900" />
            <span>Send Direct Email</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 text-sm font-mono transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-neutral-400" />
                <span>{profile.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap justify-center items-center gap-3 pt-8 border-t border-neutral-800/80 w-full max-w-md">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-mono transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={profile.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-mono transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </MacWindow>
    </section>
  );
}
