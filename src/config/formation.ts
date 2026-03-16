import { type Profile } from '@/interfaces/profil';

export const formations = [
  {
    title: { label: 'MASTER OF SCIENCE - Cybersécurité & Cloud', link: 'https://www.epitech.eu/formations/msc-cybersecurite-cloud/' },
    school: 'EPITECH',
    startDate: '2025',
    endDate: '2027',
    description: 'Architecture SI : conception, administration et sécurisation cloud & réseaux.',
    // certifications: [
    //   { label: 'AWS Solutions Architect Associate', link: 'https://aws.amazon.com/fr/certification/certified-solutions-architect-associate/' },
    //   { label: 'CompTIA Security+' },
    //   { label: 'HashiCorp Terraform Associate' },
    //   { label: 'CKA (Certified K8s Administrator)' },
    //   { label: 'CKS (Certified K8s Security Specialist)' },
    // ],
  },
  {
    title: {
      label: "BACHELOR - Concepteur Développeur d'Applications",
      link: 'https://www.iscod.fr/formation-concepteur-developpeur-applications-en-alternance?utm_source=google-branding&utm_medium=cpc&utm_campaign=ISCOD_Etudiant&utm_term=%2Biscod',
    },
    school: 'ISCOD',
    startDate: '2023',
    endDate: '2024',
    description: "Bac +3 en développement fullstack d'une application web",
  },
  {
    title: {
      label: 'BACHELOR - Développement informatique',
      link: 'https://www.supdevinci.fr/formation/bachelor-specialite-developpement-informatique/',
    },
    school: 'SUP DE VINCI',
    startDate: '2022',
    endDate: '2023',
    description: "Bac +3 en développement fullstack d'une application web",
  },
  {
    title: { label: "BACHELOR - Développeur intégrateur en réalisation d'applications web" },
    school: 'AJC FORMATION',
    startDate: '2021',
    endDate: '2022',
    description: 'Diplôme de développeur Web Bac +2 obtenu en 1 an',
  },
] satisfies Profile.formation[];
