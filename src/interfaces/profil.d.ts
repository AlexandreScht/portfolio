import type skills from '@/config/skills';
import type { categories } from '@/config/skills';
import { type fromYear, type toYear } from '@/types/date';
import { type IconType } from 'react-icons/lib';

export namespace Profile {
  export interface skill {
    name: string;
    logo?: IconType;
    theme: (typeof categories)[number][];
  }

  type SkillName = (typeof skills)[number]['name'];

  export interface project {
    title: string;
    date: fromYear;
    resume: string;
    description: string;
    link?: { icon?: IconType; label: string; url: string };
    picture?: [string, string?, string?];
    skills: SkillName[];
    types: string[];
    features: string[];
  }

  export interface formation {
    title: string;
    school: string;
    startDate: fromYear;
    endDate?: toYear;
    description: string;
    certifications?: string[];
  }

  export interface experience {
    title: string;
    company: string;
    startDate: fromYear;
    endDate?: toYear;
    description: string;
    skills: SkillName[];
    achievements: string[];
  }
}
