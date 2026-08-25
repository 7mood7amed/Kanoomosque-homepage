import React, { useState } from 'react';
import { CheckCircle2Icon, SendIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

type Fields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const empty: Fields = { name: '', email: '', phone: '', subject: '', message: '' };

const inputClass =
'w-full border-b border-outline-variant bg-transparent px-1 py-3 text-[15px] text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-tertiary focus:outline-none';

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [sent, setSent] = useState(false);

  const update = (key: keyof Fields) => (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setValues(empty);
    window.setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden rounded-lg border border-tertiary-fixed-dim/20 bg-surface-container-lowest/85 py-20 shadow-[0_25px_60px_-30px_rgba(24,29,21,0.35)] backdrop-blur-2xl sm:py-28">
      <div className="pattern-geo-light absolute inset-0 opacity-[0.6]" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="تواصل معنا"
          title="لديك سؤال أو ترغب بالتسجيل؟"
          description="اترك بياناتك وسيتواصل معك فريق المركز في أقرب وقت بإذن الله." />


        <div className="mt-12 rounded-lg border border-outline-variant bg-surface-container p-5 shadow-sm sm:p-9">
            <form onSubmit={onSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-label-md text-on-surface">
                    الاسم الكامل
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={values.name}
                    onChange={update('name')}
                    placeholder="اكتب اسمك"
                    className={inputClass} />

                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-label-md text-on-surface">
                    البريد الإلكتروني
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    dir="ltr"
                    value={values.email}
                    onChange={update('email')}
                    placeholder="name@example.com"
                    className={`${inputClass} text-start`} />

                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-label-md text-on-surface">
                    رقم الهاتف
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    dir="ltr"
                    value={values.phone}
                    onChange={update('phone')}
                    placeholder="+973 0000 0000"
                    className={`${inputClass} text-start`} />

                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-label-md text-on-surface">
                    الموضوع
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={values.subject}
                    onChange={update('subject')}
                    placeholder="موضوع الرسالة"
                    className={inputClass} />

                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="mb-2 block text-label-md text-on-surface">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={values.message}
                  onChange={update('message')}
                  placeholder="اكتب رسالتك هنا…"
                  className={`${inputClass} resize-y`} />

              </div>

              <button
                type="submit"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-tertiary-container px-8 py-4 text-body-md font-bold text-on-tertiary shadow-xl transition-all hover:scale-[1.02] hover:bg-tertiary hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 sm:w-auto">

                <SendIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                إرسال الرسالة
              </button>

              <p aria-live="polite" className="mt-4 min-h-[1.5rem] text-body-md">
                {sent &&
                <span className="inline-flex items-center gap-2 font-bold text-primary">
                    <CheckCircle2Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    تم استلام رسالتك، سنتواصل معك قريباً بإذن الله.
                  </span>
                }
              </p>
            </form>
        </div>
      </div>
    </section>);

}
