import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { courses } from '../data/site';
import { SectionHeading } from './SectionHeading';

export function Courses() {
  return (
    <section id="courses" className="relative w-full overflow-hidden rounded-lg border border-white/40 bg-white/60 py-20 shadow-[0_25px_60px_-30px_rgba(38,43,33,0.35)] backdrop-blur-2xl sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="مسارات التعليم"
          title="ابدأ من حيث أنت، وارتقِ بكتاب الله"
          description="مساران أساسيان يغطيان رحلة الطالب من تصحيح الحرف إلى إتقان الحفظ، بإشراف معلمين مجازين ومتابعة دورية." />
        

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {courses.map((course, i) =>
          <motion.article
            key={course.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className="group rounded-lg border border-navy-900/10 bg-mist p-3 shadow-sm transition-shadow hover:shadow-md">

              <div className="arch-full relative h-60 overflow-hidden sm:h-72">
                <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute inset-0 bg-navy-950/20" aria-hidden="true" />
                <span
                className={[
                'absolute end-4 top-8 rounded-full px-3 py-1 text-xs font-bold text-white shadow-sm',
                course.badgeTone === 'active' ? 'bg-primary' : 'bg-gold'].
                join(' ')}>

                  {course.badge}
                </span>
              </div>

              <div className="px-5 pb-5 pt-7 text-center">
                <h3 className="font-display text-2xl leading-[1.7] text-navy-900">
                  {course.title}
                </h3>
                <p className="mt-3 text-[15px] leading-8 text-navy-500">
                  {course.description}
                </p>
                <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 border-b border-navy-900/30 pb-1 text-sm font-bold text-navy-900 transition-colors hover:border-navy-700 hover:text-navy-700">
                
                  سجّل في المسار
                  <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

}