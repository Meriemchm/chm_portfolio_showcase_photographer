import Image from "next/image";
import { SlidesCard } from "./slides-card";

interface SlidesProps {
  items: { title: string; description: string; icon: string; image: string }[];
  containerRef: React.RefObject<HTMLDivElement | null>;
  setSlideRef: (el: HTMLDivElement | null, idx: number) => void;
}

export const Slides = ({ items, containerRef, setSlideRef }: SlidesProps) => {
  return (
    <div className="relative md:w-2/3 flex justify-center items-center overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-4 touch-pan-x select-none cursor-grab"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => setSlideRef(el, idx)}
            className="relative shrink-0 w-full"
          >
            {/* Image */}
            <div className="relative h-96 overflow-hidden ">
              <Image
                src={item.image}
                alt={item.title}
                width={700}
                height={700}
                className="w-full h-full object-cover"
                
              />
            </div>

            <SlidesCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
