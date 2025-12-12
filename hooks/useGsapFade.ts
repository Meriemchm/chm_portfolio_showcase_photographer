"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right";

export function useGsapFade(
  direction: Direction = "up",
  duration = 1,
  distance = 200
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!refs.current.length) return;

    const ctx = gsap.context(() => {
      const fromVars: Record<string, number> = {};

      switch (direction) {
        case "up": fromVars.y = distance; break;
        case "down": fromVars.y = -distance; break;
        case "left": fromVars.x = distance; break;
        case "right": fromVars.x = -distance; break;
      }

      refs.current.forEach((el) => {
        if (!el) return;

        gsap.from(el, {
          ...fromVars,
          opacity: 0,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, [direction, duration, distance]);

  const setRef = (el: HTMLElement | null, index = 0) => {
    refs.current[index] = el;
  };

  const setContainer = (el: HTMLDivElement | null) => {
    containerRef.current = el;
  };

  return { setRef, setContainer };
}
