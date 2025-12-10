import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "linkArrow" | "clean";
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      children,
      disabled,
      type = "button",
      variant = "default",
      ...props
    },
    ref
  ) => {
    const baseClasses = "transition text-sm md:text-base rounded-full";

    const variants = {
      default:
        "bg-brand-gradient text-white px-6 py-3 hover:scale-105 duration-200",
      outline:
        "bg-transparent border border-white text-white px-6 py-3 hover:scale-105 duration-200",
      linkArrow:
        "capitalize text-center pb-1 flex items-center gap-2 group bg-transparent px-0 py-0",
      clean:
        "bg-transparent border-none text-white px-6 py-3 hover:scale-105 duration-200",
    };

    return (
      <button
        className={cn(baseClasses, variants[variant], className)}
        disabled={disabled}
        type={type}
        ref={ref}
        {...props}
      >
        {children}
        {variant === "linkArrow" && (
          <Image
            src="/Icons/arrow-right.svg"
            alt="arrow"
            height={20}
            width={20}
            className="w-auto h-auto group-hover:translate-x-2 transform duration-200"
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
