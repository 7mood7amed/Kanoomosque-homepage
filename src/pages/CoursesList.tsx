import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, BookOpenIcon } from 'lucide-react';
import { camps, courses } from '../data/site';
import { PageHero } from '../components/PageHero';

export function CoursesList() {
  useEffect(() => {
    document.title = 'كل المسارات والبرامج — مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه';
  }, []);

  return (
    <>
      <PageHero
        eyebrow="مسارات التعليم"
        eyebrowIcon={<BookOpenIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />}
        title="كل المسارات والبرامج"
        description="تصفّح المسارات التعليمية الدائمة والبرامج المكثفة الموسمية التي يقدّمها المركز." />


      <section className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-16 sm:py-24">
        <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline-md text-2xl text-inverse-on-surface">المسارات التعليمية</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {courses.map((course, i) =>
            <Link
              key={course.title}
              to={`/courses/${i}`}
              className="group rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-tertiary-fixed-dim/40 hover:bg-white/10">

                <span
                className={[
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold text-white',
                course.badgeTone === 'active' ? 'bg-primary' : 'bg-tertiary-container'].
                join(' ')}>

                  {course.badge}
                </span>
                <h3 className="mt-4 text-xl text-inverse-on-surface">{course.title}</h3>
                <p className="mt-2 line-clamp-2 text-body-md text-secondary-fixed-dim/80">{course.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-body-md text-tertiary-fixed-dim">
                  التفاصيل
                  <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </Link>
            )}
          </div>

          <h2 className="font-headline-md mt-14 text-2xl text-inverse-on-surface">الدورات المكثفة والبرامج الموسمية</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {camps.map((camp, i) =>
            <Link
              key={camp.title}
              to={`/camps/${i}`}
              className="group rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-tertiary-fixed-dim/40 hover:bg-white/10">

                <span
                className={[
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold text-inverse-on-surface',
                camp.statusTone === 'active' ? 'bg-primary-fixed-dim/90' : 'bg-tertiary-container'].
                join(' ')}>

                  {camp.status}
                </span>
                <h3 className="mt-4 text-xl text-inverse-on-surface">{camp.title}</h3>
                <p className="mt-2 line-clamp-2 text-body-md text-secondary-fixed-dim/80">{camp.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-body-md text-tertiary-fixed-dim">
                  التفاصيل
                  <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" strokeWidth={1.5} aria-hidden="true" />
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>);

}
