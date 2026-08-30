import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';
import { images } from '../data/site';

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92vh] w-full items-center overflow-hidden">

      <img
        src={images.hero}
        alt="مئذنة مركز عبدالرحمن كانو عند الغروب"
        className="absolute inset-0 -z-20 h-full w-full object-cover" />

      <div className="absolute inset-0 -z-10 bg-inverse-surface/45" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-inverse-surface/95 via-inverse-surface/35 to-transparent"
        aria-hidden="true" />
      <div className="absolute -top-10 end-1/4 -z-10 h-72 w-72 rounded-full bg-tertiary-fixed-dim/15 blur-3xl" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl">

          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-label-md text-secondary-fixed-dim">
            <span className="h-1.5 w-1.5 rotate-45 bg-tertiary-fixed-dim" aria-hidden="true" />
            التسجيل مفتوح الآن
          </span>

          <p className="mt-8 text-body-lg font-bold text-tertiary-fixed-dim/90">
            إِنَّهُ لَقُرْآنٌ كَرِيمٌ (77) فِي كِتَابٍ مَّكْنُونٍ (78)
          </p>
          <h1 className="font-display-lg mt-3 text-[40px] leading-[1.3] text-inverse-on-surface sm:text-[56px] lg:text-[72px]">
            كن من أهل القرآن…
            <br />
            <span className="text-secondary-fixed-dim">وسجّل بداية رحلتك المباركة</span>
          </h1>

          <p className="mt-6 max-w-2xl text-body-lg leading-relaxed text-secondary-fixed-dim/80">
            مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه في مملكة البحرين، نرافقك
            من أول حرف حتى الإجازة بالسند المتصل، في حلقات منظّمة على يد معلمين مجازين
            وبيئة تربوية هادئة تليق بكتاب الله.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#courses"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-tertiary-container px-8 py-4 text-body-md font-bold text-on-tertiary shadow-xl transition-all hover:scale-[1.02] hover:bg-tertiary hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary-fixed-dim focus-visible:ring-offset-2 focus-visible:ring-offset-inverse-surface">

              اشترك الآن
              <ArrowLeftIcon
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                strokeWidth={1.5}
                aria-hidden="true" />

            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-4 text-body-md font-medium text-inverse-on-surface transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary-fixed-dim focus-visible:ring-offset-2 focus-visible:ring-offset-inverse-surface">

              تعرّف على المركز
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}
