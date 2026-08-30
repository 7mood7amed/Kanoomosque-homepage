import React from 'react';
import { Ornament } from './Ornament';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
  align?: 'start' | 'center';
  /** Set when the heading sits directly on a photo background (no card
   * behind it) so the title/description get a text shadow for legibility. */
  onPhoto?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'center',
  onPhoto = false
}: SectionHeadingProps) {
  const isDark = tone === 'dark';
  return (
    <div
      className={[
      'max-w-2xl',
      align === 'center' ? 'mx-auto text-center' : 'text-start'].
      join(' ')}>

      <span
        className={[
        'inline-block rounded-full px-4 py-1.5 text-label-md tracking-[0.15em]',
        isDark ?
        'bg-white/10 text-tertiary-fixed-dim' :
        'bg-secondary-container/60 text-on-secondary-container'].
        join(' ')}>

        {eyebrow}
      </span>
      <div className="mt-4">
        <Ornament tone={tone} align={align} />
      </div>
      <h2
        className={[
        'font-headline-md mt-4 text-3xl leading-[1.6] sm:text-4xl lg:text-5xl',
        isDark ? 'text-inverse-on-surface' : 'text-on-surface',
        onPhoto && 'text-shadow-photo'].
        filter(Boolean).
        join(' ')}>

        {title}
      </h2>
      {description &&
      <p
        className={[
        'mt-4 text-body-lg leading-relaxed',
        isDark ? 'text-secondary-fixed-dim/85' : 'text-on-surface-variant',
        onPhoto && 'text-shadow-photo'].
        filter(Boolean).
        join(' ')}>

          {description}
        </p>
      }
    </div>);

}
