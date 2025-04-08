import React from "react";

import FooterContent from "@/components/FooterContent";

export default function Footer() {
  return (
    <div
      className="relative h-[100vh] mt-44"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="fixed h-[100vh] w-full bottom-0">
        <FooterContent />
      </div>
    </div>
  );
}
