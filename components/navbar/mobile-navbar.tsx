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
      <div className="md:hidden rounded-full p-5 flex w-full h-20  justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <p className="capitalize font-extralight text-2xl  leading-normal ">
            iDigital
          </p>
        </Link>

        {/* Hamburger Icon */}
        <div className="text-3xl cursor-pointer z-30" onClick={toggleMenu}>
          {open ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <Menu className="w-7 h-7 text-white" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col justify-center items-center absolute gap-8 -top-2 left-0 w-full min-h-screen bg-white text-black z-20">
          {/* Nav Items */}
          <NavbarLinks items={items} onClick={toggleMenu} />
          {/* Contact Button */}{" "}
          <Link href="/contact">
            <Button onClick={toggleMenu}>Contact Us</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
