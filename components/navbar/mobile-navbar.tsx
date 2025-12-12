"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/button";
import NavbarLinks from "../ui/navbar-links";
import { Menu, X } from "lucide-react";

interface MobileNavbarProps {
  items: { name: string; link: string }[];
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ items }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden rounded-full p-4 flex w-full justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <p className="capitalize font-extralight text-2xl leading-normal ">
            A. D
          </p>
        </Link>

        {/* Hamburger Icon */}
        <div className="text-3xl cursor-pointer z-210" onClick={toggleMenu}>
          {open ? (
            <X className="w-7 h-7 text-black fixed top-6 right-6" strokeWidth={1} />
          ) : (
            <Menu className="w-7 h-7 text-white" strokeWidth={1} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col justify-center items-center fixed z-200 gap-8 px-5 top-0 left-0 w-full min-h-screen bg-white text-black">
          {/* Nav Items */}
          <NavbarLinks items={items} onClick={toggleMenu} className="text-3xl mr-auto p-2" />
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
