import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpenIcon,
  InstagramIcon,
  SendIcon,
  TwitterIcon,
  YoutubeIcon } from
'lucide-react';
import { navItems } from '../data/site';

const socials = [
{ label: 'يوتيوب', Icon: YoutubeIcon },
{ label: 'إنستغرام', Icon: InstagramIcon },
{ label: 'إكس', Icon: TwitterIcon },
{ label: 'تيليجرام', Icon: SendIcon }];


const aboutLinks = ['عن المركز', 'الدعم الفني', 'سياسة الخصوصية', 'الأسئلة الشائعة'];

export function Footer() {
  const { pathname } = useLocation();
  const homeHref = (hash: string) => (pathname === '/' ? hash : `/${hash}`);

  return (
    <footer className="w-full border-t border-silver-400/15 bg-navy-950 text-pearl">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-silver-200">
                <BookOpenIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="font-display block text-lg">مركز عبدالرحمن كانو</span>
                <span className="block text-[11px] text-silver-400">
                  لتعليم القرآن الكريم وعلومه
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-8 text-silver-200/65">
              مركز قرآني في مملكة البحرين يُعنى بتعليم القرآن الكريم وعلومه وتخريج
              الحفظة المجازين، تحت مظلة وزارة العدل والشؤون الإسلامية والأوقاف.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ label, Icon }) =>
              <li key={label}>
                  <Link
                  to={homeHref('#home')}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-silver-200 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-pearl">

                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <nav aria-labelledby="footer-quick">
            <h2 id="footer-quick" className="font-display text-lg text-silver-400">
              روابط سريعة
            </h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) =>
              <li key={item.href}>
                  <Link
                  to={homeHref(item.href)}
                  className="text-sm text-silver-200/70 transition-colors hover:text-pearl">

                    {item.label}
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/donate"
                  className="text-sm text-silver-200/70 transition-colors hover:text-pearl">

                  تبرّع الآن
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-about">
            <h2 id="footer-about" className="font-display text-lg text-silver-400">
              من نحن
            </h2>
            <ul className="mt-5 space-y-3">
              {aboutLinks.map((label) =>
              <li key={label}>
                  <Link
                  to={homeHref('#about')}
                  className="text-sm text-silver-200/70 transition-colors hover:text-pearl">

                    {label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lg text-silver-400">معلومات التواصل</h2>
            <ul className="mt-5 space-y-4 text-sm text-silver-200/70">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[18px] text-silver-400">
                  location_on
                </span>
                مملكة البحرين — مدينة حمد
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[18px] text-silver-400">
                  call
                </span>
                <a href="tel:+97317000000" dir="ltr" className="transition-colors hover:text-pearl">
                  +973 1700 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[18px] text-silver-400">
                  mail
                </span>
                <a
                  href="mailto:info@kanoo-quran.bh"
                  dir="ltr"
                  className="transition-colors hover:text-pearl">

                  info@kanoo-quran.bh
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-silver-400/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-silver-200/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© ٢٠٢٦ مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه. جميع الحقوق محفوظة.</p>
          <p>مملكة البحرين — مدينة حمد</p>
        </div>
      </div>
    </footer>);

}