import Link from "next/link";
import NavbarLinks from "../ui/navbar-links";
import { NavbarData } from "@/data/NavbarData";
import SocialMediaIcons from "../ui/socialMediaIcons";

export const FooterFirstRow = () => {
  return (
    <div className="w-full py-8 flex justify-between items-center">
      <Link className="flex items-center gap-2" href={"/"}>
        <p className=" capitalize font-extralight  text-lg ">A . D</p>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <NavbarLinks items={NavbarData} />
      </div>
      <SocialMediaIcons className="bg-white/30" />
    </div>
  );
};
