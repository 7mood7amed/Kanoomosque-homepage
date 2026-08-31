import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { graduates, images } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { ParallaxBackground } from './ParallaxBackground';
import { SectionDivider } from './SectionDivider';
import { SectionShadowTop } from './SectionShadowTop';

export function Graduates() {
  return (
    <section id="graduates" className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-10 sm:py-28">
      <ParallaxBackground src={images.reading} position="object-[center_35%] sm:object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/85 via-inverse-surface/40 via-20% to-inverse-surface/50" aria-hidden="true" />
      <SectionShadowTop />
      <SectionDivider />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="خريجونا"
          title="حفظة أتمّوا كتاب الله في مركزنا"
          description="نفخر بخريجينا الذين نالوا الإجازة القرآنية بالسند المتصل، وهم اليوم امتداد لرسالة المركز."
          tone="dark"
          onPhoto />


        <ul className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:mt-14 sm:gap-5 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {graduates.map((grad, i) =>
          <motion.li
            key={grad.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
            className="w-44 shrink-0 snap-start sm:w-64 lg:w-auto">

              <figure className="group rounded-lg bg-white/10 p-2 shadow-none backdrop-blur-none transition-colors hover:bg-white/[0.14] sm:rounded-2xl sm:p-2.5 sm:shadow-sm sm:backdrop-blur-xl">
                <div className="arch-full relative aspect-[7/10] overflow-hidden">
                  <img
                  src={grad.image}
                  alt={grad.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                  <span className="absolute end-2 top-4 rounded-full bg-tertiary-container/90 px-2.5 py-1 text-sm font-bold text-on-tertiary backdrop-blur-sm sm:end-3 sm:top-6 sm:px-3 sm:py-1.5 sm:text-base">
                    {grad.year}
                  </span>
                </div>
                <figcaption className="px-1 py-3 text-center sm:px-2 sm:py-5">
                  <p className="font-headline-sm line-clamp-1 text-base leading-snug text-inverse-on-surface sm:text-2xl sm:leading-[1.7]">
                    {grad.name}
                  </p>
                  <p className="mt-1 text-sm text-secondary-fixed-dim/75 sm:mt-1.5 sm:text-lg">إجازة بالسند المتصل</p>
                </figcaption>
              </figure>
            </motion.li>
          )}
        </ul>

        <div className="mt-8 text-center sm:mt-12">
          <Link
            to="/graduates"
            className="inline-flex items-center gap-2 text-body-lg text-tertiary-fixed-dim transition-colors hover:text-inverse-on-surface">

            أعرف أيضاً
            <ArrowLeftIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>);

}
