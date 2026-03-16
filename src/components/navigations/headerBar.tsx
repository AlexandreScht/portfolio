'use client';
import { cn } from '@heroui/react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { LuDownload } from 'react-icons/lu';
import ThemeSwitcher from '../buttons/theme';

const navLinks = [
  { href: '/#about', label: 'À propos' },
  { href: '/#skills', label: 'Compétences' },
  { href: '/#projects', label: 'Projets' },
  { href: '/parcours/#experiences', label: 'Expériences' },
  { href: '/parcours/#educations', label: 'Formations' },
  { href: '/#contact', label: 'Contact' },
];

export default function HeaderBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' },
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 w-full flex justify-between items-center px-5 lg:px-10 py-3.5 z-50 transition-all duration-500',
          scrolled
            ? 'bg-glass-bg backdrop-blur-xl border-b border-glass-border shadow-[0_1px_20px_rgba(0,0,0,0.04)]'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-x-3 lg:gap-x-5">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-[0_2px_12px_var(--color-primary-glow)] group-hover:shadow-[0_4px_24px_var(--color-primary-glow)] transition-all duration-300 group-hover:scale-105">
              AS
            </span>
            <span className="hidden sm:block text-lg font-semibold text-default-text dark:text-white tracking-tight">
              Alexandre<span className="text-primary font-black">.</span>
            </span>
          </Link>
          <ThemeSwitcher className="w-9 h-9 rounded-xl border border-glass-border bg-glass-bg backdrop-blur-md hover:border-primary/30 transition-all duration-300" />
        </div>

        {/* Desktop + Mobile Nav */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div
            className={cn(
              'fixed lg:static top-[58px] left-0 w-full lg:w-auto overflow-hidden transition-all duration-400 ease-in-out',
              isMenuOpen
                ? 'max-h-[600px] opacity-100 bg-glass-bg backdrop-blur-xl border-b border-glass-border lg:bg-transparent lg:backdrop-blur-none lg:border-0'
                : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100',
            )}
          >
            <ul className="flex flex-col lg:flex-row list-none items-center gap-1 lg:gap-1 p-5 lg:p-0">
              {navLinks.map(link => {
                const isActive = activeHash && link.href.includes(activeHash);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 block',
                        isActive
                          ? 'text-primary bg-primary/8 dark:bg-primary/12'
                          : 'text-muted hover:text-default-text dark:hover:text-white hover:bg-default-bg/50 dark:hover:bg-white/5',
                      )}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-2 lg:mt-0 lg:ml-2">
                <Link
                  href="/api/downloadCv"
                  download
                  prefetch={false}
                  className="group glow-btn bg-gradient-to-r from-primary to-secondary text-white pl-3.5 pr-4.5 py-2.5 rounded-xl inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:shadow-[0_4px_24px_var(--color-primary-glow)] hover:-translate-y-0.5"
                  onClick={closeMenu}
                >
                  <LuDownload className="text-base download-icon" /> Mon CV
                </Link>
              </li>
            </ul>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-glass-bg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={closeMenu} />}
    </>
  );
}
