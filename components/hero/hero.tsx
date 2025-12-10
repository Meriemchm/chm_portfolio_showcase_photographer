import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";


const Hero = () => {
  return (
    <div className="relative min-h-screen bg-brand flex justify-center items-center overflow-hidden">

      {/* Texte haut gauche */}
      <p className="absolute top-36 left-6 max-w-xs text-white text-xs font-aboreto italic">
        « La créativité commence là où s’arrête la peur. »
      </p>

      {/* Texte bas droite */}
      <p className="absolute bottom-6 right-6 max-w-xs text-white text-xs font-aboreto italic">
        « Créer, c’est donner une âme à une idée. »
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
          <Button variant="clean" >About</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">Contact</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
