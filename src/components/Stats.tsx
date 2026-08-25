import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { StarMark } from './Ornament';

export function Stats() {
  return (
    <section id="stats" className="relative w-full overflow-hidden rounded-lg bg-inverse-surface py-20 shadow-[0_25px_60px_-30px_rgba(24,29,21,0.55)] sm:py-28">
      <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="منجزات وثمرات"
          title="أرقام تعكس بركة العمل واستمراره"
          tone="dark" />


        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, i) =>
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
            className="rounded-lg bg-white/10 px-6 pb-6 pt-8 text-center shadow-sm backdrop-blur-md transition-colors hover:bg-white/[0.14]">

              <p className="font-display-lg text-4xl leading-[1.5] text-inverse-on-surface">
                {stat.value === '—' ?
              <span className="text-2xl text-secondary-fixed-dim">مقرئون</span> :

              stat.value
              }
              </p>
              <p className="mt-2 text-body-md font-bold text-inverse-on-surface">{stat.label}</p>
              <p className="mt-1 text-caption leading-6 text-secondary-fixed-dim/75">{stat.caption}</p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="frame-ornate-dark relative mt-8 overflow-hidden rounded-3xl bg-black/20 p-3 shadow-2xl backdrop-blur-md">

          <StarMark className="absolute start-6 top-6 h-6 w-6 text-tertiary-fixed-dim/50 sm:start-10 sm:top-8" />
          <StarMark className="absolute end-6 bottom-6 h-6 w-6 text-tertiary-fixed-dim/50 sm:end-10 sm:bottom-8" />
          <div className="relative px-8 py-12 text-center sm:py-16">
            <p className="font-display-lg text-5xl leading-[1.4] text-inverse-on-surface sm:text-7xl">
              ٩ سنوات
            </p>
            <p className="font-headline-md mt-2 text-2xl text-tertiary-fixed-dim sm:text-3xl">
              من العطاء
            </p>
            <p className="mx-auto mt-5 max-w-xl text-body-md leading-8 text-secondary-fixed-dim/80">
              تسع سنوات متواصلة في خدمة كتاب الله وأهله، حلقةً بعد حلقة، وجيلاً بعد جيل.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}
