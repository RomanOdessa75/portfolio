"use client";

import { FC, useEffect, useState } from "react";
import Button from "@/components/Button";
import { motion, useAnimate } from "motion/react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();

  // useEffect(() => {
  //   if (isOpen) {
  //     topLineAnimate([
  //       [
  //         topLineScope.current,
  //         {
  //           translateY: 4,
  //         },
  //       ],
  //       [
  //         topLineScope.current,
  //         {
  //           rotate: 45,
  //         },
  //       ],
  //     ]);

  //     bottomLineAnimate([
  //       [
  //         bottomLineScope.current,
  //         {
  //           translateY: -4,
  //         },
  //       ],
  //       [
  //         bottomLineScope.current,
  //         {
  //           rotate: -45,
  //         },
  //       ],
  //     ]);
  //   } else {
  //     topLineAnimate(
  //       [
  //         topLineScope.current,
  //         {
  //           rotate: 0,
  //         },
  //       ],
  //       [
  //         topLineScope.current,
  //         {
  //           translateY: 0,
  //         },
  //       ]
  //     );

  //     bottomLineAnimate(
  //       [
  //         bottomLineScope.current,
  //         {
  //           rotate: 0,
  //         },
  //       ],
  //       [
  //         bottomLineScope.current,
  //         {
  //           translateY: 0,
  //         },
  //       ]
  //     );
  //   }
  // }, [
  //   isOpen,
  //   topLineAnimate,
  //   topLineScope,
  //   bottomLineAnimate,
  //   bottomLineScope,
  // ]);

  useEffect(() => {
    if (isOpen) {
      topLineAnimate(
        topLineScope.current,
        {
          translateY: 4,
          rotate: 45,
        },
        { duration: 0.4 }
      );

      bottomLineAnimate(
        bottomLineScope.current,
        {
          translateY: -4,
          rotate: -45,
        },
        { duration: 0.4 }
      );
    } else {
      topLineAnimate(
        topLineScope.current,
        {
          rotate: 0,
          translateY: 0,
        },
        { duration: 0.4 }
      );

      bottomLineAnimate(
        bottomLineScope.current,
        {
          rotate: 0,
          translateY: 0,
        },
        { duration: 0.4 }
      );
    }
  }, [
    isOpen,
    topLineAnimate,
    topLineScope,
    bottomLineAnimate,
    bottomLineScope,
  ]);

  return (
    <header>
      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md z-10">
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <div>
              <a href="/">
                <span className="text-xl font-bold uppercase text-white">
                  Roman&nbsp; Ryabchinskiy
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full z-10">
        <div className="container !max-w-full">
          <div className="flex justify-end h-20 items-center">
            <div className="flex items-center gap-4">
              <div
                className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: "12px 8px",
                      // transform: "translateY() rotate(45deg)",
                    }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: "12px 16px",
                      // transform: "translateY(-4px) rotate(-45deg)",
                    }}
                  />
                </svg>
              </div>
              <Button variant="primary" className="hidden md:inline-flex">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>

    // <header className="fixed top-0 left-0 w-full backdrop-blur-md mix-blend-difference">
    //   <div className="container !max-w-full">
    //     <div className="flex justify-between h-20 items-center">
    //       <div>
    //         <a href="/">
    //           <span className="text-xl font-bold uppercase text-white">
    //             Alex&nbsp; Taylor
    //           </span>
    //         </a>
    //       </div>
    //       <div className="flex items-center gap-4">
    //         <div className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200">
    //           <svg
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <rect x="3" y="15" width="18" height="2" fill="currentColor" />
    //             <rect x="3" y="7" width="18" height="2" fill="currentColor" />
    //           </svg>
    //         </div>
    //         <Button variant="primary" className="hidden md:inline-flex">
    //           Contact Me
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
