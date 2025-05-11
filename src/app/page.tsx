import Button from '@/components/buttons';
import Carousel from '@/components/cards/carousel';
import AnimatedSection from '@/components/cards/frame';
import Project from '@/components/cards/project';
import InteractiveImage from '@/components/interactives/picture';
import { Switcher } from '@/components/interactives/switcher';
import SkillList from '@/components/lists/skill';
import projects from '@/config/projects';
import skills from '@/config/skills';
import Image from 'next/image';
import Link from 'next/link';
import { FiCameraOff } from 'react-icons/fi';

export default function Home() {
  return (
    <>
      <section id="home" className="min-h-screen separator flex items-center relative overflow-hidden home">
        <div className="relative z-10 flex items-center gap-16 max-w-6xl m-[0_auto]">
          <div className="flex-1">
            <h1 className="text-[56px] font-bold mb-10 dark:text-default-text">Alexandre SCHECHT</h1>
            <p className="text-2xl text-default-text dark:text-muted mb-8">Développeur Full Stack & Administrateur systémes et réseaux</p>
            <Link
              href="#projects"
              className="inline-block p-[1rem_2rem] bg-primary text-white no-underline rounded-lg font-medium transition-colors duration-300 ease-in border-none cursor-pointer hover:bg-secondary"
            >
              Voir mes projets
            </Link>
          </div>
          <div className="profile-image w-72 h-72 relative z-10 rounded-full bg-accent border-5 border-default-bg shadow-[0_10px_20px_var(--color-shadow)]">
            <InteractiveImage src="/avatar.jpg" alt="profile picture" className="rounded-full" />
          </div>
        </div>
      </section>
      <AnimatedSection id="about" className="separator">
        <h2 className="subtitle">À propos de moi</h2>
        <p className="text-default-text dark:text-muted text-center text-xl px-20">
          Bonjour, je suis Alexandre, développeur Full Stack et ingénieur Systèmes & Réseaux en devenir, passionné par l’innovation logicielle et la
          résilience des infrastructures. J’allie la création d’applications web réactives (Node.js, Vue.js, Next.js) à la conception d’architectures
          systèmes et réseaux sécurisées (Linux, Docker). Curieux et agile, j’interviens sur des projets B2B et B2C exigeant performance, scalabilité
          et robustesse.
        </p>
      </AnimatedSection>
      <AnimatedSection id="skills" className="separator px-20">
        <h2 className="subtitle">Mes Compétences</h2>
        <Switcher>
          <>
            <Carousel className="w-full py-1" speed={4000}>
              {skills.map(({ name, logo: Logo }) => (
                <div className="text-center p-8 bg-card-bg rounded-2xl dark:border-1 dark:border-border/70 skill-shadow-card hover:bg-card-hover dark:hover:bg-card-hover/60">
                  <Logo className="text-5xl text-primary mb-4 mx-auto" />
                  <h3 className="text-xl">{name}</h3>
                </div>
              ))}
            </Carousel>
            {(skills?.length ?? 0) > 14 && (
              <Carousel className="w-full mt-5 py-1" speed={4000} autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}>
                {skills.reverse().map(({ name, logo: Logo }) => (
                  <div className="text-center p-8 bg-card-bg rounded-2xl dark:border-1 dark:border-border/70 skill-shadow-card hover:bg-card-hover dark:hover:bg-card-hover/60">
                    <Logo className="text-5xl text-primary mb-4 mx-auto" />
                    <h3 className="text-xl">{name}</h3>
                  </div>
                ))}
              </Carousel>
            )}
          </>
          <SkillList className="px-40" />
        </Switcher>
      </AnimatedSection>
      <AnimatedSection id="projects" className="separator">
        <h2 className="subtitle">Projets</h2>
        <article className="grid grid-cols-3 gap-x-11 gap-y-24 w-full justify-center px-32">
          {projects.map(v => {
            const LinkIcon = v.link?.icon;
            return (
              <Project
                href={`/project/${v.title}`}
                key={v.title}
                className="rounded-2xl overflow-hidden shadow-[0_3px_10px_var(--color-shadow)] hover:shadow-[0_8px_20px_var(--color-shadow)] border-1 border-border/80 transition-all duration-300 ease-in flex flex-col w-96 h-[424px] m-[0_auto] hover:-translate-y-2 cursor-pointer hover:border-primary"
              >
                <div className="h-48 w-full bg-accent flex justify-center items-center overflow-hidden relative">
                  {v?.picture?.length ? (
                    <Image src={v.picture[0]} alt={`${v.title} project picture`} fill />
                  ) : (
                    <FiCameraOff className="w-16 h-16 text-default-text/75" />
                  )}
                </div>
                <div className="px-6 pt-4 flex flex-col gap-3 flex-1 w-full bg-card-bg shadow-[inset_0_2px_0px_var(--color-shadow)]">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-semibold text-default-text m-0">{v.title}</h3>
                    <span className="text-[0.85rem] text-default-text/75 pb-0.5 pt-1 px-2 rounded-[0.3rem] bg-border/20 dark:bg-border/30 font-semibold">
                      {v.date}
                    </span>
                  </div>
                  <p className="line-clamp-2 w-full text-[0.95rem] leading-[1.5] m-0">{v.resume || v.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {v.skills.slice(0, 3).map((v, i) => (
                      <div
                        key={i}
                        className="py-1 px-[0.6rem] rounded-[0.4rem] bg-accent text-primary text-[0.825rem] font-semibold shadow-[0_1px_1px_var(--color-shadow)]"
                      >
                        {v}
                      </div>
                    ))}
                    {v.skills.length > 3 && (
                      <div className="py-1 pl-[0.6rem] flex items-center pr-3 rounded-[0.4rem] bg-accent text-primary text-[0.825rem] font-semibold shadow-[0_1px_1px_var(--color-shadow)]">
                        <p className="text-[1rem] leading-0 h-fit pt-0.5">+</p>
                        {v.skills.length - 3}
                      </div>
                    )}
                  </div>
                  {v?.link && (
                    <Link href={v.link.url} target="_blank" rel="noopener noreferrer" className="mt-1.5">
                      <Button
                        className="m-auto px-4 py-[0.6rem] rounded-lg text-base bg-primary border-1 border-border/20 text-white w-full border-none hover:bg-secondary hover:border-primary"
                        startContent={LinkIcon ? <LinkIcon className="mb-0.5" /> : undefined}
                      >
                        {v.link.label}
                      </Button>
                    </Link>
                  )}
                </div>
              </Project>
            );
          })}
        </article>
      </AnimatedSection>
    </>
  );
}
