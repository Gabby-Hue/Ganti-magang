'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useMemo, useRef } from 'react';

type ParallaxLayer = {
  src: string;
  alt: string;
  depth: number;
  zIndex: number;
  priority?: boolean;
};

const SCENE_LAYERS: ParallaxLayer[] = [
  { src: '/parallax/hill1.png', alt: 'far misty mountain ridge', depth: 0.08, zIndex: 1, priority: true },
  { src: '/parallax/hill2.png', alt: 'left jungle hill', depth: 0.14, zIndex: 2, priority: true },
  { src: '/parallax/hill3.png', alt: 'right jungle hill', depth: 0.2, zIndex: 3, priority: true },
  { src: '/parallax/tree.png', alt: 'tropical tree silhouette', depth: 0.16, zIndex: 4 },
  { src: '/parallax/hill4.png', alt: 'front left foliage hill', depth: 0.26, zIndex: 5 },
  { src: '/parallax/hill5.png', alt: 'front right foliage hill', depth: 0.32, zIndex: 6 },
  { src: '/parallax/plant.png', alt: 'foreground jungle plants', depth: 0.38, zIndex: 7, priority: true },
];

const LEAF_PARALLAX = {
  x: 0.16,
  y: -0.14,
  rotate: 0.012,
};

function useHeroParallax(disabled: boolean) {
  const rootRef = useRef<HTMLElement>(null);
  const leafRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root || disabled) {
      return undefined;
    }

    const layers = Array.from(root.querySelectorAll<HTMLElement>('[data-depth]'));
    let frame = 0;

    const updateParallax = () => {
      frame = 0;
      const scrollY = Math.min(window.scrollY, window.innerHeight * 1.25);

      for (const layer of layers) {
        const depth = Number(layer.dataset.depth) || 0;
        layer.style.transform = `translate3d(0, ${scrollY * depth}px, 0)`;
      }

      if (textRef.current) {
        const opacity = Math.max(0, 1 - scrollY / 520);
        textRef.current.style.transform = `translate3d(0, ${scrollY * 0.42}px, 0)`;
        textRef.current.style.opacity = opacity.toString();
      }

      if (leafRef.current) {
        leafRef.current.style.transform = [
          `translate3d(${scrollY * LEAF_PARALLAX.x}px, ${scrollY * LEAF_PARALLAX.y}px, 0)`,
          `rotate(${scrollY * LEAF_PARALLAX.rotate}deg)`,
        ].join(' ');
      }
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateParallax);
    };

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [disabled]);

  return { rootRef, leafRef, textRef };
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const { rootRef, leafRef, textRef } = useHeroParallax(Boolean(prefersReducedMotion));

  const layerMarkup = useMemo(
    () =>
      SCENE_LAYERS.map((layer) => (
        <div
          key={layer.src}
          data-depth={layer.depth}
          className="absolute inset-0 transform-gpu will-change-transform"
          style={{ zIndex: layer.zIndex }}
        >
          <Image
            src={layer.src}
            alt={layer.alt}
            fill
            sizes="100vw"
            className="pointer-events-none object-cover object-bottom"
            priority={layer.priority}
          />
        </div>
      )),
    [],
  );

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#dff8ed]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.95),rgba(207,246,226,0.9)_26%,rgba(105,195,153,0.82)_58%,rgba(13,88,53,0.78)_100%)]" />
      <div className="absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="absolute inset-0 z-[3] bg-[radial-gradient(circle_at_18%_30%,rgba(232,255,230,0.42),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(122,209,156,0.24),transparent_30%)]" />

      {layerMarkup}

      <div
        ref={leafRef}
        className="pointer-events-none absolute -right-[22rem] -top-[10rem] z-[8] w-[980px] select-none transform-gpu will-change-transform sm:-right-[28rem] sm:w-[1280px] lg:-right-[34rem] lg:-top-[14rem] lg:w-[1680px] xl:-right-[38rem] xl:w-[1900px]"
      >
        <Image
          src="/parallax/leaf.png"
          alt="large foreground fern leaf"
          width={1900}
          height={1900}
          className="h-auto w-full object-contain opacity-95 drop-shadow-[0_28px_60px_rgba(4,45,24,0.22)]"
          priority
        />
      </div>

      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-20 mx-5 max-w-4xl text-center text-[#06351f] will-change-transform"
      >
        <p className="mx-auto mb-4 w-fit rounded-full border border-emerald-700/15 bg-white/55 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-emerald-900 shadow-[0_10px_30px_rgba(10,75,44,0.12)] backdrop-blur-md sm:text-sm">
          Green Digital Garden
        </p>
        <h1 className="text-5xl font-black leading-none tracking-tight drop-shadow-[0_8px_28px_rgba(255,255,255,0.65)] sm:text-7xl lg:text-8xl">
          Hello, I&apos;m Gerbil
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-emerald-950/78 sm:text-lg">
          I build calm, lively, and immersive web experiences with fresh motion, clean code, and an asri jungle mood.
        </p>
      </motion.div>

      <motion.div
        animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        className="absolute bottom-8 z-30 rounded-full border border-white/35 bg-emerald-950/25 px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(3,45,24,0.24)] backdrop-blur-md"
      >
        Scroll to explore ↓
      </motion.div>
    </section>
  );
}
