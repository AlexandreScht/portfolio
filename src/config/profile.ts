import { type Profile } from '@/interfaces/profil';
import { type Metadata } from 'next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const metadataProps: Metadata = {
  title: 'Alexandre SCHECHT — Portfolio Alternant DevOps & Cloud',
  description:
    "Portfolio professionnel d'Alexandre SCHECHT, Alternant Ingénieur DevOps & Cloud passionné par l'innovation logicielle et les architectures modernes.",
};

export const fullName: string = 'Alexandre SCHECHT';
export const jobType: string = 'Alternance';
export const localisation: string = 'Ile-de-France, France';
export const email: string = 'alexandreschecht@gmail.com';
export const xpYears: number = 4;

export const job: string = 'Alternant Ingénieur DevOps & Cloud';

export const socialLinks: Profile.socialLink[] = [
  { icon: FaGithub, label: 'GitHub', url: 'https://github.com/AlexandreScht' },
  { icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/alexandre-schecht-51a726216/' },
];

export const aboutMe: string =
  "Bonjour, je suis Alexandre, Ingénieur DevOps & Cloud, passionné par l’automatisation et la résilience des infrastructures. Fort de mes premières années d'expérience en développement Full-Stack, je comprends intimement l'architecture logicielle. Aujourd'hui, j'utilise cette double compétence pour faire le pont entre le code et l'infrastructure : je conçois des environnements Cloud sécurisés (AWS, Terraform), je conteneurise les applications (Docker) et j'optimise les pipelines CI/CD pour garantir des déploiements fluides et fiables. Curieux et rigoureux, j’interviens sur des projets exigeant haute disponibilité, scalabilité et sécurité (approche DevSecOps).";
