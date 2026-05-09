import { type RefObject, useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";

export type ScrollRevealOptions = {
  selector?: string;
  start?: string;
  stagger?: number;
  y?: number;
  /** Escala inicial (menor que 1) para efeito zoom-in ao entrar na viewport */
  scaleFrom?: number;
  duration?: number;
  once?: boolean;
};

export function useScrollReveal(
  scope: RefObject<HTMLElement | null>,
  options: ScrollRevealOptions = {}
) {
  const {
    selector = "[data-reveal]",
    start = "top 88%",
    stagger = 0.09,
    y = 36,
    scaleFrom = 1,
    duration = 0.65,
    once = true,
  } = options;

  useLayoutEffect(() => {
    const el = scope.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll(selector);
      if (!targets.length) return;

      gsap.set(targets, { opacity: 0, y, scale: scaleFrom });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once ? "play none none none" : "play none reverse none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [selector, start, stagger, y, scaleFrom, duration, once, scope]);
}
