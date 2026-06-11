'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function LeafDivider({ side }: { side: 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // How far the element is past the center of viewport (0 = center, positive = scrolled past)
      const progress = (viewH / 2 - rect.top) / viewH;
      const clampedProgress = Math.max(0, Math.min(progress, 1.5));

      const xShift = side === 'left' ? -clampedProgress * 200 : clampedProgress * 200;
      const opacity = Math.max(0, 1 - clampedProgress * 0.8);

      gsap.set(el, { x: xShift, opacity });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [side]);

  return (
    <div
      className={`relative w-full overflow-visible pointer-events-none select-none flex ${side === 'left' ? 'justify-start' : 'justify-end'}`}
    >
      <div ref={ref} className="will-change-transform">
        <Image
          src={side === 'left' ? '/parallax/leaf-left.png' : '/parallax/leaf-right.png'}
          alt=""
          width={1400}
          height={900}
          className="w-[600px] sm:w-[800px] lg:w-[1000px] xl:w-[1200px] h-auto"
        />
      </div>
    </div>
  );
}
