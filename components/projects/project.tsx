"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { ProjectsData } from "@/data/ProjectsData";

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

// Variants 
const fadeUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const Project = () => {
  return (
    <div className="w-full mt-12">
      <Masonry breakpointCols={breakpointColumns} className="flex gap-6">
        {ProjectsData.map((image, index) => (
          <motion.div
            key={image.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, delay: index * 0.1 }}
            variants={fadeUp}
            className="relative mb-6 group overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.title}
              width={600}
              height={800}
              className="w-full h-auto object-cover duration-500 group-hover:scale-110"
            />

            <div
              className="absolute inset-0 bg-black/60 opacity-0 
                         group-hover:opacity-100 transition-opacity duration-500 
                         flex flex-col justify-end p-6"
            >
              <h3 className="text-white text-lg font-aboreto">{image.title}</h3>
              <p className="text-white/80 text-sm mt-1">{image.desc}</p>
            </div>
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
};
