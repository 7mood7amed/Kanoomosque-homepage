import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, BookOpenIcon, CheckCircle2Icon, UsersIcon } from 'lucide-react';
import { courses } from '../data/site';
import { PageHero } from '../components/PageHero';


export function CourseDetail() {
  const { id } = useParams();
  const index = Number(id);
  const course = courses[index];

  useEffect(() => {
    document.title = course ?
    `${course.title} — مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه` :
    'المسار غير موجود — مركز عبدالرحمن كانو';
  }, [course]);

  if (!course) {
    return (
      <PageHero
        eyebrow="مسارات التعليم"
        title="هذا المسار غير موجود"
        description="تحقق من الرابط، أو تصفّح جميع المسارات التعليمية المتاحة."
        backTo="/courses"
        backLabel="العودة إلى كل المسارات" />);

  }

  return (
    <>
      <PageHero
        eyebrow="مسارات التعليم"
        eyebrowIcon={<BookOpenIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />}
        title={course.title}
        description={course.description}
        backTo="/courses"
        backLabel="العودة إلى كل المسارات" />


      <section className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-16 sm:py-24">
        <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span
            className={[
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold text-white',
            course.badgeTone === 'active' ? 'bg-primary' : 'bg-tertiary-container'].
            join(' ')}>

            {course.badge}
          </span>

          {(course.details?.ageGroup || course.details?.fee) &&
          <div className="mt-6 flex flex-wrap gap-3">
              {course.details.ageGroup &&
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-sm text-secondary-fixed-dim/80">
                  {course.details.ageGroup}
                </span>
            }
              {course.details.fee &&
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-sm text-secondary-fixed-dim/80">
                  {course.details.fee}
                </span>
            }
            </div>
          }
        </div>

        {course.details?.levels &&
        <div className="relative mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-headline-md text-2xl text-inverse-on-surface sm:text-3xl">مستويات الدورة</h2>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-tertiary-fixed-dim">
                <BookOpenIcon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
            </div>

            <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-3">
              {course.details.levels.map((level, i) =>
            <div key={level.title} className="overflow-hidden rounded-2xl bg-white/10 shadow-xl backdrop-blur-md">
                  {level.image &&
              <div className="h-48 overflow-hidden sm:h-56">
                      <img src={level.image} alt={level.title} className="h-full w-full object-cover" />
                    </div>
              }
                  <div className="p-6">
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
                </div>
            )}
            </div>
          </div>
        }

        {course.details?.teachers &&
        <div className="relative mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-headline-md text-2xl text-inverse-on-surface sm:text-3xl">تعرّف على معلّمينا</h2>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-tertiary-fixed-dim">
                <UsersIcon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
            </div>

            <ul className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:mt-10 sm:gap-5 lg:grid lg:grid-cols-6 lg:overflow-visible">
              {course.details.teachers.map((teacher, i) =>
            <motion.li
              key={teacher.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
              className="w-44 shrink-0 snap-start sm:w-64 lg:w-auto">

                  <figure className="group rounded-lg bg-white/10 p-2 shadow-sm backdrop-blur-xl transition-colors hover:bg-white/[0.14] sm:rounded-2xl sm:p-2.5">
                    <div className="arch-full relative aspect-[7/10] overflow-hidden">
                      <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                    </div>
                    <figcaption className="px-1 py-3 text-center sm:px-2 sm:py-5">
                      <p className="font-headline-sm line-clamp-1 text-base leading-snug text-inverse-on-surface sm:text-2xl sm:leading-[1.7]">
                        {teacher.name}
                      </p>
                      <p className="mt-1 text-sm text-secondary-fixed-dim/75 sm:mt-1.5 sm:text-lg">معلّم مجاز بالسند المتصل</p>
                    </figcaption>
                  </figure>
                </motion.li>
            )}
            </ul>
          </div>
        }

        <div className="relative mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-9">
            <h2 className="font-headline-md text-2xl text-inverse-on-surface">شروط الالتحاق</h2>
            <ul className="mt-5 space-y-3">
              {(course.details?.prerequisites ?? []).map((item) =>
              <li key={item} className="flex items-start gap-3 text-body-md text-secondary-fixed-dim/85">
                  <CheckCircle2Icon className="mt-0.5 h-5 w-5 shrink-0 text-tertiary-fixed-dim" strokeWidth={1.5} aria-hidden="true" />
                  {item}
                </li>
              )}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={`/register/${index}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-tertiary-container px-8 py-4 text-body-md font-bold text-on-tertiary shadow-xl transition-all hover:scale-[1.02] hover:bg-tertiary hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary-fixed-dim focus-visible:ring-offset-2 focus-visible:ring-offset-inverse-surface sm:flex-none">

                سجّل الآن
                <ArrowLeftIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </Link>
              <Link
                to="/#contact"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 px-8 py-4 text-body-md text-inverse-on-surface transition-colors hover:bg-white/10 sm:flex-none">

                لديك استفسار حول هذا المسار؟ تواصل معنا
              </Link>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-9">
            <div className="grid gap-6 sm:grid-cols-2 sm:items-center sm:gap-8">
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="/طالب صغير.jpeg"
                  alt="طالب يقرأ القرآن الكريم"
                  className="h-40 w-full rounded-xl object-cover sm:h-56" />

                <img
                  src="/نفس الطالب الكبير.jpeg"
                  alt="طالب يحفظ كتاب الله"
                  className="mt-6 h-48 w-full rounded-xl object-cover sm:mt-10 sm:h-64" />

              </div>
              <div>
                <h2 className="font-headline-md text-2xl text-inverse-on-surface sm:text-3xl">كن جزءاً من رحلة طلابنا</h2>
                <p className="mt-3 text-body-md leading-7 text-secondary-fixed-dim/85">
                  انضمّ إلى مجتمعٍ من حفظة كتاب الله تعالى الذين يعيشون رحلة فريدة مع كتاب الله، ضمن بيئة محفّزة ومتابعة دقيقة لكل طالب.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/15 px-2 py-4 text-center">
                    <p className="text-2xl font-bold text-inverse-on-surface sm:text-3xl">٢٠٠</p>
                    <p className="mt-1 text-sm text-secondary-fixed-dim/80">طالباً حالياً</p>
                  </div>
                  <div className="rounded-xl border border-white/15 px-2 py-4 text-center">
                    <p className="text-2xl font-bold text-inverse-on-surface sm:text-3xl">١٨</p>
                    <p className="mt-1 text-sm text-secondary-fixed-dim/80">حلقة نشطة</p>
                  </div>
                  <div className="rounded-xl border border-white/15 px-2 py-4 text-center">
                    <p className="text-2xl font-bold text-inverse-on-surface sm:text-3xl">١١</p>
                    <p className="mt-1 text-sm text-secondary-fixed-dim/80">خريجاً حتى الآن</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-label-md font-bold text-tertiary-fixed-dim">مسارات أخرى</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {courses.map((c, i) =>
              i !== index &&
              <li key={c.title}>
                  <Link
                  to={`/courses/${i}`}
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
