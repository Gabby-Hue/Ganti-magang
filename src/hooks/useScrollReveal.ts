'use client';
import { useEffect, useRef, useCallback } from 'react';

/**
 * Immersive coverflow-style scroll animation hook.
 *
 * Instead of binary visible/hidden, this computes a continuous
 * progress value (0→1→0) based on the element's position in the
 * viewport and applies smooth transforms via inline styles:
 *
 * - Entering from bottom: fade in + scale up + translateY up + slight rotateX
 * - Fully visible (center): full opacity, no transform
 * - Exiting from top: fade out + scale down + translateY up + slight rotateX
 *
 * Uses requestAnimationFrame for buttery 60fps animations.
 */
export function useCoverflowScroll<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const rafRef = useRef<number>(0);
  const lastProgress = useRef<number>(-1);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const elCenter = rect.top + rect.height / 2;

    // progress: 0 = element center at bottom of viewport
    //           1 = element center at center of viewport
    //           0 = element center at top of viewport
    // Clamp between 0 and 1
    const rawProgress = elCenter / vh; // 0 (top) to >1 (below)

    // Map so that 0.5 (center) = 1.0 progress, edges = 0
    // Use a smooth curve: 1 - (2*(rawProgress - 0.5))^2
    const centered = rawProgress - 0.5; // -0.5 to +0.5 when centered
    const distance = Math.abs(centered) * 2; // 0 when centered, 1 at edges
    const progress = Math.max(0, 1 - distance * distance); // quadratic falloff

    // Only update DOM if progress changed significantly (perf)
    if (Math.abs(progress - lastProgress.current) < 0.002) return;
    lastProgress.current = progress;

    // Determine direction: positive = entering from bottom, negative = exiting from top
    const direction = centered > 0 ? 1 : -1;

    // Calculate transform values
    const opacity = Math.max(0, Math.min(1, progress * 1.5)); // faster opacity
    const scale = 0.88 + 0.12 * progress; // 0.88 → 1.0
    const translateY = (1 - progress) * 60 * direction; // ±60px
    const rotateX = (1 - progress) * 4 * direction; // ±4deg

    el.style.opacity = `${opacity}`;
    el.style.transform = `perspective(1200px) translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial styles
    el.style.willChange = 'opacity, transform';
    el.style.transformOrigin = 'center center';

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    // Run initial calculation
    update();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  return ref;
}
