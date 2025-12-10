"use client";
import Link from "next/link";
import Button from "../ui/button";
import NavbarLinks from "../ui/navbar-links";

interface DesktopNavbarProps {
  items: { name: string; link: string }[];
}
const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ items }) => {
  return (
    <div className="hidden md:flex w-full h-20 justify-between items-center">
      {/* Logo */}
      <Link className="flex items-center gap-2" href={"/"}>
        <p className="capitalize font-extralight text-xl">A . D</p>
      </Link>

      {/* Nav Items */}
      <div className="flex items-center gap-8">
        <NavbarLinks items={items} />
      </div>
    </div>
  );
};

export default DesktopNavbar;
