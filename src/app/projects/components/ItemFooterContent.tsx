import React from "react";
import ProgressSection from "./ProgressSection";
import ItemPageFooterLogo from "./ItemPageFooterLogo";

export default function ItemFooterContent() {
  const footerBgColorFromImage = "#798e7b";

  return (
    <div className="w-full flex flex-col mdl:h-screen">
      <ProgressSection className="mdl:h-[calc(100vh/5.5)]" />
      <ItemPageFooterLogo
        bgColor={footerBgColorFromImage}
        className="mdl:h-[calc(100vh*4.5/5.5)]"
      />
    </div>
  );
}
