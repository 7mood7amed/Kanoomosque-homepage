import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, InfoIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { StarMark } from '../components/Ornament';

const pillars = [
'معلمون مجازون بالسند المتصل',
'مناهج متدرجة لكل الأعمار',
'بيئة تربوية آمنة ومحفّزة'];


export function AboutPage() {
  useEffect(() => {
    document.title = 'عن المركز — مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه';
  }, []);

  return (
    <>
      <PageHero
        eyebrow="من نحن"
        eyebrowIcon={<InfoIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />}
        title="مركزٌ يحمل رسالة القرآن في مملكة البحرين" />


      <section className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-16 sm:py-24">
        <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-9">
            <p className="text-body-lg leading-relaxed text-secondary-fixed-dim/85">
              مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه هو أحد المراكز القرآنية
              العاملة تحت مظلة وزارة العدل والشؤون الإسلامية والأوقاف في مملكة البحرين.
              نسعى إلى تخريج جيل يحفظ كتاب الله ويتقن تلاوته ويعمل بأحكامه، من خلال
              حلقات منظّمة وبرامج تعليمية متدرجة يشرف عليها معلمون مجازون، وبيئة تربوية
              تجمع بين الانضباط والرحمة.
            </p>
            <p className="mt-5 text-body-lg leading-relaxed text-secondary-fixed-dim/85">
              منذ تأسيسه، حرص المركز على أن يكون بيتاً ثانياً لطلابه، يجمع بين تعليم
              القرآن الكريم حفظاً وتجويداً، وتخريج حفظة مجازين بالسند المتصل، إلى جانب
              أنشطة ومسابقات موسمية تعزز الهمّة وتشجع الاستمرار.
            </p>

            <ul className="mt-7 divide-y divide-white/10">
              {pillars.map((item) =>
              <li key={item} className="flex items-center gap-3 py-3 text-body-md text-inverse-on-surface first:pt-0">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-tertiary-fixed-dim">
                    <StarMark className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              )}
            </ul>

            <Link
              to="/#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-tertiary-container px-8 py-4 text-body-md font-bold text-on-tertiary shadow-xl transition-all hover:scale-[1.02] hover:bg-tertiary hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary-fixed-dim focus-visible:ring-offset-2 focus-visible:ring-offset-inverse-surface">

              انضمّ إلى حلقاتنا
              <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>);

}
