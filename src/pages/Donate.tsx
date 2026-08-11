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
'w-full rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-3 text-[15px] text-navy-900 placeholder:text-navy-500/50 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

export function Donate() {
  const [searchParams] = useSearchParams();

  const initialIndex = useMemo(() => {
    const raw = Number(searchParams.get('tier'));
    return Number.isInteger(raw) && raw >= 0 && raw < categories.length ? raw : 0;
  }, [searchParams]);

  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [frequency, setFrequency] = useState<(typeof frequencies)[number]['id']>('monthly');
  const [amount, setAmount] = useState(categories[initialIndex].baseAmount);
  const [customOpen, setCustomOpen] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
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
      <section className="relative w-full overflow-hidden bg-navy-950 pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="pattern-geo absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-silver-400 transition-colors hover:text-pearl">

            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            العودة إلى الرئيسية
          </Link>

          <span className="mt-8 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-silver-400">
            تبرّع
          </span>
          <h1 className="font-display mt-4 text-4xl leading-[1.6] text-pearl lg:text-5xl">
            كن شريكاً في الأجر
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-silver-200/75">
            اختر باب الصدقة الجارية الذي يناسبك، وحدد المبلغ، وأتمم تبرعك في دقائق. كل
            مساهمة منك تفتح باباً لطالب أو معلّم أو حلقة قرآنية كاملة.
          </p>
          <div className="mt-6 flex justify-center">
            <Ornament tone="dark" />
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col px-4 py-12 sm:px-8 sm:py-20 lg:px-12">
      <section className="relative w-full overflow-hidden rounded-lg border border-white/40 bg-white/60 py-16 shadow-[0_25px_60px_-30px_rgba(38,43,33,0.35)] backdrop-blur-2xl sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <div>
                <span className="text-sm font-bold text-primary">الخطوة ١</span>
                <h2 className="font-display mt-2 text-2xl text-navy-900">اختر باب الكفالة</h2>
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
                        'rounded-3xl border-2 p-5 text-start transition-all',
                        isSelected ?
                        'border-primary bg-primary-container/30 shadow-lg' :
                        'border-outline-variant bg-pearl hover:border-primary/40 hover:shadow-md'].
                        join(' ')}>

                        <span
                          className={[
                          'flex h-11 w-11 items-center justify-center rounded-full',
                          isSelected ? 'bg-primary text-pearl' : 'bg-surface-variant text-primary'].
                          join(' ')}>

                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <p className="font-display mt-4 text-lg text-navy-900">
                          {category.title}
                        </p>
                        <p className="mt-1 text-sm text-navy-500">
                          {category.unit ? `${category.price} ${category.unit}` : category.price}
                        </p>
                      </button>);

                  })}
                </div>
                <p className="mt-4 text-sm leading-7 text-navy-500">
                  {selectedCategory.details}
                </p>
              </div>

              <div className="mt-10">
                <span className="text-sm font-bold text-primary">الخطوة ٢</span>
                <h2 className="font-display mt-2 text-2xl text-navy-900">نوع التبرع</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {frequencies.map(({ id, label, icon: Icon }) =>
                  <button
                    key={id}
                    type="button"
                    onClick={() => setFrequency(id)}
                    aria-pressed={frequency === id}
                    className={[
                    'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors',
                    frequency === id ?
                    'bg-primary text-pearl shadow-md' :
                    'border border-outline-variant bg-pearl text-navy-900 hover:border-primary/40'].
                    join(' ')}>

                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {label}
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-10">
                <span className="text-sm font-bold text-primary">الخطوة ٣</span>
                <h2 className="font-display mt-2 text-2xl text-navy-900">حدد مبلغ التبرع</h2>
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
                    'rounded-full px-6 py-3 text-sm font-bold transition-colors',
                    !customOpen && amount === value ?
                    'bg-primary text-pearl shadow-md' :
                    'border border-outline-variant bg-pearl text-navy-900 hover:border-primary/40'].
                    join(' ')}>

                      {toArabicNumber(value)} د.ب
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setCustomOpen(true)}
                    className={[
                    'rounded-full px-6 py-3 text-sm font-bold transition-colors',
                    customOpen ?
                    'bg-primary text-pearl shadow-md' :
                    'border border-outline-variant bg-pearl text-navy-900 hover:border-primary/40'].
                    join(' ')}>

                    مبلغ آخر
                  </button>
                </div>
                {customOpen &&
                <div className="mt-4 max-w-xs">
                    <label htmlFor="customAmount" className="mb-2 block text-sm font-bold text-navy-900">
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
                <span className="text-sm font-bold text-primary">الخطوة ٤</span>
                <h2 className="font-display mt-2 text-2xl text-navy-900">بيانات المتبرع</h2>

                <div className="mt-6 rounded-3xl bg-pearl p-5 shadow-xl sm:p-7">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="donorName" className="mb-2 block text-sm font-bold text-navy-900">
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
                      <label htmlFor="donorEmail" className="mb-2 block text-sm font-bold text-navy-900">
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
                      <label htmlFor="donorPhone" className="mb-2 block text-sm font-bold text-navy-900">
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
                      <span className="mb-2 block text-sm font-bold text-navy-900">طريقة الدفع</span>
                      <div className="flex flex-wrap gap-2">
                        {paymentMethods.map(({ id, label, icon: Icon }) =>
                        <button
                          key={id}
                          type="button"
                          onClick={() => setPaymentMethod(id)}
                          className={[
                          'inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors',
                          paymentMethod === id ?
                          'border-primary bg-primary-container/30 text-primary' :
                          'border-outline-variant text-navy-500 hover:border-primary/40'].
                          join(' ')}>

                            <Icon className="h-4 w-4" aria-hidden="true" />
                            {label}
                          </button>
                        )}
                      </div>
                      {paymentMethod === 'benefit' &&
                      <p className="mt-2 text-xs text-navy-500">
                          خدمة بنفت باي متاحة داخل مملكة البحرين فقط
                        </p>
                      }
                    </div>
                  </div>

                  {paymentMethod === 'benefit' &&
                  <div className="mt-6 rounded-3xl border border-outline-variant bg-surface-container-low p-6 text-center">
                      <p className="text-sm font-bold text-navy-900">
                        امسح الرمز عبر تطبيق بنفت باي لإتمام الدفع
                      </p>
                      <div className="mx-auto mt-4 w-fit rounded-2xl bg-white p-4 shadow-inner">
                        <QRCodeSVG value={benefitPayPayload} size={168} />
                      </div>
                      <p className="font-display mt-4 text-2xl text-navy-900">
                        {toArabicNumber(finalAmount)} د.ب
                      </p>
                      <p className="mt-1 text-xs text-navy-500">
                        {selectedCategory.title} · {frequencyLabel} · مرجع {donationRef}
                      </p>
                      <p className="mt-3 text-[11px] leading-5 text-navy-500/70">
                        * رمز تجريبي يعرض تفاصيل تبرعك، وسيُربط ببوابة بنفت باي الرسمية عند
                        التفعيل الكامل للدفع الإلكتروني.
                      </p>
                    </div>
                  }

                  <div className="mt-5">
                    <label htmlFor="donorNote" className="mb-2 block text-sm font-bold text-navy-900">
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
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-pearl shadow-xl transition-all hover:scale-[1.02] hover:bg-primary-light hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">

                    <HeartHandshakeIcon className="h-4 w-4" aria-hidden="true" />
                    {paymentMethod === 'benefit' ?
                    'تأكيد إتمام الدفع عبر بنفت باي' :
                    `تأكيد التبرّع — ${toArabicNumber(finalAmount)} د.ب`}
                  </button>

                  <p aria-live="polite" className="mt-4 min-h-[1.5rem] text-sm">
                    {submitted &&
                    <span className="inline-flex items-center gap-2 font-bold text-navy-700">
                        <CheckCircle2Icon className="h-4 w-4" aria-hidden="true" />
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

                <div className="frame-ornate rounded-[32px] bg-pearl p-3 shadow-2xl">
                  <div className="arch-full overflow-hidden">
                    <img
                      src={images.donation}
                      alt="مصحف مفتوح على حامل خشبي بجانب فانوس نحاسي"
                      className="h-52 w-full object-cover" />

                  </div>
                </div>

                <div className="mt-5 rounded-3xl bg-navy-950 p-6 text-pearl shadow-xl">
                  <p className="text-xs font-bold tracking-[0.2em] text-silver-400">
                    ملخص التبرع
                  </p>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-silver-200/70">الفئة</span>
                      <span className="font-display text-pearl">{selectedCategory.title}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-silver-200/70">التكرار</span>
                      <span className="text-pearl">{frequencyLabel}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/10 pt-3">
                      <span className="text-silver-200/70">المبلغ</span>
                      <span className="font-display text-lg text-pearl">
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
