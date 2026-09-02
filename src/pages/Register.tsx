import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle2Icon, ClipboardListIcon, PaperclipIcon, UploadCloudIcon } from 'lucide-react';
import { courses } from '../data/site';
import { PageHero } from '../components/PageHero';

type StepId = 1 | 2 | 3;

const steps: { id: StepId; label: string }[] = [
{ id: 1, label: 'البيانات الأساسية' },
{ id: 2, label: 'معلومات الاتصال' },
{ id: 3, label: 'المرفقات' }];


const nationalities = ['البحرين', 'السعودية', 'الكويت', 'قطر', 'الإمارات', 'عُمان', 'أخرى'];

type FormValues = {
  fullName: string;
  idNumber: string;
  gender: 'ذكر' | 'أنثى' | '';
  birthDate: string;
  nationality: string;
  guardianPhone: string;
  altPhone: string;
  email: string;
  address: string;
  city: string;
};

const emptyValues: FormValues = {
  fullName: '',
  idNumber: '',
  gender: '',
  birthDate: '',
  nationality: '',
  guardianPhone: '',
  altPhone: '',
  email: '',
  address: '',
  city: ''
};

const inputClass =
'w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-inverse-on-surface placeholder:text-secondary-fixed-dim/50 transition-colors focus:border-tertiary-fixed-dim focus:outline-none focus:ring-2 focus:ring-tertiary-fixed-dim/20';

const errorClass = 'border-red-400/60 focus:border-red-400 focus:ring-red-400/20';

export function Register() {
  const { id } = useParams();
  const index = Number(id);
  const course = courses[index];

  const [step, setStep] = useState<StepId>(1);
  const [maxReached, setMaxReached] = useState<StepId>(1);
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [photo, setPhoto] = useState<File | null>(null);
  const [idPhoto, setIdPhoto] = useState<File | null>(null);
  const [fileError, setFileError] = useState<Partial<Record<'photo' | 'idPhoto', string>>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = course ?
    `التسجيل — ${course.title} — مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه` :
    'المسار غير موجود — مركز عبدالرحمن كانو';
  }, [course]);

  if (!course) {
    return (
      <PageHero
        eyebrow="استمارة التسجيل"
        title="هذا المسار غير موجود"
        description="تحقق من الرابط، أو تصفّح جميع المسارات التعليمية المتاحة."
        backTo="/courses"
        backLabel="العودة إلى كل المسارات" />);

  }

  const update = (key: keyof FormValues) =>
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validateStep = (s: StepId) => {
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (s === 1) {
      if (!values.fullName.trim()) next.fullName = 'هذا الحقل مطلوب';
      if (!/^\d{9}$/.test(values.idNumber.trim())) next.idNumber = 'أدخل رقم هوية مكوّناً من 9 أرقام';
      if (!values.gender) next.gender = 'هذا الحقل مطلوب';
    }
    if (s === 2) {
      if (!/^\d{8}$/.test(values.guardianPhone.trim())) next.guardianPhone = 'أدخل رقم هاتف مكوّناً من 8 أرقام';
      if (values.altPhone.trim() && !/^\d{8}$/.test(values.altPhone.trim()))
      next.altPhone = 'أدخل رقم هاتف مكوّناً من 8 أرقام';
      if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim()))
      next.email = 'أدخل بريداً إلكترونياً صحيحاً';
      if (!values.address.trim()) next.address = 'هذا الحقل مطلوب';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (!validateStep(step)) return;
    const nextStep = (step + 1) as StepId;
    setStep(nextStep);
    setMaxReached((m) => nextStep > m ? nextStep : m);
  };

  const goTo = (s: StepId) => {
    if (s <= maxReached) setStep(s);
  };

  const pickFile = (kind: 'photo' | 'idPhoto', accept: string[], maxMb: number) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
    if (!accept.includes(ext)) {
      setFileError((fe) => ({ ...fe, [kind]: `الامتدادات المسموحة: ${accept.join('، ')}` }));
      return;
    }
    if (file.size > maxMb * 1024 * 1024) {
      setFileError((fe) => ({ ...fe, [kind]: `الحد الأقصى لحجم الملف ${maxMb}MB` }));
      return;
    }
    setFileError((fe) => ({ ...fe, [kind]: undefined }));
    if (kind === 'photo') setPhoto(file);else
    setIdPhoto(file);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(2)) {
      setStep(2);
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow={`استمارة التسجيل | ${course.title}`}
        eyebrowIcon={<ClipboardListIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />}
        title={`سجّل الآن في مسار ${course.title}`}
        backTo={`/courses/${index}`}
        backLabel="العودة إلى تفاصيل المسار" />


      <section className="relative w-full overflow-hidden border-t border-tertiary-fixed-dim/15 bg-inverse-surface py-16 sm:py-24">
        <div className="pattern-geo absolute inset-0 opacity-[0.08]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

          {course.details?.registration &&
          <div className="rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-9">
              <div className="space-y-4">
                {course.details.registration.intro.map((p) =>
              <p key={p} className="text-body-md leading-7 text-secondary-fixed-dim/85">
                    {p}
                  </p>
              )}
              </div>

              {course.details.registration.info &&
            <dl className="mt-6 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                  {course.details.registration.info.map((item) =>
              <div key={item.label} className="rounded-xl border border-white/15 px-4 py-3">
                      <dt className="text-sm text-tertiary-fixed-dim">{item.label}</dt>
                      <dd className="mt-1 text-body-md text-inverse-on-surface">{item.value}</dd>
                    </div>
              )}
                </dl>
            }
            </div>
          }

          {submitted ?
          <div className="mt-8 rounded-2xl bg-white/10 p-8 text-center shadow-xl backdrop-blur-md sm:p-12">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-tertiary-container/20 text-tertiary-fixed-dim">
                <CheckCircle2Icon className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h2 className="font-headline-md mt-5 text-2xl text-inverse-on-surface">تم استلام طلب التسجيل بنجاح</h2>
              <p className="mx-auto mt-3 max-w-md text-body-md leading-7 text-secondary-fixed-dim/85">
                سيتم مراجعة طلبكم والتواصل معكم لاستكمال إجراءات القبول وتحديد المستوى.
              </p>
              <Link
              to={`/courses/${index}`}
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-tertiary-container px-8 py-4 text-body-md font-bold text-on-tertiary shadow-xl transition-all hover:scale-[1.02] hover:bg-tertiary hover:shadow-2xl">

                العودة إلى تفاصيل المسار
              </Link>
            </div> :


          <form onSubmit={onSubmit} className="mt-8 rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md sm:p-9">
              <ol className="flex items-center justify-between gap-2">
                {steps.map((s, i) =>
              <React.Fragment key={s.id}>
                    <li>
                      <button
                    type="button"
                    onClick={() => goTo(s.id)}
                    disabled={s.id > maxReached}
                    className={[
                    'flex flex-col items-center gap-2 text-center',
                    s.id > maxReached ? 'cursor-not-allowed opacity-40' : ''].
                    join(' ')}>

                        <span
                      className={[
                      'flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-colors sm:h-11 sm:w-11',
                      s.id === step ?
                      'bg-tertiary-container text-on-tertiary' :
                      s.id < step ?
                      'bg-tertiary-fixed-dim/30 text-tertiary-fixed-dim' :
                      'bg-white/10 text-secondary-fixed-dim/70'].
                      join(' ')}>

                          {s.id < step ?
                      <CheckCircle2Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" /> :

                      s.id
                      }
                        </span>
                        <span className="hidden text-xs text-secondary-fixed-dim/80 sm:block sm:text-sm">{s.label}</span>
                      </button>
                    </li>
                    {i < steps.length - 1 &&
                <li className="h-px flex-1 bg-white/15" aria-hidden="true" />
                }
                  </React.Fragment>
              )}
              </ol>

              <div className="mt-8">
                <h2 className="text-xl font-bold text-inverse-on-surface">{steps[step - 1].label}</h2>
                <p className="mt-1 text-sm text-secondary-fixed-dim/70">الخطوة {step} من 3 — يرجى تعبئة الحقول المطلوبة</p>

                {step === 1 &&
              <div className="mt-6 space-y-5">
                    <div>
                      <label htmlFor="fullName" className="mb-2 block text-label-md text-inverse-on-surface">
                        اسم الطالب الكامل <span className="text-red-400">*</span>
                      </label>
                      <input
                    id="fullName"
                    value={values.fullName}
                    onChange={update('fullName')}
                    placeholder="مثال: محمد أحمد علي"
                    className={[inputClass, errors.fullName ? errorClass : ''].join(' ')} />

                      {errors.fullName && <p className="mt-1.5 text-sm text-red-400">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label htmlFor="idNumber" className="mb-2 block text-label-md text-inverse-on-surface">
                        رقم الهوية <span className="text-red-400">*</span>
                      </label>
                      <input
                    id="idNumber"
                    value={values.idNumber}
                    onChange={update('idNumber')}
                    placeholder="1234567890"
                    inputMode="numeric"
                    maxLength={9}
                    className={[inputClass, errors.idNumber ? errorClass : ''].join(' ')} />

                      <p className="mt-1.5 text-xs text-secondary-fixed-dim/60">الحد الأدنى 9 أرقام · الحد الأقصى 9 أرقام</p>
                      {errors.idNumber && <p className="mt-1 text-sm text-red-400">{errors.idNumber}</p>}
                    </div>

                    <div>
                      <span className="mb-2 block text-label-md text-inverse-on-surface">
                        الجنس <span className="text-red-400">*</span>
                      </span>
                      <div className="flex gap-6">
                        {(['ذكر', 'أنثى'] as const).map((g) =>
                    <label key={g} className="flex cursor-pointer items-center gap-2 text-body-md text-secondary-fixed-dim/85">
                            <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={values.gender === g}
                        onChange={update('gender')}
                        className="h-4 w-4 border-white/20 text-tertiary-fixed-dim focus:ring-tertiary-fixed-dim/30" />

                            {g}
                          </label>
                    )}
                      </div>
                      {errors.gender && <p className="mt-1.5 text-sm text-red-400">{errors.gender}</p>}
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="min-w-0">
                        <label htmlFor="birthDate" className="mb-2 block text-label-md text-inverse-on-surface">تاريخ الميلاد</label>
                        <input
                      id="birthDate"
                      type="date"
                      value={values.birthDate}
                      onChange={update('birthDate')}
                      className={`${inputClass} min-w-0`} />

                      </div>
                      <div className="min-w-0">
                        <label htmlFor="nationality" className="mb-2 block text-label-md text-inverse-on-surface">الجنسية</label>
                        <select
                      id="nationality"
                      value={values.nationality}
                      onChange={update('nationality')}
                      className={inputClass}>

                          <option value="">-- اختر --</option>
                          {nationalities.map((n) =>
                      <option key={n} value={n}>{n}</option>
                      )}
                        </select>
                      </div>
                    </div>
                  </div>
              }

                {step === 2 &&
              <div className="mt-6 space-y-5">
                    <div>
                      <label htmlFor="guardianPhone" className="mb-2 block text-label-md text-inverse-on-surface">
                        هاتف ولي الأمر <span className="text-red-400">*</span>
                      </label>
                      <input
                    id="guardianPhone"
                    value={values.guardianPhone}
                    onChange={update('guardianPhone')}
                    placeholder="33xxxxxxx"
                    inputMode="numeric"
                    maxLength={8}
                    className={[inputClass, errors.guardianPhone ? errorClass : ''].join(' ')} />

                      <p className="mt-1.5 text-xs text-secondary-fixed-dim/60">الحد الأدنى 8 أرقام · الحد الأقصى 8 أرقام</p>
                      {errors.guardianPhone && <p className="mt-1 text-sm text-red-400">{errors.guardianPhone}</p>}
                    </div>

                    <div>
                      <label htmlFor="altPhone" className="mb-2 block text-label-md text-inverse-on-surface">هاتف آخر</label>
                      <input
                    id="altPhone"
                    value={values.altPhone}
                    onChange={update('altPhone')}
                    placeholder="33xxxxxxx"
                    inputMode="numeric"
                    maxLength={8}
                    className={[inputClass, errors.altPhone ? errorClass : ''].join(' ')} />

                      {errors.altPhone && <p className="mt-1.5 text-sm text-red-400">{errors.altPhone}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-label-md text-inverse-on-surface">البريد الإلكتروني</label>
                      <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={update('email')}
                    placeholder="student@example.com"
                    className={[inputClass, errors.email ? errorClass : ''].join(' ')} />

                      {errors.email && <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="address" className="mb-2 block text-label-md text-inverse-on-surface">
                        العنوان <span className="text-red-400">*</span>
                      </label>
                      <textarea
                    id="address"
                    rows={3}
                    value={values.address}
                    onChange={update('address')}
                    placeholder="المبنى | مجمع | طريق"
                    className={[inputClass, errors.address ? errorClass : ''].join(' ')} />

                      {errors.address && <p className="mt-1.5 text-sm text-red-400">{errors.address}</p>}
                    </div>

                    <div>
                      <label htmlFor="city" className="mb-2 block text-label-md text-inverse-on-surface">المدينة / المنطقة</label>
                      <input
                    id="city"
                    value={values.city}
                    onChange={update('city')}
                    placeholder="مدينة حمد"
                    className={inputClass} />

                    </div>
                  </div>
              }

                {step === 3 &&
              <div className="mt-6 space-y-5">
                    <FileDropzone
                  label="الصورة الشخصية"
                  hint="الامتدادات المسموحة: jpg, jpeg, png · الحد الأقصى: 2MB"
                  file={photo}
                  error={fileError.photo}
                  onChange={pickFile('photo', ['jpg', 'jpeg', 'png'], 2)} />

                    <FileDropzone
                  label="صورة الهوية"
                  hint="الامتدادات المسموحة: pdf, jpg, jpeg, png · الحد الأقصى: 5MB"
                  file={idPhoto}
                  error={fileError.idPhoto}
                  onChange={pickFile('idPhoto', ['pdf', 'jpg', 'jpeg', 'png'], 5)} />

                  </div>
              }
              </div>

              <div className="mt-9 flex items-center justify-between gap-3 border-t border-white/10 pt-6">
                <span className="hidden items-center gap-1.5 text-xs text-secondary-fixed-dim/60 sm:flex">
                  <PaperclipIcon className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                  البيانات محمية · الخطوة {step} من 3
                </span>
                <div className="flex w-full gap-3 sm:w-auto">
                  {step > 1 &&
                <button
                  type="button"
                  onClick={() => setStep((step - 1) as StepId)}
                  className="flex-1 rounded-xl border border-white/15 px-6 py-3 text-body-md text-inverse-on-surface transition-colors hover:bg-white/10 sm:flex-none">

                      السابق
                    </button>
                }
                  {step < 3 ?
                <button
                  type="button"
                  onClick={goNext}
                  className="flex-1 rounded-xl bg-tertiary-container px-8 py-3 text-body-md font-bold text-on-tertiary shadow-lg transition-all hover:scale-[1.02] hover:bg-tertiary sm:flex-none">

                      التالي
                    </button> :

                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-tertiary-container px-8 py-3 text-body-md font-bold text-on-tertiary shadow-lg transition-all hover:scale-[1.02] hover:bg-tertiary sm:flex-none">

                      إرسال الطلب
                    </button>
                }
                </div>
              </div>
            </form>

          }
        </div>
      </section>
    </>);

}

function FileDropzone({
  label,
  hint,
  file,
  error,
  onChange



}: {label: string;hint: string;file: File | null;error?: string;onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;}) {
  const inputId = `file-${label}`;
  return (
    <div>
      <label htmlFor={inputId} className="mb-2 block text-label-md text-inverse-on-surface">{label}</label>
      <label
        htmlFor={inputId}
        className={[
        'flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed px-4 py-8 text-center transition-colors',
        error ? 'border-red-400/60' : 'border-white/20 hover:border-tertiary-fixed-dim/50'].
        join(' ')}>

        <UploadCloudIcon className="h-6 w-6 text-tertiary-fixed-dim" strokeWidth={1.5} aria-hidden="true" />
        <span className="text-body-md text-secondary-fixed-dim/85">
          {file ? file.name : 'اسحب الملف هنا أو اضغط للاختيار'}
        </span>
        <span className="text-xs text-secondary-fixed-dim/60">{hint}</span>
        <input id={inputId} type="file" onChange={onChange} className="hidden" />
      </label>
      {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
    </div>);

}
