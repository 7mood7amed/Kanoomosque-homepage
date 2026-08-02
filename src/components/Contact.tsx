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
'w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-[15px] text-navy-900 placeholder:text-navy-500/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

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
    <section id="contact" className="w-full border-t border-navy-900/10 bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="تواصل معنا"
          title="لديك سؤال أو ترغب بالتسجيل؟"
          description="اترك بياناتك وسيتواصل معك فريق المركز في أقرب وقت بإذن الله." />
        

        <div className="mt-12 rounded-3xl bg-pearl p-5 shadow-xl sm:p-9">
            <form onSubmit={onSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-navy-900">
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
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-navy-900">
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
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-navy-900">
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
                  <label htmlFor="subject" className="mb-2 block text-sm font-bold text-navy-900">
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

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-navy-900">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={values.message}
                  onChange={update('message')}
                  placeholder="اكتب رسالتك هنا…"
                  className={`${inputClass} resize-y`} />
                
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-pearl shadow-xl transition-all hover:scale-[1.02] hover:bg-primary-light hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-700 focus-visible:ring-offset-2 sm:w-auto">
                
                <SendIcon className="h-4 w-4" aria-hidden="true" />
                إرسال الرسالة
              </button>

              <p aria-live="polite" className="mt-4 min-h-[1.5rem] text-sm">
                {sent &&
                <span className="inline-flex items-center gap-2 font-bold text-navy-700">
                    <CheckCircle2Icon className="h-4 w-4" aria-hidden="true" />
                    تم استلام رسالتك، سنتواصل معك قريباً بإذن الله.
                  </span>
                }
              </p>
            </form>
        </div>
      </div>
    </section>);

}