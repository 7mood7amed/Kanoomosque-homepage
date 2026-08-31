import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CalendarDaysIcon } from 'lucide-react';
import { camps, images } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { ParallaxBackground } from './ParallaxBackground';
import { SectionDivider } from './SectionDivider';
import { SectionShadowTop } from './SectionShadowTop';

const cardCorner = ['mihrab-corner-start', 'mihrab-corner-end', 'mihrab-corner-start', 'mihrab-corner-end'];

export function Camps() {
  return (
    <section id="camps" className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-10 sm:py-28">
      <ParallaxBackground src={images.gathering} />
      <div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/75 via-inverse-surface/30 via-20% to-inverse-surface/40" aria-hidden="true" />
      <SectionShadowTop />
      <SectionDivider />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="الدورات المكثفة والبرامج"
          title="برامج موسمية ومسابقات على مدار العام"
          description="دورات مكثفة ومسابقات قرآنية تُقام في المواسم، تُتيح للطالب قفزة حقيقية في الحفظ والإتقان."
          tone="dark"
          onPhoto />


        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-6">
          {camps.map((camp, i) =>
          <motion.article
            key={camp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: 'easeOut' }}
            className={`group overflow-hidden bg-white/10 shadow-none backdrop-blur-none transition-colors hover:bg-white/[0.14] sm:shadow-sm sm:backdrop-blur-xl ${cardCorner[i] || 'rounded-2xl'}`}>

              <div className="relative h-28 overflow-hidden sm:h-48">
                <img
                  src={camp.image}
                  alt={camp.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute inset-0 bg-inverse-surface/10" aria-hidden="true" />
                <span
                  className={[
                  'absolute end-2 top-2 inline-flex items-center gap-1.5 rounded-full bg-white/30 px-2.5 py-1 text-sm font-bold text-inverse-on-surface shadow-sm backdrop-blur-md sm:end-4 sm:top-4 sm:gap-2 sm:px-4 sm:py-1.5 sm:text-base'].
                  join(' ')}>

                  <span
                    className={[
                    'h-1.5 w-1.5 shrink-0 rounded-full',
                    camp.statusTone === 'active' ? 'bg-primary-fixed-dim' : 'bg-tertiary-fixed-dim'].
                    join(' ')}
                    aria-hidden="true" />

                  <span className="truncate">{camp.status}</span>
                </span>
              </div>

              <div className="p-3 sm:p-7">
                <h3 className="line-clamp-2 text-lg leading-snug text-inverse-on-surface sm:text-2xl sm:leading-[1.5] lg:text-3xl">
                  {camp.title}
                </h3>
                <p className="mt-1.5 line-clamp-3 text-base leading-6 text-secondary-fixed-dim/80 sm:mt-3 sm:line-clamp-3 sm:text-lg sm:leading-8 lg:text-xl">
                  {camp.description}
                </p>
                <div className="mt-3 border-t border-white/10 pt-3 sm:mt-6 sm:flex sm:items-center sm:justify-between sm:pt-5">
                  <a
                    href="#contact"
                    aria-label={`سجّل في ${camp.title}`}
                    className="inline-flex items-center gap-1.5 text-base text-inverse-on-surface transition-colors hover:text-tertiary-fixed-dim sm:gap-2 sm:text-lg">

                    اقرأ المزيد
                    <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} aria-hidden="true" />
                  </a>
                  <span className="mt-1.5 hidden items-center gap-1.5 text-caption text-secondary-fixed-dim/70 sm:mt-0 sm:flex sm:text-base">
                    <CalendarDaysIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                    {camp.period}
                  </span>
                </div>
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

}
