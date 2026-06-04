import { useEffect, useState } from "react";

/** Returns true when the user prefers reduced motion. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

/** Shared framer-motion variants that respect reduced motion. */
export function useRevealVariants(distance = 24) {
  const reduced = useReducedMotion();
  return {
    hidden: { opacity: 0, y: reduced ? 0 : distance },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : 0.6,
        delay: reduced ? 0 : i * 0.06,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };
}
