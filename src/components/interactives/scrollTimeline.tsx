'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollTimelineProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollTimeline({ children, className }: ScrollTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress fills as content scrolls past the bottom portion of the viewport
      // Using 0.8 so the bar reaches each dot before/as the card enters the view
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const anchor = windowHeight * 0.75;

      const scrolled = anchor - containerTop;
      const total = containerHeight;

      const pct = Math.min(Math.max(scrolled / total, 0), 1);
      setProgress(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className || ''}`}>
      {/* Background track */}
      <div className="absolute left-[24px] top-0 bottom-0 w-[2px] bg-border/40 hidden md:block rounded-full" />
      {/* Animated progress fill */}
      <div
        className="absolute left-[24px] top-0 w-[2px] hidden md:block rounded-full transition-[height] duration-100 ease-out"
        style={{
          height: `${progress * 100}%`,
          background: 'linear-gradient(180deg, var(--color-primary), var(--color-secondary))',
          boxShadow: '0 0 8px var(--color-primary-glow)',
        }}
      />
      {children}
    </div>
  );
}
