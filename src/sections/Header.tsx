"use client";

import { FC, useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import NavMenu from "@/components/NavMenu";
import BurgerBtn from "@/components/BurgerBtn";

const navItems = [
  { label: "About", href: "#intro", color: "#e49366" },
  { label: "Projects", href: "#projects", color: "#798e7b" },
  { label: "Blog", href: "#testimonials", color: "#b692a1" },
  { label: "Contact", href: "#faqs", color: "#bfccd8" },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
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

  const items = navItems.map(({ label, href, color }) => {
    const circleVariants = {
      initial: { width: "0.67em", height: "0.67em" },
      hover: { width: "2.8em", height: "2.8em" },
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
          className="relative flex items-center justify-center w-[2.8em] h-[2.8em] cursor-pointer overflow-hidden"
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
                width="12"
                height="12"
                viewBox="0 0 19 19"
                fill="inherit"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 17.2929C-0.0976311 17.6834 -0.0976311 18.3166 0.292893 18.7071C0.683418 19.0976 1.31658 19.0976 1.70711 18.7071L0.292893 17.2929ZM18.9706 1.02944C18.9706 0.477153 18.5228 0.0294373 17.9706 0.029437L8.97056 0.0294378C8.41828 0.0294375 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944L16.9706 2.02944L16.9706 10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 10.5817 18.9706 10.0294L18.9706 1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z"
                  fill="white"
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
            <span className="text-xl text-black capitalize transition-all no-underline">
              {label}
            </span>
          </Button>
        </Link>
      </motion.li>
    );
  });

  return (
    <header>
      <div ref={navRef} className="absolute top-0 left-0 w-full z-10">
        <div>
          <div className="flex justify-between h-20 items-center w-1/2">
            <div className="w-full">
              <ul className="container !max-w-full flex justify-between items-center max-lg:hidden">
                {items}
              </ul>
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
                  <BurgerBtn
                    isOpen={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                  />
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
