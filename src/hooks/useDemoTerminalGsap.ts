import { type RefObject, useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useDemoTerminalGsap(scope: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const el = scope.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const shell = el.querySelector<HTMLElement>("[data-terminal-shell]");
      const rows = el.querySelectorAll<HTMLElement>("[data-terminal-row]");
      const caption = el.querySelector<HTMLElement>("[data-terminal-caption]");

      if (!shell || !rows.length) return;

      gsap.set(shell, { autoAlpha: 0, y: 28, scale: 0.985 });
      gsap.set(rows, { autoAlpha: 0, y: 16 });
      if (caption) gsap.set(caption, { autoAlpha: 0, y: 10 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          once: true,
        },
      });

      tl.to(shell, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        ease: "power2.out",
      }).to(
        rows,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          stagger: 0.12,
        },
        "-=0.2"
      );

      if (caption) {
        tl.to(
          caption,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.32,
            ease: "power2.out",
          },
          "-=0.15"
        );
      }
    }, el);

    return () => ctx.revert();
  }, [scope]);
}

