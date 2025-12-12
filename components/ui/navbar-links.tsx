"use client";

import Link from "next/link";

interface NavbarItem {
  items: { name: string; link: string }[];
  onClick?: () => void;
  className?: string; // optionnel pour custom class
}

export default function NavbarLinks({ items, onClick, className }: NavbarItem) {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-6 capitalize ${className ?? ""}`}
        >
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
