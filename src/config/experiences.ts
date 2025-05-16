import { type Profile } from '@/interfaces/profil';

export const experiences = [
  {
    title: 'Alternant - Développeur Web Full-Stack & DevOps',
    company: 'Mes Allocs',
    startDate: '2023',
    endDate: '2024',
    description:
      'À mon arrivée chez MesAllocs, j’ai d’abord consacré du temps à épurer le code existant en supprimant les fichiers obsolètes et à restructurer l’architecture du projet. Suite à cela, j’ai en parallèle conçu et développé les premières pages de l’application mobile Ionic, en mettant en place une authentification sécurisée full-stack avec l’utilisation d’Express.js et TypeScript côté backend. J’ai ensuite pris en charge la mise en ligne des versions localisées du site pour l’Italie, l’Espagne, le Portugal, la Suisse et la Belgique, intégrant de nouvelles questions au QCM principal et assurant le maintien du contrôle d’éligibilité aux aides sociales. Enfin, j’ai réalisé un service backend en Ruby pour centraliser les données de nos partenaires et j’ai optimisé les pipelines Docker, en créant des environnements dédiés au développement et à la production pour fiabiliser nos déploiements.',
    skills: ['Nuxt.js', 'Ruby', 'TypeScript', 'Ionic', 'Docker', 'Git', 'MongoDB', 'PostgreSql', 'Jira/Trello', 'Vue.js', 'Node.js', 'Express.js'],
    achievements: [
      'Augmentation des performances des différents sites grâce au nettoyage et à l’optimisation du code',
      "Création d'une application mobile avec authentification full-stack, validée par des tests de sécurité",
      'Ouverture du site aux nouveaux marchés (Italie, Espagne, Portugal, Suisse, Belgique) avec textes traduits, QCM et éligibilité adaptés',
      'Développement d’une API Ruby dédiée aux différents partenariats de MesAllocs',
      'Mise en place d’environnements Docker distincts (dev/prod) et optimisation du pipeline CI/CD pour des déploiements stables et sécurisés',
    ],
  },
  {
    title: 'Alternant - Développeur Web Full-Stack',
    company: 'Etech Origin',
    startDate: '2022',
    endDate: '2023',
    description:
      'Ayant rejoint une équipe composée uniquement de moi-même et d’une autre alternante, j’ai contribué à la création d’un site de recrutement complet. J’ai imaginé et développé une « cvthèque » dotée d’un moteur de filtres avancé pour aider les recruteurs à cibler rapidement les profils candidats recherchés. J’ai également conçu la page profil candidat avec un chat en temps réel et un calendrier de prise de rendez-vous pour les entretiens, incluant la gestion des créneaux, les annulations et la génération automatique de salles Google Meet. Pour fluidifier la communication, j’ai mis en place l’envoi d’e-mails via Nodemailer. Il m’a également été demandé de concevoir un cron-job personnalisable permettant aux recruteurs d’être alertés des nouveaux CV correspondant à leurs critères. Enfin, j’ai déployé un espace admin pour gérer les différents comptes et corrigé de nombreux ajustements d’UI et de responsive sur l’ensemble du site.',
    skills: ['Vue.js', 'Node.js', 'Express.js', 'Nuxt.js', 'MongoDB', 'Git', 'Axios', 'JavaScript', 'Jira/Trello'],
    achievements: [
      'Mise en place d’une cvthèque avec filtres dynamiques personnalisés',
      'Développement d’un système de chat en temps réel et d’un module de prise de rendez-vous via calendrier avec génération automatique de salles Google Meet',
      'Automatisation de l’envoi de notifications et de relances par e-mail',
      'Conception d’un cron-job sur mesure pour distribuer en temps réel les nouveaux CV selon les critères',
      'Optimisation de l’UI et du responsive sur l’ensemble du site',
    ],
  },
  {
    title: 'Alternant - Développeur Web',
    company: 'AJC Formation',
    startDate: '2021',
    endDate: '2022',
    description:
      'J’ai conçu et développé une plateforme de QCM en ligne de A à Z, destinée aux professeurs et aux élèves. Les enseignants disposent d’un espace pour créer des questionnaires datés et les attribuer à des groupes ou classes d’élèves, tandis que ces derniers s’authentifient pour passer leurs tests et ne voient leur note qu’une fois que tous les participants ont terminé. Tout au long de l’année, chaque élève peut consulter son historique de notes et sa moyenne, et les professeurs suivent en temps réel la progression de leurs élèves. Enfin, un back-office administrateur permet de gérer l’ensemble des comptes et les permissions associées.',
    skills: ['HTML5', 'CSS3', 'PHP', 'SQL', 'JavaScript', 'Ajax', 'PhpMyAdmin '],
    achievements: [
      'Conception d’une interface destinée aux professeurs pour créer des QCM par thème et par niveau, et les attribuer à des groupes ou classes d’élèves.',
      'Blocage des QCM pour les élèves tant que la date de début fixée par le professeur n’est pas atteinte.',
      'Mise en place d’un système de rattrapage pour les élèves autorisés à repasser un QCM.',
      'Affichage des résultats des élèves en temps réel et suivi tout au long de l’année.',
      'Gestion centralisée des comptes utilisateurs par les administrateurs.',
    ],
  },
] as const satisfies Profile.experience[];
