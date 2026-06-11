'use client';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { projects } from '@/data/portfolio';
import { SectionWrapper } from '../ui/SectionWrapper';

const filters = ['All', 'Web Development', 'Game Development', 'Dashboard', 'Mobile App'];
export function ProjectsSection() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => active === 'All' ? projects : projects.filter(p => p.category === active), [active]);
  return (
    <SectionWrapper id="projects">
      <h2 className="section-title">Project Showcase</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-2 text-sm transition ${active === f ? 'bg-[#5ebd8a] text-[#071f14] font-semibold' : 'glass hover:border-[#5ebd8a]/30'}`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {filtered.map(p => (
          <article key={p.title} className="glass group rounded-2xl p-4 transition hover:-translate-y-1 hover:shadow-glow">
            <Image src={p.image} alt={p.title} width={700} height={380} className="h-52 w-full rounded-xl object-cover" />
            <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-white/80">{p.description}</p>
            <p className="mt-2 text-sm text-[#5ebd8a]">{p.tech.join(' • ')}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
