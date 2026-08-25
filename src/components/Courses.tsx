import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { courses } from '../data/site';
import { SectionHeading } from './SectionHeading';

const cardCorner = ['mihrab-corner-start', 'mihrab-corner-end'];

export function Courses() {
  return (
    <section id="courses" className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-20 sm:py-28">
      <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="مسارات التعليم"
          title="ابدأ من حيث أنت، وارتقِ بكتاب الله"
          description="مساران أساسيان يغطيان رحلة الطالب من تصحيح الحرف إلى إتقان الحفظ، بإشراف معلمين مجازين ومتابعة دورية."
          tone="dark" />


        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {courses.map((course, i) =>
          <motion.article
            key={course.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className={`group overflow-hidden bg-white/10 p-3 shadow-sm backdrop-blur-xl transition-colors hover:bg-white/[0.14] ${cardCorner[i] || 'rounded-2xl'}`}>

              <div className="arch-full relative h-60 overflow-hidden sm:h-72">
                <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute inset-0 bg-inverse-surface/20" aria-hidden="true" />
                <span
                className={[
                'absolute end-4 top-8 rounded-full px-3 py-1 text-caption font-bold text-white shadow-sm',
                course.badgeTone === 'active' ? 'bg-primary' : 'bg-tertiary-container'].
                join(' ')}>

                  {course.badge}
                </span>
              </div>

              <div className="px-5 pb-5 pt-7 text-center">
                <h3 className="font-headline-sm text-2xl leading-[1.7] text-inverse-on-surface">
                  {course.title}
                </h3>
                <p className="mt-3 text-body-md leading-8 text-secondary-fixed-dim/80">
                  {course.description}
                </p>
                <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 border-b border-tertiary-fixed-dim/40 pb-1 text-label-md text-inverse-on-surface transition-colors hover:border-tertiary-fixed-dim hover:text-tertiary-fixed-dim">

                  سجّل في المسار
                  <ArrowLeftIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

}
