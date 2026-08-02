import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/site';
import { Ornament } from './Ornament';
import { SectionHeading } from './SectionHeading';

export function Stats() {
  return (
    <section id="stats" className="pattern-geo-light w-full bg-mist py-20 sm:py-28">
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
            className="arch-top border border-navy-900/15 bg-pearl px-6 pb-6 pt-8 text-center">
            
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
          className="pattern-geo relative mt-8 overflow-hidden border border-navy-900 bg-navy-900 p-3">
          
          <div className="border border-silver-400/30 px-8 py-12 text-center sm:py-16">
            <p className="font-display text-5xl leading-[1.4] text-pearl sm:text-7xl">
              ٩ سنوات
            </p>
            <p className="font-display mt-2 text-2xl text-silver-400 sm:text-3xl">
              من العطاء
            </p>
            <div className="mt-5">
              <Ornament tone="dark" />
            </div>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-silver-200/70">
              تسع سنوات متواصلة في خدمة كتاب الله وأهله، حلقةً بعد حلقة، وجيلاً بعد جيل.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}