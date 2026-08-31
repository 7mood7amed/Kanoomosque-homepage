import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

type ParallaxBackgroundProps = {
  src: string;
  opacity?: number;
  /** Tailwind object-position class(es) for the mobile crop, where the
   * section is much narrower/shorter relative to the photo than on
   * desktop. Defaults to a centered crop. */
  position?: string;
};

/** Full-bleed section background photo that drifts slower than the page
 * scroll, so different parts of the image are revealed as the section
 * passes through the viewport. Falls back to a static image when the
 * user has requested reduced motion. */
export function ParallaxBackground({ src, opacity = 1, position = 'object-center' }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.img
        src={src}
        alt=""
        style={{ opacity, ...(prefersReducedMotion ? {} : { y }) }}
        className={`absolute inset-x-0 -top-[12%] h-[124%] w-full object-cover ${position}`} />

    </div>);

}
