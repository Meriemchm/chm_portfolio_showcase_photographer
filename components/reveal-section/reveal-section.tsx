import Image from "next/image";
import RevealTrigger from "../ui/reveal-trigger";
import SocialMediaIcons from "../ui/socialMediaIcons";
import { FooterSecondRow } from "../footer/footer-second-row";
import { ContactItems } from "../ui/contact-items";
import { ContactFooterData } from "@/data/ContactFooterData";
import Link from "next/link";
import Button from "../ui/button";

export default function RevealSection() {
  return (
    <RevealTrigger>
      <section className="w-full py-16 md:py-20 px-4 sm:px-6 flex justify-center relative">
        <div className="max-w-6xl w-full text-center">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-wide text-brand">
            Anna Dilan
          </h2>

          {/* Middle icons + text */}
          <div className="mt-6 flex flex-col items-center gap-4 sm:gap-6">
            <div className="flex flex-col justify-center items-center gap-2">
              <ContactItems items={ContactFooterData} />
            </div>
          </div>

          {/* Images left + right */}
          <div className="mt-10 md:mt-14 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            {/* Left image */}
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-82 rounded-full overflow-hidden border-[4px] sm:border-[6px] border-[#d8cbc7] shadow-lg mx-auto">
              <Image
                src="/images/3.jpg"
                fill
                alt="Left Portrait"
                className="object-cover"
              />
            </div>

            {/* Name + Social */}
            <div className="flex flex-col items-center text-brand mx-auto mt-4 md:mt-0">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-widest">
                Follow ANNA
              </h3>

              {/* Social icons */}
              <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4 text-lg sm:text-xl">
                <SocialMediaIcons className="bg-brand p-3 sm:p-4 rounded-full text-white" />
              </div>
            </div>

            {/* Right image */}
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-82 rounded-full overflow-hidden border-[4px] sm:border-[6px] border-[#d8cbc7] shadow-lg mx-auto">
              <Image
                src="/images/2.jpg"
                fill
                alt="Right Portrait"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="md:flex absolute hidden bottom-4 sm:bottom-20  flex-col sm:flex-row gap-2 sm:gap-4 w-full justify-center px-4">
          <Link href="/about">
            <Button variant="clean">About</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact</Button>
          </Link>
        </div>
      </section>
    </RevealTrigger>
  );
}
