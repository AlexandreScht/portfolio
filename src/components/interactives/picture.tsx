// app/components/ZoomImage.tsx
'use client';

import { type Cards } from '@/interfaces/cards';
import { cn } from '@heroui/react';
import React, { useRef } from 'react';

export default function InteractiveImage({ src, alt, zoomScale = 1.1, transitionDuration = 300, className }: Cards.InteractivePicture) {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const img = imgRef.current;
    const container = containerRef.current;
    if (!img || !container) return;

    const { left, top, width, height } = container.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const px = (x / width) * 100;
    const py = (y / height) * 100;

    img.style.transformOrigin = `${px}% ${py}%`;
    img.style.transform = `scale(${zoomScale})`;
  };

  const handleMouseLeave = () => {
    const img = imgRef.current;
    if (!img) return;
    img.style.transformOrigin = `center center`;
    img.style.transform = `scale(1)`;
  };

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={cn('overflow-hidden h-full w-full', className)}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="object-cover w-full h-full transition-transform"
        style={{ transitionDuration: `${transitionDuration}ms` }}
      />
    </div>
  );
}
