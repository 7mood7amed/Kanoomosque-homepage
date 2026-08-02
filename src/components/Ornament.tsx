import React from 'react';

type OrnamentProps = {
  tone?: 'light' | 'dark';
  align?: 'start' | 'center';
};

/** Small traditional diamond-and-rule divider used under section titles. */
export function Ornament({ tone = 'light', align = 'center' }: OrnamentProps) {
  const line = tone === 'dark' ? 'bg-silver-400/40' : 'bg-navy-900/20';
  const dot = tone === 'dark' ? 'bg-silver-400' : 'bg-navy-700';

  return (
    <div
      className={[
      'flex items-center gap-2',
      align === 'center' ? 'justify-center' : 'justify-start'].
      join(' ')}
      aria-hidden="true">
      
      <span className={`h-px w-10 ${line}`} />
      <span className={`h-1.5 w-1.5 rotate-45 ${dot}`} />
      <span className={`h-2.5 w-2.5 rotate-45 ${dot}`} />
      <span className={`h-1.5 w-1.5 rotate-45 ${dot}`} />
      <span className={`h-px w-10 ${line}`} />
    </div>);

}