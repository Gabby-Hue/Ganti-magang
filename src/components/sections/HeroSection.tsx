'use client';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export function HeroSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray<HTMLElement>('[data-depth]');
      const update = () => {
        const y = window.scrollY;
        layers.forEach((layer) => gsap.set(layer, { y: -(y * Number(layer.dataset.depth)) }));
      };
      window.addEventListener('scroll', update);
      update();
      return () => window.removeEventListener('scroll', update);
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={rootRef} className="relative flex h-screen items-center justify-center overflow-hidden starfield">
      <div data-depth="0.05" className="absolute inset-0 bg-gradient-to-b from-blue-950/40 to-midnight" />
      <div data-depth="0.1" className="absolute left-1/2 top-20 h-44 w-44 -translate-x-1/2 rounded-full bg-glow/80 blur-2xl shadow-moon" />
      <div data-depth="0.2" className="absolute bottom-0 h-64 w-full bg-jungle/70 [clip-path:polygon(0_45%,20%_30%,40%_50%,60%_28%,80%_42%,100%_35%,100%_100%,0_100%)]" />
      <div data-depth="0.32" className="absolute bottom-0 h-52 w-full bg-black/60 [clip-path:polygon(0_55%,14%_40%,34%_58%,52%_45%,73%_64%,100%_50%,100%_100%,0_100%)]" />
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="z-20 text-center text-5xl font-black leading-tight text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">Hi Welcome<br/>To My Domain</motion.h1>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 z-20 text-sm text-white/80">Scroll to explore ↓</motion.div>
    </section>
  );
}
