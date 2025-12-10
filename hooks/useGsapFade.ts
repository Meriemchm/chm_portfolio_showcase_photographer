"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right";

export function useGsapFade(
  direction: Direction = "up",
  duration: number = 1,
  distance: number = 100
) {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    if (!refs.current.length) return;

    const ctx = gsap.context(() => {
      const fromVars: Record<string, number> = {};

      switch (direction) {
        case "up":
          fromVars.y = distance;
          break;
        case "down":
          fromVars.y = -distance;
          break;
        case "left":
          fromVars.x = distance;
          break;
        case "right":
          fromVars.x = -distance;
          break;
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
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });

      ScrollTrigger.refresh();
    });

    // Backup  mobile/iOS
    const mobileTimeout = setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      ctx.revert();
      clearTimeout(mobileTimeout);
    };
  }, [direction, duration, distance, pathname]);

  //  refs
  const setRef = (el: HTMLElement | null, index?: number) => {
    if (index !== undefined) {
      refs.current[index] = el;
    } else {
      refs.current[0] = el;
    }
  };

  return setRef;
}
