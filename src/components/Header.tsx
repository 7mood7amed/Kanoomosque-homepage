import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpenIcon, MenuIcon, XIcon } from 'lucide-react';
import { navItems } from '../data/site';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      'border-b border-silver-400/25 bg-navy-950/95 backdrop-blur' :
      'bg-transparent'].
      join(' ')}>
      
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="arch-top flex h-12 w-11 shrink-0 items-center justify-center border border-silver-400/40 bg-navy-900 text-silver-200">
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
        </a>

        <nav aria-label="التنقل الرئيسي" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) =>
            <li key={item.href}>
                <a
                href={item.href}
                className="border border-transparent px-3 py-2 text-sm text-silver-200 transition-colors hover:border-silver-400/40 hover:text-pearl focus:outline-none focus-visible:ring-2 focus-visible:ring-silver-400">
                
                  {item.label}
                </a>
              </li>
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="hidden text-sm text-silver-200 transition-colors hover:text-pearl sm:inline-block">
            
            تسجيل الدخول
          </a>
          <a
            href="#courses"
            className="hidden border border-silver-400/60 bg-pearl px-5 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-silver-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-silver-400 sm:inline-block">
            
            اشترك الآن
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="flex h-11 w-11 items-center justify-center border border-silver-400/40 text-pearl transition-colors hover:bg-white/10 xl:hidden">
            
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
                    <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3.5 text-base text-silver-200 transition-colors hover:text-pearl">
                  
                      {item.label}
                    </a>
                  </li>
              )}
              </ul>
              <div className="mt-5 flex items-center gap-3 border-t border-silver-400/20 pt-5">
                <a
                href="#courses"
                onClick={() => setOpen(false)}
                className="flex-1 bg-pearl px-5 py-3 text-center text-sm font-bold text-navy-900">
                
                  اشترك الآن
                </a>
                <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 border border-silver-400/50 px-5 py-3 text-center text-sm font-medium text-pearl">
                
                  تسجيل الدخول
                </a>
              </div>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}