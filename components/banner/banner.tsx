"use client";

import Image from "next/image";
import { useGsapFade } from "@/hooks/useGsapFade";

export const Banner = () => {
  const fadeUp = useGsapFade("up");

  return (
    <div className="bg-brand h-96 w-full flex justify-center items-center overflow-hidden">
      <h1
        ref={fadeUp}
        className="aboreto-font lg:text-8xl md:text-7xl text-4xl text-white text-center"
      >
        Anna Dilan
      </h1>
    </div>
  );
};
