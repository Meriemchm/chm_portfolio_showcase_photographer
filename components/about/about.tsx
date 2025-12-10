"use client";

import Image from "next/image";
import { Container } from "../ui/container";
import SocialMediaIcons from "../ui/socialMediaIcons";

const About = () => {
  return (
    <div className=" relative min-h-screen w-full py-36 flex flex-col items-center">
      {/* Citation en haut à droite */}
      <div className="absolute w-82 h-34 bg-brand flex flex-col justify-end items-start px-12 py-4">
        <p className="text-white italic max-w-xs text-right">
          "Photography is the story I fail to put into words." – Destin Sparks
        </p>
        <SocialMediaIcons className="text-white" size={16} />
      </div>

      {/* Contenu principal */}
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-12 mt-12">
          {/* Texte */}
          <div className="flex flex-col justify-center items-start">
            <h1 className="font-groovy text-[12rem] capitalize leading-none max-w-md text-brand">
              About Me
            </h1>

            <p className="mt-4 text-sm max-w-md">
              I am a passionate photographer, always exploring new perspectives
              and capturing moments that tell a story. Creativity and attention
              to detail are at the heart of my work.
            </p>
          </div>

          {/* Image */}
          <div>
            <Image
              src="/images/1.jpg"
              alt="About Image"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
