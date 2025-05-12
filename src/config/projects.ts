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
    skills: ['Next.js', 'Express.js', 'Node.js', 'Axios', 'Socket.io', 'PostgreSql', 'Knex.js', 'Objection.js', 'TypeScript', 'Docker', 'Jest'],
    types: ['Application Web', 'sourcing B2B', 'IA'],
    features: ["Utilisation de redis en cas de crash ou de redémarrage pour récupérer les données.", "Communication écurisée et rapide entre front, back et la BD avec un système de cache.", "Authentification par OAuth 2.0, avec option 2FA pour plus de sécurité.", "Recherche multi-critères alimentée par l’IA, pour un résultat à la fois rapide et pertinent.", "Bonnes pratiques et tests unitaires mis en place assurant la fiabilité du code.", "Déploiement automatisé et sécurisé avec Docker.", "Site responsive et conforme aux bonnes pratiques d’accessibilité. "],
  },
  {
    title: 'Starter Template',
    date: '2025',
    resume: 'Structure Next.js et Express.js fullstack optimisée et modulable',
    description:
      'Ce projet starter fullstack combine Next.js pour le front-end et Express.js pour le back-end, intégrant trois ans de bonnes pratiques et d’optimisations.\n Le projet propose une communication sécurisée et optimisée (cache client, WebSocket protégé, Redis pour le stockage temporaire), un store global Zustand, Kysely pour la BD et des tests unitaires assurant la qualité du code.',
    link: { icon: FaGithub, label: 'GitHub', url: 'https://github.com/AlexandreScht/start_template' },
    picture: undefined,
    skills: ['Next.js', 'Express.js', 'Node.js', 'Axios', 'Socket.io', 'PostgreSql', 'Kysely', 'TypeScript', 'Jest'],
    types: ['Template', 'Fullstack'],
    features: ["Utilisation de redis comme mémoire temporaire.", "Communication écurisée et rapide entre front, back et la BD avec un système de cache.", "Authentification par OAuth 2.0, avec option 2FA pour plus de sécurité.", "Utilisation de Kysely comme ORM et Query builder pour communiquer avec la BD.", "Mise en place de tests unitaires et de bonne pratiques.", "WebSocket sécurisé pour la communication temps réel.", "Store global Zustand pour gérer l’état depuis n’importe quelle page"],
  },
] as const satisfies Profile.project[];

export default projects;
