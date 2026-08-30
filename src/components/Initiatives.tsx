import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, HeartHandshakeIcon } from 'lucide-react';
import { images, tiers } from '../data/site';
import { SectionDivider } from './SectionDivider';

const quickAmounts = [10, 20, 50];

const cardCorner = ['mihrab-corner-start', '', 'mihrab-corner-end'];

export function Initiatives() {
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');

  const selectedAmount = customAmount ? Number(customAmount) || 0 : amount ?? 0;
  const donateHref = `/donate?tier=3${selectedAmount ? `&amount=${selectedAmount}` : ''}`;

  return (
    <section id="invest" className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-9 sm:py-20">
      <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
      <SectionDivider />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="relative inline-block">
          <p className="text-body-lg font-bold text-tertiary-fixed-dim/90">
            وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ
          </p>
          <h2 className="font-display-lg mt-2 text-4xl font-bold leading-[1.35] text-inverse-on-surface sm:text-5xl sm:leading-[1.3] lg:text-6xl">
            استثمر في أعظم مشروع
          </h2>
          <div className="absolute -top-4 -end-12 -z-10 h-24 w-24 rounded-full bg-tertiary-fixed-dim/10 blur-2xl" aria-hidden="true" />
        </div>
        <p className="mx-auto mt-5 max-w-2xl text-body-lg text-secondary-fixed-dim/80">
          كفالة طالب، أو دعم حلقة، أو المساهمة في برامج تعليم القرآن الكريم: صدقةٌ جاريةٌ يمتد
          أثرها ما دام القرآن يُتلى ويُحفَظ. اختر مبادرتك وشاركنا صناعة هذا الأثر المبارك.
        </p>
      </div>

      <div className="relative mx-auto mt-6 max-w-4xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-md bg-white/10 p-4 shadow-2xl backdrop-blur-2xl sm:rounded-2xl sm:p-8">

          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-tertiary-fixed-dim via-primary-fixed to-transparent opacity-50" aria-hidden="true" />
          <div className="relative grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-6">
              <div>
                <h3 className="font-headline-md text-inverse-on-surface">التبرع المباشر</h3>
                <p className="mt-1 text-body-md text-secondary-fixed-dim/80">
                  دعم عام لمشاريع وأنشطة المركز
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {quickAmounts.map((value) =>
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setAmount(value);
                      setCustomAmount('');
                    }}
                    className={[
                    'rounded-lg py-3 text-label-md transition-all duration-300',
                    !customAmount && amount === value ?
                    'border border-tertiary-fixed-dim/30 bg-tertiary/40 text-tertiary-fixed-dim shadow-[0_0_15px_rgba(224,195,135,0.15)]' :
                    'bg-white/10 text-inverse-on-surface backdrop-blur-md hover:bg-tertiary/30'].
                    join(' ')}>

                      {value} د.ب
                    </button>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="number"
                    min={1}
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="مبلغ آخر"
                    className="w-full border-b border-secondary-fixed-dim/30 bg-transparent px-2 py-3 text-body-lg text-inverse-on-surface placeholder:text-secondary-fixed-dim/50 focus:border-tertiary-fixed-dim focus:outline-none" />

                  <span className="pointer-events-none absolute start-2 top-1/2 -translate-y-1/2 text-label-md text-tertiary-fixed-dim">
                    د.ب
                  </span>
                </div>
                <Link
                  to={donateHref}
                  className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-tertiary-container py-4 text-label-md text-on-tertiary shadow-lg transition-all duration-300 hover:bg-tertiary">

                  <span>تبرع الآن</span>
                  <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="relative hidden h-64 overflow-hidden rounded-xl md:block">
              <img
                src={images.donation}
                alt="مصحف مفتوح على حامل خشبي"
                className="absolute inset-0 h-full w-full object-cover opacity-80 [mix-blend-mode:luminosity]" />

              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-lg border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-tertiary/20 text-tertiary-fixed-dim">
                  <HeartHandshakeIcon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-label-md text-inverse-on-surface">مساهماتكم نور</span>
                  <span className="block text-caption text-secondary-fixed-dim/70">يصل أثرها إلى آلاف الطلاب</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-8 max-w-7xl px-4 sm:mt-14 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-end justify-between border-b border-secondary-fixed-dim/20 pb-3 sm:mb-6">
          <h3 className="font-headline-md text-inverse-on-surface">أبواب الكفالة الشهرية</h3>
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
            className={`group relative overflow-hidden bg-white/10 p-3 backdrop-blur-none transition-all duration-500 hover:-translate-y-2 sm:p-4 sm:backdrop-blur-xl ${cardCorner[i] || 'rounded-2xl'}`}>

              <div className="relative mb-3 h-28 overflow-hidden rounded-lg sm:mb-4 sm:h-48 sm:rounded-xl">
                <img
                  src={tier.image}
                  alt={tier.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                <span className="absolute end-2 top-2 rounded-full bg-white/30 px-2 py-0.5 text-sm text-inverse-on-surface backdrop-blur-md sm:end-3 sm:top-3 sm:px-3 sm:py-1 sm:text-caption">
                  كفالة شهرية
                </span>
              </div>
              <h4 className="font-headline-sm mb-1 line-clamp-1 text-lg text-inverse-on-surface sm:mb-2">{tier.title}</h4>
              <p className="mb-3 line-clamp-2 text-base text-secondary-fixed-dim/75 sm:mb-4 sm:text-body-md">
                {tier.details}
              </p>
              <div className="mb-3 flex items-baseline justify-between sm:mb-4">
                <span className="text-lg font-bold text-tertiary-fixed-dim">{tier.price}</span>
                <span className="text-sm text-secondary-fixed-dim/70 sm:text-caption">{tier.unit}</span>
              </div>
              <Link
                to={`/donate?tier=${i}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 py-2.5 text-base text-inverse-on-surface transition-colors hover:bg-primary-container sm:py-3 sm:text-label-md">

                المساهمة
              </Link>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

}
