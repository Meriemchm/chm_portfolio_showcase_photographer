"use client";

import { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import { NavbarData } from "@/data/NavbarData";
import { Container } from "../ui/container";
import MobileNavbar from "./mobile-navbar";
import DesktopNavbar from "./desktop-navbar";

const Navbar = () => {

  return (
    <div
      className={clsx(
        "absolute w-full z-50  text-white"
      )}
    >
      {/* Navbar container */}
      <Container>
        <DesktopNavbar items={NavbarData} />
        <MobileNavbar items={NavbarData} />
      </Container>
    </div>
  );
};

export default Navbar;
