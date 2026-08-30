import React from 'react';
import { Ornament } from './Ornament';

/** Marks the seam between two stacked sections with the site's existing
 * gold star-and-rule motif. Sits above each section's own background photo
 * (a plain CSS border here would be painted underneath it and disappear),
 * so this must be placed as a direct child of the section, after its
 * background/overlay layers. */
export function SectionDivider() {
  return (
    <div className="absolute inset-x-0 top-4 z-10 flex justify-center sm:top-6" aria-hidden="true">
      <Ornament tone="dark" />
    </div>);

}
