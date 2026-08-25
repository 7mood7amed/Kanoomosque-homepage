import React from 'react';

type OrnamentProps = {
  tone?: 'light' | 'dark';
  align?: 'start' | 'center';
};

/** Eight-point star (two overlapping squares) — the Girih mark used
 * throughout the design system in place of plain bullets/dividers. */
export function StarMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect
        x="4.5"
        y="4.5"
        width="15"
        height="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3" />

      <rect
        x="4.5"
        y="4.5"
        width="15"
        height="15"
        transform="rotate(45 12 12)"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3" />

    </svg>);

}

/** Gold star-and-rule divider used under section titles. */
export function Ornament({ tone = 'light', align = 'center' }: OrnamentProps) {
  const line = tone === 'dark' ? 'bg-tertiary-fixed-dim/40' : 'bg-tertiary/35';
  const mark = tone === 'dark' ? 'text-tertiary-fixed-dim' : 'text-tertiary';

  return (
    <div
      className={[
      'flex items-center gap-3',
      align === 'center' ? 'justify-center' : 'justify-start'].
      join(' ')}
      aria-hidden="true">

      <span className={`h-px w-10 sm:w-16 ${line}`} />
      <StarMark className={`h-4 w-4 shrink-0 ${mark}`} />
      <span className={`h-px w-10 sm:w-16 ${line}`} />
    </div>);

}
