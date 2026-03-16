import AnimatedSection from '@/components/cards/frame';
import ScrollTimeline from '@/components/interactives/scrollTimeline';
import Description from '@/components/texts/description';
import { experiences } from '@/config/experiences';
import { formations } from '@/config/formation';
import { type Profile } from '@/interfaces/profil';
import { sortByDate } from '@/utils/sortByDate';
import Achievements from '@/components/lists/achievements';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { IoSchoolOutline } from 'react-icons/io5';
import { cn } from '@heroui/react';

export default function ExperiencesPage() {
  const sortedExperiences = sortByDate(experiences);
  const sortedFormations = sortByDate(formations);
  return (
    <div className="bg-gradient-to-b from-gradient-start to-default-bg py-10 md:py-16 lg:py-20 overflow-hidden">
      {/* ═══════ EXPERIENCES ═══════ */}
      <AnimatedSection
        id="experiences"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: 'easeOut' },
        }}
        className="w-full md:w-11/12 lg:w-3/5 mx-auto px-4 sm:px-6 relative z-10 mb-20 md:mb-28"
      >
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/8 dark:bg-primary/12 px-4 py-1.5 rounded-full mb-5 border border-primary/15">
            <HiOutlineBuildingOffice className="text-base" />
            Parcours professionnel
          </div>
          <h1 className="subtitle !mb-4">Expériences Professionnelles</h1>
          <p className="text-base md:text-lg text-muted mx-auto max-w-xl">Explorez mon parcours et mes réalisations professionnelles</p>
        </div>

        {/* Timeline with scroll progress */}
        <ScrollTimeline className="space-y-8 md:space-y-10">
          {sortedExperiences.map((experience, index) => (
            <AnimatedSection
              key={index}
              motionProps={
                index === 0
                  ? undefined
                  : {
                      initial: { opacity: 0, x: 60 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.15 },
                      viewport: { once: true, amount: 0.2 },
                    }
              }
              className="relative md:pl-14"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-[19px] top-8 timeline-dot" />

              <div className="glass-card !p-6 md:!p-8 hover:!border-primary/40 hover:!shadow-[0_8px_32px_var(--color-primary-glow)]">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-4 mb-1">
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-default-text leading-tight">{experience.title}</h2>
                    <div className="flex items-center gap-2 text-muted mt-2">
                      <HiOutlineBuildingOffice className="w-4 h-4 text-primary" />
                      <h3 className="text-base font-semibold">{experience.company}</h3>
                    </div>
                  </div>
                  <span className="text-primary font-semibold text-sm px-3.5 py-1.5 bg-primary/8 dark:bg-primary/12 rounded-xl inline-flex items-center justify-center self-start border border-primary/15">
                    {experience.startDate}
                    {experience.endDate ? ` — ${experience.endDate}` : ''}
                  </span>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-5" />

                <div className="space-y-6">
                  <div>
                    <h4 className="text-base font-bold text-default-text mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-primary rounded-full" />
                      Responsabilités Principales
                    </h4>
                    <Description description={experience.description} />
                  </div>

                  {experience.achievements && (
                    <div>
                      <h4 className="text-base font-bold text-default-text mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-primary rounded-full" />
                        Réalisations Clés
                      </h4>
                      <Achievements achievements={experience.achievements} />
                    </div>
                  )}

                  <div>
                    <h4 className="text-base font-bold text-default-text mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-primary rounded-full" />
                      Technologies Utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary/8 cursor-default dark:bg-primary/12 text-primary rounded-lg text-xs font-semibold border border-primary/12 hover:scale-105 transition-transform duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </ScrollTimeline>
      </AnimatedSection>

      {/* ═══════ FORMATIONS ═══════ */}
      <AnimatedSection id="educations" className="flex flex-col items-center px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/8 dark:bg-primary/12 px-4 py-1.5 rounded-full mb-5 border border-primary/15">
            <IoSchoolOutline className="text-base" />
            Parcours académique
          </div>
          <h1 className="subtitle !mb-4">Formations</h1>
          <p className="text-base md:text-lg text-muted mx-auto max-w-xl">Découvrez mon parcours académique et mes certifications</p>
        </div>

        <div className="w-full md:w-4/5 lg:w-3/5">
          <ScrollTimeline className="space-y-6 md:space-y-8">
            {sortedFormations.map((formation: Profile.formation, index) => (
              <AnimatedSection
                key={index}
                motionProps={{
                  initial: { opacity: 0, x: 60 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { duration: 0.6, ease: 'easeOut' },
                  viewport: { once: true, amount: 0.2 },
                }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-[19px] top-7 timeline-dot" />

                <div className="glass-card !p-5 md:!p-7 hover:!border-primary/40 hover:!shadow-[0_8px_32px_var(--color-primary-glow)]">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-4">
                      <div className="flex-1">
                        <h2 className="text-base md:text-lg font-bold text-default-text">
                          {formation.title.link ? (
                            <a
                              href={formation.title.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors duration-300 hover:underline underline-offset-4 decoration-primary/50"
                            >
                              {formation.title.label}
                            </a>
                          ) : (
                            formation.title.label
                          )}
                        </h2>
                        <div className="flex items-center gap-2 text-muted mt-1">
                          <IoSchoolOutline className="w-4 h-4 text-primary" />
                          <h3 className="text-base font-semibold">{formation.school}</h3>
                        </div>
                      </div>
                      <span className="text-primary font-semibold text-sm px-3.5 py-1.5 bg-primary/8 dark:bg-primary/12 rounded-xl inline-flex items-center justify-center self-start border border-primary/15">
                        {formation.startDate}
                        {formation.endDate ? ` — ${formation.endDate}` : ''}
                      </span>
                    </div>
                    <p className="text-muted leading-relaxed text-sm">{formation.description}</p>

                    {formation?.certifications && (
                      <div className="mt-2">
                        <h3 className="text-base font-bold text-default-text mb-2 flex items-center gap-2">
                          <span className="w-1 h-5 bg-primary rounded-full" />
                          Certifications
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {formation.certifications.map((item, i) => {
                            const badgeClassName =
                              'px-3 py-1 bg-primary/8 dark:bg-primary/12 text-primary rounded-lg text-xs font-semibold border border-primary/12 hover:scale-105 transition-transform duration-300 block';

                            return item.link ? (
                              <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className={badgeClassName}>
                                {item.label}
                              </a>
                            ) : (
                              <span key={i} className={cn(badgeClassName, 'cursor-default')}>
                                {item.label}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </ScrollTimeline>
        </div>
      </AnimatedSection>
    </div>
  );
}
