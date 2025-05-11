import Link from 'next/link';
import ThemeSwitcher from '../buttons/theme';

export default function HeaderBar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-card-bg backdrop-blur-md z-50 shadow-md border-b border-border dark:bg-[rgba(19,31,56,0.85)] dark:backdrop-blur-[15px] dark:shadow-[0_2px_15px_rgba(0,0,0,0.25)] dark:border-[rgba(70,160,255,0.1)]">
      <>
        <div className="text-2xl font-bold text-primary dark:text-white dark:font-bold dark:drop-shadow-[0_0_8px_rgba(0,0,0,0.15)]">Portfolio</div>
        <ThemeSwitcher className="w-10 h-10 bg-secondary-v3 border border-secondary-v6 hover:bg-secondary-v4" />
      </>

      <div className="flex items-center gap-8">
        <ul className="hidden md:flex list-none gap-8">
          <li>
            <Link href="#about" className="nav-link">
              Compétences
            </Link>
          </li>
          <li>
            <Link href="#skills" className="nav-link">
              Projets
            </Link>
          </li>
          <li>
            <Link href="#projects" className="nav-link">
              Expérience
            </Link>
          </li>
          <li>
            <Link href="#projects" className="nav-link">
              Formation
            </Link>
          </li>
          <li>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/cv.pdf"
              download
              className="bg-primary text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-all duration-300 hover:bg-secondary hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,102,255,0.2)] dark:bg-[#46a0ff] dark:hover:bg-[#3285db] dark:shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
            >
              <i className="fas fa-download"></i>
              Mon CV
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
