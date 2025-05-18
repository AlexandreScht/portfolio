import { type Profile } from '@/interfaces/profil';

export const formations = [
  {
    title: 'MASTER 1 - SPÉCIALISATION SYSTÈMES RÉSEAUX',
    school: 'ETNA',
    startDate: '2025',
    endDate: 'Présent',
    description: "Formation d'Architecte de systèmes d’information",
    // certifications: ['CISCO', 'AWS', 'AZURE', 'DOCKER', 'KUBERNETES'],
  },
  {
    title: "BACHELOR - Concepteur Développeur d'Applications",
    school: 'ISCOD',
    startDate: '2024',
    endDate: '2023',
    description: "Bac +3 en développement fullstack d'une application web",
  },
  {
    title: 'BACHELOR - Développement informatique',
    school: 'SUP DE VINCI',
    startDate: '2022',
    endDate: '2023',
    description: "Bac +3 en développement fullstack d'une application web",
  },
  {
    title: "BACHELOR - Développeur intégrateur en réalisation d'applications web",
    school: 'AJC FORMATION',
    startDate: '2021',
    endDate: '2022',
    description: 'Diplôme de développeur Web Bac +2 obtenu en 1 an',
  },
] satisfies Profile.formation[];
