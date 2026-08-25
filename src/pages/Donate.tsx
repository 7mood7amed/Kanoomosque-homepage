import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import {
  ArrowRightIcon,
  BanknoteIcon,
  Building2Icon,
  CheckCircle2Icon,
  CreditCardIcon,
  GraduationCapIcon,
  HeartHandshakeIcon,
  LandmarkIcon,
  QrCodeIcon,
  RepeatIcon,
  SparkleIcon,
  UserIcon,
  UsersIcon } from
'lucide-react';
import { Ornament } from '../components/Ornament';
import { images, tiers } from '../data/site';

const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
const toArabicNumber = (n: number) =>
String(n).replace(/[0-9]/g, (d) => arabicDigits[Number(d)]);

const categoryIcons = [UserIcon, GraduationCapIcon, UsersIcon];
const categoryBaseAmounts = [30, 50, 100];

const categories = [
...tiers.map((tier, i) => ({
  ...tier,
  icon: categoryIcons[i],
  baseAmount: categoryBaseAmounts[i]
})),
{
  title: 'تبرع عام لأنشطة المركز',
  price: 'مبلغ حر',
  unit: '',
  details:
  'يوجَّه تبرعك إلى أكثر احتياجات المركز إلحاحاً: من مسابقات وأنشطة قرآنية إلى صيانة القاعات والمستلزمات التعليمية.',
  icon: Building2Icon,
  baseAmount: 10
}];

const paymentMethods = [
{ id: 'card', label: 'بطاقة ائتمان', icon: CreditCardIcon },
{ id: 'bank', label: 'تحويل بنكي', icon: LandmarkIcon },
{ id: 'benefit', label: 'بنفت باي BenefitPay', icon: QrCodeIcon },
{ id: 'cash', label: 'نقداً في المركز', icon: BanknoteIcon }] as
const;

const frequencies = [
{ id: 'monthly', label: 'تبرع شهري متكرر', icon: RepeatIcon },
{ id: 'once', label: 'تبرع لمرة واحدة', icon: SparkleIcon }] as
const;

type Donor = {
  name: string;
  email: string;
  phone: string;
  note: string;
};

const emptyDonor: Donor = { name: '', email: '', phone: '', note: '' };

const inputClass =
'w-full rounded-lg border border-outline-variant bg-surface-container-low px-4 py-3 text-[15px] text-on-surface placeholder:text-on-surface-variant/50 transition-colors focus:border-tertiary focus:outline-none focus:ring-2 focus:ring-tertiary/20';

export function Donate() {
  const [searchParams] = useSearchParams();

  const initialIndex = useMemo(() => {
    const raw = Number(searchParams.get('tier'));
    return Number.isInteger(raw) && raw >= 0 && raw < categories.length ? raw : 0;
  }, [searchParams]);

  const initialAmount = useMemo(() => {
    const raw = Number(searchParams.get('amount'));
    return Number.isFinite(raw) && raw > 0 ? raw : null;
  }, [searchParams]);

  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [frequency, setFrequency] = useState<(typeof frequencies)[number]['id']>('monthly');
  const [amount, setAmount] = useState(initialAmount ?? categories[initialIndex].baseAmount);
  const [customOpen, setCustomOpen] = useState(Boolean(initialAmount));
  const [customAmount, setCustomAmount] = useState(initialAmount ? String(initialAmount) : '');
  const [paymentMethod, setPaymentMethod] = useState<(typeof paymentMethods)[number]['id']>('card');
  const [donor, setDonor] = useState<Donor>(emptyDonor);
  const [submitted, setSubmitted] = useState(false);

  const donationRef = useMemo(
    () => `KQ-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    []
  );

  useEffect(() => {
    document.title = 'تبرّع — مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه';
  }, []);

  const selectedCategory = categories[selectedIndex];

  const selectCategory = (i: number) => {
    setSelectedIndex(i);
    setAmount(categories[i].baseAmount);
    setCustomOpen(false);
    setCustomAmount('');
  };

  const presetAmounts = useMemo(() => {
    const base = selectedCategory.baseAmount;
    return [base, base * 2, base * 4];
  }, [selectedCategory]);

  const updateDonor = (key: keyof Donor) => (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  setDonor((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setDonor(emptyDonor);
  };

  const finalAmount = customOpen ? Number(customAmount) || 0 : amount;

  const frequencyLabel = frequency === 'monthly' ? 'شهرياً' : 'مرة واحدة';

  const benefitPayPayload = [
  'بنفت باي — مركز عبدالرحمن كانو',
  `الفئة: ${selectedCategory.title}`,
  `التكرار: ${frequencyLabel}`,
  `المبلغ: ${finalAmount} BHD`,
  `المرجع: ${donationRef}`].
  join('\n');

  return (
    <>
      <section className="relative w-full overflow-hidden bg-inverse-surface pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="pattern-geo absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-body-md text-secondary-fixed-dim transition-colors hover:text-inverse-on-surface">

            <ArrowRightIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            العودة إلى الرئيسية
          </Link>

          <span className="mt-8 inline-block rounded-full bg-white/10 px-4 py-1.5 text-label-md tracking-[0.15em] text-tertiary-fixed-dim">
            تبرّع
          </span>
          <h1 className="font-display-lg mt-4 text-4xl leading-[1.6] text-inverse-on-surface lg:text-5xl">
            كن شريكاً في الأجر
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-body-lg leading-relaxed text-secondary-fixed-dim/80">
            اختر باب الصدقة الجارية الذي يناسبك، وحدد المبلغ، وأتمم تبرعك في دقائق. كل
            مساهمة منك تفتح باباً لطالب أو معلّم أو حلقة قرآنية كاملة.
          </p>
          <div className="mt-6 flex justify-center">
            <Ornament tone="dark" />
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col px-4 py-12 sm:px-8 sm:py-20 lg:px-12">
      <section className="relative w-full overflow-hidden rounded-lg border border-tertiary-fixed-dim/20 bg-surface-container-lowest/85 py-16 shadow-[0_25px_60px_-30px_rgba(24,29,21,0.35)] backdrop-blur-2xl sm:py-24">
        <div className="pattern-geo-light absolute inset-0 opacity-[0.6]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <div>
                <span className="text-label-md font-bold text-tertiary">الخطوة ١</span>
                <h2 className="font-headline-md mt-2 text-2xl text-on-surface">اختر باب الكفالة</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {categories.map((category, i) => {
                    const isSelected = i === selectedIndex;
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.title}
                        type="button"
                        onClick={() => selectCategory(i)}
                        aria-pressed={isSelected}
                        className={[
                        'rounded-2xl border-2 p-5 text-start transition-all',
                        isSelected ?
                        'border-tertiary bg-tertiary-container/15 shadow-lg' :
                        'border-outline-variant bg-surface-container-lowest hover:border-tertiary/40 hover:shadow-md'].
                        join(' ')}>

                        <span
                          className={[
                          'flex h-11 w-11 items-center justify-center rounded-full',
                          isSelected ? 'bg-tertiary text-white' : 'bg-surface-variant text-tertiary'].
                          join(' ')}>

                          <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                        </span>
                        <p className="font-headline-sm mt-4 text-lg text-on-surface">
                          {category.title}
                        </p>
                        <p className="mt-1 text-caption text-on-surface-variant">
                          {category.unit ? `${category.price} ${category.unit}` : category.price}
                        </p>
                      </button>);

                  })}
                </div>
                <p className="mt-4 text-body-md leading-7 text-on-surface-variant">
                  {selectedCategory.details}
                </p>
              </div>

              <div className="mt-10">
                <span className="text-label-md font-bold text-tertiary">الخطوة ٢</span>
                <h2 className="font-headline-md mt-2 text-2xl text-on-surface">نوع التبرع</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {frequencies.map(({ id, label, icon: Icon }) =>
                  <button
                    key={id}
                    type="button"
                    onClick={() => setFrequency(id)}
                    aria-pressed={frequency === id}
                    className={[
                    'inline-flex items-center gap-2 rounded-full px-6 py-3 text-label-md transition-colors',
                    frequency === id ?
                    'bg-tertiary-container text-on-tertiary shadow-md' :
                    'border border-outline-variant bg-surface-container-lowest text-on-surface hover:border-tertiary/40'].
                    join(' ')}>

                      <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                      {label}
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-10">
                <span className="text-label-md font-bold text-tertiary">الخطوة ٣</span>
                <h2 className="font-headline-md mt-2 text-2xl text-on-surface">حدد مبلغ التبرع</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {presetAmounts.map((value) =>
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setAmount(value);
                      setCustomOpen(false);
                    }}
                    className={[
                    'rounded-full px-6 py-3 text-label-md transition-colors',
                    !customOpen && amount === value ?
                    'bg-tertiary-container text-on-tertiary shadow-md' :
                    'border border-outline-variant bg-surface-container-lowest text-on-surface hover:border-tertiary/40'].
                    join(' ')}>

                      {toArabicNumber(value)} د.ب
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setCustomOpen(true)}
                    className={[
                    'rounded-full px-6 py-3 text-label-md transition-colors',
                    customOpen ?
                    'bg-tertiary-container text-on-tertiary shadow-md' :
                    'border border-outline-variant bg-surface-container-lowest text-on-surface hover:border-tertiary/40'].
                    join(' ')}>

                    مبلغ آخر
                  </button>
                </div>
                {customOpen &&
                <div className="mt-4 max-w-xs">
                    <label htmlFor="customAmount" className="mb-2 block text-label-md text-on-surface">
                      المبلغ (د.ب)
                    </label>
                    <input
                    id="customAmount"
                    type="number"
                    min={1}
                    inputMode="decimal"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="اكتب المبلغ"
                    className={inputClass} />

                  </div>
                }
              </div>

              <form onSubmit={onSubmit} className="mt-10">
                <span className="text-label-md font-bold text-tertiary">الخطوة ٤</span>
                <h2 className="font-headline-md mt-2 text-2xl text-on-surface">بيانات المتبرع</h2>

                <div className="mt-6 rounded-2xl bg-surface-container-lowest p-5 shadow-xl sm:p-7">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="donorName" className="mb-2 block text-label-md text-on-surface">
                        الاسم الكامل
                      </label>
                      <input
                        id="donorName"
                        type="text"
                        required
                        value={donor.name}
                        onChange={updateDonor('name')}
                        placeholder="اكتب اسمك"
                        className={inputClass} />

                    </div>
                    <div>
                      <label htmlFor="donorEmail" className="mb-2 block text-label-md text-on-surface">
                        البريد الإلكتروني
                      </label>
                      <input
                        id="donorEmail"
                        type="email"
                        required
                        dir="ltr"
                        value={donor.email}
                        onChange={updateDonor('email')}
                        placeholder="name@example.com"
                        className={`${inputClass} text-start`} />

                    </div>
                    <div>
                      <label htmlFor="donorPhone" className="mb-2 block text-label-md text-on-surface">
                        رقم الهاتف
                      </label>
                      <input
                        id="donorPhone"
                        type="tel"
                        dir="ltr"
                        value={donor.phone}
                        onChange={updateDonor('phone')}
                        placeholder="+973 0000 0000"
                        className={`${inputClass} text-start`} />

                    </div>
                    <div>
                      <span className="mb-2 block text-label-md text-on-surface">طريقة الدفع</span>
                      <div className="flex flex-wrap gap-2">
                        {paymentMethods.map(({ id, label, icon: Icon }) =>
                        <button
                          key={id}
                          type="button"
                          onClick={() => setPaymentMethod(id)}
                          className={[
                          'inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-body-md transition-colors',
                          paymentMethod === id ?
                          'border-tertiary bg-tertiary-container/15 text-tertiary' :
                          'border-outline-variant text-on-surface-variant hover:border-tertiary/40'].
                          join(' ')}>

                            <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                            {label}
                          </button>
                        )}
                      </div>
                      {paymentMethod === 'benefit' &&
                      <p className="mt-2 text-caption text-on-surface-variant">
                          خدمة بنفت باي متاحة داخل مملكة البحرين فقط
                        </p>
                      }
                    </div>
                  </div>

                  {paymentMethod === 'benefit' &&
                  <div className="mt-6 rounded-2xl border border-outline-variant bg-surface-container-low p-6 text-center">
                      <p className="text-label-md text-on-surface">
                        امسح الرمز عبر تطبيق بنفت باي لإتمام الدفع
                      </p>
                      <div className="mx-auto mt-4 w-fit rounded-xl bg-white p-4 shadow-inner">
                        <QRCodeSVG value={benefitPayPayload} size={168} />
                      </div>
                      <p className="font-headline-sm mt-4 text-2xl text-on-surface">
                        {toArabicNumber(finalAmount)} د.ب
                      </p>
                      <p className="mt-1 text-caption text-on-surface-variant">
                        {selectedCategory.title} · {frequencyLabel} · مرجع {donationRef}
                      </p>
                      <p className="mt-3 text-[11px] leading-5 text-on-surface-variant/70">
                        * رمز تجريبي يعرض تفاصيل تبرعك، وسيُربط ببوابة بنفت باي الرسمية عند
                        التفعيل الكامل للدفع الإلكتروني.
                      </p>
                    </div>
                  }

                  <div className="mt-5">
                    <label htmlFor="donorNote" className="mb-2 block text-label-md text-on-surface">
                      ملاحظات (اختياري)
                    </label>
                    <textarea
                      id="donorNote"
                      rows={3}
                      value={donor.note}
                      onChange={updateDonor('note')}
                      placeholder="مثال: تبرع باسم..."
                      className={`${inputClass} resize-y`} />

                  </div>

                  <button
                    type="submit"
                    disabled={finalAmount <= 0}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-tertiary-container px-8 py-4 text-body-md font-bold text-on-tertiary shadow-xl transition-all hover:scale-[1.02] hover:bg-tertiary hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">

                    <HeartHandshakeIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    {paymentMethod === 'benefit' ?
                    'تأكيد إتمام الدفع عبر بنفت باي' :
                    `تأكيد التبرّع — ${toArabicNumber(finalAmount)} د.ب`}
                  </button>

                  <p aria-live="polite" className="mt-4 min-h-[1.5rem] text-body-md">
                    {submitted &&
                    <span className="inline-flex items-center gap-2 font-bold text-primary">
                        <CheckCircle2Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                        جزاك الله خيراً، تم استلام تبرعك وسنتواصل معك لإتمام العملية بإذن الله.
                      </span>
                    }
                  </p>
                </div>
              </form>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="lg:sticky lg:top-28">

                <div className="frame-ornate rounded-[32px] bg-surface-container-lowest p-3 shadow-2xl">
                  <div className="arch-full overflow-hidden">
                    <img
                      src={images.donation}
                      alt="مصحف مفتوح على حامل خشبي بجانب فانوس نحاسي"
                      className="h-52 w-full object-cover" />

                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-inverse-surface p-6 text-inverse-on-surface shadow-xl">
                  <p className="text-label-md tracking-[0.15em] text-tertiary-fixed-dim">
                    ملخص التبرع
                  </p>
                  <div className="mt-4 space-y-3 text-body-md">
                    <div className="flex items-center justify-between">
                      <span className="text-secondary-fixed-dim/70">الفئة</span>
                      <span className="font-headline-sm text-inverse-on-surface">{selectedCategory.title}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary-fixed-dim/70">التكرار</span>
                      <span className="text-inverse-on-surface">{frequencyLabel}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/10 pt-3">
                      <span className="text-secondary-fixed-dim/70">المبلغ</span>
                      <span className="font-headline-sm text-lg text-inverse-on-surface">
                        {toArabicNumber(finalAmount)} د.ب
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>);

}
