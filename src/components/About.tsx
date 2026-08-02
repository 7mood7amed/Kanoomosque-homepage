import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CheckIcon } from 'lucide-react';
import { images } from '../data/site';

const pillars = [
'معلمون مجازون بالسند المتصل',
'مناهج متدرجة لكل الأعمار',
'بيئة تربوية آمنة ومحفّزة'];


export function About() {
  return (
    <section id="about" className="w-full bg-pearl py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative">
            
            <div className="border border-navy-900/20 p-3 shadow-soft">
              <div className="arch-full overflow-hidden border border-navy-900/10">
                <img
                  src={images.about}
                  alt="طلاب في حلقة قرآنية داخل المركز"
                  className="h-[340px] w-full object-cover sm:h-[480px]" />
                
              </div>
            </div>
          </motion.div>

          <div>
            <span className="inline-block border-x-2 border-navy-900/25 px-4 py-1 text-xs font-bold tracking-[0.2em] text-navy-700">
              من نحن
            </span>
            <h2 className="font-display mt-4 text-3xl leading-[1.6] text-navy-900 sm:text-4xl">
              مركزٌ يحمل رسالة القرآن في مملكة البحرين
            </h2>
            <p className="mt-5 text-base leading-9 text-navy-500">
              مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه هو أحد المراكز القرآنية
              العاملة تحت مظلة وزارة العدل والشؤون الإسلامية والأوقاف في مملكة البحرين.
              نسعى إلى تخريج جيل يحفظ كتاب الله ويتقن تلاوته ويعمل بأحكامه، من خلال
              حلقات منظّمة وبرامج تعليمية متدرجة يشرف عليها معلمون مجازون، وبيئة تربوية
              تجمع بين الانضباط والرحمة.
            </p>

            <ul className="mt-7 space-y-3">
              {pillars.map((item) =>
              <li key={item} className="flex items-center gap-3 text-[15px] text-navy-800">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-navy-900/25 text-navy-700">
                    <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              )}
            </ul>

            <a
              href="#contact"
              className="group mt-9 inline-flex items-center gap-2 bg-navy-900 px-8 py-4 text-base font-bold text-pearl transition-colors hover:bg-navy-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-700 focus-visible:ring-offset-2">
              
              انضمّ إلى حلقاتنا
              <ArrowLeftIcon
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                aria-hidden="true" />
              
            </a>
          </div>
        </div>
      </div>
    </section>);

}