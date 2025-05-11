'use client';

import skills, { categories } from '@/config/skills';
import { type Profile } from '@/interfaces/profil';
import { cn } from '@heroui/react';
import { useMemo } from 'react';

export default function SkillList({ className }: { className?: string }) {
  type GroupedSkills = Record<(typeof categories)[number], Profile.skill[]>;

  const groupedByTheme = useMemo<GroupedSkills>(() => {
    // 1) Créez un nouvel objet vide avec toutes les clés initialisées
    const acc: GroupedSkills = categories.reduce((obj, theme) => {
      obj[theme] = [];
      return obj;
    }, {} as GroupedSkills);

    // 2) Poussez chaque skill dans la bonne catégorie
    skills.forEach(skill => {
      skill.theme.forEach(theme => {
        acc[theme].push(skill);
      });
    });

    return acc;
  }, []); // reboucle quand `skills` change

  return (
    <div className={cn('m-[0_auto] w-full', className)}>
      {categories.map(category => {
        const items = groupedByTheme[category];
        return (
          <article key={category} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-default-text">{category}</h3>
            <div className="flex flex-wrap gap-4">
              {items.map(({ name, logo: Logo }) => (
                <div
                  key={name}
                  className="inline-flex cursor-default items-center space-x-2 py-2 px-4 text-[0.9rem] transition-all duration-300 ease-in border-1 border-border/70 skill-shadow-card hover:bg-card-hover rounded-md hover:-translate-y-0.5"
                >
                  {Logo && <Logo className="text-[1rem] mr-2 text-primary" />}
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
