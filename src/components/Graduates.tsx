import React from 'react';
import { motion } from 'framer-motion';
import { graduates } from '../data/site';
import { SectionHeading } from './SectionHeading';

export function Graduates() {
  return (
    <section id="graduates" className="relative w-full overflow-hidden rounded-lg bg-inverse-surface py-20 shadow-[0_25px_60px_-30px_rgba(24,29,21,0.55)] sm:py-28">
      <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="خريجونا"
          title="حفظة أتمّوا كتاب الله في مركزنا"
          description="نفخر بخريجينا الذين نالوا الإجازة القرآنية بالسند المتصل، وهم اليوم امتداد لرسالة المركز."
          tone="dark" />


        <ul className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {graduates.map((grad, i) =>
          <motion.li
            key={grad.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
            className="w-56 shrink-0 snap-start lg:w-auto">

              <figure className="group rounded-2xl bg-white/10 p-2.5 shadow-sm backdrop-blur-xl transition-colors hover:bg-white/[0.14]">
                <div className="arch-full relative aspect-[4/5] overflow-hidden">
                  <img
                  src={grad.image}
                  alt={grad.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                  <span className="absolute end-3 top-6 rounded-full bg-tertiary-container/90 px-2.5 py-1 text-caption font-bold text-on-tertiary backdrop-blur-sm">
                    {grad.year}
                  </span>
                </div>
                <figcaption className="px-2 py-4 text-center">
                  <p className="font-headline-sm text-base leading-[1.7] text-inverse-on-surface">
                    {grad.name}
                  </p>
                  <p className="mt-1 text-caption text-secondary-fixed-dim/75">إجازة بالسند المتصل</p>
                </figcaption>
              </figure>
            </motion.li>
          )}
        </ul>
      </div>
    </section>);

}
