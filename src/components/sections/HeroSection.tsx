'use client';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

/* ── parallax layer config ────────────────────────────────────────────
   Each layer scrolls at a different speed to create depth.
   speed → higher = moves faster on scroll (feels "closer")
   zIndex → stacking order                                              */
const layers: {
  src: string;
  alt: string;
  zIndex: number;
  speed: number;
  style?: React.CSSProperties;
}[] = [
    { src: '/parallax/hill1.png', alt: 'far mountains', zIndex: 1, speed: 0.15 },
    { src: '/parallax/hill2.png', alt: 'mid hills left', zIndex: 2, speed: 0.25 },
    { src: '/parallax/hill3.png', alt: 'mid hills right', zIndex: 3, speed: 0.35 },
    { src: '/parallax/hill4.png', alt: 'front hill left', zIndex: 4, speed: 0.45 },
    { src: '/parallax/hill5.png', alt: 'front hill right', zIndex: 5, speed: 0.55 },
    { src: '/parallax/tree.png', alt: 'palm tree', zIndex: 3, speed: 0.30 },
    { src: '/parallax/plant.png', alt: 'ground vegetation', zIndex: 6, speed: 0.65 },
  ];

export function HeroSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const leafRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const parallaxLayers = gsap.utils.toArray<HTMLElement>('[data-parallax-speed]');

      const onScroll = () => {
        const scrollY = window.scrollY;

        // Move each image layer at its own speed
        parallaxLayers.forEach((layer) => {
          const speed = Number(layer.dataset.parallaxSpeed) || 0;
          gsap.set(layer, { y: scrollY * speed });
        });

        // Text rises up as you scroll
        if (textRef.current) {
          gsap.set(textRef.current, { y: scrollY * 0.7, opacity: 1 - scrollY / 600 });
        }

        // Leaf flies away diagonally
        if (leafRef.current) {
          gsap.set(leafRef.current, {
            y: scrollY * -0.4,
            x: scrollY * 0.4,
            rotate: scrollY * 0.04,
          });
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      return () => window.removeEventListener('scroll', onScroll);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* ── sky / atmosphere ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#ddf4ee] to-[#80ccb4]" />

      {/* ── parallax image layers ── */}
      {layers.map((layer) => (
        <div
          key={layer.src}
          data-parallax-speed={layer.speed}
          className="absolute inset-0 will-change-transform"
          style={{ zIndex: layer.zIndex, ...layer.style }}
        >
          <Image
            src={layer.src}
            alt={layer.alt}
            fill
            sizes="100vw"
            className="object-cover object-bottom pointer-events-none"
            priority
          />
        </div>
      ))}

      {/* ── leaf (top-right, separate parallax) ── */}
      <div
        ref={leafRef}
        className="absolute right-[-10%] top-[-5%] w-[800px] sm:w-[1000px] lg:w-[1400px] xl:w-[1600px] will-change-transform pointer-events-none"
        style={{ zIndex: 5 }}
      >
        <Image
          src="/parallax/leaf.png"
          alt="fern leaf"
          width={1600}
          height={1600}
          className="w-full h-auto object-contain object-top right"
          priority
        />
      </div>

      {/* ── hero text ── */}
      <motion.h1
        ref={textRef}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative text-center text-4xl font-black leading-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)] sm:text-6xl lg:text-7xl will-change-transform"
        style={{ zIndex: 10, fontFamily: "'Poppins', sans-serif" }}
      >
        Hello, I&apos;m Gerbil
      </motion.h1>

      {/* ── scroll indicator ── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-sm text-white/80"
        style={{ zIndex: 20 }}
      >
        Scroll to explore ↓
      </motion.div>
    </section>
  );
}
