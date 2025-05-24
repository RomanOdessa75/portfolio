import React from "react";
import ItemFooterContent from "@/app/projects/components/ItemFooterContent";

export default function ItemFooter() {
  return (
    <div
      className="relative mdl:h-[100vh]"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="mdl:fixed mdl:h-[100vh] w-full mdl:bottom-0">
        <ItemFooterContent />
      </div>
    </div>
  );
}
