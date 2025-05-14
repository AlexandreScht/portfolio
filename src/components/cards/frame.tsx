'use client';
import { type Cards } from '@/interfaces/cards';
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, id, className, ...other }: Cards.SectionDisplay) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <section {...other} className={className}>
        {children}
      </section>
    </motion.div>
  );
}
