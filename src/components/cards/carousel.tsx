'use client';
import { type Cards } from '@/interfaces/cards';
import { cn } from '@heroui/react';
import { Children, cloneElement, isValidElement, useMemo } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import { Autoplay } from 'swiper/modules';
import type { SwiperProps } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Carousel({ children, className, ...other }: Cards.Carousel) {
  const swiperOptions: SwiperProps = useMemo(
    () => ({
      modules: [Autoplay],
      loop: true,
      freeMode: {
        momentum: true,
        momentumRatio: 1,
        momentumBounce: true,
      },
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      speed: 5000,
      slidesPerView: 2,
      spaceBetween: 40,
      breakpoints: {
        1600: {
          slidesPerView: 7,
        },
        1440: {
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 5,
        },
        640: {
          slidesPerView: 3,
        },
      },
      ...other,
    }),
    [other],
  );
  return (
    <div className={cn('relative w-full', className)}>
      <Swiper {...swiperOptions}>
        {Children.map(children, (child, idx) => {
          if (isValidElement(child)) {
            return (
              <SwiperSlide key={idx} className="py-2">
                {cloneElement(child)}
              </SwiperSlide>
            );
          }
          return child;
        })}
      </Swiper>

      <div className="absolute top-0 left-0 h-full z-10 w-10 pointer-events-none bg-gradient-to-r from-default-bg to-transparent" />
      <div className="absolute top-0 right-0 h-full z-10 w-10 pointer-events-none bg-gradient-to-l from-default-bg to-transparent" />
    </div>
  );
}
