'use client';

import skills, { categories } from '@/config/skills';
import { type Profile } from '@/interfaces/profil';
import { cn } from '@heroui/react';
import { useCallback, useMemo, useState } from 'react';

export default function SkillList({ className }: { className?: string }) {
  type GroupedSkills = Record<(typeof categories)[number], Profile.skill[]>;
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0]);

  const groupedByTheme = useMemo<GroupedSkills>(() => {
    const acc: GroupedSkills = categories.reduce((obj, theme) => {
      obj[theme] = [];
      return obj;
    }, {} as GroupedSkills);

    skills.forEach(skill => {
      skill.theme.forEach(theme => {
        acc[theme].push(skill);
      });
    });

    return acc;
  }, []);

  const handleCategoryChange = useCallback((cat: (typeof categories)[number]) => setActiveCategory(cat), []);

  return (
    <div className={cn('m-[0_auto] w-full', className)}>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-10 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={cn(
              'px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer border',
              activeCategory === category
                ? 'bg-primary text-white border-primary shadow-[0_4px_16px_var(--color-primary-glow)]'
                : 'bg-glass-bg border-glass-border text-muted hover:text-default-text hover:border-primary/30 dark:hover:text-white',
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {groupedByTheme[activeCategory].map(({ name, logo: Logo }) => (
          <div
            key={name}
            className="group glass-card !rounded-xl !p-5 flex flex-col items-center gap-3 hover:!border-primary/40 hover:!shadow-[0_8px_24px_var(--color-primary-glow)] hover:-translate-y-1 cursor-default"
          >
            {Logo && <Logo className="text-3xl text-primary group-hover:scale-110 transition-transform duration-300" />}
            <span className="text-sm font-semibold text-center text-default-text dark:text-white/90">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
