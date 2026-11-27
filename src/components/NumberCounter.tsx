import { useEffect, useRef, useState } from 'react';

interface NumberCounterProps {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  fallback: string;
  durationMs?: number;
}

export default function NumberCounter({
  target,
  decimals = 0,
  prefix = '',
  suffix = '',
  fallback,
  durationMs = 1800,
}: NumberCounterProps) {
  const [displayValue, setDisplayValue] = useState<string>(fallback);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    hasAnimatedRef.current = false;
    setDisplayValue(fallback);

    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setDisplayValue(fallback);
      return;
    }

    let rafId = 0;

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;

        const formatted =
          decimals > 0
            ? current.toFixed(decimals).replace('.', ',')
            : String(Math.round(current));

        setDisplayValue(`${prefix}${formatted}${suffix}`);

        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setDisplayValue(fallback);
        }
      };

      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.disconnect();
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [target, decimals, prefix, suffix, fallback, durationMs]);

  return <span ref={ref}>{displayValue}</span>;
}
