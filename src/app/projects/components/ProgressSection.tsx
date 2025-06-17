import Button from "@/components/Button";
import React from "react";

interface ProgressSectionProps {
  className?: string;
  progressBarRef: React.RefObject<HTMLDivElement>;
  fillColor?: string;
}

const ProgressSection: React.FC<ProgressSectionProps> = ({
  className,
  progressBarRef,
  fillColor = "#798e7b",
}) => {
  return (
    <div
      className={`w-full flex flex-col justify-between p-6 md:p-8 text-black relative overflow-hidden ${className}`}
      style={{ backgroundColor: "#e9ece6" }}
    >
      <div
        ref={progressBarRef}
        className="absolute top-0 left-0 h-full w-full origin-left z-0"
        style={{
          backgroundColor: fillColor,
          transform: "scaleX(0)",
        }}
      />
      <div className="relative z-10 flex justify-between mdl:justify-around items-center">
        <span className="text-xs font-medium text-gray-600 tracking-wider uppercase hidden mdl:inline-block">
          SCROLL DOWN
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-center text-black relative">
          Projects
          <sup className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light absolute top-0 -right-4 sm:-right-6 md:-right-8">
            70
          </sup>
        </h1>
        <span className="text-xs font-medium text-gray-600 tracking-wider uppercase hidden mdl:inline-block">
          SCROLL DOWN
        </span>
        <Button variant="black" className="h-12 mdl:hidden">
          <span className="text-lg">See project</span>
        </Button>
      </div>
    </div>
  );
};

export default ProgressSection;
