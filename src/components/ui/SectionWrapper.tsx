'use client';
import { PropsWithChildren } from 'react';
import { useCoverflowScroll } from '@/hooks/useScrollReveal';

export function SectionWrapper({
  children,
  id,
  className = '',
  disableReveal = false,
}: PropsWithChildren<{ id: string; className?: string; disableReveal?: boolean }>) {
  const ref = useCoverflowScroll<HTMLElement>();

  if (disableReveal) {
    return (
      <section
        id={id}
        className={`relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 ${className}`}
      >
        {children}
      </section>
    );
  }

  return (
    <section
      id={id}
      ref={ref}
      className={`coverflow-section relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 ${className}`}
    >
      {children}
    </section>
  );
}
