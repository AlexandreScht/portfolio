'use client';

import { type Cards } from '@/interfaces/cards';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function Project({ children, href, key, className, ...props }: Cards.Project) {
  const router = useRouter();

  const handleClick = useCallback(() => router.push(href), [href, router]);
  return (
    <div key={key} onClick={handleClick} className={className} {...props}>
      {children}
    </div>
  );
}
