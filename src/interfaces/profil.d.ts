import type skills from '@/config/skills';
import type { categories } from '@/config/skills';
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
    date: string;
    resume: string;
    description: string;
    link?: { icon?: IconType; label: string; url: string };
    picture?: [string, string?, string?];
    skills: SkillName[];
    types: string[];
    features: string[];
  }
}
