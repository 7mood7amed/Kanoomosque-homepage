import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { images } from '../data/site';
import { Ornament } from './Ornament';

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92vh] w-full items-center overflow-hidden">
      
      <img
        src={images.hero}
        alt="حلقة قرآنية في قاعة المركز عند الغروب"
        className="absolute inset-0 -z-20 h-full w-full object-cover" />
      
      <div className="absolute inset-0 -z-10 bg-navy-950/85" aria-hidden="true" />
      <div className="pattern-geo absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl">
          
          <span className="inline-flex items-center gap-2 border border-silver-400/50 px-5 py-2 text-sm font-bold tracking-wide text-silver-200">
            <span className="h-1.5 w-1.5 rotate-45 bg-silver-200" aria-hidden="true" />
            التسجيل مفتوح الآن
          </span>

          <h1 className="font-display mt-7 text-4xl leading-[1.6] text-pearl sm:text-5xl lg:text-6xl">
            كن من أهل القرآن…
            <br />
            <span className="text-silver-400">وسجّل بداية رحلتك المباركة</span>
          </h1>

          <div className="mt-6">
            <Ornament tone="dark" align="start" />
          </div>

          <p className="mt-6 max-w-2xl text-base leading-9 text-silver-200/80 sm:text-lg">
            مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه في مملكة البحرين، نرافقك
            من أول حرف حتى الإجازة بالسند المتصل، في حلقات منظّمة على يد معلمين مجازين
            وبيئة تربوية هادئة تليق بكتاب الله.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#courses"
              className="group inline-flex items-center justify-center gap-2 bg-pearl px-8 py-4 text-base font-bold text-navy-900 transition-colors hover:bg-silver-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-silver-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950">
              
              اشترك الآن
              <ArrowLeftIcon
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                aria-hidden="true" />
              
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center border border-silver-400/50 px-8 py-4 text-base font-medium text-pearl transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-silver-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950">
              
              تعرّف على المركز
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}