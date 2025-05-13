import { type Profile } from '@/interfaces/profil';
import { BiLogoPostgresql } from 'react-icons/bi';
import { BsFiletypeScss } from 'react-icons/bs';
import { DiRubyRough } from 'react-icons/di';
import { FaCss3Alt, FaDatabase, FaDocker, FaGitAlt, FaHtml5, FaLinux, FaNodeJs, FaPhp, FaPython, FaReact, FaVuejs } from 'react-icons/fa';
import { IoLogoIonic } from 'react-icons/io';
import { IoLogoFigma, IoLogoJavascript } from 'react-icons/io5';
import { PiFileSql, PiNetworkSlashDuotone } from 'react-icons/pi';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiAxios, SiExpress, SiJest, SiJira, SiKnexdotjs, SiMongodb, SiNuxtdotjs, SiPostman, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative, TbBrandSocketIo } from 'react-icons/tb';

export const categories = [
  'Langages de programmation',
  'Frontend & UI',
  'Backend & API',
  'Bases de données',
  'Infrastructure & DevOps',
  'Outils',
] as const;

const skills = [
  { name: 'Linux', logo: FaLinux, theme: ['Infrastructure & DevOps'] },
  { name: 'GNS3', logo: PiNetworkSlashDuotone, theme: ['Infrastructure & DevOps'] },
  { name: 'Docker', logo: FaDocker, theme: ['Infrastructure & DevOps'] },
  { name: 'HTML5', logo: FaHtml5, theme: ['Langages de programmation'] },
  { name: 'CSS3', logo: FaCss3Alt, theme: ['Langages de programmation'] },
  { name: 'Python', logo: FaPython, theme: ['Langages de programmation'] },
  { name: 'JavaScript', logo: IoLogoJavascript, theme: ['Langages de programmation'] },
  { name: 'TypeScript', logo: SiTypescript, theme: ['Langages de programmation'] },
  { name: 'Tailwindcss', logo: RiTailwindCssFill, theme: ['Frontend & UI'] },
  { name: 'Scss', logo: BsFiletypeScss, theme: ['Frontend & UI'] },
  { name: 'Axios', logo: SiAxios, theme: ['Backend & API'] },
  { name: 'Socket.io', logo: TbBrandSocketIo, theme: ['Backend & API'] },
  { name: 'ruby', logo: DiRubyRough, theme: ['Langages de programmation'] },
  { name: 'PHP', logo: FaPhp, theme: ['Langages de programmation'] },
  { name: 'Ionic', logo: IoLogoIonic, theme: ['Frontend & UI'] },
  { name: 'Next.js', logo: RiNextjsFill, theme: ['Frontend & UI'] },
  { name: 'React', logo: FaReact, theme: ['Frontend & UI'] },
  { name: 'React Native', logo: TbBrandReactNative, theme: ['Frontend & UI'] },
  { name: 'Node.js', logo: FaNodeJs, theme: ['Backend & API'] },
  { name: 'Vue.js', logo: FaVuejs, theme: ['Frontend & UI'] },
  { name: 'Nuxt.js', logo: SiNuxtdotjs, theme: ['Frontend & UI'] },
  { name: 'Express.js', logo: SiExpress, theme: ['Backend & API'] },
  { name: 'SQL', logo: PiFileSql, theme: ['Bases de données'] },
  { name: 'MongoDB', logo: SiMongodb, theme: ['Bases de données'] },
  { name: 'PostgreSql', logo: BiLogoPostgresql, theme: ['Bases de données'] },
  { name: 'Knex.js', logo: SiKnexdotjs, theme: ['Backend & API'] },
  { name: 'Objection.js', logo: FaDatabase, theme: ['Backend & API'] },
  { name: 'Kysely', logo: FaDatabase, theme: ['Backend & API'] },
  { name: 'Postman', logo: SiPostman, theme: ['Outils'] },
  { name: 'Jira/Trello', logo: SiJira, theme: ['Outils'] },
  { name: 'Figma', logo: IoLogoFigma, theme: ['Outils'] },
  { name: 'Git', logo: FaGitAlt, theme: ['Outils'] },
  { name: 'Jest', logo: SiJest, theme: ['Outils'] },
] as const satisfies Profile.skill[];

export default skills;
