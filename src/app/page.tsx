import Button from '@/components/buttons';
import Carousel from '@/components/cards/carousel';
import AnimatedSection from '@/components/cards/frame';
import Project from '@/components/cards/project';
import ContactForm from '@/components/form/contact';
import InteractiveImage from '@/components/interactives/picture';
import { Switcher } from '@/components/interactives/switcher';
import SkillList from '@/components/lists/skill';
import { aboutMe, fullName, job } from '@/config/profile';
import projects from '@/config/projects';
import skills from '@/config/skills';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { FiCameraOff } from 'react-icons/fi';

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const subdomain = host.split('.')[0].split('-')[0];

  const jobTitle = job[subdomain as keyof typeof job] || job.default;
  const aboutMeText = aboutMe[subdomain as keyof typeof aboutMe] || aboutMe.default;
  return (
    <>
      <section id="home" className="min-h-screen separator flex items-center relative overflow-hidden home">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-11 lg:gap-16 max-w-6xl m-[0_auto] px-4 lg:px-0 mt-16 md:mt-0">
          <div className="profile-image w-56 h-56 md:w-64 lg:w-72 md:h-64 lg:h-72 relative z-10 rounded-full bg-accent border-5 border-default-bg shadow-[0_10px_20px_var(--color-shadow)] order-1 md:order-2">
            <InteractiveImage src="/portfolio/avatar.jpg" alt="profile picture" className="rounded-full" />
          </div>
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold mb-6 md:mb-10 dark:text-default-text">{fullName}</h1>
            <p className="text-xl md:text-[22px] lg:text-2xl text-default-text dark:text-muted mb-6 md:mb-8">{jobTitle}</p>
            <Link
              href="#projects"
              className="inline-block p-[0.8rem_1.8rem] md:p-[0.9rem_2rem] lg:p-[1rem_2rem] bg-primary text-white no-underline rounded-lg font-medium transition-colors duration-300 ease-in border-none cursor-pointer hover:bg-secondary"
            >
              Voir mes projets
            </Link>
          </div>
        </div>
      </section>
      <AnimatedSection id="about" className="separator">
        <h2 className="subtitle">À propos de moi</h2>
        <p className="text-default-text dark:text-muted text-center text-lg md:text-[20px] lg:text-xl px-4 md:px-12 lg:px-20">{aboutMeText}</p>
      </AnimatedSection>
      <AnimatedSection id="skills" className="separator px-4 md:px-12 lg:px-20">
        <h2 className="subtitle">Mes Compétences</h2>
        <Switcher>
          <>
            <Carousel className="w-full py-1" speed={4000}>
              {skills.map(({ name, logo: Logo }) => (
                <div className="text-center p-4 md:p-6 lg:p-8 bg-card-bg rounded-2xl dark:border-1 dark:border-border/70 skill-shadow-card hover:bg-card-hover dark:hover:bg-card-hover/60">
                  <Logo className="text-4xl md:text-[42px] lg:text-5xl text-primary mb-2 md:mb-4 mx-auto" />
                  <h3 className="text-lg md:text-[19px] lg:text-xl">{name}</h3>
                </div>
              ))}
            </Carousel>
            {(skills?.length ?? 0) > 14 && (
              <Carousel className="w-full mt-5 py-1" speed={4000} autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}>
                {skills.reverse().map(({ name, logo: Logo }) => (
                  <div className="text-center p-4 md:p-6 lg:p-8 bg-card-bg rounded-2xl dark:border-1 dark:border-border/70 skill-shadow-card hover:bg-card-hover dark:hover:bg-card-hover/60 !cursor-grab">
                    <Logo className="text-4xl md:text-[42px] lg:text-5xl text-primary mb-2 md:mb-4 mx-auto" />
                    <h3 className="text-lg md:text-[19px] lg:text-xl">{name}</h3>
                  </div>
                ))}
              </Carousel>
            )}
          </>
          <SkillList className="px-4 lg:px-40" />
        </Switcher>
      </AnimatedSection>
      <AnimatedSection id="projects" className="separator">
        <h2 className="subtitle">Projets</h2>
        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-9 lg:gap-x-14 gap-y-12 md:gap-y-16 lg:gap-y-24 w-full justify-center px-1 sm:px-6 lg:px-32">
          {projects
            .sort((a, b) => Number(b.date) - Number(a.date))
            .map(v => {
              const LinkIcon = v.link?.icon;
              return (
                <Project
                  href={`/project/${v.title.toLowerCase()}`}
                  key={v.title}
                  className="rounded-2xl overflow-hidden shadow-[0_3px_10px_var(--color-shadow)] hover:shadow-[0_8px_20px_var(--color-shadow)] border-1 border-border/80 transition-all duration-300 ease-in flex flex-col max-w-full md:max-w-[320px] lg:max-w-96 h-[424px] m-[0_auto] hover:-translate-y-2 cursor-pointer hover:border-primary"
                >
                  <div className="h-48 w-full bg-accent flex justify-center items-center overflow-hidden relative">
                    {v?.picture?.length ? (
                      <Image src={v.picture[0].replace(/=w\d+-h\d+-s-no-gm/, '=s1600')} alt={`${v.title} project picture`} fill />
                    ) : (
                      <FiCameraOff className="w-16 h-16 text-default-text/75" />
                    )}
                  </div>
                  <div className="px-6 pt-4 pb-4 flex flex-col gap-3 flex-1 w-full bg-card-bg shadow-[inset_0_2px_0px_var(--color-shadow)]">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-xl font-semibold text-default-text m-0">{v.title}</h3>
                      <span className="text-[0.85rem] text-default-text/75 pb-0.5 pt-1 px-2 rounded-[0.3rem] bg-border/20 dark:bg-border/30 font-semibold">
                        {v.date}
                      </span>
                    </div>
                    <p className="line-clamp-2 w-full text-[0.95rem] leading-[1.5] m-0">{v.resume}</p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2">
                      {v.skills.slice(0, 3).map((v, i) => (
                        <div
                          key={i}
                          className="py-0.5 md:py-1 px-[0.5rem] md:px-[0.6rem] rounded-[0.4rem] bg-accent text-primary text-[0.8rem] md:text-[0.825rem] font-semibold shadow-[0_1px_1px_var(--color-shadow)]"
                        >
                          {v}
                        </div>
                      ))}
                      {v.skills.length > 3 && (
                        <div className="py-0.5 md:py-1 pl-[0.5rem] md:pl-[0.6rem] flex items-center pr-2 md:pr-3 rounded-[0.4rem] bg-accent text-primary text-[0.8rem] md:text-[0.825rem] font-semibold shadow-[0_1px_1px_var(--color-shadow)]">
                          <p className="text-[0.9rem] md:text-[1rem] leading-0 h-fit xl:mt-0.5">+</p>
                          {v.skills.length - 3}
                        </div>
                      )}
                    </div>
                    {v?.link && (
                      <Link href={v.link.url} target="_blank" rel="noopener noreferrer" className="mt-auto">
                        <Button
                          className="m-auto px-3 md:px-4 py-[0.5rem] md:py-[0.6rem] rounded-lg text-[0.9rem] md:text-base bg-primary border-1 border-border/20 text-white w-full border-none hover:bg-secondary hover:border-primary"
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
      <AnimatedSection id="contact" className="w-full md:w-[75%] lg:w-[45%] mx-auto px-8 sm:px-4 my-12 md:my-20 lg:my-24">
        <h2 className="subtitle">Me Contacter</h2>
        <ContactForm />
      </AnimatedSection>
    </>
  );
}
