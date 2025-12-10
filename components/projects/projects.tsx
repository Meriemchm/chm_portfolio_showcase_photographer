"use client";
import { Container } from "../ui/container";
import { SectionTitle } from "../ui/section-title";
import { Project } from "./project";



export const Projects = () => {

  return (
    <div className="relative min-h-screen py-36 bg-primary">
      <Container className="relative z-20 flex flex-col items-center">
        <SectionTitle title="Projects" subtitle="" keyword="Projects" />

        {/* MASONRY GRID */}

        <Project />
      </Container>

      {/* Citation  */}
      <div className="absolute w-96 h-34 right-0 bottom-16 bg-brand flex justify-end items-start px-12 py-6">
        <p className="text-white italic max-w-xs text-right">
          "Photography is the story I fail to put into words." – Destin Sparks
        </p>
      </div>
    </div>
  );
};
