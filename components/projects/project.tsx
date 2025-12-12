"use client";
import { useGsapFade } from "@/hooks/useGsapFade";
import Image from "next/image";
import Masonry from "react-masonry-css";
import {ProjectsData} from "@/data/ProjectsData"

// BREAKPOINTS
const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

export const Project = () => {
  const { setRef, setContainer } = useGsapFade("up");
  return (
    <div ref={setContainer}  className="w-full mt-12">
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-6"
        columnClassName="masonry-column"
        
      >
        {ProjectsData.map((image, index) => (
          <div key={index} ref={(el) => setRef(el,index)} className="relative mb-6 group overflow-hidden">
            {/* IMAGE */}
            <Image
              src={image.src}
              alt={image.title}
              width={600}
              height={800}
              className="w-full h-auto object-cover duration-500 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div
              className="absolute inset-0 bg-black/60 opacity-0 
                         group-hover:opacity-100 transition-opacity duration-500 
                         flex flex-col justify-end p-6"
            >
              <h3 className="text-white text-lg font-aboreto">{image.title}</h3>
              <p className="text-white/80 text-sm mt-1">{image.desc}</p>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};
