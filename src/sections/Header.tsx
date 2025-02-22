"use client";

import { FC, useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import NavMenu from "@/components/NavMenu";

const navItems = [
  { label: "About", href: "#intro", color: "#e49366" },
  { label: "Selected Works", href: "#projects", color: "#798e7b" },
  { label: "Testimonials", href: "#testimonials", color: "#b692a1" },
  { label: "FAQs", href: "#faqs", color: "#bfccd8" },
  { label: "Contact", href: "#contact", color: "#025380" },
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

  const items = navItems.map(({ label, href, color }) => {
    const circleVariants = {
      initial: { width: "0.67em", height: "0.67em" },
      hover: { width: "1.9em", height: "1.9em" },
    };

    const arrowVariants = {
      initial: { opacity: 0, x: -5, y: 5 },
      hover: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { delay: 0.2 },
      },
    };

    return (
      <motion.li
        key={href}
        className="relative flex items-center gap-1 p-4"
        whileHover="hover"
        initial="initial"
      >
        <div
          className="relative flex items-center justify-center w-[1.9em] h-[1.9em] cursor-pointer overflow-hidden"
          style={{ borderRadius: "50%" }}
        >
          <motion.div
            className="absolute flex items-center justify-center"
            variants={circleVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ backgroundColor: color, borderRadius: "50%" }}
          >
            <motion.span
              className="AppSvg HomeHeroMenu-itemArrowIcon --arrow"
              variants={arrowVariants}
              transition={{ duration: 0.2 }}
            >
              <svg
                width="9"
                height="9"
                viewBox="0 0 19 19"
                fill="inherit"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 17.2929C-0.0976311 17.6834 -0.0976311 18.3166 0.292893 18.7071C0.683418 19.0976 1.31658 19.0976 1.70711 18.7071L0.292893 17.2929ZM18.9706 1.02944C18.9706 0.477153 18.5228 0.0294373 17.9706 0.029437L8.97056 0.0294378C8.41828 0.0294375 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944L16.9706 2.02944L16.9706 10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 10.5817 18.9706 10.0294L18.9706 1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z"
                  fill="inherit"
                ></path>
              </svg>
            </motion.span>
          </motion.div>
        </div>
        <Link href={href} passHref>
          <Button
            variant="text"
            className="w-full md:inline-flex !no-underline hover:!no-underline"
          >
            <span className="text-base text-white capitalize transition-all no-underline">
              {label}
            </span>
          </Button>
        </Link>
      </motion.li>
    );
  });

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
                    className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-[#b692a1] cursor-pointer"
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
