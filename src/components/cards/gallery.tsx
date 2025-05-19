'use client';

import { useDevice } from '@/hooks/useDevice';
import { type Cards } from '@/interfaces/cards';
import { cn } from '@heroui/react';
import Image from 'next/image';

export function Gallery({ breakpoints, ...props }: Cards.Gallery) {
  const deviceType = useDevice();
  const images = breakpoints[deviceType] || [];
  const { alt, height, width, className, ...restProps } = props || {};

  return (
    <>
      {images.map(({ src, alt: iAlt, height: iHeight, width: iWidth, fill, ...rest }, index) => {
        if (!src || (!iAlt && !alt) || (!fill && (!height || !width))) return null;

        return (
          <div key={index} className={cn('w-full h-full relative', className)}>
            <Image
              src={src as string}
              alt={(iAlt ?? iAlt) as string}
              fill={fill}
              width={(width ?? iWidth) as any}
              height={(height ?? iHeight) as any}
              style={{ objectFit: 'cover' }}
              {...restProps}
              {...rest}
            />
          </div>
        );
      })}
    </>
  );
}
