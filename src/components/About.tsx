import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { images } from '../data/site';
import { StarMark } from './Ornament';

const pillars = [
'معلمون مجازون بالسند المتصل',
'مناهج متدرجة لكل الأعمار',
'بيئة تربوية آمنة ومحفّزة'];


export function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden rounded-lg bg-inverse-surface py-20 shadow-[0_25px_60px_-30px_rgba(24,29,21,0.55)] sm:py-28">
      <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative">

            <div className="frame-ornate-dark rounded-[40px] bg-white/5 p-3 shadow-xl backdrop-blur-md">
              <div className="arch-full overflow-hidden">
                <img
                  src={images.about}
                  alt="طلاب في حلقة قرآنية داخل المركز"
                  className="h-[340px] w-full object-cover sm:h-[480px]" />

              </div>
            </div>
            <span className="absolute -top-4 start-8 flex h-12 w-12 items-center justify-center rounded-full border border-tertiary-fixed-dim/50 bg-inverse-surface text-tertiary-fixed-dim shadow-lg sm:-top-5 sm:start-12">
              <StarMark className="h-5 w-5" />
            </span>
          </motion.div>

          <div>
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-label-md tracking-[0.15em] text-tertiary-fixed-dim">
              من نحن
            </span>
            <h2 className="font-headline-md mt-4 text-4xl leading-[1.6] text-inverse-on-surface lg:text-5xl">
              مركزٌ يحمل رسالة القرآن في مملكة البحرين
            </h2>
            <p className="mt-5 text-body-lg leading-relaxed text-secondary-fixed-dim/80">
              مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه هو أحد المراكز القرآنية
              العاملة تحت مظلة وزارة العدل والشؤون الإسلامية والأوقاف في مملكة البحرين.
              نسعى إلى تخريج جيل يحفظ كتاب الله ويتقن تلاوته ويعمل بأحكامه، من خلال
              حلقات منظّمة وبرامج تعليمية متدرجة يشرف عليها معلمون مجازون، وبيئة تربوية
              تجمع بين الانضباط والرحمة.
            </p>

            <ul className="mt-7 divide-y divide-white/10">
              {pillars.map((item) =>
              <li key={item} className="flex items-center gap-3 py-3 text-body-md text-inverse-on-surface first:pt-0">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-tertiary-fixed-dim">
                    <StarMark className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              )}
            </ul>

            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-tertiary-container px-8 py-4 text-body-md font-bold text-on-tertiary shadow-xl transition-all hover:scale-[1.02] hover:bg-tertiary hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary-fixed-dim focus-visible:ring-offset-2 focus-visible:ring-offset-inverse-surface">

              انضمّ إلى حلقاتنا
              <ArrowLeftIcon
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                strokeWidth={1.5}
                aria-hidden="true" />

            </a>
          </div>
        </div>
      </div>
    </section>);

}
