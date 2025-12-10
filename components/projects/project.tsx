"use client";
import Image from "next/image";
import Masonry from "react-masonry-css";

const images = [
  {
    src: "/images/Image-1.png",
    title: "2024 Autumn/Fall",
    desc: "Creative Direction — Photography",
  },
  {
    src: "/images/Image-2.png",
    title: "Urban Shadows",
    desc: "Street Photography",
  },
  {
    src: "/images/Image-3.png",
    title: "Night Portrait",
    desc: "Cinematic — Low Light",
  },
  {
    src: "/images/Image-4.png",
    title: "Golden Hour",
    desc: "Outdoor Session",
  },
  {
    src: "/images/Image-5.png",
    title: "Fashion Week 2024",
    desc: "Editorial Shot",
  },
  {
    src: "/images/Image-6.png",
    title: "Monochrome Study",
    desc: "Black & White — Fine Art",
  },
  {
    src: "/images/Image-7.png",
    title: "Nature Flow",
    desc: "Landscape Photography",
  },
  {
    src: "/images/Image-8.png",
    title: "Street Flow",
    desc: "Urban Story",
  },
];

// BREAKPOINTS
const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

export const Project = () => {
  return (
    <div className="w-full mt-12">
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-6"
        columnClassName="masonry-column"
      >
        {images.map((image, index) => (
          <div key={index} className="relative mb-6 group overflow-hidden">
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
