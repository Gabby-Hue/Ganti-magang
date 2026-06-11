'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { skills } from '@/data/portfolio';
import { SectionWrapper } from '../ui/SectionWrapper';

export function SkillsSection() {
  const leafRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = leafRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = (viewH / 2 - rect.top) / viewH;
      const clampedProgress = Math.max(0, Math.min(progress, 1.5));

      // Slide right and fade as you scroll past
      gsap.set(el, {
        x: clampedProgress * 150,
        opacity: Math.max(0, 1 - clampedProgress * 0.6),
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <SectionWrapper id="skills">
      <div className="relative">
        {/* Skill bars — left side */}
        <div className="lg:max-w-[55%]">
          <h2 className="section-title">Skills &amp; Tech Stack</h2>
          <div className="mt-10 grid gap-5">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="glass rounded-2xl p-5"
              >
                <div className="mb-2 flex justify-between">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div style={{ width: `${s.level}%` }} className="h-2 rounded-full bg-gradient-to-r from-[#1a7d5a] to-[#5ebd8a] shadow-glow" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leaf-right — large, overlapping from the right */}
        <div
          ref={leafRef}
          className="hidden lg:block absolute top-0 right-[-25%] xl:right-[-30%] pointer-events-none select-none will-change-transform"
        >
          <Image
            src="/parallax/leaf-right.png"
            alt=""
            width={1600}
            height={1000}
            className="w-[1000px] xl:w-[1200px] h-auto opacity-80"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
