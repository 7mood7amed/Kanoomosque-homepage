import React, { useEffect } from 'react';
import { GraduationCapIcon } from 'lucide-react';
import { graduates } from '../data/site';
import { PageHero } from '../components/PageHero';
import { StarMark } from '../components/Ornament';

export function GraduatesList() {
  useEffect(() => {
    document.title = 'خريجونا — مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه';
  }, []);

  return (
    <>
      <PageHero
        eyebrow="خريجونا"
        eyebrowIcon={<GraduationCapIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />}
        title="حفظة أتمّوا كتاب الله في مركزنا"
        description="نفخر بخريجينا الذين نالوا الإجازة القرآنية بالسند المتصل، وهم اليوم امتداد لرسالة المركز." />


      <section className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-16 sm:py-24">
        <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {graduates.map((grad) =>
            <li
              key={grad.name}
              className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-5">

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-tertiary-fixed-dim">
                  <StarMark className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-headline-sm text-lg text-inverse-on-surface">{grad.name}</p>
                  <p className="mt-1 text-body-md text-secondary-fixed-dim/75">إجازة بالسند المتصل — {grad.year}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </section>
    </>);

}
