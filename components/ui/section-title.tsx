"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useGsapFade } from "@/hooks/useGsapFade";

interface SectionTitleProps {
  title: string;
  keyword: string;
  subtitle?: string;
  rowPosition?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  rowPosition = false,
  keyword,
}) => {
  const parts = title.split(keyword);
  const fadeUp = useGsapFade("up");
  return (
    <div
      className={cn(
        "relative w-full py-16 flex items-center text-center gap-2 overflow-hidden",
        rowPosition
          ? "justify-between md:items-center items-start md:flex-row flex-col px-1"
          : "justify-center flex-col"
      )}
    >

      <div ref={fadeUp}>
        <div
          className={cn(
            "flex flex-col   gap-2",
            rowPosition ? "items-start" : "items-center"
          )}
        >
          {/* <Image
            src="/icons/sparkles.svg"
            alt="abstract design"
            width={56}
            height={56}
            className="mb-4 w-auto h-auto"
          /> */}
          <h2 className="text-2xl md:text-4xl font-semibold text-brand ">
            {parts[0]}
            <span className="font-aboreto text-2xl">--- {keyword}</span>
            {parts[1]}
          </h2>
        </div>

        {subtitle && (
          <p
            className={cn(
              "text-grey-10 max-w-xs md:max-w-2xl mt-2 text-sm md:text-base pt-4",
              rowPosition ? "text-left" : "text-center"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
