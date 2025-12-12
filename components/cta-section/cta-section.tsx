"use client";
import Image from "next/image";
import Corner from "../ui/corner";
import { useGsapFade } from "@/hooks/useGsapFade";
import { motion } from "framer-motion";

export default function CtaSection() {
  const { setRef: setRefLeft } = useGsapFade("left");
  const { setRef: setRefRight } = useGsapFade("right");

  return (
    <section className="relative w-full bg-black text-white py-16 md:py-20 px-4 md:px-6">
      {/* COINS */}
      <div className="pointer-events-none absolute inset-0">
        <Corner className="absolute top-0 left-0 -rotate-90" />
        <Corner className="absolute top-0 right-0 -rotate-360" />
        <Corner className="absolute bottom-0 left-0 rotate-180" />
        <Corner className="absolute bottom-0 right-0 rotate-90" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 relative">
        {/* VISION */}
        <div ref={setRefLeft} className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-aboreto mb-4">VISION</h2>
          <p className="text-gray-300 leading-relaxed max-w-full sm:max-w-sm mx-auto md:mx-0 text-sm sm:text-base">
            My work captures emotion, authenticity, and the unspoken. I focus on
            powerful compositions where light, texture, and expression become
            the language of the image.
          </p>
        </div>

        {/* IMAGE */}
        <motion.div
          className="shrink-0 w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] relative bg-brand p-4 border border-white/50"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-brand rounded-full" />
          <Image
            src="/images/face.png"
            height={500}
            width={500}
            alt="Portrait"
            className="w-full h-full object-cover rounded-full relative z-10"
          />
        </motion.div>

        {/* STYLE */}
        <div ref={setRefRight} className="flex-1 text-center md:text-right mt-8 md:mt-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-aboreto mb-4">STYLE</h2>
          <p className="text-gray-300 leading-relaxed max-w-full sm:max-w-sm ml-auto text-sm sm:text-base">
            My photography blends modern aesthetics with raw storytelling. Each
            portrait reflects character, mood, and depth—designed to engage,
            intrigue, and stay memorable.
          </p>
        </div>
      </div>
    </section>
  );
}
