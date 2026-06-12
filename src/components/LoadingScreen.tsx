'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = prev < 70 ? 3 : prev < 90 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const isComplete = progress === 100;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              'radial-gradient(circle at 50% 40%, #0f4f34 0%, #071f14 50%, #030d09 100%)',
          }}
        >
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#5ebd8a]/5 blur-[120px] pointer-events-none" />

          {/* ══ LEFT LEAF — mirrored, same size as hero leaf ══ */}
          <motion.div
            initial={{ opacity: 0, y: '-30%', rotate: -12 }}
            animate={
              isComplete
                ? { y: '-40%', opacity: 0, rotate: -8 }
                : { y: 0, opacity: 1, rotate: 0 }
            }
            transition={
              isComplete
                ? { duration: 0.8, ease: 'easeIn' }
                : { type: 'spring', stiffness: 40, damping: 12, delay: 0.2 }
            }
            className="absolute left-[-10%] top-[-5%] w-[800px] sm:w-[1000px] lg:w-[1400px] xl:w-[1600px] pointer-events-none"
            style={{ zIndex: 2, transform: 'scaleX(-1)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/parallax/leaf-left.png"
              alt=""
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* ══ RIGHT LEAF — same size as hero leaf ══ */}
          <motion.div
            initial={{ opacity: 0, y: '-30%', rotate: 12 }}
            animate={
              isComplete
                ? { y: '-40%', opacity: 0, rotate: 8 }
                : { y: 0, opacity: 1, rotate: 0 }
            }
            transition={
              isComplete
                ? { duration: 0.8, ease: 'easeIn' }
                : { type: 'spring', stiffness: 40, damping: 12, delay: 0.4 }
            }
            className="absolute right-[-10%] top-[-5%] w-[800px] sm:w-[1000px] lg:w-[1400px] xl:w-[1600px] pointer-events-none"
            style={{ zIndex: 2 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/parallax/leaf-right.png"
              alt=""
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* ══ CENTER CONTENT ══ */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Leaf icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
              className="relative mb-6"
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                className="drop-shadow-[0_0_30px_rgba(94,189,138,0.4)]"
              >
                <path
                  d="M30 5C30 5 50 15 50 35C50 45 42 55 30 55C18 55 10 45 10 35C10 15 30 5 30 5Z"
                  fill="url(#leafGrad)"
                  stroke="#5ebd8a"
                  strokeWidth="1.5"
                />
                <path
                  d="M30 15V45M30 25L22 32M30 32L38 25"
                  stroke="#071f14"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="leafGrad" x1="10" y1="5" x2="50" y2="55">
                    <stop offset="0%" stopColor="#5ebd8a" />
                    <stop offset="100%" stopColor="#1a7d5a" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full border-2 border-[#5ebd8a]/30"
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl sm:text-3xl font-black text-white tracking-wider"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              GERBIL
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-1 text-xs tracking-[0.3em] text-[#5ebd8a]/70 uppercase"
            >
              Portfolio
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 200 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-8 h-[3px] rounded-full bg-white/10 overflow-hidden"
              style={{ width: 200 }}
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#1a7d5a] to-[#5ebd8a]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>

            {/* Percentage */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.6 }}
              className="mt-3 text-xs tabular-nums text-white/50 font-mono"
            >
              {progress}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
