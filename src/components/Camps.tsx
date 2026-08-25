import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CalendarDaysIcon } from 'lucide-react';
import { camps } from '../data/site';
import { SectionHeading } from './SectionHeading';

export function Camps() {
  return (
    <section id="camps" className="relative w-full overflow-hidden rounded-lg border border-white/40 bg-white/60 py-20 shadow-[0_25px_60px_-30px_rgba(38,43,33,0.35)] backdrop-blur-2xl sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="الدورات المكثفة والبرامج"
          title="برامج موسمية ومسابقات على مدار العام"
          description="دورات مكثفة ومسابقات قرآنية تُقام في المواسم، تُتيح للطالب قفزة حقيقية في الحفظ والإتقان." />


        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {camps.map((camp, i) =>
          <motion.article
            key={camp.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: 'easeOut' }}
            className="group overflow-hidden rounded-2xl border border-navy-900/10 bg-mist shadow-sm transition-shadow hover:shadow-md">

              <div className="relative h-44 overflow-hidden sm:h-48">
                <img
                  src={camp.image}
                  alt={camp.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute inset-0 bg-navy-950/10" aria-hidden="true" />
                <span
                  className={[
                  'absolute end-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy-900 shadow-sm backdrop-blur'].
                  join(' ')}>

                  <span
                    className={[
                    'h-1.5 w-1.5 rounded-full',
                    camp.statusTone === 'active' ? 'bg-primary' : 'bg-gold'].
                    join(' ')}
                    aria-hidden="true" />

                  {camp.status}
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="font-display text-xl leading-[1.7] text-navy-900">
                  {camp.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-[15px] leading-8 text-navy-500">
                  {camp.description}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-navy-900/10 pt-4">
                  <a
                    href="#contact"
                    aria-label={`سجّل في ${camp.title}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 transition-colors hover:text-primary">

                    اقرأ المزيد
                    <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <span className="inline-flex items-center gap-1.5 text-xs text-navy-500">
                    <CalendarDaysIcon className="h-3.5 w-3.5" aria-hidden="true" />
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
