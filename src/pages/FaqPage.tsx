import React, { useEffect } from 'react';
import { ChevronDownIcon, HelpCircleIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const faqs = [
{
  q: 'كيف يمكنني تسجيل ابني أو ابنتي في إحدى الحلقات؟',
  a: 'يمكنك التسجيل عبر نموذج التواصل في الصفحة الرئيسية، أو زيارة المركز مباشرة، وسيتواصل معك فريقنا لإتمام إجراءات التسجيل.'
},
{
  q: 'هل يوجد رسوم للالتحاق بالحلقات القرآنية؟',
  a: 'تُقدَّم أغلب الحلقات القرآنية الأساسية دون مقابل، وتعتمد استمراريتها على تبرعات الداعمين عبر صفحة التبرع.'
},
{
  q: 'ما الفئات العمرية التي يستقبلها المركز؟',
  a: 'يستقبل المركز الطلاب من مختلف الأعمار، وتُصنَّف الحلقات بحسب العمر والمستوى لضمان أفضل استفادة لكل طالب.'
},
{
  q: 'كيف أحصل على إجازة قرآنية بالسند المتصل؟',
  a: 'بعد إتمام الحفظ ومراجعته أمام معلّم مجاز واجتياز الاختبار المطلوب، يُمنح الطالب إجازة قرآنية موثّقة بالسند المتصل.'
},
{
  q: 'كيف يمكنني التبرع لدعم المركز؟',
  a: 'يمكنك زيارة صفحة التبرّع واختيار باب الصدقة الجارية المناسب، وتحديد المبلغ وطريقة الدفع التي تفضّلها.'
}];


export function FaqPage() {
  useEffect(() => {
    document.title = 'الأسئلة الشائعة — مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه';
  }, []);

  return (
    <>
      <PageHero
        eyebrow="الأسئلة الشائعة"
        eyebrowIcon={<HelpCircleIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />}
        title="أسئلة يتكرر طرحها"
        description="إجابات سريعة عن أكثر الأسئلة شيوعاً حول التسجيل والحلقات والتبرع." />


      <section className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-16 sm:py-24">
        <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((item) =>
            <details
              key={item.q}
              className="group rounded-2xl bg-white/10 p-5 shadow-sm backdrop-blur-md sm:p-6">

                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-body-lg font-bold text-inverse-on-surface">
                  {item.q}
                  <ChevronDownIcon
                  className="h-5 w-5 shrink-0 text-tertiary-fixed-dim transition-transform group-open:rotate-180"
                  strokeWidth={1.5}
                  aria-hidden="true" />

                </summary>
                <p className="mt-3 text-body-md leading-7 text-secondary-fixed-dim/85">{item.a}</p>
              </details>
            )}
          </div>
        </div>
      </section>
    </>);

}
