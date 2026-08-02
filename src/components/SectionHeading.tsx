import React from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
  align?: 'start' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'center'
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
        'inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.2em]',
        isDark ?
        'bg-white/10 text-silver-400' :
        'bg-primary-container/40 text-primary'].
        join(' ')}>

        {eyebrow}
      </span>
      <h2
        className={[
        'font-display mt-4 text-4xl leading-[1.6] lg:text-5xl',
        isDark ? 'text-pearl' : 'text-navy-900'].
        join(' ')}>

        {title}
      </h2>
      {description &&
      <p
        className={[
        'mt-4 text-lg leading-relaxed',
        isDark ? 'text-silver-200/75' : 'text-navy-500'].
        join(' ')}>

          {description}
        </p>
      }
    </div>);

}