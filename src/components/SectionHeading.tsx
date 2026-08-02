import React from 'react';
import { Ornament } from './Ornament';

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
        'inline-block border-x-2 px-4 py-1 text-xs font-bold tracking-[0.2em]',
        isDark ?
        'border-silver-400/50 text-silver-400' :
        'border-navy-900/25 text-navy-700'].
        join(' ')}>
        
        {eyebrow}
      </span>
      <h2
        className={[
        'font-display mt-4 text-3xl leading-[1.6] sm:text-4xl',
        isDark ? 'text-pearl' : 'text-navy-900'].
        join(' ')}>
        
        {title}
      </h2>
      <div className="mt-4">
        <Ornament tone={tone} align={align} />
      </div>
      {description &&
      <p
        className={[
        'mt-4 text-base leading-8',
        isDark ? 'text-silver-200/75' : 'text-navy-500'].
        join(' ')}>
        
          {description}
        </p>
      }
    </div>);

}