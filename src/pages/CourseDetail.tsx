import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, BookOpenIcon, CheckCircle2Icon } from 'lucide-react';
import { courses } from '../data/site';
import { PageHero } from '../components/PageHero';

const highlights = [
'إشراف معلمين مجازين بالسند المتصل',
'متابعة فردية دورية لكل طالب',
'مواد تعليمية ومصحف ضمن البرنامج',
'حلقات أسبوعية منتظمة داخل المركز'];


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

          <div className="mt-6 rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-9">
            <h2 className="font-headline-md text-2xl text-inverse-on-surface">ماذا يشمل هذا المسار؟</h2>
            <ul className="mt-5 space-y-3">
              {highlights.map((item) =>
              <li key={item} className="flex items-start gap-3 text-body-md text-secondary-fixed-dim/85">
                  <CheckCircle2Icon className="mt-0.5 h-5 w-5 shrink-0 text-tertiary-fixed-dim" strokeWidth={1.5} aria-hidden="true" />
                  {item}
                </li>
              )}
            </ul>

            <Link
              to="/#contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-tertiary-container px-8 py-4 text-body-md font-bold text-on-tertiary shadow-xl transition-all hover:scale-[1.02] hover:bg-tertiary hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary-fixed-dim focus-visible:ring-offset-2 focus-visible:ring-offset-inverse-surface sm:w-auto">

              سجّل في هذا المسار
              <ArrowLeftIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </Link>
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
