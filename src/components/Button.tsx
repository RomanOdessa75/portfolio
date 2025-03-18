import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
  props: {
    variant: "primary" | "secondary" | "text" | "white";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, iconAfter, ...rest } = props;
  return (
    <button
      className={twMerge(
        "h-11 px-6 rounded-xl border border-red-orange-500 uppercase inline-flex items-center gap-2 transition duration-500 relative group/button",
        variant === "primary" && "bg-red-orange-500 text-white",
        variant === "secondary" && "hover:bg-red-orange-500 hover:text-white",
        variant === "white" &&
          "bg-[linear-gradient(180deg,#f8f8f800_35%,#c5c5c5)] active:bg-[linear-gradient(360deg,#f8f8f800_35%,#c5c5c5)] border-white text-white",
        variant === "text" &&
          "h-auto px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-red-orange-500 hover:after:w-full",
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
