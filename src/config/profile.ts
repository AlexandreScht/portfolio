import { type Profile } from '@/interfaces/profil';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const fullName: string = 'Alexandre SCHECHT';
export const jobType: string = 'Alternance';
export const localisation: string = 'Ile-de-France, France';
export const email: string = 'alexandreschecht@gmail.com';
export const xpYears: number = 4;

export const job: Profile.variant = {
  sec: 'Alternant Ingénieur Cybersécurité & DevSecOps',
  default: 'Alternant Ingénieur DevOps & Cloud',
};

export const socialLinks: Profile.socialLink[] = [
  { icon: FaGithub, label: 'GitHub', url: 'https://github.com/AlexandreScht' },
  { icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/alexandre-schecht-51a726216/' },
];

export const aboutMe: Profile.variant = {
  sec: "Bonjour, je suis Alexandre, Ingénieur Cybersécurité & DevSecOps, passionné par la protection des systèmes et la résilience des infrastructures Cloud. Fort de 4 années d'expérience en développement Full-Stack et DevOps, je possède une compréhension intime de la manière dont les applications sont construites et déployées. Aujourd'hui, j'utilise cette vision globale pour intégrer la sécurité au plus tôt dans le cycle de vie logiciel (Security by Design). J'automatise la détection de vulnérabilités dans les pipelines CI/CD, je durcis les architectures Cloud (AWS, Terraform) et je sécurise les accès (IAM, SSO). Curieux et rigoureux, j’interviens sur des projets critiques où la performance rime avec une protection absolue des données.",
  default:
    "Bonjour, je suis Alexandre, Ingénieur DevOps & Cloud, passionné par l’automatisation et la résilience des infrastructures. Fort de mes premières années d'expérience en développement Full-Stack, je comprends intimement l'architecture logicielle. Aujourd'hui, j'utilise cette double compétence pour faire le pont entre le code et l'infrastructure : je conçois des environnements Cloud sécurisés (AWS, Terraform), je conteneurise les applications (Docker) et j'optimise les pipelines CI/CD pour garantir des déploiements fluides et fiables. Curieux et rigoureux, j’interviens sur des projets exigeant haute disponibilité, scalabilité et sécurité (approche DevSecOps).",
};
