import React from 'react';
import { motion } from 'framer-motion';
import { images, stats } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { StarMark } from './Ornament';
import { ParallaxBackground } from './ParallaxBackground';
import { SectionDivider } from './SectionDivider';
import { SectionShadowTop } from './SectionShadowTop';

export function Stats() {
  return (
    <section id="stats" className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-10 sm:py-28">
      <ParallaxBackground src={images.hero} />
      <div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/85 via-inverse-surface/40 via-20% to-inverse-surface/50" aria-hidden="true" />
      <SectionShadowTop />
      <SectionDivider />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="منجزات وثمرات"
          title="أرقام تعكس بركة العمل واستمراره"
          tone="dark"
          onPhoto />


        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-5">
          {stats.map((stat, i) =>
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
            className="rounded-lg bg-white/10 px-3 pb-3 pt-4 text-center shadow-none backdrop-blur-none transition-colors hover:bg-white/[0.14] sm:px-6 sm:pb-6 sm:pt-8 sm:shadow-sm sm:backdrop-blur-md">

              <p className="text-2xl font-bold leading-[1.4] text-inverse-on-surface sm:text-4xl sm:leading-[1.5] lg:text-5xl">
                {stat.value === '—' ?
              <span className="text-lg text-secondary-fixed-dim sm:text-2xl lg:text-3xl">مقرئون</span> :

              stat.value
              }
              </p>
              <p className="mt-1 text-body-md font-bold text-inverse-on-surface sm:mt-3 sm:text-xl">{stat.label}</p>
              <p className="mt-1 text-caption leading-6 text-secondary-fixed-dim/75 sm:text-base">{stat.caption}</p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="frame-ornate-dark relative mt-5 overflow-hidden rounded-2xl bg-black/20 p-3 shadow-2xl backdrop-blur-md sm:mt-8 sm:rounded-3xl">

          <StarMark className="absolute start-6 top-6 h-6 w-6 text-tertiary-fixed-dim/50 sm:start-10 sm:top-8" />
          <StarMark className="absolute end-6 bottom-6 h-6 w-6 text-tertiary-fixed-dim/50 sm:end-10 sm:bottom-8" />
          <div className="relative px-4 py-6 text-center sm:px-8 sm:py-16">
            <p className="text-shadow-photo text-3xl font-bold leading-[1.3] text-inverse-on-surface sm:text-7xl sm:leading-[1.4]">
              ٩ سنوات
            </p>
            <p className="text-shadow-photo mt-2 text-xl font-bold text-tertiary-fixed-dim sm:text-3xl">
              من العطاء
            </p>
            <p className="text-shadow-photo mx-auto mt-4 max-w-xl text-body-md leading-7 text-secondary-fixed-dim/80 sm:mt-5 sm:leading-8">
              تسع سنوات متواصلة في خدمة كتاب الله وأهله، حلقةً بعد حلقة، وجيلاً بعد جيل.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}
