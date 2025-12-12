"use client";

import Image from "next/image";
import { useGsapFade } from "@/hooks/useGsapFade";
import Link from "next/link";
import Button from "../ui/button";

export const Banner = () => {
  const fadeUp = useGsapFade("up");

  return (
    <div className=" bg-brand py-24 h-full w-full flex flex-col gap-8 justify-center items-center overflow-hidden">
      <h1
        ref={fadeUp}
        className="aboreto-font lg:text-8xl md:text-7xl text-4xl text-white text-center"
      >
        Anna Dilan
      </h1>
      {/* Boutons About / Contact */}
      <div className="relative z-40 flex gap-4">
        <Link href="/about">
          <Button variant="clean" className="text-white">About</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" className="text-white border border-white">Contact</Button>
        </Link>
      </div>
    </div>
  );
};
