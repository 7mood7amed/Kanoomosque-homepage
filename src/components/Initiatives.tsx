import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { images, tiers } from '../data/site';
import { ParallaxBackground } from './ParallaxBackground';
import { SectionDivider } from './SectionDivider';
import { SectionShadowTop } from './SectionShadowTop';

const cardCorner = ['mihrab-corner-start', '', 'mihrab-corner-end'];

export function Initiatives() {
  return (
    <section id="invest" className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-9 sm:py-20">
      <ParallaxBackground src={images.honor} position="object-[center_30%] sm:object-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/85 via-inverse-surface/40 via-20% to-inverse-surface/50" aria-hidden="true" />
      <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <SectionShadowTop />
      <SectionDivider />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="relative inline-block">
          <p className="text-body-lg font-bold text-tertiary-fixed-dim/90">
            وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ
          </p>
          <h2 className="mt-2 text-4xl font-bold leading-[1.35] text-inverse-on-surface sm:text-5xl sm:leading-[1.3] lg:text-6xl">
            استثمر في أعظم مشروع
          </h2>
          <div className="absolute -top-4 -end-12 -z-10 h-24 w-24 rounded-full bg-tertiary-fixed-dim/10 blur-2xl" aria-hidden="true" />
        </div>
        <p className="mx-auto mt-5 max-w-2xl text-body-lg text-secondary-fixed-dim/80">
          كفالة طالب، أو دعم حلقة، أو المساهمة في برامج تعليم القرآن الكريم: صدقةٌ جاريةٌ يمتد
          أثرها ما دام القرآن يُتلى ويُحفَظ. اختر مبادرتك وشاركنا صناعة هذا الأثر المبارك.
        </p>
      </div>

      <div className="relative mx-auto mt-8 max-w-7xl px-4 sm:mt-14 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-end justify-between border-b border-secondary-fixed-dim/20 pb-3 sm:mb-6">
          <h3 className="text-2xl text-inverse-on-surface sm:text-3xl lg:text-4xl">أبواب الكفالة الشهرية</h3>
          <Link
            to="/donate"
            className="inline-flex items-center gap-1.5 text-label-md text-tertiary-fixed-dim transition-colors hover:text-tertiary-fixed">

            عرض الكل
            <ArrowLeftIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {tiers.map((tier, i) =>
          <motion.article
            key={tier.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
            className={`group relative overflow-hidden bg-white/10 p-3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 sm:p-4 ${cardCorner[i] || 'rounded-2xl'}`}>

              <div className="relative mb-3 h-28 overflow-hidden rounded-lg sm:mb-4 sm:h-48 sm:rounded-xl lg:h-56">
                <img
                  src={tier.image}
                  alt={tier.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                <span className="absolute end-2 top-2 rounded-full bg-white/30 px-2 py-0.5 text-sm text-inverse-on-surface backdrop-blur-md sm:end-3 sm:top-3 sm:px-3.5 sm:py-1.5 sm:text-base">
                  كفالة شهرية
                </span>
              </div>
              <h4 className="mb-1 line-clamp-1 text-lg text-inverse-on-surface sm:mb-2 sm:text-2xl lg:text-3xl">{tier.title}</h4>
              <p className="mb-3 line-clamp-2 text-base text-secondary-fixed-dim/75 sm:mb-4 sm:text-lg lg:text-xl">
                {tier.details}
              </p>
              <div className="mb-3 flex items-baseline justify-between sm:mb-4">
                <span className="text-lg font-bold text-tertiary-fixed-dim sm:text-2xl lg:text-3xl">{tier.price}</span>
                <span className="text-sm text-secondary-fixed-dim/70 sm:text-base lg:text-lg">{tier.unit}</span>
              </div>
              <Link
                to={`/donate?tier=${i}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 py-2.5 text-base text-inverse-on-surface transition-colors hover:bg-primary-container sm:py-3.5 sm:text-xl">

                المساهمة
              </Link>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

}
