'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['hero', 'about', 'skills', 'events', 'projects', 'contact'];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < 50 || currentY < lastScrollY.current);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 z-50 w-full px-4 py-3 transition-transform duration-400"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-110%)' }}
    >
      {/* ═══ DESKTOP ═══ */}
      <nav
        className="
          relative mx-auto hidden max-w-2xl md:flex items-center justify-center
          rounded-xl px-6 py-2.5
          border-2 border-[#8b6914]/40
        "
        style={{
          background: '#c49a3c',
          boxShadow: '0 4px 0 #9a7520, 0 6px 16px rgba(0,0,0,0.25)',
        }}
      >
        {/* Cartoonish wood grain — simple horizontal bands */}
        <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `
                linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.06) 20%, transparent 22%,
                  transparent 45%, rgba(0,0,0,0.04) 47%, transparent 49%,
                  transparent 70%, rgba(0,0,0,0.06) 72%, transparent 74%)
              `,
            }}
          />
          {/* Highlight strip at top for cartoon 3D feel */}
          <div className="absolute top-0 left-2 right-2 h-[3px] rounded-full bg-[#e8c86a]/50" />
        </div>

        {/* Nail dots */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#7a5c15] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]" />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#7a5c15] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]" />

        {/* Links */}
        <div className="relative z-10 flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="group relative py-1 text-sm font-bold capitalize text-[#4a2e08] tracking-wide transition-colors hover:text-[#1a0f00]"
            >
              {l}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#4a2e08] rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </nav>

      {/* ═══ MOBILE ═══ */}
      <div className="flex items-center justify-end md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="relative rounded-lg p-2.5 border-2 border-[#8b6914]/40"
          style={{
            background: '#c49a3c',
            boxShadow: '0 3px 0 #9a7520, 0 4px 10px rgba(0,0,0,0.2)',
          }}
        >
          <div className="absolute top-[3px] left-1 right-1 h-[2px] rounded-full bg-[#e8c86a]/40" />
          <div className="flex flex-col gap-[5px] w-5">
            <span className={`h-[2px] bg-[#4a2e08] rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`h-[2px] bg-[#4a2e08] rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-0' : ''}`} />
            <span className={`h-[2px] bg-[#4a2e08] rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-2 mx-auto max-w-sm rounded-xl p-2 md:hidden border-2 border-[#8b6914]/40"
            style={{
              background: '#c49a3c',
              boxShadow: '0 4px 0 #9a7520, 0 6px 16px rgba(0,0,0,0.3)',
            }}
          >
            <div className="absolute top-[3px] left-2 right-2 h-[2px] rounded-full bg-[#e8c86a]/40" />
            {links.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                onClick={() => setOpen(false)}
                className="group relative block py-2.5 px-4 text-center capitalize text-[#4a2e08] font-bold text-sm rounded-lg transition-colors hover:bg-[#4a2e08]/10"
              >
                {l}
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#4a2e08] rounded-full transition-all duration-300 group-hover:w-1/2" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
