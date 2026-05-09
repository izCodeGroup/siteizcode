import { useLayoutEffect, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";

const THRESHOLD = 48;

export function useNavbarScrollTrigger() {
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const update = () => setScrolled(window.scrollY > THRESHOLD);

    update();

    const st = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 0,
      end: "max",
      onUpdate: update,
    });

    return () => {
      st.kill();
    };
  }, []);

  return scrolled;
}
