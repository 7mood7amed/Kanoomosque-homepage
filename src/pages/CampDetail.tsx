import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, CalendarDaysIcon, CheckCircle2Icon, SparklesIcon } from 'lucide-react';
import { camps } from '../data/site';
import { PageHero } from '../components/PageHero';

export function CampDetail() {
  const { id } = useParams();
  const index = Number(id);
  const camp = camps[index];

  useEffect(() => {
    document.title = camp ?
    `${camp.title} — مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه` :
    'البرنامج غير موجود — مركز عبدالرحمن كانو';
  }, [camp]);

  if (!camp) {
    return (
      <PageHero
        eyebrow="الدورات المكثفة"
        title="هذا البرنامج غير موجود"
        description="تحقق من الرابط، أو تصفّح جميع البرامج والمسابقات المتاحة من الصفحة الرئيسية."
        backTo="/"
        backLabel="العودة إلى الرئيسية" />);

  }

  return (
    <>
      <PageHero
        eyebrow="الدورات المكثفة والبرامج"
        eyebrowIcon={<SparklesIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />}
        title={camp.title}
        description={camp.description}
        backTo="/#camps"
        backLabel="العودة إلى الدورات المكثفة" />


      <section className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-16 sm:py-24">
        <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={[
              'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold text-inverse-on-surface',
              camp.statusTone === 'active' ? 'bg-primary-fixed-dim/90' : 'bg-tertiary-container'].
              join(' ')}>

              {camp.status}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-sm text-secondary-fixed-dim/80">
              <CalendarDaysIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
              {camp.period}
            </span>
            <span className="text-sm text-secondary-fixed-dim/60">البرنامج {camp.index}</span>
          </div>

          {(camp.details?.ageGroup || camp.details?.fee || camp.details?.duration) &&
          <div className="mt-6 flex flex-wrap gap-3">
              {camp.details.duration &&
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-sm text-secondary-fixed-dim/80">
                  {camp.details.duration}
                </span>
            }
              {camp.details.ageGroup &&
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-sm text-secondary-fixed-dim/80">
                  {camp.details.ageGroup}
                </span>
            }
              {camp.details.fee &&
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-sm text-secondary-fixed-dim/80">
                  {camp.details.fee}
                </span>
            }
            </div>
          }

          <div className="mt-6 rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-9">
            <h2 className="font-headline-md text-2xl text-inverse-on-surface">تفاصيل البرنامج</h2>
            <p className="mt-4 text-body-md leading-8 text-secondary-fixed-dim/85">{camp.description}</p>

            {camp.details?.whatsIncluded &&
            <>
                <h3 className="mt-6 text-label-md font-bold text-tertiary-fixed-dim">ماذا يشمل البرنامج؟</h3>
                <ul className="mt-3 space-y-3">
                  {camp.details.whatsIncluded.map((item) =>
                <li key={item} className="flex items-start gap-3 text-body-md text-secondary-fixed-dim/85">
                      <CheckCircle2Icon className="mt-0.5 h-5 w-5 shrink-0 text-tertiary-fixed-dim" strokeWidth={1.5} aria-hidden="true" />
                      {item}
                    </li>
                )}
                </ul>
              </>
            }

            {camp.details?.prerequisites &&
            <>
                <h3 className="mt-6 text-label-md font-bold text-tertiary-fixed-dim">شروط الالتحاق</h3>
                <ul className="mt-3 space-y-3">
                  {camp.details.prerequisites.map((item) =>
                <li key={item} className="flex items-start gap-3 text-body-md text-secondary-fixed-dim/85">
                      <CheckCircle2Icon className="mt-0.5 h-5 w-5 shrink-0 text-tertiary-fixed-dim" strokeWidth={1.5} aria-hidden="true" />
                      {item}
                    </li>
                )}
                </ul>
              </>
            }

            {camp.details?.note &&
            <p className="mt-6 text-body-sm text-secondary-fixed-dim/70">{camp.details.note}</p>
            }

            <Link
              to="/#contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-tertiary-container px-8 py-4 text-body-md font-bold text-on-tertiary shadow-xl transition-all hover:scale-[1.02] hover:bg-tertiary hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary-fixed-dim focus-visible:ring-offset-2 focus-visible:ring-offset-inverse-surface sm:w-auto">

              لديك استفسار حول هذا البرنامج؟ تواصل معنا
              <ArrowLeftIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-label-md font-bold text-tertiary-fixed-dim">برامج أخرى</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {camps.map((c, i) =>
              i !== index &&
              <li key={c.title}>
                  <Link
                  to={`/camps/${i}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-body-md text-inverse-on-surface transition-colors hover:border-tertiary-fixed-dim/40">

                    {c.title}
                  </Link>
                </li>

              )}
            </ul>
          </div>
        </div>
      </section>
    </>);

}
