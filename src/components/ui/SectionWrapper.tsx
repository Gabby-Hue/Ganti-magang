import { PropsWithChildren } from 'react';

export function SectionWrapper({ children, id }: PropsWithChildren<{ id: string }>) {
  return <section id={id} className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">{children}</section>;
}
