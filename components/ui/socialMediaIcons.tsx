import { SocialMediaData } from "@/data/SocialMediaData";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface SocialMediaIconsProps {
  className?: string;
  size?: number;
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({
  className = "",
  size = 24, 
}) => {
  return (
    <div className="flex gap-2">
      {SocialMediaData.map((item) => {
        const Icon = item.icon; 
        return (
          <div
            key={item.id}
            className={cn(
              className,
              "rounded-full p-2 hover:scale-105 duration-200"
            )}
          >
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <Icon size={size} /> 
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMediaIcons;
