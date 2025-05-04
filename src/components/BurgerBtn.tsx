"use client";

import { FC, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

interface BurgerBtnProps {
  isOpen: boolean;
  onClick: () => void;
}

const BurgerBtn: FC<BurgerBtnProps> = ({ isOpen, onClick }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateBurger = async () => {
      const topLine = scope.current?.querySelector("#topLine");
      const bottomLine = scope.current?.querySelector("#bottomLine");

      if (!topLine || !bottomLine) return;

      if (isOpen) {
        await Promise.all([
          animate(topLine, { y: 4, rotate: 45 }, { duration: 0.4 }),
          animate(bottomLine, { y: -4, rotate: -45 }, { duration: 0.4 }),
        ]);
      } else {
        await Promise.all([
          animate(topLine, { y: 0, rotate: 0 }, { duration: 0.4 }),
          animate(bottomLine, { y: 0, rotate: 0 }, { duration: 0.4 }),
        ]);
      }
    };

    animateBurger();
  }, [isOpen, animate, scope]);

  return (
    <motion.div
      className="flex items-center gap-5 pr-1 pl-6 py-1 bg-black text-white rounded-full cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      ref={scope}
    >
      <span className="text-xl">Menu</span>
      <div className="size-10 rounded-full inline-flex items-center justify-center bg-[#e49366]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            id="topLine"
            x="3"
            y="7"
            width="18"
            height="2"
            fill="currentColor"
            style={{ transformOrigin: "12px 8px" }}
          />
          <motion.rect
            id="bottomLine"
            x="3"
            y="15"
            width="18"
            height="2"
            fill="currentColor"
            style={{ transformOrigin: "12px 16px" }}
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default BurgerBtn;
