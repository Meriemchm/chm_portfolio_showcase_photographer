"use client";

import Image from "next/image";
import { Container } from "../ui/container";
import SocialMediaIcons from "../ui/socialMediaIcons";
import { useGsapFade } from "@/hooks/useGsapFade";
import { motion } from "framer-motion";

const About = () => {
  const { setRef: setRefLeft } = useGsapFade("left");
  const { setRef: setRefRight } = useGsapFade("right");

  return (
    <div className="relative min-h-screen w-full py-20 md:py-36 flex md:flex-col flex-col-reverse items-center">
      {/* Citation  */}
      <div className="absolute left-14 bottom-8 md:left-auto md:bottom-auto z-40 w-72 md:w-82 h-auto bg-brand flex flex-col justify-end items-start px-4 md:px-12 py-4">
        <p className="text-white italic max-w-xs text-right text-sm md:text-base">
          "Photography is the story I fail to put into words." – Destin Sparks
        </p>
        <SocialMediaIcons className="text-white mt-2" size={16} />
      </div>

      {/* Contenu principal */}
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-8 md:gap-12 mt-8 md:mt-12">
          {/* Texte */}
          <div
            ref={setRefRight}
            className="flex flex-col justify-center items-start"
          >
            <h1 className="font-groovy text-6xl sm:text-8xl md:text-[12rem] capitalize leading-tight md:leading-none max-w-full md:max-w-md text-brand">
              About Me
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-sm max-w-full md:max-w-md">
              My name is Anna Dilan, I am a passionate photographer, always
              exploring new perspectives and capturing moments that tell a
              story. Creativity and attention to detail are at the heart of my
              work.
            </p>
          </div>

          {/* Image */}
          <div
            ref={setRefLeft}
            className="relative w-full max-w-md md:w-[500px] md:h-[650px] h-80 sm:h-96 overflow-hidden"
          >
            <motion.div
              initial={{ width: "100%" }}
              whileInView={{ width: 0 }}
              transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
              className="absolute inset-0 bg-white z-20"
            />

            {/* Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
              className="w-full h-full relative z-10"
              viewport={{ once: true }}
            >
              <Image
                src="/images/1.jpg"
                alt="About Image"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
