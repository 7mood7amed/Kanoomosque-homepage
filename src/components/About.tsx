import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { images } from '../data/site';
import { StarMark } from './Ornament';
import { ParallaxBackground } from './ParallaxBackground';

const pillars = [
'معلمون مجازون بالسند المتصل',
'مناهج متدرجة لكل الأعمار',
'بيئة تربوية آمنة ومحفّزة'];


export function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-inverse-surface py-14 sm:py-28">
      <ParallaxBackground src={images.donation} />
      <div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/75 via-inverse-surface/30 via-20% to-inverse-surface/40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
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
                  className="h-[240px] w-full object-cover sm:h-[480px]" />

              </div>
            </div>
          </motion.div>

          <div>
            <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-base font-bold tracking-[0.12em] text-tertiary-fixed-dim sm:px-6 sm:py-2.5 sm:text-xl lg:text-2xl">
              من نحن
            </span>
            <h2 className="text-shadow-photo mt-4 text-4xl font-bold leading-[1.35] tracking-wide text-inverse-on-surface sm:text-5xl sm:leading-[1.3] sm:tracking-wider lg:text-6xl">
              مركزٌ يحمل رسالة القرآن في مملكة البحرين
            </h2>
            <p className="text-shadow-photo mt-5 text-body-lg leading-relaxed text-secondary-fixed-dim/80">
              مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه هو أحد المراكز القرآنية
              العاملة تحت مظلة وزارة العدل والشؤون الإسلامية والأوقاف في مملكة البحرين.
              نسعى إلى تخريج جيل يحفظ كتاب الله ويتقن تلاوته ويعمل بأحكامه، من خلال
              حلقات منظّمة وبرامج تعليمية متدرجة يشرف عليها معلمون مجازون، وبيئة تربوية
              تجمع بين الانضباط والرحمة.
            </p>

            <ul className="mt-7 divide-y divide-white/10">
              {pillars.map((item) =>
              <li key={item} className="text-shadow-photo flex items-center gap-3 py-3 text-body-md text-inverse-on-surface first:pt-0">
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
