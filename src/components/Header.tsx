import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { BookOpenIcon, HeartHandshakeIcon, MenuIcon, XIcon } from 'lucide-react';
import { navItems } from '../data/site';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const homeHref = (hash: string) => (pathname === '/' ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={[
      'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
      scrolled || open ?
      'border-b border-silver-400/25 bg-navy-950/95 backdrop-blur-xl' :
      'bg-transparent'].
      join(' ')}>
      
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-lg">
            <BookOpenIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-lg text-pearl sm:text-xl">
              مركز عبدالرحمن كانو
            </span>
            <span className="block text-[11px] tracking-wide text-silver-400">
              لتعليم القرآن الكريم وعلومه
            </span>
          </span>
        </Link>

        <nav aria-label="التنقل الرئيسي" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) =>
            <li key={item.href}>
                <Link
                to={homeHref(item.href)}
                className="rounded-full px-3 py-2 text-sm text-silver-200 transition-colors hover:bg-white/10 hover:text-pearl focus:outline-none focus-visible:ring-2 focus-visible:ring-silver-400">

                  {item.label}
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to={homeHref('#contact')}
            className="hidden text-sm text-silver-200 transition-colors hover:text-pearl lg:inline-block">

            تسجيل الدخول
          </Link>
          <Link
            to="/donate"
            className="hidden items-center gap-1.5 text-sm font-bold text-silver-200 transition-colors hover:text-pearl sm:inline-flex">

            <HeartHandshakeIcon className="h-4 w-4" aria-hidden="true" />
            تبرّع الآن
          </Link>
          <Link
            to={homeHref('#courses')}
            className="hidden rounded-full bg-pearl px-5 py-2.5 text-sm font-bold text-navy-900 shadow-md transition-all hover:scale-[1.02] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-silver-400 sm:inline-block">

            اشترك الآن
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="flex h-11 w-11 items-center justify-center rounded-full text-pearl transition-colors hover:bg-white/10 xl:hidden">
            
            {open ?
            <XIcon className="h-5 w-5" aria-hidden="true" /> :

            <MenuIcon className="h-5 w-5" aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-nav"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="overflow-hidden border-t border-silver-400/20 bg-navy-950 xl:hidden">
          
            <nav aria-label="التنقل للجوال" className="px-4 py-5 sm:px-6">
              <ul className="divide-y divide-white/10">
                {navItems.map((item) =>
              <li key={item.href}>
                    <Link
                  to={homeHref(item.href)}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3.5 text-base text-silver-200 transition-colors hover:text-pearl">

                      {item.label}
                    </Link>
                  </li>
              )}
              </ul>
              <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full border border-silver-400/50 px-5 py-3 text-sm font-bold text-pearl transition-colors hover:bg-white/10">

                <HeartHandshakeIcon className="h-4 w-4" aria-hidden="true" />
                تبرّع الآن
              </Link>
              <div className="mt-3 flex items-center gap-3 border-t border-silver-400/20 pt-5">
                <Link
                to={homeHref('#courses')}
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-pearl px-5 py-3 text-center text-sm font-bold text-navy-900 shadow-md">

                  اشترك الآن
                </Link>
                <Link
                to={homeHref('#contact')}
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full border border-silver-400/50 px-5 py-3 text-center text-sm font-medium text-pearl">

                  تسجيل الدخول
                </Link>
              </div>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}