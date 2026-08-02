import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CalendarDaysIcon } from 'lucide-react';
import { camps } from '../data/site';
import { SectionHeading } from './SectionHeading';

export function Camps() {
  return (
    <section id="camps" className="w-full border-t border-navy-900/10 bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="الدورات المكثفة والبرامج"
          title="برامج موسمية ومسابقات على مدار العام"
          description="دورات مكثفة ومسابقات قرآنية تُقام في المواسم، تُتيح للطالب قفزة حقيقية في الحفظ والإتقان." />
        

        <ol className="mt-14 space-y-4">
          {camps.map((camp, i) =>
          <motion.li
            key={camp.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: 'easeOut' }}>
            
              <article className="group flex flex-col gap-5 rounded-3xl bg-white p-5 shadow-lg transition-shadow hover:shadow-xl sm:flex-row sm:items-center sm:gap-8 sm:p-6">
                <div className="flex shrink-0 items-center gap-4 sm:w-56 sm:flex-col sm:items-start sm:gap-3 sm:border-e sm:border-navy-900/12 sm:pe-8">
                  <span className="arch-top flex h-12 w-10 items-center justify-center bg-mist">
                    <span className="font-display text-lg text-navy-800">{camp.index}</span>
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                    className={[
                    'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold',
                    camp.statusTone === 'active' ?
                    'bg-navy-900 text-pearl' :
                    'border border-outline-variant text-secondary'].
                    join(' ')}>
                    
                      {camp.statusTone === 'active' &&
                    <span className="h-1.5 w-1.5 rotate-45 bg-pearl" aria-hidden="true" />
                    }
                      {camp.status}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-navy-500">
                      <CalendarDaysIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      {camp.period}
                    </span>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl leading-[1.7] text-navy-900 sm:text-2xl">
                    {camp.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-8 text-navy-500">
                    {camp.description}
                  </p>
                </div>

                <a
                href="#contact"
                aria-label={`سجّل في ${camp.title}`}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-bold text-navy-900 transition-colors hover:bg-primary hover:text-white">

                  التفاصيل
                  <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            </motion.li>
          )}
        </ol>
      </div>
    </section>);

}