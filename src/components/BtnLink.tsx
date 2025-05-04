import React, { FC } from "react";
import Button from "./Button";

interface BtnLinkProps {
  text: string;
}

const BtnLink: FC<BtnLinkProps> = ({ text }) => {
  return (
    <Button
      variant="text"
      className="text-lg transition-all duration-300 ease-in-out group/button"
      iconAfter={
        <div className="overflow-hidden size-7">
          <div className="h-6 w-20 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 13 16"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
              role="img"
            >
              <path
                d="M0.545457 9.56589L0.545478 8.34759L8.89964 8.3476L5.15766 4.60563L6.02788 3.7354L11.2492 8.95675L6.0279 14.1781L5.15769 13.3079L8.89964 9.56593L0.545457 9.56589Z"
                fill="currentColor"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 13 16"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
              role="img"
            >
              <path
                d="M0.545457 9.56589L0.545478 8.34759L8.89964 8.3476L5.15766 4.60563L6.02788 3.7354L11.2492 8.95675L6.0279 14.1781L5.15769 13.3079L8.89964 9.56593L0.545457 9.56589Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      }
    >
      <span className="font-extralight transition-all duration-300 group-hover/button:font-normal">
        {text}
      </span>
    </Button>
  );
};

export default BtnLink;
