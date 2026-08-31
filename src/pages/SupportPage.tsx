import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeadsetIcon, MailIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const channels = [
{
  Icon: PhoneIcon,
  label: 'اتصل بنا',
  value: '+973 1700 0000',
  href: 'tel:+97317000000'
},
{
  Icon: MailIcon,
  label: 'راسلنا',
  value: 'info@kanoo-quran.bh',
  href: 'mailto:info@kanoo-quran.bh'
}];


export function SupportPage() {
  useEffect(() => {
    document.title = 'الدعم الفني — مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه';
  }, []);

  return (
    <>
      <PageHero
        eyebrow="الدعم الفني"
        eyebrowIcon={<HeadsetIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />}
        title="كيف يمكننا مساعدتك؟"
        description="لأي استفسار تقني أو مشكلة تواجهك في استخدام الموقع أو التسجيل، فريقنا جاهز لمساعدتك." />


      <section className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-16 sm:py-24">
        <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map(({ Icon, label, value, href }) =>
            <a
              key={label}
              href={href}
              dir="ltr"
              className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-tertiary-fixed-dim/40 hover:bg-white/10">

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-tertiary-fixed-dim">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span dir="rtl">
                  <span className="block text-body-md text-secondary-fixed-dim/75">{label}</span>
                  <span className="block text-lg font-bold text-inverse-on-surface" dir="ltr">{value}</span>
                </span>
              </a>
            )}
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-9">
            <h2 className="font-headline-md flex items-center gap-2 text-2xl text-inverse-on-surface">
              <MessageCircleIcon className="h-5 w-5 text-tertiary-fixed-dim" strokeWidth={1.5} aria-hidden="true" />
              لا تجد ما تبحث عنه؟
            </h2>
            <p className="mt-3 text-body-md leading-7 text-secondary-fixed-dim/85">
              يمكنك أيضاً الاطلاع على{' '}
              <Link to="/faq" className="font-bold text-tertiary-fixed-dim hover:text-tertiary-container">
                الأسئلة الشائعة
              </Link>{' '}
              أو إرسال رسالتك مباشرة عبر{' '}
              <Link to="/#contact" className="font-bold text-tertiary-fixed-dim hover:text-tertiary-container">
                نموذج التواصل
              </Link>
              ، وسيتواصل معك فريق المركز في أقرب وقت بإذن الله.
            </p>
          </div>
        </div>
      </section>
    </>);

}
