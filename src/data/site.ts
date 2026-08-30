export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
{ label: 'الرئيسية', href: '#home' },
{ label: 'من نحن', href: '#about' },
{ label: 'مسارات التعليم', href: '#courses' },
{ label: 'الدورات المكثفة', href: '#camps' },
{ label: 'استثمر معنا', href: '#invest' },
{ label: 'تواصل معنا', href: '#contact' }];


export type Course = {
  title: string;
  badge: string;
  badgeTone: 'active' | 'ending';
  description: string;
  image: string;
};

export const courses: Course[] = [
{
  title: 'تحفيظ القرآن',
  badge: 'نشطة الآن',
  badgeTone: 'active',
  description:
  'برنامج متكامل لحفظ القرآن الكريم مع الإتقان والمراجعة المستمرة على يد معلمين مجازين.',
  image: "/التحفيظ.jpeg"

},
{
  title: 'التأسيس على القراءة الصحيحة / اقرأ وارتقِ',
  badge: 'قريب الانتهاء',
  badgeTone: 'ending',
  description:
  'يعالج ضعف القراءة وتطوير مهارات النطق السليم، بأسلوب متدرج من الحروف والأساسيات.',
  image: "/اقرا و ارتق.jpeg"

}];


export type Camp = {
  title: string;
  status: string;
  statusTone: 'active' | 'upcoming';
  period: string;
  description: string;
  index: string;
  image: string;
};

export const camps: Camp[] = [
{
  index: '٠١',
  title: 'مسابقة بالقرآن أرتقي 2',
  status: 'نشطة الآن',
  statusTone: 'active',
  period: 'التسجيل متاح',
  description:
  'مسابقة قرآنية تنافسية تشمل الحفظ والتلاوة والتجويد، بجوائز تشجيعية للفائزين من جميع الفئات العمرية.',
  image: "/مسابقة بالقرآن أرتقي.jpeg"
},
{
  index: '٠٢',
  title: 'همّة وقمّة',
  status: 'يبدأ يوليو 2026',
  statusTone: 'upcoming',
  period: 'يوليو ٢٠٢٦',
  description:
  'دورة مكثفة صيفية ترفع همّة الطالب في الحفظ اليومي مع متابعة فردية وبرنامج تحفيزي متكامل.',
  image: "/همّة وقمّة.jpeg"
},
{
  index: '٠٣',
  title: 'بالقرآن أرتقي',
  status: 'يبدأ يونيو 2026',
  statusTone: 'upcoming',
  period: 'يونيو ٢٠٢٦',
  description:
  'برنامج مكثف يجمع بين الحفظ والمراجعة وتصحيح التلاوة على مدار أسابيع متتالية.',
  image: "/بالقرآن أرتقي.jpeg"
},
{
  index: '٠٤',
  title: 'تأهيل الحفّاظ',
  status: 'يبدأ يوليو 2026',
  statusTone: 'upcoming',
  period: 'يوليو ٢٠٢٦',
  description:
  'مسار متقدّم لحفظة القرآن الكريم للاستعداد للإجازة القرآنية بالسند المتصل.',
  image: "/تأهيل الحفّاظ.jpeg"
}];


export type Tier = {
  title: string;
  price: string;
  unit: string;
  details: string;
  image: string;
};

export const tiers: Tier[] = [
{
  title: 'كفالة طالب قرآن',
  price: '٣٠ د.ب',
  unit: 'شهرياً',
  details:
  'تكفل مقعد طالب في الحلقة القرآنية، وتشمل رسوم التعليم والمصحف والمواد التعليمية ومتابعة المعلّم المجاز.',
  image: "/تبرع 3.jpeg"
},
{
  title: 'كفالة معلم قرآن',
  price: '٥٠ د.ب',
  unit: 'شهرياً',
  details:
  'تسهم في مكافأة معلّم مجاز يقوم على تعليم مجموعة من الطلاب وتصحيح تلاوتهم ومتابعة حفظهم أسبوعياً.',
  image: "/تبرع 1.jpeg"
},
{
  title: 'كفالة حلقة قرآنية',
  price: '١٠٠ د.ب',
  unit: 'شهرياً',
  details:
  'تكفل حلقة كاملة بمعلّمها وطلابها، وتُعدّ من أعظم أبواب الصدقة الجارية المستمرة الأجر بإذن الله.',
  image: "/تبرع 2.jpeg"
}];


export type Graduate = {
  name: string;
  year: string;
  image: string;
};

export const graduates: Graduate[] = [
{
  name: 'عبدالله جمعة العنزي',
  year: '2024',
  image: "/graduate-abdullah-juma.jpg"

},
{
  name: 'عبدالله ربيع العنزي',
  year: '2025',
  image: "/graduate-abdullah-rabee.jpg"

},
{
  name: 'نوفل صديق',
  year: '2023',
  image: "/graduate-nawfal.jpg"

},
{
  name: 'عبدالرحمن الهليم',
  year: '2023',
  image: "/graduate-abdulrahman.jpg"

},
{
  name: 'إبراهيم العليان',
  year: '2023',
  image: "/graduate-ibrahim.jpg"

}];


export type Stat = {
  value: string;
  label: string;
  caption: string;
};

export const stats: Stat[] = [
{ value: '٢٠٠', label: 'الطلاب', caption: 'طالب وطالبة في حلقاتنا' },
{ value: '—', label: 'المعلمون', caption: 'مقرئون متخصصون' },
{ value: '١٨', label: 'الحلقات', caption: 'حلقة قرآنية أسبوعية' },
{ value: '٩', label: 'الأنشطة', caption: 'نشاط ومسابقة سنوية' },
{ value: '١١', label: 'الإجازات القرآنية', caption: 'خريجاً بالسند المتصل' }];


export const images = {
  hero: "/kanoomosque-hero.jpeg",
  about: "/52812d92-b8b4-4683-992a-b75b600486e3.jpg",

  donation: "/35823f29-e800-410f-ae98-f7b008ee42f5.jpg",

  study: "/7cdb8491-8feb-4adc-a328-af3b8d8833c3.jpg",
  gathering: "/f69e905d-5f1f-4b64-9127-0827d3948752.jpg",
  reading: "/b89a2194-171c-420b-8b97-62e60902d97f.jpg"

};