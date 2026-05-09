import { type RefObject, useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useWorkCardsScrollTrigger(scope: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const el = scope.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-work-card]");
      if (!cards.length) return;

      cards.forEach((card) => {
        const canvas = card.querySelector<HTMLElement>("[data-work-canvas]");

        gsap.set(card, { autoAlpha: 0, y: 36 });
        if (canvas) gsap.set(canvas, { autoAlpha: 0.7, scale: 0.985, transformOrigin: "50% 50%" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            end: "top 45%",
            scrub: 0.35,
          },
        });

        tl.to(card, {
          autoAlpha: 1,
          y: 0,
          ease: "none",
          duration: 1,
        });

        if (canvas) {
          tl.to(
            canvas,
            {
              autoAlpha: 1,
              scale: 1,
              ease: "none",
              duration: 1,
            },
            0
          );
        }
      });
    }, el);

    return () => ctx.revert();
  }, [scope]);
}

