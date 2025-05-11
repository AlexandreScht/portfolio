import HeaderBar from '@/components/navigations/headerBar';
import ThemeProvider from '@/hooks/ThemeProvider';
import UiProviders from '@/hooks/UiProvider';
import '@/styles/global.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Portfolio - Alexandre SCHECHT',
  description: 'My portfolio',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="w-full scroll-smooth" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Bienvenue sur mon portfolio personnel." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="w-full font-sans bg-default-bg text-default-text transition-colors duration-300 ease-in-out min-h-screen relative pb-22"
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="system" themes={['light', 'dark']} enableSystem={true}>
          <main className="w-full font-sans bg-default-bg text-default-text transition-colors duration-300 ease-in-out" suppressHydrationWarning>
            <UiProviders>
              <HeaderBar />
              {children}
            </UiProviders>
            <footer className="text-center p-8 bg-accent text-muted absolute bottom-0 w-full">
              <p>&copy; 2025 Schecht Alexandre. Tous droits réservés.</p>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
