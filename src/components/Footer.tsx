import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
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


const aboutLinks = [
{ label: 'عن المركز', to: '/about' },
{ label: 'الدعم الفني', to: '/support' },
{ label: 'سياسة الخصوصية', to: '/privacy' },
{ label: 'الأسئلة الشائعة', to: '/faq' }];

export function Footer() {
  const { pathname } = useLocation();
  const homeHref = (hash: string) => (pathname === '/' ? hash : `/${hash}`);

  return (
    <footer className="w-full border-t border-tertiary-fixed-dim/10 bg-inverse-surface text-inverse-on-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <img
                src="/logo-full.jpeg"
                alt="جامع عبدالرحمن بن جاسم كانو"
                className="h-24 w-auto rounded-lg bg-white p-2" />
            </div>
            <p className="mt-5 text-body-md text-secondary-fixed-dim/80">
              مركز قرآني في مملكة البحرين يُعنى بتعليم القرآن الكريم وعلومه وتخريج
              الحفظة المجازين، تحت مظلة وزارة العدل والشؤون الإسلامية والأوقاف.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ label, Icon }) =>
              <li key={label}>
                  <Link
                  to={homeHref('#home')}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-secondary-fixed-dim transition-colors hover:border-tertiary-fixed-dim/50 hover:bg-white/10 hover:text-tertiary-fixed-dim">

                    <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <nav aria-labelledby="footer-quick">
            <h2 id="footer-quick" className="font-headline-sm text-tertiary-fixed-dim">
              روابط سريعة
            </h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) =>
              <li key={item.href}>
                  <Link
                  to={homeHref(item.href)}
                  className="text-body-md text-secondary-fixed-dim/85 transition-colors hover:text-tertiary-fixed-dim">

                    {item.label}
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/donate"
                  className="text-body-md text-secondary-fixed-dim/85 transition-colors hover:text-tertiary-fixed-dim">

                  تبرّع الآن
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-about">
            <h2 id="footer-about" className="font-headline-sm text-tertiary-fixed-dim">
              من نحن
            </h2>
            <ul className="mt-5 space-y-3">
              {aboutLinks.map(({ label, to }) =>
              <li key={label}>
                  <Link
                  to={to}
                  className="text-body-md text-secondary-fixed-dim/85 transition-colors hover:text-tertiary-fixed-dim">

                    {label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <div>
            <h2 className="font-headline-sm text-tertiary-fixed-dim">معلومات التواصل</h2>
            <ul className="mt-5 space-y-4 text-body-md text-secondary-fixed-dim/85">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[18px] text-tertiary-fixed-dim">
                  location_on
                </span>
                مملكة البحرين — مدينة حمد
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[18px] text-tertiary-fixed-dim">
                  call
                </span>
                <a href="tel:+97317000000" dir="ltr" className="transition-colors hover:text-tertiary-fixed-dim">
                  +973 1700 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[18px] text-tertiary-fixed-dim">
                  mail
                </span>
                <a
                  href="mailto:info@kanoo-quran.bh"
                  dir="ltr"
                  className="transition-colors hover:text-tertiary-fixed-dim">

                  info@kanoo-quran.bh
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-tertiary-fixed-dim/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-caption text-secondary-fixed-dim/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© ٢٠٢٦ مركز عبدالرحمن كانو لتعليم القرآن الكريم وعلومه. جميع الحقوق محفوظة.</p>
          <p>مملكة البحرين — مدينة حمد</p>
        </div>
      </div>
    </footer>);

}
