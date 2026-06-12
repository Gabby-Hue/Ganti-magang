'use client';
import { useEffect, useRef, useState } from 'react';

import { programmingSkills, designingSkills } from '@/data/portfolio';
import { SectionWrapper } from '../ui/SectionWrapper';

/* ── Single animated skill bar ─────────────────────────────────────── */
function SkillBar({ name, level, delay, icon }: { name: string; level: number; delay: number; icon: string }) {
  const [animate, setAnimate] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay the animation start for staggered effect
          setTimeout(() => setAnimate(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={barRef} className="mb-7 last:mb-0">
      {/* Label row */}
      <div className="mb-2.5 flex items-center justify-between">
        <span className="flex items-center gap-2.5 text-sm font-semibold tracking-wider text-white/90 uppercase">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} alt={name} width={20} height={20} className="h-5 w-5 object-contain" />
          {name}
        </span>
        <span
          className={`text-sm font-bold tabular-nums transition-all duration-1000 ${
            animate ? 'text-[#5ebd8a]' : 'text-white/40'
          }`}
        >
          {level}%
        </span>
      </div>

      {/* Bar track */}
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill ${animate ? 'animate' : ''}`}
          style={{
            width: animate ? `${level}%` : '0%',
            background: 'linear-gradient(90deg, #1a7d5a, #5ebd8a)',
          }}
        />
      </div>
    </div>
  );
}

/* ── Skill category column ─────────────────────────────────────────── */
function SkillColumn({
  title,
  skills,
  baseDelay,
}: {
  title: string;
  skills: { name: string; level: number; icon: string }[];
  baseDelay: number;
}) {
  return (
    <div className="glass rounded-2xl p-6 sm:p-8">
      <h3 className="mb-6 text-xl font-bold text-white tracking-wide">{title}</h3>
      {skills.map((s, i) => (
        <SkillBar
          key={s.name}
          name={s.name}
          level={s.level}
          icon={s.icon}
          delay={baseDelay + i * 200}
        />
      ))}
    </div>
  );
}

/* ── Main SkillsSection ────────────────────────────────────────────── */
export function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      {/* Section header */}
      <div className="mb-12 text-center">
        <h2 className="section-title inline-block">My Skills</h2>
        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-[#1a7d5a] to-[#5ebd8a]" />
        <p className="mx-auto mt-4 max-w-xl text-white/65 leading-relaxed">
          Beberapa skill dan teknologi yang saya kuasai dan gunakan untuk membuat website, mendesain antarmuka, serta mengembangkan berbagai proyek digital.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid gap-6 md:grid-cols-2">
        <SkillColumn
          title="Programming Skills"
          skills={programmingSkills}
          baseDelay={100}
        />
        <SkillColumn
          title="Designing Skills"
          skills={designingSkills}
          baseDelay={300}
        />
      </div>
    </SectionWrapper>
  );
}
