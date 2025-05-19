import { type Interfaces } from '@/interfaces';
import { type HTMLMotionProps } from 'framer-motion';
import { type LinkProps } from 'next/link';
import { type AnchorHTMLAttributes, type DetailedHTMLProps, type HTMLAttributes, type ImgHTMLAttributes, type ReactNode } from 'react';
import type { SwiperProps } from 'swiper/react';

declare namespace Cards {
  type breakpoints = '';
  export interface Carousel extends SwiperProps {
    className?: string;
  }
  export interface SectionDisplay extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    className?: string;
    motionProps?: HTMLMotionProps<'div'>;
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

  type NextLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & ImgHTMLAttributes<HTMLImageElement> & { fill: boolean };

  export interface Gallery extends Omit<NextLinkProps, 'href' | 'src' | 'fill'> {
    className?: string;
    breakpoints: {
      [key in Interfaces.breakpoints]?: Omit<NextLinkProps, 'href'>[];
    };
  }
}
