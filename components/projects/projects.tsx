"use client";
import { useGsapFade } from "@/hooks/useGsapFade";
import { Container } from "../ui/container";
import { SectionTitle } from "../ui/section-title";
import { Project } from "./project";

export const Projects = () => {
  const { setRef: setRefRight, setContainer } = useGsapFade("right");

  return (
    <div ref={setContainer} className="relative min-h-screen py-36 bg-primary">
      <Container className="relative z-20 flex flex-col items-center">
        <SectionTitle title="Projects" subtitle="" keyword="Projects" />

        {/* MASONRY GRID */}

        <Project />
      </Container>

      {/* Citation  */}
      <div ref={setRefRight} className="absolut w-72 md:w-96 h-34 right-0 bottom-16 z-40 bg-brand flex justify-end items-start px-12 py-6">
        <p className="text-white italic max-w-xs text-right md:text-base text-sm">
          "Photography is the story I fail to put into words." – Destin Sparks
        </p>
      </div>
    </div>
  );
};
