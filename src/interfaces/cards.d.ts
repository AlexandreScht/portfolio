import { type HTMLMotionProps } from 'framer-motion';
import { type DetailedHTMLProps, type HTMLAttributes, type ReactNode } from 'react';
import type { SwiperProps } from 'swiper/react';

declare namespace Cards {
  export interface Carousel extends SwiperProps {
    className?: string;
  }
  export interface SectionDisplay extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    className?: string;
    motion?: HTMLMotionProps<'div'>;
  }

  export interface InteractivePicture {
    src: string;
    alt?: string;
    zoomScale?: number;
    transitionDuration?: number;
    className?: string;
  }

  export interface Project extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
    children: ReactNode;
    key: string;
    href: string;
  }
}
