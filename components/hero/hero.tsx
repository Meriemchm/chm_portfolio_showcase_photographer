import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-brand flex justify-center items-center overflow-hidden">
      {/* Top left text */}
      <p className="absolute top-36 left-6 max-w-xs text-white text-xs font-aboreto italic">
        “Creativity begins where fear ends.”
      </p>

      {/* Bottom right text */}
      <p className="absolute bottom-6 right-6 max-w-xs text-white text-xs font-aboreto italic">
        “To create is to give a soul to an idea.”
      </p>

      {/* Image du dessus */}
      <Image
        src="/images/hero-2.webp"
        alt="hero-image"
        height={720}
        width={720}
        priority
        className="z-20"
      />

      {/* Image du dessous */}
      <Image
        src="/icons/circle.svg"
        alt="hero-background"
        height={700}
        width={700}
        className="absolute z-10 opacity-80"
        priority
      />

      {/* Boutons About / Contact */}
      <div className="absolute bottom-20 flex gap-4 z-30">
        <Link href="/about">
          <Button variant="clean">About</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">Contact</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
