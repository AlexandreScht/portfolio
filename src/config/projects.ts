import { type Profile } from '@/interfaces/profil';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Talaryo',
    date: '2024',
    resume: 'Application web responsive de sourcing B2B centralisé',
    description:
      'Co-fondateur & fullstack developer de Talaryo, j’ai conçu et déployé une plateforme B2B from scratch sur VPS, conteneurisée avec Docker, dotée d’un back-end RESTful sécurisé (JWT/OAuth2) et d’un système d’authentification robuste. J’y ai intégré un moteur de recherche multi-critères, des API optimisées et un back-office analytique, le tout orienté performance, scalabilité et qualité d’expérience utilisateur.',
    link: { icon: FaGithub, label: 'GitHub', url: 'https://github.com/AlexandreScht/Talaryo.git' },
    picture: [
      'https://framerusercontent.com/images/t0OQXdarLOXkzUsV7C11zPAJnys.jpg',
      'https://framerusercontent.com/images/URs6ni1mUB9QM5ZpirWZfynSKM.png',
    ],
    skills: ['Next.js', 'Express.js', 'Node.js', 'Axios', 'Socket.io', 'PostgreSql', 'Knex.js', 'Objection.js', 'TypeScript'],
    types: ['Application Web', 'sourcing B2B', 'IA'],
    features: [],
  },
] as const satisfies Profile.project[];

export default projects;
