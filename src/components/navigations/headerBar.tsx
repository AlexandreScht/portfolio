'use client';
import { cn } from '@heroui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LuDownload } from 'react-icons/lu';
import ThemeSwitcher from '../buttons/theme';

export default function HeaderBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subdomain, setSubdomain] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const host = window.location.hostname;
      const firstPart = host.split('-')[0];
      setSubdomain(firstPart);
    }
  }, []);

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-4 lg:px-8 py-3.5 bg-card-bg backdrop-blur-md z-50 shadow-md border-b border-border">
      <div className="flex items-center gap-x-4 lg:gap-x-8">
        <Link href="/" className="text-xl lg:text-2xl font-bold text-primary dark:text-white">
          Portfolio
        </Link>
        <ThemeSwitcher className="w-12 h-8 lg:w-10 lg:h-10 border !bg-accent/50 border-border/80 hover:border-secondary" />
      </div>

      <div className="flex items-center gap-4 lg:gap-8">
        <div
          className={cn(
            'fixed lg:static top-[60px] left-0 w-full lg:w-auto bg-card-bg lg:bg-transparent overflow-hidden transition-all duration-300 ease-in-out',
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100',
          )}
        >
          <ul className={`flex flex-col lg:flex-row list-none items-center gap-4 lg:gap-8 p-4 lg:p-0 border-b lg:border-0 border-border`}>
            <li>
              <Link href="/#skills" className="nav-link underline-from-center block sm:mt-1" onClick={() => setIsMenuOpen(false)}>
                Compétences
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="nav-link underline-from-center block sm:mt-1" onClick={() => setIsMenuOpen(false)}>
                Projets
              </Link>
            </li>
            <li>
              <Link href="/parcours/#experiences" className="nav-link underline-from-center block sm:mt-1" onClick={() => setIsMenuOpen(false)}>
                Expériences
              </Link>
            </li>
            <li>
              <Link href="/parcours/#educations" className="nav-link underline-from-center block sm:mt-1" onClick={() => setIsMenuOpen(false)}>
                Formations
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="nav-link underline-from-center block sm:mt-1" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                href={`/pdf/${subdomain}-cv.pdf`}
                download
                prefetch={false}
                className="bg-primary text-white pl-2.5 pr-4 py-2 rounded-lg inline-flex items-center gap-2 transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,102,255,0.2)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                onClick={() => setIsMenuOpen(false)}
              >
                <LuDownload className="text-xl lg:text-2xl" /> Mon CV
              </Link>
            </li>
          </ul>
        </div>

        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
}
