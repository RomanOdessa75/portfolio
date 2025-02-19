"use client";

import { FC, useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import NavMenu from "@/components/NavMenu";

const navItems = [
  { label: "About", href: "#intro" },
  { label: "Selected Works", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [scope, animate] = useAnimate();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (navRef.current) observer.observe(navRef.current);

    return () => observer.disconnect();
  }, []);

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

  const items = navItems.map(({ label, href }) => (
    <li key={href} className="group p-4">
      <Link href={href} passHref>
        <Button variant="text" className="w-full md:inline-flex">
          <span className="text-base text-white capitalize hover:text-opacity-80 transition-all">
            {label}
          </span>
        </Button>
      </Link>
    </li>
  ));

  return (
    <header>
      <div
        ref={navRef}
        className="absolute top-0 left-0 w-full mix-blend-difference z-10"
      >
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <div>
              <ul className="flex items-center max-lg:hidden">{items}</ul>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {!isNavVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full z-[100]"
          >
            <div className="container !max-w-full">
              <div className="flex justify-end h-20 items-center">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.05 }}
                    ref={scope}
                  >
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
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && <NavMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
