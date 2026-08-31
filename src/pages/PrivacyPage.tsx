import React, { useEffect } from 'react';
import { ShieldCheckIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const sections = [
{
  title: 'المعلومات التي نجمعها',
  body:
  'نجمع فقط المعلومات التي تقدّمها بنفسك عند التسجيل في المسارات التعليمية، أو التبرع، أو التواصل معنا عبر نموذج الموقع: الاسم، البريد الإلكتروني، رقم الهاتف، وأي ملاحظات ترفقها.'
},
{
  title: 'كيفية استخدام المعلومات',
  body:
  'تُستخدم بياناتك للتواصل معك بخصوص طلبك أو تبرعك أو تسجيلك، ومتابعة تقدّمك في الحلقات القرآنية إن كنت طالباً مسجلاً، ولا تُستخدم لأي غرض تسويقي دون إذنك.'
},
{
  title: 'مشاركة المعلومات',
  body:
  'لا يشارك المركز بياناتك مع أي جهة خارجية، باستثناء ما يلزم لإتمام عمليات الدفع الإلكتروني بشكل آمن عبر مزوّدي خدمة الدفع الموثوقين.'
},
{
  title: 'حماية البيانات',
  body:
  'نتّخذ إجراءات معقولة لحماية بياناتك من الوصول أو الاستخدام غير المصرح به، ونحتفظ بها فقط للمدة اللازمة لتقديم خدماتنا.'
},
{
  title: 'حقوقك',
  body:
  'يحق لك في أي وقت طلب الاطلاع على بياناتك المحفوظة لدينا، أو تعديلها، أو طلب حذفها، وذلك بالتواصل مع فريق الدعم الفني.'
}];


export function PrivacyPage() {
  useEffect(() => {
    document.title = 'سياسة الخصوصية — مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه';
  }, []);

  return (
    <>
      <PageHero
        eyebrow="سياسة الخصوصية"
        eyebrowIcon={<ShieldCheckIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />}
        title="خصوصية بياناتك تهمّنا"
        description="نلتزم بحماية معلوماتك الشخصية واستخدامها بمسؤولية ضمن نطاق خدمات المركز فقط." />


      <section className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-16 sm:py-24">
        <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {sections.map((section) =>
            <div key={section.title} className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-8">
                <h2 className="font-headline-sm text-xl text-tertiary-fixed-dim">{section.title}</h2>
                <p className="mt-3 text-body-md leading-7 text-secondary-fixed-dim/85">{section.body}</p>
              </div>
            )}
          </div>
          <p className="mt-6 text-caption text-secondary-fixed-dim/60">آخر تحديث: ٢٠٢٦</p>
        </div>
      </section>
    </>);

}
