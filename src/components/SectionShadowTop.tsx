import React from 'react';

export function SectionShadowTop() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10" aria-hidden="true">
      <div className="h-14 bg-gradient-to-t from-black/40 to-transparent sm:h-24" />
      <div className="h-px bg-gradient-to-r from-transparent via-tertiary-fixed-dim/70 to-transparent shadow-[0_0_14px_2px_rgba(224,195,135,0.35)] sm:h-[2px]" />
    </div>);

}
