'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const links = ['hero', 'about', 'skills', 'events', 'projects', 'contact'];

function ForestLink({
  link,
  onClick,
  className = '',
}: {
  link: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={`#${link}`}
      onClick={onClick}
      className={`group relative rounded-full px-4 py-2 text-sm font-bold capitalize tracking-wide text-emerald-950/80 transition hover:bg-white/45 hover:text-emerald-950 ${className}`}
    >
      {link}
      <span className="absolute inset-x-5 bottom-1 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-emerald-700 to-lime-400 transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < 60 || currentY < lastScrollY.current);
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 z-50 w-full px-4 py-4 transition-transform duration-300"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-115%)' }}
    >
      <nav className="relative mx-auto hidden max-w-4xl items-center justify-between rounded-full border border-white/35 bg-white/35 px-4 py-2 shadow-[0_18px_55px_rgba(4,49,27,0.18)] backdrop-blur-xl md:flex">
        <a href="#hero" className="flex items-center gap-2 rounded-full bg-emerald-950/90 px-4 py-2 text-sm font-black text-lime-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
          <Leaf size={16} className="text-lime-300" />
          Gerbil
        </a>

        <div className="flex items-center gap-1">
          {links.map((link) => (
            <ForestLink key={link} link={link} />
          ))}
        </div>
      </nav>

      <div className="flex items-center justify-end md:hidden">
        <button
          type="button"
          onClick={() => setOpen((isOpen) => !isOpen)}
          className="rounded-2xl border border-white/35 bg-white/40 p-3 text-emerald-950 shadow-[0_12px_35px_rgba(4,49,27,0.16)] backdrop-blur-xl"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <div className="flex w-5 flex-col gap-[5px]">
            <span className={`h-[2px] rounded-full bg-current transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-[2px] rounded-full bg-current transition ${open ? 'scale-x-0 opacity-0' : ''}`} />
            <span className={`h-[2px] rounded-full bg-current transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 max-w-sm rounded-[1.75rem] border border-white/35 bg-white/45 p-3 shadow-[0_18px_55px_rgba(4,49,27,0.22)] backdrop-blur-xl md:hidden"
          >
            {links.map((link) => (
              <ForestLink key={link} link={link} onClick={() => setOpen(false)} className="block text-center" />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
