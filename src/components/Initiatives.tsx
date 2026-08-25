import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon, HeartHandshakeIcon } from 'lucide-react';
import { tiers } from '../data/site';

export function Initiatives() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 'start' | 'end') => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * (direction === 'end' ? 1 : -1);
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section id="invest" className="relative w-full overflow-hidden rounded-lg bg-navy-800 py-16 shadow-[0_25px_60px_-30px_rgba(38,43,33,0.55)] sm:py-20">
      <div className="pattern-geo absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-2">

            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-silver-400">
              اختر مساهمتك القرآنية
              <span className="h-px w-8 bg-silver-400/40" aria-hidden="true" />
              <HeartHandshakeIcon className="h-4 w-4" aria-hidden="true" />
            </span>
            <h2 className="font-display mt-4 text-4xl leading-[1.6] text-pearl lg:text-5xl">
              استثمر في أعظم مشروع
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-silver-200/75">
              كفالة طالب، أو دعم حلقة، أو المساهمة في برامج تعليم القرآن الكريم: صدقةٌ جاريةٌ
              يمتد أثرها ما دام القرآن يُتلى ويُحفَظ. اختر مبادرتك وشاركنا صناعة هذا الأثر
              المبارك.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollByCard('start')}
                aria-label="السابق"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-pearl transition-colors hover:bg-white/10">

                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard('end')}
                aria-label="التالي"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-pearl transition-colors hover:bg-white/10">

                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-3">

            <div
              ref={scrollerRef}
              className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2">

              {tiers.map((tier, i) =>
              <article
                key={tier.title}
                className="w-[260px] shrink-0 snap-start overflow-hidden rounded-2xl bg-pearl shadow-xl sm:w-[280px]">

                  <div className="relative h-64 overflow-hidden">
                    <span className="absolute start-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 font-display text-sm text-navy-900 shadow">
                      {i + 1}
                    </span>
                    <img
                      src={tier.image}
                      alt={tier.title}
                      className="h-full w-full object-cover" />

                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-navy-900">{tier.title}</h3>
                    <p className="mt-2 line-clamp-4 text-[13px] leading-7 text-navy-500">
                      {tier.details}
                    </p>
                    <div className="mt-4 flex items-end justify-between border-t border-navy-900/10 pt-4">
                      <div>
                        <span className="font-display block text-2xl text-navy-900">
                          {tier.price.replace(' د.ب', '')} دينار
                        </span>
                        <span className="block text-[11px] text-navy-500">{tier.unit}</span>
                      </div>
                      <Link
                        to={`/donate?tier=${i}`}
                        className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:scale-[1.03] hover:bg-navy-700">

                        تبرّع الآن
                      </Link>
                    </div>
                    <p className="mt-3 text-[11px] text-navy-500/80">
                      السهم الواحد يبدأ بدينار واحد فقط
                    </p>
                  </div>
                </article>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
