import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2Icon, LockKeyholeIcon, LogInIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';

type Fields = {
  identifier: string;
  password: string;
};

const empty: Fields = { identifier: '', password: '' };

const inputClass =
'w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-inverse-on-surface placeholder:text-secondary-fixed-dim/50 transition-colors focus:border-tertiary-fixed-dim focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim/20';

export function Login() {
  const [values, setValues] = useState<Fields>(empty);
  const [remember, setRemember] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'تسجيل الدخول — مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه';
  }, []);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
  setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="تسجيل الدخول"
        eyebrowIcon={<LockKeyholeIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />}
        title="أهلاً بعودتك"
        description="سجّل الدخول لمتابعة حفظك ومراجعاتك، والاطلاع على تقدّمك في الحلقة القرآنية." />

      <section className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-16 sm:py-24">
        <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
        <div className="relative mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-9">

            <div className="space-y-5">
              <div>
                <label htmlFor="identifier" className="mb-2 block text-label-md text-inverse-on-surface">
                  البريد الإلكتروني أو اسم المستخدم
                </label>
                <input
                  id="identifier"
                  name="identifier"
                  type="text"
                  required
                  value={values.identifier}
                  onChange={update('identifier')}
                  placeholder="name@example.com"
                  className={inputClass} />

              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor="password" className="block text-label-md text-inverse-on-surface">
                    كلمة المرور
                  </label>
                  <a href="#" className="text-caption text-tertiary-fixed-dim transition-colors hover:text-tertiary-container">
                    نسيت كلمة المرور؟
                  </a>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={values.password}
                  onChange={update('password')}
                  placeholder="••••••••"
                  className={inputClass} />

              </div>

              <label className="flex cursor-pointer items-center gap-2 text-body-md text-secondary-fixed-dim/80">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-white/20 text-tertiary-fixed-dim focus:ring-tertiary-fixed-dim/30" />

                تذكرني لمدة ٣٠ يوماً
              </label>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-tertiary-container px-8 py-4 text-body-md font-bold text-on-tertiary shadow-xl transition-all hover:scale-[1.02] hover:bg-tertiary hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary-fixed-dim focus-visible:ring-offset-2 focus-visible:ring-offset-inverse-surface">

              <LogInIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              تسجيل الدخول
            </button>

            <p aria-live="polite" className="mt-4 min-h-[1.5rem] text-center text-body-md">
              {submitted &&
              <span className="inline-flex items-center gap-2 font-bold text-tertiary-fixed-dim">
                  <CheckCircle2Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  هذه الخدمة قيد التطوير حالياً، تواصل معنا لتفعيل حسابك.
                </span>
              }
            </p>
          </form>

          <p className="mt-6 text-center text-body-md text-secondary-fixed-dim/80">
            ليس لديك حساب؟{' '}
            <Link to="/#contact" className="font-bold text-tertiary-fixed-dim hover:text-tertiary-container">
              تواصل مع المركز للتسجيل
            </Link>
          </p>
        </div>
      </section>
    </>);

}
