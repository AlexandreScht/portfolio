'use client';

import { motion } from 'framer-motion';

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

const fadeInUp = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
};

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gradient-start to-gradient-end py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-default-text mb-4">Mon Parcours Professionnel</h1>
          <p className="text-muted text-lg">Découvrez mes expériences et compétences en développement</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
              className="bg-card-bg dark:bg-[#0f1c30] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/40 hover:border-primary/40"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-default-text">{experience.title}</h2>
                  <h3 className="text-lg font-medium text-default-text dark:text-white">{experience.company}</h3>
                </div>
                <span className="text-muted font-medium">{experience.period}</span>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-default-text mb-3">Responsabilités Principales</h4>
                  <ul className="space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-default-text">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {experience.achievements && (
                  <div>
                    <h4 className="text-lg font-semibold text-default-text mb-3">Réalisations Clés</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-default-text">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-semibold text-default-text mb-3">Technologies Utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-accent text-primary dark:text-white rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
