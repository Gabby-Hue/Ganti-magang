'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { events } from '@/data/portfolio';
import { SectionWrapper } from '../ui/SectionWrapper';

export function EventsSection() {
  const leafRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = leafRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = (viewH / 2 - rect.top) / viewH;
      const clampedProgress = Math.max(0, Math.min(progress, 1.5));

      gsap.set(el, {
        x: -clampedProgress * 200,
        opacity: Math.max(0, 1 - clampedProgress * 0.8),
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <SectionWrapper id="events">
      <h2 className="section-title">Events &amp; Certificates</h2>
      <motion.div drag="x" dragConstraints={{ left: -900, right: 0 }} className="mt-8 flex gap-6 overflow-hidden pb-4">
        {events.map((e) => (
          <article key={e.title} className="glass min-w-[300px] max-w-[340px] snap-center rounded-2xl">
            <Image src={e.image} alt={e.title} width={400} height={220} className="h-44 w-full rounded-t-2xl object-cover" />
            <div className="p-4">
              <p className="text-xs text-[#5ebd8a]">{e.year}</p>
              <h3 className="mt-1 font-bold">{e.title}</h3>
              <p className="mt-2 text-sm text-white/75">{e.description}</p>
              <a href={e.certificate} className="mt-3 inline-block rounded-full border border-[#5ebd8a] px-4 py-2 text-sm text-[#5ebd8a] transition hover:bg-[#5ebd8a]/10">Preview Certificate</a>
            </div>
          </article>
        ))}
      </motion.div>

      {/* Leaf-left decoration — sits right below the cards */}
      <div
        ref={leafRef}
        className="pointer-events-none select-none will-change-transform -mt-4"
      >
        <Image
          src="/parallax/leaf-left.png"
          alt=""
          width={1400}
          height={900}
          className="w-[600px] sm:w-[800px] lg:w-[1000px] xl:w-[1200px] h-auto"
        />
      </div>
    </SectionWrapper>
  );
}
