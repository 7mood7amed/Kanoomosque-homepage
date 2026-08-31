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
      'max-w-4xl',
      align === 'center' ? 'mx-auto text-center' : 'text-start'].
      join(' ')}>

      <span
        className={[
        'inline-block rounded-full px-5 py-2 text-base font-bold tracking-[0.12em] sm:px-6 sm:py-2.5 sm:text-xl lg:text-2xl',
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
        'mt-4 text-4xl font-bold leading-[1.35] tracking-wide sm:text-5xl sm:leading-[1.3] sm:tracking-wider lg:text-6xl',
        isDark ? 'text-inverse-on-surface' : 'text-on-surface',
        onPhoto && 'text-shadow-photo'].
        filter(Boolean).
        join(' ')}>

        {title}
      </h2>
      {description &&
      <p
        className={[
        'mx-auto mt-4 max-w-2xl text-body-lg leading-relaxed',
        isDark ? 'text-secondary-fixed-dim/85' : 'text-on-surface-variant',
        onPhoto && 'text-shadow-photo'].
        filter(Boolean).
        join(' ')}>

          {description}
        </p>
      }
    </div>);

}
