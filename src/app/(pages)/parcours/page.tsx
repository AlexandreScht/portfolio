import AnimatedSection from '@/components/cards/frame';
import Description from '@/components/texts/description';
import { experiences } from '@/config/experiences';
import { formations } from '@/config/formation';
import { type Profile } from '@/interfaces/profil';
import { sortByDate } from '@/utils/sortByDate';
// import { ScrollShadow } from '@heroui/react';
import Achievements from '@/components/lists/achievements';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { IoSchoolOutline } from 'react-icons/io5';

export default function ExperiencesPage() {
  const sortedExperiences = sortByDate(experiences);
  const sortedFormations = sortByDate(formations);
  return (
    <div className="bg-gradient-to-b from-gradient-start to-gradient-end py-10 md:py-20 sm:px-4 md:px-20 overflow-hidden">
      <AnimatedSection
        id="experiences"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: 'easeOut' },
        }}
        className="w-full md:w-3/5 mx-auto separator relative z-10 mb-18"
      >
        <div className="text-center mb-10 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-secondary/95 bg-clip-text text-transparent">
            Expériences Professionnelles
          </h1>
          <p className="text-lg md:text-xl text-muted mx-auto">Explorez mon parcours et mes réalisations professionnelles</p>
        </div>

        <div className="space-y-8 md:space-y-16">
          {sortedExperiences.map((experience, index) => (
            <AnimatedSection
              key={index}
              motionProps={
                index === 0
                  ? undefined
                  : {
                      initial: { opacity: 0, x: 100 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { duration: 0.8, ease: 'easeOut', delay: index * 0.2 },
                      viewport: { once: true, amount: 0.2 },
                    }
              }
              className="bg-card-bg rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-border/30 hover:border-primary/50 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 mb-2">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-default-text bg-gradient-to-r from-primary to-secondary bg-clip-text">
                    {experience.title}
                  </h2>
                  <div className="flex items-center gap-2 text-default-text/90 mt-1">
                    <HiOutlineBuildingOffice className="w-5 h-5" />
                    <h3 className="text-base md:text-lg font-medium h-fit w-fit">{experience.company}</h3>
                  </div>
                </div>
                <span className="text-primary font-medium px-3 md:px-4 py-1.5 bg-accent rounded-lg inline-flex items-center justify-center shadow-md self-start text-sm md:text-base">
                  {experience.startDate}
                  {experience.endDate ? ` - ${experience.endDate}` : ''}
                </span>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-4 md:my-6" />

              <div className="mt-4 md:mt-6 space-y-6 md:space-y-8">
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-default-text mb-3 md:mb-4 flex items-center">
                    <span className="w-1.5 h-6 bg-primary rounded-full mr-2" />
                    Responsabilités Principales
                  </h4>
                  <Description description={experience.description} />
                </div>

                {experience.achievements && (
                  <>
                    <h4 className="text-base md:text-lg font-semibold text-default-text mb-3 md:mb-4 flex items-center">
                      <span className="w-1.5 h-6 bg-primary rounded-full mr-2" />
                      Réalisations Clés
                    </h4>
                    <Achievements achievements={experience.achievements} />
                  </>
                )}

                <div>
                  <h4 className="text-base md:text-lg font-semibold text-default-text mb-3 md:mb-4 flex items-center">
                    <span className="w-1.5 h-6 bg-primary rounded-full mr-2" />
                    Technologies Utilisées
                  </h4>
                  <div className="flex flex-wrap pt-1.5 gap-2">
                    {experience.skills.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 md:px-4 py-1 md:py-1.5 bg-accent text-primary rounded-lg text-xs md:text-sm font-medium shadow-[0_2px_4px_var(--color-shadow)] hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection id="educations" className="flex flex-col items-center">
        <div className="text-center mb-8 md:mb-20">
          <h1 className="text-2xl md:text-5xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-primary to-secondary/95 bg-clip-text text-transparent">
            Formations
          </h1>
          <p className="text-base md:text-xl text-muted mx-auto">Découvrez mon parcours académique et mes certifications obtenues</p>
        </div>
        <div className="w-[85%] md:w-3/5 flex flex-col gap-6 md:gap-12">
          {sortedFormations.map((formation: Profile.formation, index) => (
            <AnimatedSection
              key={index}
              motionProps={{
                initial: { opacity: 0, x: 100 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.8, ease: 'easeOut' },
                viewport: { once: true, amount: 0.2 },
              }}
              className="bg-card-bg rounded-xl md:rounded-2xl px-4 md:px-8 py-4 md:py-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-border/30 hover:border-primary/50 transform hover:-translate-y-1"
            >
              <div className="flex flex-col gap-3 md:gap-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:gap-0">
                  <div>
                    <h3 className="text-base md:text-xl font-semibold text-default-text mb-1.5 md:mb-2">{formation.title}</h3>
                    <div className="flex flex-col md:flex-row gap-1.5 md:gap-0">
                      <div className="flex items-center gap-1.5 md:gap-2 font-medium text-muted text-xs md:text-base">
                        <IoSchoolOutline className="w-4 md:w-5 h-4 md:h-5 mb-0.5" />
                        <span>{formation.school}</span>
                      </div>
                      <span className="md:hidden px-2.5 py-1 bg-accent text-primary rounded-lg text-xs font-semibold shadow-[0_2px_4px_var(--color-shadow)] self-start">
                        {formation.startDate}
                        {formation.endDate ? ` - ${formation.endDate}` : ''}
                      </span>
                    </div>
                  </div>
                  <span className="hidden md:inline-block px-4 py-1.5 bg-accent text-primary rounded-lg text-sm font-semibold shadow-[0_2px_4px_var(--color-shadow)]">
                    {formation.startDate}
                    {formation.endDate ? ` - ${formation.endDate}` : ''}
                  </span>
                </div>
                <p className="text-muted leading-relaxed text-sm md:text-base">{formation.description}</p>
                {formation?.certifications && (
                  <>
                    <h3 className="text-base md:text-xl mt-1 md:mt-2 leading-4 font-semibold text-default-text">Certifications</h3>
                    <div className="w-8 md:w-10 h-1 bg-primary rounded-full -mt-2 md:-mt-3"></div>
                    <ul className="space-y-1.5 md:space-y-3 pl-1 md:pl-2">
                      {formation.certifications.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 md:gap-3 text-default-text text-xs md:text-base">
                          <span className="text-primary text-base md:text-lg">•</span>
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
