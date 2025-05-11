// app/components/Switcher.tsx
'use client';

import { cn } from '@heroui/react';
import { useCallback, useState, type ReactNode } from 'react';
import { IoMdList } from 'react-icons/io';
import { TbCarouselHorizontal } from 'react-icons/tb';

interface SwitcherProps {
  children: [ReactNode, ReactNode];
  initialState?: boolean;
  className?: string;
}

export function Switcher({ children, initialState, className }: SwitcherProps) {
  const [isSelected, setIsSelected] = useState<boolean>(initialState ?? true);
  const [firstChild, secondChild] = children;
  const handleSwitch = useCallback((state: boolean) => setIsSelected(state), []);

  return (
    <div className={cn('w-full relative', className)}>
      <div
        className={cn(
          'sticky top-24 left-full z-20 p-1 mb-10 rounded-md flex w-fit items-center transition-all duration-300 ease-in border border-border bg-accent dark:bg-card-bg',
        )}
      >
        <div
          className={cn(
            'absolute top-1 left-1 w-8 h-8 rounded-md transition-transform duration-200 ease-in',
            isSelected ? 'translate-x-0 bg-white dark:bg-primary/90' : 'translate-x-[40px] bg-white dark:bg-primary/90',
          )}
        />

        <div className="relative z-10 flex gap-2">
          <button onClick={() => handleSwitch(true)} className="w-8 h-8 flex items-center justify-center cursor-pointer">
            <TbCarouselHorizontal
              className={cn(
                'w-6 h-6 transition-colors duration-100 ease-in active:scale-90',
                isSelected ? 'text-black/90 dark:text-white/80' : 'text-muted',
              )}
            />
          </button>

          <button onClick={() => handleSwitch(false)} className="w-8 h-8 flex items-center justify-center cursor-pointer">
            <IoMdList
              className={cn(
                'w-6 h-6 transition-colors duration-100 ease-in active:scale-90',
                !isSelected ? 'text-black/90 dark:text-white/80' : 'text-muted',
              )}
            />
          </button>
        </div>
      </div>
      <div className="relative w-full overflow-hidden mt-4">
        <div className={cn('w-full inset-0 transition-transform duration-300 ease-in-out', isSelected ? 'translate-x-0' : '-translate-x-full h-0')}>
          {firstChild}
        </div>
        <div className={cn('w-full inset-0 transition-transform duration-300 ease-in-out', isSelected ? 'translate-x-full h-0' : 'translate-x-0')}>
          {secondChild}
        </div>
      </div>
    </div>
  );
}
