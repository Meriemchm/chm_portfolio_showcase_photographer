"use client";

import { motion } from "framer-motion";
import { useState, useEffect, ReactNode } from "react";
import { X, ChevronLeft } from "lucide-react";

interface RevealTriggerProps {
  children: ReactNode;
}

export default function RevealSection({ children }: RevealTriggerProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen overflow-hidden ${
        open ? "z-50" : "z-30"
      }`}
    >
      {!open && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end px-10">
          <div
            className="flex flex-col items-end space-y-2 cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <motion.div
              className="text-white"
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              <ChevronLeft size={32} strokeWidth={1} />
            </motion.div>
            <p className="text-white text-sm font-aboreto">
              Meet me & my profiles
            </p>
          </div>
        </div>
      )}

      {/* X BUTTON ALWAYS ON TOP */}
      {open && (
        <X
          size={30}
          strokeWidth={1}
          className="absolute top-5 right-5 cursor-pointer z-999"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Reveal section */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: open ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
        className="absolute top-0 left-0 h-full w-full bg-white text-black overflow-auto"
      >
        <div className="p-10 relative h-full">{children}</div>
      </motion.div>
    </div>
  );
}
