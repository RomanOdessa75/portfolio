"use client";

import { FC, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BurgerBtn from "@/components/BurgerBtn";
import NavMenu from "@/components/NavMenu";

const HeaderMobile: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTitleVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <header className="relative z-50">
      <div
        ref={titleRef}
        className="absolute top-4 left-4 z-10 text-white leading-none font-semibold text-lg whitespace-pre"
      >
        {isTitleVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ROMAN
            <br />
            RYABCHINSKIY
          </motion.div>
        )}
      </div>

      <div className="fixed top-4 right-4 z-[1001]">
        <BurgerBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000]"
          >
            <NavMenu onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderMobile;
