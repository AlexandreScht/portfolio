import AnimatedSection from '@/components/cards/frame';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
}

const experiences: Experience[] = [
  {
    title: 'Développeur Full Stack Senior',
    company: 'Entreprise A',
    period: '2022 - Présent',
    description: [
      "Responsable du développement et de la maintenance d'applications web critiques pour l'entreprise, gérant une équipe de 4 développeurs",
      "Conception et mise en place d'une architecture microservices robuste, améliorant les performances de 40% et réduisant les temps de déploiement de 60%",
      'Implémentation de solutions de monitoring et de logging avancées pour une meilleure visibilité sur les performances et la stabilité des applications',
      "Collaboration étroite avec les équipes produit et design pour définir les nouvelles fonctionnalités et améliorer l'expérience utilisateur",
      'Mise en place de pratiques DevOps avec CI/CD automatisé, réduisant le temps de déploiement de 70%',
    ],
    achievements: [
      'Réduction de 50% des temps de chargement des applications',
      "Mise en place d'un système de tests automatisés couvrant 85% du code",
      'Formation et mentorat de 3 développeurs juniors',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes', 'MongoDB', 'Redis'],
  },
  {
    title: 'Développeur Frontend Lead',
    company: 'Entreprise B',
    period: '2020 - 2022',
    description: [
      'Direction technique des projets frontend, assurant la qualité du code et les meilleures pratiques de développement',
      "Refonte complète de l'interface utilisateur principale, améliorant l'engagement utilisateur de 35%",
      "Développement d'une bibliothèque de composants réutilisables, accélérant le développement de 40%",
      "Mise en place d'une architecture frontend moderne avec gestion d'état optimisée",
      "Collaboration avec l'équipe UX/UI pour créer des interfaces intuitives et accessibles",
    ],
    achievements: [
      'Augmentation de 45% de la satisfaction utilisateur',
      'Réduction de 30% du temps de développement des nouvelles fonctionnalités',
      "Mise en place d'un système de design system utilisé par toute l'entreprise",
    ],
    technologies: ['Vue.js', 'JavaScript', 'Sass', 'Jest', 'Cypress', 'Webpack', 'Storybook'],
  },
  {
    title: 'Développeur Full Stack',
    company: 'Startup C',
    period: '2018 - 2020',
    description: [
      "Développement full-stack d'une plateforme SaaS de gestion de projets",
      "Création d'une API RESTful robuste avec documentation Swagger",
      'Implémentation de fonctionnalités de temps réel avec WebSocket',
      'Optimisation des performances de la base de données et mise en place de stratégies de mise en cache',
      'Intégration de services tiers (paiement, email, analytics)',
    ],
    achievements: [
      'Lancement réussi de la plateforme avec 1000+ utilisateurs actifs',
      "Mise en place d'un système de déploiement continu",
      "Réduction de 60% des coûts d'infrastructure",
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Stripe API'],
  },
];


export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gradient-start to-gradient-end py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Cercles décoratifs pour l'arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ background: 'var(--color-gradient-pattern)' }}></div>
      
      <AnimatedSection 
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: 'easeOut' },
        }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-default-text mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text">Mon Parcours Professionnel</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">Découvrez mes expériences et compétences en développement</p>
        </div>

        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <AnimatedSection
              key={index + 1}
              motionProps={index === 0 ? undefined :{
                initial: { opacity: 0, x: 100 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.8, ease: 'easeOut', delay: index * 0.2 },
                viewport: { once: true, amount: 0.2 }
              }}
              className="bg-card-bg dark:bg-[#0f1c30] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-border/30 hover:border-primary/50 transform hover:-translate-y-1"
            >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 mb-2">
                  <div>
                    <h2 className="text-2xl font-bold text-default-text bg-gradient-to-r from-primary to-secondary bg-clip-text">{experience.title}</h2>
                    <h3 className="text-lg font-medium text-default-text dark:text-white mt-1">{experience.company}</h3>
                  </div>
                  <span className="text-primary font-medium px-4 py-1.5 bg-accent rounded-full inline-flex items-center justify-center shadow-md self-start">{experience.period}</span>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-6"></div>

                <div className="mt-6 space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-default-text mb-4 flex items-center">
                      <span className="w-1.5 h-6 bg-primary rounded-full mr-2"></span>
                      Responsabilités Principales
                    </h4>
                    <ul className="space-y-3 pl-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-default-text">
                          <span className="text-primary mt-1.5 text-lg">•</span>
                          <span className="text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {experience.achievements && (
                    <div>
                      <h4 className="text-lg font-semibold text-default-text mb-4 flex items-center">
                        <span className="w-1.5 h-6 bg-primary rounded-full mr-2"></span>
                        Réalisations Clés
                      </h4>
                      <ul className="space-y-3 pl-2">
                        {experience.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-default-text">
                            <span className="text-primary mt-1.5 text-lg">•</span>
                            <span className="text-muted">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-semibold text-default-text mb-4 flex items-center">
                      <span className="w-1.5 h-6 bg-primary rounded-full mr-2"></span>
                      Technologies Utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {experience.technologies.map((tech, i) => (
                        <span key={i} className="px-4 py-1.5 bg-accent text-primary dark:text-white rounded-full text-sm font-medium shadow-[0_2px_4px_var(--color-shadow)] hover:scale-105 transition-transform duration-300">
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
    </div>
  );
}
