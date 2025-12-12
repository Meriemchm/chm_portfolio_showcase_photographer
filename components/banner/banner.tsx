"use client";
import { useGsapFade } from "@/hooks/useGsapFade";

export const Banner = () => {
  const { setRef, setContainer } = useGsapFade("up");

  return (
    <div
      ref={setContainer}
      className=" bg-brand py-24 h-96 w-full flex flex-col gap-8 justify-center items-center overflow-hidden"
    >
      <h1
        ref={setRef}
        className="aboreto-font lg:text-8xl md:text-7xl text-4xl text-white text-center"
      >
        Anna Dilan
      </h1>
    </div>
  );
};
