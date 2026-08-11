import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/site';
import { SectionHeading } from './SectionHeading';

export function Stats() {
  return (
    <section id="stats" className="relative w-full overflow-hidden rounded-lg border border-white/40 bg-white/60 py-20 shadow-[0_25px_60px_-30px_rgba(38,43,33,0.35)] backdrop-blur-2xl sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="منجزات وثمرات"
          title="أرقام تعكس بركة العمل واستمراره" />
        

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, i) =>
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
            className="rounded-lg border border-navy-900/10 bg-mist px-6 pb-6 pt-8 text-center shadow-sm transition-shadow hover:shadow-md">
            
              <p className="font-display text-4xl leading-[1.5] text-navy-900">
                {stat.value === '—' ?
              <span className="text-2xl text-navy-700">مقرئون</span> :

              stat.value
              }
              </p>
              <p className="mt-2 text-sm font-bold text-navy-800">{stat.label}</p>
              <p className="mt-1 text-xs leading-6 text-navy-500">{stat.caption}</p>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="frame-ornate-dark relative mt-8 overflow-hidden rounded-3xl bg-navy-900 p-3 shadow-2xl">

          <div className="px-8 py-12 text-center sm:py-16">
            <p className="font-display text-5xl leading-[1.4] text-pearl sm:text-7xl">
              ٩ سنوات
            </p>
            <p className="font-display mt-2 text-2xl text-silver-400 sm:text-3xl">
              من العطاء
            </p>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-silver-200/70">
              تسع سنوات متواصلة في خدمة كتاب الله وأهله، حلقةً بعد حلقة، وجيلاً بعد جيل.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}