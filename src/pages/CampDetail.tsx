import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, BookOpenIcon, CalendarDaysIcon, CheckCircle2Icon, SparklesIcon } from 'lucide-react';
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
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img src={camp.image} alt={camp.title} className="h-56 w-full object-cover sm:h-80" />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
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

          {camp.details?.organizer &&
          <div className="mt-6 space-y-1.5 border-s-2 border-tertiary-fixed-dim/40 ps-4">
              {camp.details.organizer.map((line) =>
            <p key={line} className="text-body-md text-secondary-fixed-dim/85">{line}</p>
            )}
            </div>
          }

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
        </div>

        {camp.details?.levels &&
        <div className="relative mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-headline-md text-2xl text-inverse-on-surface sm:text-3xl">مستويات الدورة</h2>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-tertiary-fixed-dim">
                <BookOpenIcon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
            </div>

            <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-3">
              {camp.details.levels.map((level, i) =>
            <div key={level.title} className="overflow-hidden rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md">
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-tertiary-fixed-dim">
                    {['المستوى الأول', 'المستوى الثاني', 'المستوى الثالث'][i] ?? `المستوى ${i + 1}`}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-inverse-on-surface">{level.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {level.points.map((point) =>
                <li key={point} className="flex items-start gap-2.5 text-body-md text-secondary-fixed-dim/85">
                        <CheckCircle2Icon className="mt-0.5 h-4 w-4 shrink-0 text-tertiary-fixed-dim" strokeWidth={2} aria-hidden="true" />
                        {point}
                      </li>
                )}
                  </ul>
                </div>
            )}
            </div>
          </div>
        }

        <div className="relative mx-auto mt-10 max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-9">
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

            {camp.details?.conditions &&
            <>
                <h3 className="mt-6 text-label-md font-bold text-tertiary-fixed-dim">شروط المسابقة</h3>
                <ol className="mt-3 space-y-3">
                  {camp.details.conditions.map((item, i) =>
                <li key={item} className="flex items-start gap-3 text-body-md text-secondary-fixed-dim/85">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-tertiary-fixed-dim">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                )}
                </ol>
              </>
            }

            {camp.details?.conditionGroups &&
            <>
                <h3 className="mt-6 text-label-md font-bold text-tertiary-fixed-dim">شروط الالتحاق بالدورة</h3>
                {camp.details.conditionGroups.map((group) =>
              <div key={group.title} className="mt-4">
                    <h4 className="text-body-md font-bold text-inverse-on-surface">{group.title}</h4>
                    <ul className="mt-2.5 space-y-2.5">
                      {group.items.map((item) =>
                  <li key={item} className="flex items-start gap-3 text-body-md text-secondary-fixed-dim/85">
                          <CheckCircle2Icon className="mt-0.5 h-5 w-5 shrink-0 text-tertiary-fixed-dim" strokeWidth={1.5} aria-hidden="true" />
                          {item}
                        </li>
                  )}
                    </ul>
                  </div>
              )}
              </>
            }

            {camp.details?.prerequisites &&
            <>
                <h3 className="mt-6 text-label-md font-bold text-tertiary-fixed-dim">شروط التسجيل</h3>
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
