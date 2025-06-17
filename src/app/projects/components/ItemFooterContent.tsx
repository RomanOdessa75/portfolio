import React from "react";
import ProgressSection from "./ProgressSection";
import ItemPageFooterLogo from "./ItemPageFooterLogo";

interface ItemFooterContentProps {
  progressBarRef: React.RefObject<HTMLDivElement>;
}

export default function ItemFooterContent({
  progressBarRef,
}: ItemFooterContentProps) {
  const originalFooterBgColor = "#798e7b";
  const progressFillColor = "#e4e0d5";

  return (
    <div className="w-full flex flex-col mdl:h-screen">
      <ProgressSection
        className="mdl:h-[calc(100vh/5.5)]"
        progressBarRef={progressBarRef}
        fillColor={progressFillColor}
      />
      <ItemPageFooterLogo
        bgColor={originalFooterBgColor}
        className="mdl:h-[calc(100vh*4.5/5.5)]"
      />
    </div>
  );
}
