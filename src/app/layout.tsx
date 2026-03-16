import HeaderBar from '@/components/navigations/headerBar';
import { fullName, socialLinks } from '@/config/profile';
import ThemeProvider from '@/hooks/ThemeProvider';
import UiProviders from '@/hooks/UiProvider';
import '@/styles/global.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Alexandre SCHECHT — Portfolio Développeur Full Stack',
  description:
    "Portfolio professionnel d'Alexandre SCHECHT, développeur Full Stack passionné par l'innovation logicielle et les architectures modernes. Next.js, Node.js, TypeScript, Docker.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="w-full scroll-smooth" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio professionnel d'Alexandre SCHECHT — Développeur Full Stack & Administrateur Systèmes." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.js" defer></script>
      </head>
      <body
        className="w-full font-sans bg-default-bg text-default-text transition-colors duration-300 ease-in-out min-h-screen relative"
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" themes={['light', 'dark']} enableSystem={true}>
          <main className="w-full font-sans bg-default-bg text-default-text transition-colors duration-300 ease-in-out" suppressHydrationWarning>
            <UiProviders>
              <HeaderBar />
              {children}
            </UiProviders>
          </main>
        </ThemeProvider>
        <footer className="relative border-t border-glass-border/50 bg-glass-bg/60 backdrop-blur-xl mt-10">
          {/* Gradient top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted/80 tracking-wide">
              Copyright &copy;{new Date().getFullYear()} Développé par {fullName}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-glass-bg border border-glass-border/60 flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 hover:shadow-[0_0_12px_var(--color-primary-glow)] transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
