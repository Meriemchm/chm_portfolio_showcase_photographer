"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      lerp: 0.1,
    });
    window.lenis = lenis;

    let animationFrame: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }
    animationFrame = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return <>{children}</>;
}
