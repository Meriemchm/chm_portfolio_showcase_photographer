"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { motion, useMotionValue } from "framer-motion";
import Lenis from "lenis";

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

const Hero = () => {
  const yFront = useMotionValue(0);
  const yBack = useMotionValue(0);
  const scaleFront = useMotionValue(1);
  const opacityText = useMotionValue(1);
  const blurText = useMotionValue("0px");

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      lerp: 0.1,
    });

    (window as any).lenis = lenis; // expose globalement si tu veux

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const maxScroll = 1000;

    const onScroll = () => {
      const scroll = lenis.scroll;
      const progress = Math.min(scroll / maxScroll, 1);

      yFront.set(progress * 100);
      yBack.set(progress * 150);
      scaleFront.set(1 - progress * 0.05);
      opacityText.set(1 - progress * 0.6);
      blurText.set(`${progress * 6}px`);
    };

    lenis.on("scroll", onScroll);
    return () => lenis.off("scroll", onScroll);
  }, [yFront, yBack, scaleFront, opacityText, blurText]);

  return (
    <section className="relative min-h-screen bg-brand flex justify-center items-center overflow-hidden">
      {/* Top left text */}
      <motion.p
        style={{ opacity: opacityText, filter: blurText }}
        className="absolute top-36 left-6 max-w-xs text-white text-xs font-aboreto italic z-30"
      >
        “Creativity begins where fear ends.”
      </motion.p>

      {/* Bottom right text */}
      <motion.p
        style={{ opacity: opacityText, filter: blurText }}
        className="absolute top-42 md:top-auto  md:bottom-6 right-6 max-w-xs text-white text-xs font-aboreto italic z-30"
      >
        “To create is to give a soul to an idea.”
      </motion.p>

      {/* Image frontale */}
      <motion.div className="absolute z-20 bottom-0 w-120 h-120 md:w-auto md:h-auto" style={{ y: yFront, scale: scaleFront }}>
        <Image
          src="/images/hero-2.webp"
          alt="hero-image"
          height={720}
          width={720}
          priority
        />
      </motion.div>

      {/* Image arrière */}
      <motion.div className="absolute z-10 bottom-0 opacity-80 w-120 h-120 md:w-auto md:h-auto" style={{ y: yBack }}>
        <Image
          src="/icons/circle.svg"
          alt="hero-background"
          height={800}
          width={800}
          priority
        />
      </motion.div>

      {/* Boutons */}
      <motion.div
        style={{ opacity: opacityText, filter: blurText }}
        className="absolute bottom-10 md:bottom-20 flex gap-4 z-30"
      >
        <Link href="/about" >
          <Button variant="clean">About</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">Contact</Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
