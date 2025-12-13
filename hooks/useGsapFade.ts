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
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    if (!refs.current.length) return;

    // Fix mobile resize / address bar
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

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

        // Fallback sécurité (évite invisible forever)
        gsap.set(el, { opacity: 1 });

        gsap.from(el, {
          ...fromVars,
          opacity: 0,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: isMobile ? "top bottom" : "top 80%",
            once: true,
          },
        });
      });

      // Refresh après layout stable
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, containerRef);

    // Refresh après chargement complet (images, fonts, etc.)
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      ctx.revert();
    };
  }, [direction, duration, distance]);

  const setRef = (el: HTMLElement | null, index = 0) => {
    refs.current[index] = el;
  };

  const setContainer = (el: HTMLDivElement | null) => {
    containerRef.current = el;
  };

  return { setRef, setContainer };
}
