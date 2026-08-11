import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartHandshakeIcon, MinusIcon, PlusIcon } from 'lucide-react';
import { images, tiers } from '../data/site';

const tierAccents = [
{ ring: 'bg-primary text-white', price: 'text-primary' },
{ ring: 'bg-gold text-white', price: 'text-gold-700' },
{ ring: 'bg-blue text-white', price: 'text-blue-700' }];


export function Initiatives() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="invest" className="relative w-full overflow-hidden rounded-lg border border-white/40 bg-white/60 py-20 shadow-[0_25px_60px_-30px_rgba(38,43,33,0.35)] backdrop-blur-2xl sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative">

            <div className="frame-ornate rounded-lg p-3 shadow-xl">
              <div className="arch-full overflow-hidden">
                <img
                  src={images.donation}
                  alt="مصحف مفتوح على حامل خشبي بجانب فانوس نحاسي"
                  className="h-[380px] w-full object-cover sm:h-[520px]" />

              </div>
            </div>
            <div className="absolute -bottom-6 start-6 end-6 rounded-lg border border-navy-900/10 bg-white p-5 shadow-xl sm:start-8 sm:end-auto sm:max-w-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container text-primary">
                  <HeartHandshakeIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-lg text-navy-900">صدقة جارية</p>
                  <p className="text-xs text-navy-500">أجرٌ لا ينقطع بإذن الله</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="pt-8 lg:pt-0">
            <span className="inline-block rounded-full bg-primary-container/40 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-primary">
              المبادرات
            </span>
            <h2 className="font-display mt-4 text-4xl leading-[1.6] text-navy-900 lg:text-5xl">
              استثمر في أعظم مشروع
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-500">
              كفالتك اليوم تعني حلقة تُعقد، ومعلّماً يُصحّح، وطالباً يحمل كتاب الله في
              صدره. اختر باب الكفالة الذي يناسبك وكن شريكاً في الأجر.
            </p>

            <div className="mt-8 divide-y divide-navy-900/10 overflow-hidden rounded-lg border border-navy-900/10 bg-mist shadow-sm">
              {tiers.map((tier, i) => {
                const isOpen = openIndex === i;
                const accent = tierAccents[i % tierAccents.length];
                return (
                  <div key={tier.title}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        aria-controls={`tier-panel-${i}`}
                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start transition-colors hover:bg-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40 sm:px-6">

                        <span className="flex items-center gap-3">
                          <span className={`flex h-8 w-8 items-center justify-center rounded-full ${accent.ring}`}>
                            {isOpen ?
                            <MinusIcon className="h-4 w-4" aria-hidden="true" /> :

                            <PlusIcon className="h-4 w-4" aria-hidden="true" />
                            }
                          </span>
                          <span className="font-display text-lg text-navy-900 sm:text-xl">
                            {tier.title}
                          </span>
                        </span>
                        <span className="shrink-0 text-end">
                          <span className={`block font-display text-lg sm:text-xl ${accent.price}`}>
                            {tier.price}
                          </span>
                          <span className="block text-[11px] text-navy-500">
                            {tier.unit}
                          </span>
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen &&
                      <motion.div
                        id={`tier-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="overflow-hidden">

                          <div className="px-5 pb-6 sm:px-6">
                            <p className="text-[15px] leading-8 text-navy-500">
                              {tier.details}
                            </p>
                            <Link
                            to={`/donate?tier=${i}`}
                            className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-navy-700 hover:shadow-lg">

                              تبرّع الآن
                            </Link>
                          </div>
                        </motion.div>
                      }
                    </AnimatePresence>
                  </div>);

              })}
            </div>
          </div>
        </div>
      </div>
    </section>);

}
