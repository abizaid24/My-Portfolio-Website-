'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '@/data/profile';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');
  const featuredCount = profile.projects.filter((p) => p.featured).length;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section scroll spy
      const sections = ['work', 'services', 'experience', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Desktop Floating Pill Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-700/80 shadow-floating text-neutral-900 dark:text-white'
              : 'bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 shadow-subtle text-neutral-900 dark:text-white'
          }`}
        >
          {/* Availability Status Pill */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/80 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/30 text-xs font-medium text-emerald-950 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="hidden min-[420px]:inline tracking-wide">{profile.availability}</span>
            <span className="min-[420px]:hidden tracking-wide">Available</span>
          </div>

          {/* Desktop Center Links */}
          <div className="hidden md:flex items-center gap-1 bg-neutral-100/70 dark:bg-white/5 p-1 rounded-full border border-neutral-200/40 dark:border-white/10 text-xs font-medium">
            <button
              onClick={() => scrollToSection('work')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeSection === 'work'
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-white/10'
              }`}
            >
              Work <span className="text-[10px] opacity-70 ml-0.5">[{featuredCount}]</span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeSection === 'services'
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-white/10'
              }`}
            >
              Services <span className="text-[10px] opacity-70 ml-0.5">[{profile.services.length}]</span>
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeSection === 'experience'
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-white/10'
              }`}
            >
              Experience <span className="text-[10px] opacity-70 ml-0.5">[1y+]</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                activeSection === 'contact'
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-white/10'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:inline-flex" />
            <a
              href={`mailto:${profile.email}`}
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-semibold tracking-wide transition-all shadow-subtle hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-neutral-100 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 text-neutral-800 dark:text-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Overlay Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-neutral-950/90 backdrop-blur-xl flex flex-col justify-between p-8 md:hidden text-white"
          >
            <div className="pt-24 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Navigation</span>
                <ThemeToggle />
              </div>
              <nav className="flex flex-col gap-4 text-2xl font-display font-light tracking-tight">
                <button
                  onClick={() => scrollToSection('work')}
                  className="text-left py-2 border-b border-neutral-800 hover:text-emerald-400 transition-colors flex justify-between items-center"
                >
                  <span>Work</span>
                  <span className="text-sm font-mono text-neutral-500">[{featuredCount}]</span>
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left py-2 border-b border-neutral-800 hover:text-emerald-400 transition-colors flex justify-between items-center"
                >
                  <span>Services</span>
                  <span className="text-sm font-mono text-neutral-500">[{profile.services.length}]</span>
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-left py-2 border-b border-neutral-800 hover:text-emerald-400 transition-colors flex justify-between items-center"
                >
                  <span>Experience</span>
                  <span className="text-sm font-mono text-neutral-500">[1y+]</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left py-2 border-b border-neutral-800 hover:text-emerald-400 transition-colors flex justify-between items-center"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-400" />
                </button>
              </nav>
            </div>

            <div className="border-t border-neutral-800 pt-6 flex flex-col gap-3 text-xs text-neutral-400 font-mono">
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-neutral-200">{profile.location}</span>
              </div>
              <div className="flex justify-between">
                <span>Email:</span>
                <a href={`mailto:${profile.email}`} className="text-neutral-200 hover:underline">
                  {profile.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
