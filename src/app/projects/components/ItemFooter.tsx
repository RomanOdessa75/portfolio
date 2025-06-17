import React, { forwardRef } from "react";
import ItemFooterContent from "@/app/projects/components/ItemFooterContent";

export interface ItemFooterProps {
  progressBarRef: React.RefObject<HTMLDivElement>;
}

const ItemFooter = forwardRef<HTMLDivElement, ItemFooterProps>(
  ({ progressBarRef }, ref) => {
    return (
      <div
        ref={ref}
        className="relative mdl:h-[100vh]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="mdl:fixed mdl:h-[100vh] w-full mdl:bottom-0">
          <ItemFooterContent progressBarRef={progressBarRef} />
        </div>
      </div>
    );
  }
);
ItemFooter.displayName = "ItemFooter";
export default ItemFooter;
