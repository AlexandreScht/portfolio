import Link from 'next/link';
import { LuDownload } from 'react-icons/lu';
import ThemeSwitcher from '../buttons/theme';

export default function HeaderBar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-3.5 bg-card-bg backdrop-blur-md z-50 shadow-md border-b border-border">
      <div className="flex items-center gap-x-8">
        <Link href="/" className="text-2xl font-bold text-primary dark:text-white">
          Portfolio
        </Link>
        <ThemeSwitcher className="w-10 h-10 border !bg-accent/50 border-border/80 hover:border-secondary" />
      </div>

      <div className="flex items-center gap-8">
        <ul className="flex list-none h-full items-center gap-8">
          <li>
            <Link href="#skills" className="nav-link underline-from-center">
              Compétences
            </Link>
          </li>
          <li>
            <Link href="#projects" className="nav-link underline-from-center">
              Projets
            </Link>
          </li>
          <li>
            <Link href="#projects" className="nav-link underline-from-center">
              Expérience
            </Link>
          </li>
          <li>
            <Link href="#projects" className="nav-link underline-from-center">
              Formation
            </Link>
          </li>
          <li>
            <Link href="#contact" className="nav-link underline-from-center">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/cv.pdf"
              download
              className="bg-primary text-white pl-2.5 pr-4 py-2 rounded-lg inline-flex items-center gap-2 transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,102,255,0.2)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
            >
              <i className="fas fa-download"></i>
              <LuDownload className="text-2xl" /> Mon CV
            </Link>
          </li>
        </ul>

        <button className="md:hidden flex flex-col gap-1.5 p-2" id="navToggle">
          <span className="block w-6 h-0.5 bg-current"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>
      </div>
    </nav>
  );
}
