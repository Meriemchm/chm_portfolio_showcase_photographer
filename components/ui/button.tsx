import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
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
    const baseClasses = "transition text-sm md:text-base";

    const variants = {
      default:
        "bg-brand text-white px-6 py-3 hover:scale-105 duration-200",
      outline:
        "bg-transparent border border-black text-black px-6 py-3 hover:scale-105 duration-200",
      linkArrow:
        "capitalize px-6 py-3 bg-transparent  text-center pb-1 flex items-center gap-2 group bg-transparent ",
      clean:
        "bg-transparent border-none text-black px-6 py-3 hover:scale-105 duration-200",
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
          <ArrowDown
            size={20}
            className=" animate-bounce"
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
