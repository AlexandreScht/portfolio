import Carousel from '@/components/cards/carousel';
import AnimatedSection from '@/components/cards/frame';
import Project from '@/components/cards/project';
import ContactForm from '@/components/form/contact';
import InteractiveImage from '@/components/interactives/picture';
import SkillList from '@/components/lists/skill';
import { aboutMe, email, fullName, job, jobType, localisation, socialLinks, xpYears } from '@/config/profile';
import projects from '@/config/projects';
import skills from '@/config/skills';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { FiCameraOff, FiMail } from 'react-icons/fi';
import { HiOutlineExternalLink, HiOutlineLocationMarker } from 'react-icons/hi';
import { MdWorkOutline } from 'react-icons/md';

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const subdomain = host.split('.')[0].split('-')[0];

  const jobTitle = job[subdomain as keyof typeof job] || job.default;
  const aboutMeData = aboutMe[subdomain as keyof typeof aboutMe] || aboutMe.default;

  return (
    <>
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section id="home" className="min-h-screen separator flex items-center relative overflow-hidden home">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-20 max-w-6xl m-[0_auto] px-6 lg:px-0 mt-20 md:mt-0">
          {/* Profile Image */}
          <div className="profile-image w-48 h-48 md:w-56 lg:w-64 md:h-56 lg:h-64 relative z-10 rounded-full bg-accent border-4 border-glass-border shadow-[0_10px_40px_var(--color-primary-glow)] order-1 md:order-2">
            <InteractiveImage
              src="https://lh3.googleusercontent.com/pw/AP1GczOnUIBwiSuZZrvxdnfwC57bsRP_Nbg5lAYaL5cUDLH20KnCO-EbzqPx5nmfN6xZJ6ZkkCdFmki7bFkDDDZTx_AONiLfLMXdyb2dgAfAY6gVwaMvMs4bMqfKqhsZscOI_zfVCEtthxDl5TwMdhAud7I=w987-h912-s-no-gm?authuser=0"
              alt="profile picture"
              className="rounded-full"
            />
          </div>
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6 border border-primary/20">
              <MdWorkOutline className="text-base" />
              {jobType}
            </div>
            <h1 className="text-[36px] md:text-[48px] lg:text-[58px] font-extrabold mb-4 leading-tight">
              <span className="text-default-text dark:text-white">Bonjour, je suis</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite] bg-clip-text text-transparent">
                {fullName}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted mb-4 max-w-lg">{jobTitle}</p>
            <div className="flex items-center gap-2 text-muted text-sm mb-8 justify-center md:justify-start">
              <HiOutlineLocationMarker className="text-primary" />
              <span>{localisation}</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white rounded-xl font-semibold transition-all duration-300 hover:bg-secondary hover:shadow-[0_8px_30px_var(--color-primary-glow)] hover:-translate-y-0.5"
              >
                Voir mes projets
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-transparent border-2 border-primary/30 text-primary rounded-xl font-semibold transition-all duration-300 hover:bg-primary/10 hover:border-primary/60"
              >
                Me contacter
              </Link>
            </div>
            {/* Social Links */}
            <div className="flex gap-3 mt-8 justify-center md:justify-start">
              {socialLinks.map(({ icon: Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-glass-bg border border-glass-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-all duration-300"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ ABOUT ═══════════════════════════════════ */}
      <AnimatedSection id="about" className="separator">
        <h2 className="subtitle">À propos de moi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto px-4">
          {/* Main About Card */}
          <div className="md:col-span-2 glass-card p-8 md:p-10">
            <p className="text-default-text dark:text-muted text-lg md:text-[1.15rem] leading-8">{aboutMeData}</p>
          </div>
          {/* Stats Cards */}
          <div className="flex flex-col gap-5">
            <Link href="/parcours/#experiences" className="stat-card flex-1 block cursor-pointer">
              <div className="stat-number">{xpYears}</div>
              <p className="text-muted text-sm mt-2 font-medium">Année{xpYears > 1 ? 's' : ''} d&apos;expérience</p>
            </Link>
            <Link href="#projects" className="stat-card flex-1 block cursor-pointer">
              <div className="stat-number">{projects.length}</div>
              <p className="text-muted text-sm mt-2 font-medium">
                Projet{projects.length > 1 ? 's' : ''} réalisé
                {projects.length > 1 ? 's' : ''}
              </p>
            </Link>
            <Link href="#skills" className="stat-card flex-1 block cursor-pointer">
              <div className="stat-number">
                {skills.length}
                {skills.length >= 10 ? '+' : ''}
              </div>
              <p className="text-muted text-sm mt-2 font-medium">
                Technologie{skills.length > 1 ? 's' : ''} maîtrisée
                {skills.length > 1 ? 's' : ''}
              </p>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══════════════════════════════════ SKILLS ═══════════════════════════════════ */}
      <AnimatedSection id="skills" className="separator px-4 md:px-8 lg:px-16">
        <h2 className="subtitle">Mes Compétences</h2>
        {/* Carousel View */}
        <div className="mb-12">
          <Carousel className="w-full py-1" speed={4000}>
            {skills.map(({ name, logo: Logo }) => (
              <div
                key={name}
                className="py-5 md:py-7 lg:py-8 glass-card flex flex-col items-center !border-glass-border hover:!border-primary/40 hover:!shadow-[0_8px_24px_var(--color-primary-glow)]"
              >
                <Logo className="text-4xl md:text-[42px] lg:text-5xl text-primary mb-3 md:mb-4 mx-auto" />
                <h3 className="text-base md:text-lg lg:text-xl font-medium">{name}</h3>
              </div>
            ))}
          </Carousel>
          {(skills?.length ?? 0) > 14 && (
            <Carousel className="w-full mt-6 lg:mt-8 py-1" speed={4000} autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}>
              {[...skills].reverse().map(({ name, logo: Logo }) => (
                <div
                  key={`rev-${name}`}
                  className="py-5 md:py-7 lg:py-8 glass-card flex flex-col items-center !border-glass-border hover:!border-primary/40 hover:!shadow-[0_8px_24px_var(--color-primary-glow)] !cursor-grab"
                >
                  <Logo className="text-4xl md:text-[42px] lg:text-5xl text-primary mb-3 md:mb-4 mx-auto" />
                  <h3 className="text-base md:text-lg lg:text-xl w-full text-center font-medium">{name}</h3>
                </div>
              ))}
            </Carousel>
          )}
        </div>
        {/* Category List */}
        <SkillList className="px-4 lg:px-32 pt-20" />
      </AnimatedSection>

      {/* ═══════════════════════════════════ PROJECTS ═══════════════════════════════════ */}
      <AnimatedSection id="projects" className="separator">
        <h2 className="subtitle">Projets</h2>

        {(() => {
          const sorted = [...projects].sort((a, b) => Number(b.date) - Number(a.date));
          const featured = sorted[0];
          const rest = sorted.slice(1);
          const FeaturedLinkIcon = featured?.link?.icon;

          return (
            <div className="px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto space-y-8">
              {/* Featured Project */}
              {featured && (
                <Project
                  href={`/project/${featured.title.toLowerCase()}`}
                  key={featured.title}
                  className="group glass-card !rounded-2xl overflow-hidden hover:!shadow-[0_12px_48px_var(--color-primary-glow)] hover:!border-primary/50 cursor-pointer transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-3/5 h-56 lg:h-auto relative bg-accent overflow-hidden">
                      {featured?.picture?.length ? (
                        <Image
                          src={featured.picture[0].replace(/=w\d+-h\d+-s-no-gm/, '=s1600')}
                          alt={`${featured.title} project`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FiCameraOff className="w-16 h-16 text-muted/30" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-card-bg/60 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 text-xs font-bold text-white bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                        ⭐ Projet vedette
                      </span>
                    </div>
                    <div className="lg:w-2/5 p-6 lg:p-8 flex flex-col justify-center gap-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl lg:text-3xl font-bold text-default-text">{featured.title}</h3>
                        <span className="text-xs font-semibold text-primary bg-primary/8 px-3 py-1 rounded-full border border-primary/15">
                          {featured.date}
                        </span>
                      </div>
                      <p className="text-muted text-sm leading-relaxed">{featured.resume}</p>
                      <div className="flex flex-wrap gap-2">
                        {featured.skills.slice(0, 5).map((skill, i) => (
                          <span
                            key={i}
                            className="py-0.5 px-2.5 rounded-full bg-primary/8 text-primary text-xs font-semibold border border-primary/12"
                          >
                            {skill}
                          </span>
                        ))}
                        {featured.skills.length > 5 && (
                          <span className="py-0.5 px-2.5 rounded-full bg-primary/8 text-primary text-xs font-semibold border border-primary/12">
                            +{featured.skills.length - 5}
                          </span>
                        )}
                      </div>
                      {featured?.link && (
                        <Link
                          href={featured.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline mt-1 w-fit group/link"
                        >
                          {FeaturedLinkIcon && <FeaturedLinkIcon className="text-base" />}
                          {featured.link.label}
                          <HiOutlineExternalLink className="text-base group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                        </Link>
                      )}
                    </div>
                  </div>
                </Project>
              )}

              {/* Other Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map(v => {
                  const LinkIcon = v.link?.icon;
                  return (
                    <Project
                      href={`/project/${v.title.toLowerCase()}`}
                      key={v.title}
                      className="group glass-card !rounded-2xl overflow-hidden hover:!shadow-[0_8px_32px_var(--color-primary-glow)] hover:!border-primary/40 flex flex-col h-[400px] cursor-pointer transition-all duration-400 hover:-translate-y-1.5"
                    >
                      <div className="h-44 w-full bg-accent overflow-hidden relative flex-shrink-0">
                        {v?.picture?.length ? (
                          <Image
                            src={v.picture[0].replace(/=w\d+-h\d+-s-no-gm/, '=s1600')}
                            alt={`${v.title} project`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <FiCameraOff className="w-12 h-12 text-muted/30" />
                          </div>
                        )}
                        <span className="absolute top-3 right-3 text-xs font-bold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                          {v.date}
                        </span>
                      </div>
                      <div className="p-5 flex flex-col gap-2.5 flex-1">
                        <h3 className="text-lg font-bold text-default-text">{v.title}</h3>
                        <p className="line-clamp-2 text-sm text-muted leading-relaxed">{v.resume}</p>
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {v.skills.slice(0, 3).map((skill, i) => (
                            <span
                              key={i}
                              className="py-0.5 px-2 rounded-full bg-primary/8 text-primary text-[0.7rem] font-semibold border border-primary/12"
                            >
                              {skill}
                            </span>
                          ))}
                          {v.skills.length > 3 && (
                            <span className="py-0.5 px-2 rounded-full bg-primary/8 text-primary text-[0.7rem] font-semibold border border-primary/12">
                              +{v.skills.length - 3}
                            </span>
                          )}
                        </div>
                        {v?.link && (
                          <Link
                            href={v.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs hover:underline mt-1 w-fit group/link"
                          >
                            {LinkIcon && <LinkIcon className="text-sm" />}
                            {v.link.label}
                            <HiOutlineExternalLink className="text-sm group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                          </Link>
                        )}
                      </div>
                    </Project>
                  );
                })}
              </div>
            </div>
          );
        })()}
      </AnimatedSection>

      {/* ═══════════════════════════════════ CONTACT ═══════════════════════════════════ */}
      <AnimatedSection id="contact" className="w-full max-w-5xl mx-auto px-6 sm:px-8 my-16 md:my-24 lg:my-28">
        <h2 className="subtitle">Me Contacter</h2>
        <div className="glass-card !rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left — Info */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary to-secondary p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-white/10 blur-2xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">Discutons ensemble</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-8">
                  Une opportunité, une mission freelance ou un projet de collaboration ? Je suis ouvert à toute proposition. Contactez-moi via ce
                  formulaire ou retrouvez-moi sur mes réseaux ci-dessous.
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-3">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-200 text-sm group"
                >
                  <span className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors duration-200">
                    <FiMail className="text-base" />
                  </span>
                  {email}
                </a>
                {socialLinks.slice(0, 2).map(({ icon: Icon, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-200 text-sm group"
                  >
                    <span className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors duration-200">
                      <Icon className="text-base" />
                    </span>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3 p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
