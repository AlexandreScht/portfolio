'use client';

import { useDevice } from '@/hooks/useDevice';
import { ScrollShadow } from '@heroui/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface AchievementsProps {
  achievements: string[];
}

export default function Achievements({ achievements }: AchievementsProps) {
  const deviceType = useDevice();

  if (deviceType === 'mobile') {
    return (
      <Swiper modules={[Pagination]} pagination={true} spaceBetween={20} slidesPerView={1} className="w-full h-31">
        {achievements.map((item, i) => (
          <SwiperSlide
            key={i}
            className="flex items-center !h-22 text-default-text text-sm !bg-default-bg/80 border-shadow border-1 px-4 py-1.5 rounded-lg"
          >
            <ScrollShadow className="h-full w-full overflow-y-auto" size={5}>
              <span className="text-muted">{item}</span>
            </ScrollShadow>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <ul className="space-y-2 md:space-y-3 pl-2">
      {achievements.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-default-text text-sm md:text-base">
          <span className="text-primary text-lg">•</span>
          <span className="text-muted mt-0.5">{item}</span>
        </li>
      ))}
    </ul>
  );
}
