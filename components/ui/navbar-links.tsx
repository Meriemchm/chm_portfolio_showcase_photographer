"use client";

import Link from "next/link";

interface NavbarItem {
  items: { name: string; link: string }[];
  onClick?: () => void;
}

export default function NavbarLinks({ items, onClick }: NavbarItem) {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-6 capitalize">
          <Link
            href={item.link}
            onClick={onClick}
            className="hover:text-primary/80 transition"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </>
  );
}
