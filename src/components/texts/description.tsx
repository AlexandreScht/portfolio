'use client';

import { useDevice } from '@/hooks/useDevice';
import { ScrollShadow } from '@heroui/react';

export default function Description({ description }: { description: string }) {
  const device = useDevice();
  return (
    <>
      {device === 'mobile' ? (
        <ScrollShadow className="md:hidden max-h-[150px] overflow-y-auto">
          <p className="text-muted pl-3 leading-6 md:leading-7 text-sm md:text-base">{description}</p>
        </ScrollShadow>
      ) : (
        <p className="text-muted pl-3 leading-6 md:leading-7 text-sm md:text-base">{description}</p>
      )}
    </>
  );
}
