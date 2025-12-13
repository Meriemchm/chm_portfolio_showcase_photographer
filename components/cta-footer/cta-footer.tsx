'use client'
import { useGsapFade } from "@/hooks/useGsapFade";
import Image from "next/image";

export default function CtaFooter() {
  const { setRef: setRefLeft } = useGsapFade("left");
  const { setRef: setRefRight } = useGsapFade("right");
  return (
    <section className="w-full bg-white text-white py-16 md:py-24 px-4 sm:px-6">
      <div className="relative max-w-6xl mx-auto">
        {/* Image container */}
        <div className="relative w-full h-full flex justify-center">
          <Image
            src="/images/cta_footer.png"
            alt="Portrait"
            height={500}
            width={500}
            className="object-cover w-full h-full max-h-64 sm:max-h-96"
          />

          {/* TOP RIGHT — ROMANTIC SOUL */}
          <div
            ref={setRefLeft}
            className="absolute top-2 sm:top-4 right-2 sm:right-4 text-2xl md:text-7xl  font-bold leading-none tracking-wide  text-right"
          >
            <span className="block">RO</span>
            <span className="block">MAN</span>
            <span className="block">TIC</span>
            <span className="block">SOUL</span>
          </div>

          {/* BOTTOM LEFT — PARAGRAPHES */}
          <div
            ref={setRefRight}
            className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 space-y-2 sm:space-y-4 text-xs leading-relaxed max-w-[180px] sm:max-w-xs"
          >
            <p>
              Every portrait hides a story a silent emotion, a fleeting moment,
              a soul revealed through light and shadow.
            </p>
            <p className="hidden md:block">
              Each image is a journey into authenticity, capturing the beauty
              woven between intention and spontaneity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
