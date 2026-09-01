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


export type CourseLevel = {
  title: string;
  points: string[];
  image?: string;
};

export type Teacher = {
  name: string;
  image: string;
};

export type CourseDetails = {
  levels?: CourseLevel[];
  ageGroup?: string;
  fee?: string;
  prerequisites: string[];
  teachers?: Teacher[];
};

export type Course = {
  title: string;
  badge: string;
  badgeTone: 'active' | 'ending';
  description: string;
  image: string;
  details?: CourseDetails;
};

export const courses: Course[] = [
{
  title: 'تحفيظ القرآن',
  badge: 'نشطة الآن',
  badgeTone: 'active',
  description:
  'برنامج متكامل لحفظ القرآن الكريم مع الإتقان والمراجعة المستمرة على يد معلمين مجازين.',
  image: "/التحفيظ.jpeg",
  details: {
    levels: [
    {
      title: 'التأسيس والإتقان',
      image: "/طالب كبير.jpeg",
      points: [
      'حفظ جزء عمّ مع التطبيق العملي للتجويد',
      'تصحيح مخارج الحروف وصفاتها',
      'اختبارات أسبوعية ومتابعة فردية لكل طالب']

    },
    {
      title: 'الحفظ المتقدّم',
      image: "/حلقة.jpeg",
      points: [
      'حفظ خمس سور إضافية مع المراجعة المستمرة',
      'أحكام التجويد النظرية والتطبيقية',
      'اختبارات نصف شهرية وتقييم دوري']

    },
    {
      title: 'الإتمام والإجازة',
      image: "/تكريم الحفل السنوي.jpeg",
      points: [
      'حفظ القرآن الكريم كاملاً مع مراجعة إتقانية',
      'التحضير للإجازة القرآنية بالسند المتصل',
      'اختبار نهائي شامل وحفل تخريج']

    }],

    prerequisites: [
    'الانتظام والالتزام بمواعيد الحلقات',
    'امتلاك مصحف معتمد ودفتر متابعة',
    'اجتياز المقابلة المبدئية',
    'للمستوى المتقدم: حفظ خمس سور على الأقل بإتقان، وإجادة أحكام التجويد، واجتياز اختبار تحديد المستوى بنسبة ٨٠٪ فأكثر'],

    teachers: [
    { name: 'الشيخ محمد الرويعي', image: "/الشيخ محمد الرويعي.png" },
    { name: 'الشيخ عمار حسن العلوي', image: "/الشيخ عمار حسن العلوي.png" },
    { name: 'الشيخ أحمد السياس', image: "/الشيخ احمد السياس.png" },
    { name: 'الشيخ محمد خالد', image: "/الشيخ محمد خالد.jpeg" },
    { name: 'عبدالكريم السليمان', image: "/عبدالكريم السليمان.jpeg" },
    { name: 'وليد بو حمرة', image: "/وليد بو حمرة.jpeg" }]

  }
},
{
  title: 'اقرأ وارتقِ',
  badge: 'قريب الانتهاء',
  badgeTone: 'ending',
  description:
  'يعالج ضعف القراءة وتطوير مهارات النطق السليم، بأسلوب متدرج من الحروف والأساسيات.',
  image: "/اقرا و ارتق.jpeg",
  details: {
    ageGroup: 'من ٥ إلى ١٠ سنوات',
    fee: '١٠ دنانير شهرياً',
    prerequisites: [
    'اجتياز المقابلة المبدئية',
    'الالتزام بالتسجيل والحضور المنتظم',
    'سداد الرسوم الشهرية',
    'استكمال إجراءات التسجيل كاملة']

  }
}];


export type CampDetails = {
  ageGroup?: string;
  fee?: string;
  duration?: string;
  whatsIncluded?: string[];
  prerequisites?: string[];
  note?: string;
};

export type Camp = {
  title: string;
  status: string;
  statusTone: 'active' | 'upcoming';
  period: string;
  description: string;
  index: string;
  image: string;
  details?: CampDetails;
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
  image: "/مسابقة بالقرآن أرتقي.jpeg",
  details: {
    note: 'التسجيل متاح الآن. شروط الالتحاق الكاملة تُعرض عند التسجيل في المسابقة.'
  }
},
{
  index: '٠٢',
  title: 'همّة وقمّة',
  status: 'يبدأ يوليو 2026',
  statusTone: 'upcoming',
  period: 'يوليو ٢٠٢٦',
  description:
  'دورة مكثفة صيفية ترفع همّة الطالب في الحفظ اليومي مع متابعة فردية وبرنامج تحفيزي متكامل.',
  image: "/همّة وقمّة.jpeg",
  details: {
    ageGroup: 'من ٩ إلى ١٤ سنة',
    fee: '٣٥ ديناراً',
    duration: 'ثلاثة أيام أسبوعياً لمدة شهر ونصف تقريباً خلال الصيف',
    whatsIncluded: [
    'بناء المهارات وتنمية القيم والأخلاق',
    'أنشطة ترفيهية هادفة ضمن بيئة منظمة وآمنة'],

    prerequisites: [
    'الالتزام بالحضور الكامل والمشاركة الفعالة في جميع الأنشطة',
    'الانضباط طوال مدة البرنامج',
    'سداد رسوم الاشتراك',
    'استكمال إجراءات التسجيل كاملة']

  }
},
{
  index: '٠٣',
  title: 'بالقرآن أرتقي',
  status: 'يبدأ يونيو 2026',
  statusTone: 'upcoming',
  period: 'يونيو ٢٠٢٦',
  description:
  'برنامج مكثف يجمع بين الحفظ والمراجعة وتصحيح التلاوة على مدار أسابيع متتالية.',
  image: "/بالقرآن أرتقي.jpeg",
  details: {
    ageGroup: 'من ١٠ إلى ٢٢ سنة',
    fee: '٣٥ ديناراً',
    duration: 'خمسة أيام أسبوعياً لمدة شهرين خلال العطلة الصيفية',
    whatsIncluded: [
    'تلقين حفظ القرآن الكريم',
    'جلسات مراجعة وإتقان',
    'إشراف معلمين مؤهلين',
    'منهج تعليمي منظم'],

    prerequisites: [
    'اجتياز المقابلة المبدئية واختبار تحديد المستوى',
    'الالتزام بالحضور الكامل للبرنامج',
    'سداد رسوم التسجيل']

  }
},
{
  index: '٠٤',
  title: 'تأهيل الحفّاظ',
  status: 'يبدأ يوليو 2026',
  statusTone: 'upcoming',
  period: 'يوليو ٢٠٢٦',
  description:
  'مسار متقدّم لحفظة القرآن الكريم للاستعداد للإجازة القرآنية بالسند المتصل.',
  image: "/تأهيل الحفّاظ.jpeg",
  details: {
    whatsIncluded: [
    'ثلاثة مستويات متدرجة بمحتوى مختلف لكل مستوى',
    'اختبارات أسبوعية ونصف شهرية وتقييم ختامي شامل',
    'متابعة فردية، وتدريب نظري وتطبيقي في التجويد',
    'اختبار ختامي وحفل تخريج'],

    prerequisites: [
    'الحضور المنتظم، وامتلاك مصحف معتمد، واجتياز التقييم المبدئي',
    'للمستوى المتقدم: خمسة أجزاء محفوظة بإتقان على الأقل، وإجادة التجويد، واجتياز اختبار تحديد المستوى بنسبة ٨٠٪ فأكثر',
    'لمستوى الإجازة: إتمام حفظ القرآن كاملاً واجتياز الاختبار الشامل النهائي أمام اللجنة']

  }
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
  about: "/طالب.jpeg",

  donation: "/35823f29-e800-410f-ae98-f7b008ee42f5.jpg",

  study: "/طالب كبير.jpeg",
  gathering: "/حلقة.jpeg",
  reading: "/تكريم الحفل السنوي.jpeg",
  honor: "/تكريم.jpeg",
  legacy: "/تكريم الشيخ راشد 2.jpeg"

};