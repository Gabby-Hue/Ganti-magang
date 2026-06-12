'use client';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { SectionWrapper } from '../ui/SectionWrapper';

const filters = ['All', 'Web Development', 'App', 'Graphic Design'];

/* ── Stagger container variant ─────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
  exit: {
    transition: { staggerChildren: 0.15, staggerDirection: -1 },
  },
};

/* ── Individual card variant — unique 3D flip + slide ──────────────── */
const cardVariants = {
  hidden: {
    opacity: 0,
    rotateY: 35,
    x: 80,
    scale: 0.85,
    filter: 'brightness(0.4)',
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    x: 0,
    scale: 1,
    filter: 'brightness(1)',
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 18,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    rotateY: -25,
    x: -60,
    scale: 0.9,
    filter: 'brightness(0.3)',
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};

export function ProjectsSection() {
  const [active, setActive] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <SectionWrapper id="projects" disableReveal>
      <h2 className="section-title">Project Showcase</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              active === f
                ? 'bg-[#5ebd8a] text-[#071f14] font-semibold'
                : 'glass hover:border-[#5ebd8a]/30'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div style={{ perspective: '1200px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-8 grid gap-6 lg:grid-cols-2"
          >
            {filtered.map((p) => (
              <motion.a
                key={p.title}
                href={p.live !== '#' ? p.live : '#'}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProject(p);
                }}
                variants={cardVariants}
                className="glass group rounded-2xl p-4 transition-shadow hover:shadow-glow cursor-pointer"
                style={{ transformStyle: 'preserve-3d', display: 'block' }}
                whileHover={{
                  y: -6,
                  rotateY: -3,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  width={700}
                  height={380}
                  className={`w-full rounded-xl transition-transform group-hover:scale-[1.02] ${
                    p.category === 'App'
                      ? 'h-80 object-contain bg-black/30'
                      : 'h-52 object-cover'
                  }`}
                />
                <h3 className="mt-4 text-xl font-bold group-hover:text-[#5ebd8a] transition-colors">{p.title}</h3>
                <p className="mt-2 text-white/80">{p.description}</p>
                <p className="mt-2 text-sm text-[#5ebd8a]">{p.tech.join(' • ')}</p>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#071f14] border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/80 transition"
              >
                <X size={20} />
              </button>
              
              <div className="relative min-h-[40vh] h-[60vh] w-full bg-black/50">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold text-[#5ebd8a]">{selectedProject.title}</h3>
                  {selectedProject.live !== '#' && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center justify-center rounded-lg bg-[#5ebd8a] px-5 py-2 text-sm font-semibold text-[#071f14] transition hover:bg-[#3da872] shadow-glow"
                    >
                      Visit Project
                    </a>
                  )}
                </div>
                <p className="mt-3 text-white/80 leading-relaxed">{selectedProject.description}</p>
                <p className="mt-4 text-sm font-medium text-[#5ebd8a]">{selectedProject.tech.join(' • ')}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
