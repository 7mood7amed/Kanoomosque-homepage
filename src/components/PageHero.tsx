import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Ornament } from './Ornament';

type PageHeroProps = {
  eyebrow: string;
  eyebrowIcon?: React.ReactNode;
  title: string;
  description?: string;
  backTo?: string;
  backLabel?: string;
};

export function PageHero({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  backTo = '/',
  backLabel = 'العودة إلى الصفحة الرئيسية'
}: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-inverse-surface pb-16 pt-32 sm:pb-20 sm:pt-36">
      <div className="pattern-geo absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Link
          to={backTo}
          className="inline-flex items-center gap-2 text-body-md text-secondary-fixed-dim transition-colors hover:text-inverse-on-surface">

          <ArrowRightIcon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          {backLabel}
        </Link>

        <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-label-md tracking-[0.15em] text-tertiary-fixed-dim">
          {eyebrowIcon}
          {eyebrow}
        </span>
        <h1 className="font-display-lg mt-4 text-4xl leading-[1.6] text-inverse-on-surface lg:text-5xl">
          {title}
        </h1>
        {description &&
        <p className="mx-auto mt-5 max-w-xl text-body-lg leading-relaxed text-secondary-fixed-dim/80">
            {description}
          </p>
        }
        <div className="mt-6 flex justify-center">
          <Ornament tone="dark" />
        </div>
      </div>
    </section>);

}
