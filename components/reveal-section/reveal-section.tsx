import Image from "next/image";
import RevealTrigger from "../ui/reveal-trigger";
import SocialMediaIcons from "../ui/socialMediaIcons";
import { FooterSecondRow } from "../footer/footer-second-row";
import { ContactItems } from "../ui/contact-items";
import { ContactFooterData } from "@/data/ContactFooterData";

export default function RevealSection() {
  return (
    <RevealTrigger>
      <section className="w-full py-20 px-6 flex justify-center">
        <div className="max-w-6xl w-full text-center">
          {/* Title */}
          <h2 className="text-5xl font-semibold tracking-wide text-brand">
            Anna Dilan
          </h2>

          {/* Middle icons + text */}
          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="flex flex-col justify-center items-center gap-2 ">
              <ContactItems items={ContactFooterData} />
            </div>
          </div>

          {/* Images left + right */}
          <div className="mt-14 flex justify-between items-center">
            {/* Left image */}
            <div className="relative w-64 h-82 rounded-full overflow-hidden border-[6px] border-[#d8cbc7] shadow-lg mx-auto">
              <Image
                src="/images/3.jpg"
                fill
                alt="Left Portrait"
                className="object-cover"
              />
            </div>

            {/* Name */}
            <div className="flex flex-col items-center text-brand mx-auto">
              <h3 className="text-2xl font-semibold tracking-widest">
                GY ANNA
              </h3>

              {/* Social icons */}
              <div className="flex gap-4 mt-4 text-xl">
                <SocialMediaIcons className="bg-brand p-4 rounded-full text-white" />
              </div>
            </div>

            {/* Right image */}
            <div className="relative w-64 h-82 rounded-full overflow-hidden border-[6px] border-[#d8cbc7] shadow-lg mx-auto">
              <Image
                src="/images/2.jpg"
                fill
                alt="Right Portrait"
                className="object-fill"
              />
            </div>
          </div>
        </div>
      </section>
    </RevealTrigger>
  );
}
