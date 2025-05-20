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
      'https://lh3.googleusercontent.com/pw/AP1GczNJvKZgsmRjASYuzokMMc7xbzT5dTgZ946tV82lyj4jEXakSjMXe2SO0tGjCMmW8W8Z1sBP6ZjcdzDKwlLOJdHesi85t3-SK1W21dIQB-BvQRK89qoVxs0CrCdYttTgaIDmD6uzkwIrvNQWPr3vR0u7=w1376-h640-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczMOVWPyPHG-3oq58xnNO86pM7Imrz6EvJBNr0XCViCiGhUaJ1a7_9q2Dxwx0ZR5Ge52fpVBtaR4WqdX6u96L5DmI6r4QtoR78JOSq0xLhxpSzGN6fKo3217cHv72w7Cg6gFNSsjYRiuQYmvc95y7sXK=w1857-h837-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczP6dmsv2C5uTd1e4YKdKcclokaTxmFAdk-e9Xd9RhCtGJN_XVIVSJwVPr4DMo5ws9GbvecCGMEhpMoZlE_JFlCZyALvODdyNGK9KLsrB5w7ERb40bFJvTbuKIa3XuZHcy84f9xNO7s06jlQGd6h2Yyx=w1737-h772-s-no-gm?authuser=0',
      'https://lh3.googleusercontent.com/pw/AP1GczPZrFrkUaqZxCXZikiBuDXMSlpcRpAttIV2M7jNDbSPGAOVcfrMfmfgcYe0CPIwxdM0napDkcTBxD__cDb4vLmMuUBlEiyT_J8WiVGwUO8XOm3H4Gnm9RrTBhTkw6IFfrI0IohPL16jopKMHPuoJDyZ=w1856-h747-s-no-gm?authuser=0'
    ],
    skills: [
      'Next.js',
      'Express.js',
      'Node.js',
      'Axios',
      'Socket.io',
      'PostgreSql',
      'Tailwindcss',
      'Knex.js',
      'Objection.js',
      'TypeScript',
      'Docker',
      'Jest',
    ],
    types: ['Application Web', 'sourcing B2B', 'IA'],
    features: [
      'Utilisation de redis en cas de crash ou de redémarrage pour récupérer les données.',
      'Communication écurisée et rapide entre front, back et la BD avec un système de cache.',
      'Authentification par OAuth 2.0, avec option 2FA pour plus de sécurité.',
      'Recherche multi-critères alimentée par l’IA, pour un résultat à la fois rapide et pertinent.',
      'Bonnes pratiques et tests unitaires mis en place assurant la fiabilité du code.',
      'Déploiement automatisé et sécurisé avec Docker.',
      'Site responsive et conforme aux bonnes pratiques d’accessibilité. ',
    ],
  },
  {
    title: 'Starter Template',
    date: '2025',
    resume: 'Structure Next.js et Express.js fullstack optimisée et modulable',
    description:
      'Ce projet starter fullstack combine Next.js pour le front-end et Express.js pour le back-end, intégrant trois ans de bonnes pratiques et d’optimisations.\n Le projet propose une communication sécurisée et optimisée (cache client, WebSocket protégé, Redis pour le stockage temporaire), un store global Zustand, Kysely pour la BD et des tests unitaires assurant la qualité du code.',
    link: { icon: FaGithub, label: 'GitHub', url: 'https://github.com/AlexandreScht/start_template' },
    picture: undefined,
    skills: ['Next.js', 'Express.js', 'Node.js', 'Axios', 'Socket.io', 'PostgreSql', 'Kysely', 'TypeScript', 'Jest', 'Tailwindcss'],
    types: ['Template', 'Fullstack'],
    features: [
      'Utilisation de redis comme mémoire temporaire.',
      'Communication écurisée et rapide entre front, back et la BD avec un système de cache.',
      'Authentification par OAuth 2.0, avec option 2FA pour plus de sécurité.',
      'Utilisation de Kysely comme ORM et Query builder pour communiquer avec la BD.',
      'Mise en place de tests unitaires et de bonne pratiques.',
      'WebSocket sécurisé pour la communication temps réel.',
      'Store global Zustand pour gérer l’état depuis n’importe quelle page',
    ],
  },
  {
    title: 'InvestiX',
    date: '2024',
    resume: 'Application mobile pour automatiser et gérer ses investissements en crypto',
    description:
      'Ce projet consiste à créer une application mobile en React Native permettant d’automatiser et de gérer ses investissements en crypto-monnaies via les API sécurisées de brokers comme Binance ou Bitget. L’application offre diverses fonctionnalités pour suivre les performances (gains, pertes, risques) du portefeuille, avec une prise en charge des investissements en spot et en margin, y compris la gestion des positions en margin isolé. L’application permet aussi de définir une périodicité pour renouveler automatiquement ses placements, sans manipuler directement les fonds.',
    link: { icon: FaGithub, label: 'GitHub', url: 'https://github.com/AlexandreScht/InvestiX' },
    picture: undefined,
    skills: ['React Native', 'Node.js', 'Axios', 'TypeScript'],
    types: ['Application mobile', 'Crypto', 'Sécurité'],
    features: [
      'Application mobile développée en React Native.',
      'Connexion sécurisée aux APIs de brokers cryptos.',
      'Automatisation des investissements avec renouvellement périodique modulable.',
      'Calcul local des risques, des gains/pertes et du prix de liquidation.',
      'Rendu moderne et épuré en temps réel des performances de son wallet crypto',
    ],
  },
  {
    title: 'Permis',
    date: '2023',
    resume: 'Site statique de QCM sur les questions du permis',
    description:
      'Ce projet consiste en un site statique permettant de s’entraîner à l’examen du permis de conduire grâce à des QCM aléatoires basés sur les questions officielles. À la fin de chaque QCM, un bilan récapitule les erreurs et met en évidence les questions à revoir. Léger et rapide, le site fonctionne entièrement côté client, sans nécessiter de serveur.',
    link: { icon: FaGithub, label: 'GitHub', url: 'https://github.com/AlexandreScht/permis' },
    picture: undefined,
    skills: ['Next.js', 'TypeScript', 'Tailwindcss'],
    types: ['Site Static'],
    features: [
      'Chargement des questions depuis un fichier JSON local.',
      'Génération aléatoire des questions du QCM.',
      'Évaluation automatique d’un bilan de fin de test.',
      'Fonctionnement 100% côté client',
    ],
  },
  {
    title: 'Mini Game',
    date: '2022',
    resume: 'Collection de mini-jeux web interactifs.',
    description:
      'Mini Game est un projet regroupant trois mini-jeux web conçus avec des technologies simples. Il inclut un jeu de puzzle glissant (Slide Game), un jeu de reconnaissance de couleurs (Couleur Game) et un jeu mathématique basé sur des opérations aléatoires (Mathematic Game). Chaque jeu propose une mécanique unique et fonctionne entièrement côté client, à l’exception du Couleur Game qui utilise du PHP pour générer dynamiquement l’interface.',
    link: {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/AlexandreScht/mini-game',
    },
    picture: undefined,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    types: ['Jeu', 'Projet Web'],
    features: [
      'Slide Game : grille configurable, génération de chemins aléatoires, contrôle au clavier.',
      'Couleur Game : interface générée en PHP, sélection de couleurs, animation en JavaScript.',
      'Mathematic Game : opérations dynamiques, minuterie, vérification de résultats avec jQuery.',
      'Fonctionnement majoritairement côté client, léger et facilement déployable.',
    ],
  },
] as const satisfies Profile.project[];

export default projects;
