import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { courses, images } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { SectionDivider } from './SectionDivider';

const cardCorner = ['mihrab-corner-start', 'mihrab-corner-end'];

export function Courses() {
  return (
    <section id="courses" className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-10 sm:py-28">
      <img
        src={images.study}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25" />

      <div className="absolute inset-0 bg-inverse-surface/80" aria-hidden="true" />
      <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <SectionDivider />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="مسارات التعليم"
          title="ابدأ من حيث أنت، وارتقِ بكتاب الله"
          description="مساران أساسيان يغطيان رحلة الطالب من تصحيح الحرف إلى إتقان الحفظ، بإشراف معلمين مجازين ومتابعة دورية."
          tone="dark" />


        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 md:gap-8">
          {courses.map((course, i) =>
          <motion.article
            key={course.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className={`group overflow-hidden bg-white/10 p-2 shadow-none backdrop-blur-none transition-colors hover:bg-white/[0.14] sm:p-3 sm:shadow-sm sm:backdrop-blur-xl ${cardCorner[i] || 'rounded-2xl'}`}>

              <div className="arch-full relative h-24 overflow-hidden sm:h-72">
                <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute inset-0 bg-inverse-surface/20" aria-hidden="true" />
                <span
                className={[
                'absolute end-2 top-2 rounded-full px-2 py-0.5 text-xs font-bold text-white shadow-sm sm:end-4 sm:top-8 sm:px-3 sm:py-1 sm:text-caption',
                course.badgeTone === 'active' ? 'bg-primary' : 'bg-tertiary-container'].
                join(' ')}>

                  {course.badge}
                </span>
              </div>

              <div className="px-2 pb-2 pt-3 text-center sm:px-5 sm:pb-5 sm:pt-7">
                <h3 className="font-headline-sm line-clamp-2 text-base leading-snug text-inverse-on-surface sm:text-2xl sm:leading-[1.7]">
                  {course.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm leading-5 text-secondary-fixed-dim/80 sm:mt-3 sm:line-clamp-none sm:text-body-md sm:leading-8">
                  {course.description}
                </p>
                <a
                href="#contact"
                className="mt-2 inline-flex items-center gap-1.5 border-b border-tertiary-fixed-dim/40 pb-1 text-sm text-inverse-on-surface transition-colors hover:border-tertiary-fixed-dim hover:text-tertiary-fixed-dim sm:mt-6 sm:gap-2 sm:text-label-md">

                  سجّل في المسار
                  <ArrowLeftIcon className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={1.5} aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

}
