import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import "./button-animations.css";

const Button = (
  props: {
    variant:
      | "primary"
      | "secondary"
      | "text"
      | "submit"
      | "black"
      | "white"
      | "link"
      | "black-large";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, iconAfter, ...rest } = props;

  const arrowSvg = (color: string, large: boolean = false) => (
    <svg
      width={large ? "24" : "12"}
      height={large ? "24" : "12"}
      viewBox="0 0 19 19"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.292893 17.2929C-0.0976311 17.6834 -0.0976311 18.3166 0.292893 18.7071C0.683418 19.0976 1.31658 19.0976 1.70711 18.7071L0.292893 17.2929ZM18.9706 1.02944C18.9706 0.477153 18.5228 0.0294373 17.9706 0.029437L8.97056 0.0294378C8.41828 0.0294375 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944L16.9706 2.02944L16.9706 10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 10.5817 18.9706 10.0294L18.9706 1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z"
        fill={color}
      />
    </svg>
  );

  if (variant === "primary") {
    return (
      <button
        className={twMerge(
          "btn-primary relative h-12 min-w-[144px] px-4 pr-4 pl-10 rounded-full border border-black inline-flex items-center justify-between gap-1 transition-all duration-500 overflow-hidden",
          className
        )}
        {...rest}
      >
        <div className="bg-fill bg-black"></div>
        <span className="relative z-10 uppercase text-[clamp(0.625rem,2.5vw,0.95rem)] leading-tight transition-colors duration-500 truncate text-content">
          {children}
        </span>
        <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
          <div className="absolute w-3 h-3 bg-black rounded-full transition-all duration-500 circle-expand" />
          <div className="absolute opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 delay-200 arrow-appear">
            {arrowSvg("black")}
          </div>
        </div>
      </button>
    );
  }

  if (variant === "secondary") {
    return (
      <button
        className={twMerge(
          "btn-secondary relative h-12 w-36 px-4 pr-4 pl-10 rounded-full border border-white inline-flex items-center justify-between gap-1 transition-all duration-500 overflow-hidden text-white",
          className
        )}
        {...rest}
      >
        <div className="bg-fill bg-white"></div>
        <span className="relative z-10 uppercase text-[clamp(0.625rem,2.5vw,0.95rem)] leading-tight transition-colors duration-500 text-content">
          {children}
        </span>
        <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
          <div className="absolute w-3 h-3 bg-white rounded-full transition-all duration-500 circle-expand" />
          <div className="absolute opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 delay-200 arrow-appear">
            {arrowSvg("white")}
          </div>
        </div>
      </button>
    );
  }

  if (variant === "black") {
    return (
      <button
        className={twMerge(
          "group/button relative h-12 w-12 rounded-full border border-black inline-flex items-center justify-center transition-all duration-500 overflow-hidden",
          className
        )}
        {...rest}
      >
        <div className="absolute inset-0 bg-black transform scale-0 transition-transform duration-500 group-hover/button:scale-100 rounded-full" />
        <div className="absolute transition-opacity duration-300 group-hover/button:opacity-0">
          {arrowSvg("black")}
        </div>
        <div className="absolute opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 delay-200 group-hover/button:opacity-100 group-hover/button:translate-x-0 group-hover/button:translate-y-0">
          {arrowSvg("white")}
        </div>
      </button>
    );
  }

  if (variant === "black-large") {
    return (
      <button
        className={twMerge(
          "group/button relative h-24 w-24 rounded-full border border-black inline-flex items-center justify-center transition-all duration-500 overflow-hidden",
          className
        )}
        {...rest}
      >
        <div className="absolute inset-0 bg-black transform scale-0 transition-transform duration-500 group-hover/button:scale-100 rounded-full" />
        <div className="absolute transition-opacity duration-300 group-hover/button:opacity-0">
          {arrowSvg("black", true)}
        </div>
        <div className="absolute opacity-0 -translate-x-4 translate-y-4 transition-all duration-300 delay-200 group-hover/button:opacity-100 group-hover/button:translate-x-0 group-hover/button:translate-y-0">
          {arrowSvg("white", true)}
        </div>
      </button>
    );
  }

  if (variant === "white") {
    return (
      <button
        className={twMerge(
          "group/button relative h-12 w-12 rounded-full border border-white inline-flex items-center justify-center transition-all duration-500 overflow-hidden",
          className
        )}
        {...rest}
      >
        <div className="absolute inset-0 bg-white transform scale-0 transition-transform duration-500 group-hover/button:scale-100 rounded-full" />
        <div className="absolute transition-opacity duration-300 group-hover/button:opacity-0">
          {arrowSvg("white")}
        </div>
        <div className="absolute opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 delay-200 group-hover/button:opacity-100 group-hover/button:translate-x-0 group-hover/button:translate-y-0">
          {arrowSvg("black")}
        </div>
      </button>
    );
  }

  return (
    <button
      className={twMerge(
        "h-11 px-6 rounded-xl border border-red-orange-500 uppercase inline-flex items-center gap-2 transition duration-500 relative group/button",
        variant === "submit" &&
          "bg-[linear-gradient(180deg,#f8f8f800_35%,#c5c5c5)] active:bg-[linear-gradient(360deg,#f8f8f800_35%,#c5c5c5)] border-white text-white",
        variant === "text" && "h-auto px-0 border-transparent",
        variant === "link" &&
          "h-auto px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-black hover:after:w-full",
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
