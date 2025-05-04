"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "@/components/Button";
import { useState, useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

const navItems = [
  { label: "E-commerce", href: "#e-commerce", color: "#e49366" },
  { label: "Showcase website", href: "#showcase", color: "#798e7b" },
  { label: "Mobile Applications", href: "#mobile", color: "#b692a1" },
  {
    label: "Web Applications",
    href: "#web-applications",
    color: "#bfccd8",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const IntroSection = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const isLessThan1350 = useMediaQuery("(max-width: 1350px)");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const renderNavItem = (
    { label, href, color }: (typeof navItems)[0],
    index: number
  ) => {
    const circleVariants = {
      initial: {
        width: "0.67em",
        height: "0.67em",
      },
      hover: {
        width: isLessThan1350 ? "1.5em" : "2.8em",
        height: isLessThan1350 ? "1.5em" : "2.8em",
      },
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

    const countVariants = {
      initial: { color: href === activeHash ? color : "#000000" },
      hover: { color: color, transition: { duration: 0.1 } },
    };

    const desktopItem = (
      <motion.li
        key={href}
        className="relative flex items-center gap-1 px-4 py-8"
        whileHover="hover"
        initial="initial"
      >
        <div
          className={`relative flex items-center justify-center ${isLessThan1350 ? "w-[2em] h-[2em]" : "w-[2.8em] h-[2.8em]"} cursor-pointer overflow-hidden`}
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
                  d="M0.292893 17.2929C-0.0976311 17.6834 -0.0976311 18.3166 0.292893 18.7071C0.683418 19.0976 1.31658 19.0976 1.70711 18.7071L0.292893 17.2929ZM18.9706 1.02944C18.9706 0.477153 18.5228 0.0294373 17.9706 0.029437L8.97056 0.0294378C8.41828 0.0294375 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944L16.9706 2.02944L16.9706 10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 11.0294 18.9706 10.0294L18.9706 1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z"
                  fill="white"
                />
              </svg>
            </motion.span>
          </motion.div>
        </div>
        <Link href={href} passHref>
          <Button
            variant="text"
            className="w-full md:inline-flex !no-underline hover:!no-underline relative"
          >
            <span className="text-black capitalize transition-all no-underline md:text-[0.7rem] mdl:text-[1.2rem] lg:text-[1.4rem] xl:text-2xl">
              {label}
            </span>
            <motion.span
              className={`absolute -top-[0.8rem] -right-[1.5rem] transition-colors duration-300 ${isLessThan1350 ? "text-[0.625rem]" : "text-[0.75rem]"}`}
              variants={countVariants}
            >
              32
            </motion.span>
          </Button>
        </Link>
      </motion.li>
    );

    const mobileItem = (
      <motion.li
        key={href}
        className={`relative flex items-center justify-between w-full py-4 ${index === 0 ? "pt-8" : ""} ${index === navItems.length - 1 ? "pb-8" : ""}`}
        whileHover="hover"
        initial="initial"
      >
        <div className="flex items-center gap-1 w-full">
          <Link href={href} passHref className="flex items-center w-full">
            <div className="flex items-center gap-6 pl-6 relative w-full">
              <motion.span
                className="left-0 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300"
                variants={arrowVariants}
                transition={{ duration: 0.2 }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 19 19"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.292893 17.2929C-0.0976311 17.6834 -0.0976311 18.3166 0.292893 18.7071C0.683418 19.0976 1.31658 19.0976 1.70711 18.7071L0.292893 17.2929ZM18.9706 1.02944C18.9706 0.477153 18.5228 0.0294373 17.9706 0.029437L8.97056 0.0294378C8.41828 0.0294375 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944L16.9706 2.02944L16.9706 10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 11.0294 18.9706 10.0294L18.9706 1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z"
                    fill="black"
                  />
                </svg>
              </motion.span>
              <span
                className={`text-black capitalize transition-all no-underline relative ${isLessThan1350 ? "text-base" : "text-xl"}`}
              >
                {label}
                <motion.span
                  className={`absolute -top-[0.8rem] -right-[1.5rem] transition-colors duration-300 ${isLessThan1350 ? "text-[0.625rem]" : "text-[0.75rem]"}`}
                  variants={countVariants}
                >
                  32
                </motion.span>
              </span>
            </div>
          </Link>
        </div>
      </motion.li>
    );

    return { desktopItem, mobileItem };
  };

  const navItemsRendered = navItems.map((item, index) =>
    renderNavItem(item, index)
  );

  return (
    <section className="bg-[#f1efeb] py-16 pb-0">
      <div className="mx-auto px-8">
        <div className="flex">
          <motion.h1
            className="text-5xl sml:text-9xl md:text-[12rem] font-normal text-black mb-0 md:mb-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Projects
          </motion.h1>
          <span className="text-xl sml:text-2xl md:text-4xl">32</span>
        </div>
        <motion.p
          className="text-xl sml:text-2xl md:text-5xl text-black w-full my-9 md:my-16 md:indent-52 leading-loose"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{ lineHeight: 1.4 }}
        >
          Each project prioritizes excellence with the goal of immersing your
          visitors in a powerful and impactful universe. I believe that nothing
          beats an immersive experience, and especially one that is uniquely
          yours.
        </motion.p>

        <div className="w-full h-px bg-black/20" />

        <div className="md:hidden">
          <button
            onClick={toggleAccordion}
            className="w-full flex justify-between items-center py-4 px-2"
          >
            <span className="text-2xl font-normal">All filters</span>
            <div className="relative w-4 h-4 flex items-center justify-center">
              <motion.div
                className="absolute w-full h-[2px] bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="absolute h-full w-[2px] bg-black"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: isAccordionOpen ? 0 : 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </button>

          <div className="w-full h-px bg-black/20" />

          <AnimatePresence>
            {isAccordionOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="overflow-hidden my-0"
              >
                <ul className="flex flex-col w-full">
                  {navItemsRendered.map(({ mobileItem }, index) => (
                    <div key={index} className="transition-colors duration-300">
                      {mobileItem}
                    </div>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <ul
          className={`hidden md:flex flex-nowrap justify-between items-center gap-4  overflow-x-auto ${isLessThan1350 ? "px-2" : "px-20"}`}
        >
          {navItemsRendered.map(({ desktopItem }, index) => desktopItem)}
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
