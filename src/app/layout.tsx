import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/ui/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import ScrollProgress from '@/components/ui/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Premium display face for headlines, the hero name lockup, and section labels.
// Manrope's geometric character + true 800 weight gives the oversized editorial
// type its own identity instead of falling back to Inter at large sizes.
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hafiz Abi Zaid Babar — Agentic AI Engineer | Python Backend Developer',
  description:
    'Agentic AI Engineer specializing in autonomous AI agents, LLM integration, and Python (FastAPI) backend architecture — designing scalable REST APIs and shipping production-style AI platforms.',
  keywords: [
    'Hafiz Abi Zaid Babar',
    'Agentic AI Engineer',
    'Agentic AI Specialist',
    'LangChain',
    'LangGraph',
    'Model Context Protocol',
    'MCP',
    'Python Backend Developer',
    'FastAPI Developer',
    'PostgreSQL',
    'MongoDB',
    'Lahore Pakistan',
  ],
  authors: [{ name: 'Hafiz Abi Zaid Babar' }],
  openGraph: {
    title: 'Hafiz Abi Zaid Babar — Agentic AI Engineer | Python Backend Developer',
    description:
      'Building autonomous Agentic AI applications, production REST APIs, and scalable backend systems.',
    url: 'https://github.com/abizaid24',
    siteName: 'Hafiz Abi Zaid Babar Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hafiz Abi Zaid Babar — Agentic AI Engineer | Python Backend Developer',
    description:
      'Building autonomous Agentic AI applications, production REST APIs, and scalable backend systems.',
  },
};

export const viewport: Viewport = {
  themeColor: '#eef0f2',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} lenis`} suppressHydrationWarning>
      <body className="cloud-bg-texture text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900 relative min-h-screen transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <SmoothScroll>
            <ScrollProgress />
            <CustomCursor />
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
