"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import gsap from "gsap";

const lettersData = [
  {
    char: "R",
    title: "Letter R",
    viewBox: "0 0 66 168",
    path: "M70 850 l0 -780 120 0 120 0 0 350 c0 378 -2 368 51 340 18 -10 19 -25 19 -350 l0 -340 121 0 120 0 -3 338 -3 339 -29 37 c-16 21 -44 45 -63 53 l-35 14 43 22 c82 41 84 51 84 373 l0 281 -28 36 c-49 64 -61 67 -302 67 l-215 0 0 -780 z m294 614 c14 -5 16 -38 16 -260 l0 -254 -26 -10 c-14 -6 -30 -10 -35 -10 -5 0 -9 109 -9 270 0 259 1 270 19 270 11 0 26 -3 35 -6 z",
    transform: "translate(0, 168) scale(0.1, -0.1)",
    height: 168,
  },
  {
    char: "O",
    title: "Letter O",
    viewBox: "0 0 67 165",
    path: "M140 1577 c-19 -12 -43 -38 -54 -57 -21 -34 -21 -47 -21 -700 0 -647 1 -666 20 -699 42 -72 56 -76 250 -76 190 0 200 3 249 69 21 27 21 38 24 700 l2 672 -23 34 c-12 19 -38 45 -56 57 -32 22 -44 23 -196 23 -152 0 -164 -1 -195 -23 z m228 -149 c9 -9 12 -158 12 -610 0 -591 0 -597 -20 -608 -12 -6 -30 -8 -40 -5 -20 6 -20 19 -20 615 0 477 3 609 13 613 22 9 43 7 55 -5 z",
    transform: "translate(0, 165) scale(0.1, -0.1)",
    height: 165,
  },
  {
    char: "M",
    title: "Letter M",
    viewBox: "0 0 95 169",
    path: "M60 840 l0 -780 115 0 115 0 0 700 0 700 24 0 c60 0 56 53 56 -706 l0 -694 120 0 120 0 0 700 c0 683 0 700 19 700 54 0 51 46 51 -706 l0 -694 120 0 121 0 -3 728 -3 729 -28 36 c-52 68 -45 67 -457 67 l-370 0 0 -780 z",
    transform: "translate(0, 169) scale(0.1, -0.1)",
    height: 169,
  },
  {
    char: "A",
    title: "Letter A",
    viewBox: "0 0 66 166",
    path: "M140 1588 c-18 -13 -43 -39 -54 -58 -21 -34 -21 -49 -24 -757 l-3 -723 121 0 120 0 0 350 0 350 40 0 40 0 0 -350 0 -350 115 0 115 0 0 720 c0 788 3 745 -60 805 l-31 30 -172 3 c-166 3 -173 2 -207 -20 z m228 -150 c9 -9 12 -83 12 -270 l0 -258 -40 0 -40 0 0 264 c0 202 3 266 13 269 22 9 43 7 55 -5 z",
    transform: "translate(0, 166) scale(0.1, -0.1)",
    height: 166,
  },
  {
    char: "N",
    title: "Letter N",
    viewBox: "0 0 64 163",
    path: "M40 810 l0 -780 120 0 120 0 0 700 c0 683 0 700 19 700 54 0 51 46 51 -706 l0 -694 120 0 121 0 -3 728 -3 729 -28 36 c-49 64 -61 67 -302 67 l-215 0 0 -780 z",
    transform: "translate(0, 163) scale(0.1, -0.1)",
    height: 163,
  },
];

interface AnimatedNameProps {
  className?: string;
}

const AnimatedName = ({ className = "" }: AnimatedNameProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView || !lettersRef.current) return;

    const letterElements = lettersRef.current.querySelectorAll<HTMLDivElement>(
      ".animated-name__letter"
    );

    if (letterElements.length === 0) return;

    gsap.fromTo(
      letterElements,
      {
        y: "80%",
        opacity: 0,
        rotationY: 90,
        transformOrigin: "center center",
        transformStyle: "preserve-3d",
      },
      {
        y: "0%",
        opacity: 1,
        rotationY: 0,
        stagger: 0.1,
        duration: 1.3,
        ease: "power3.out",
        transformStyle: "preserve-3d",
      }
    );
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className={`animated-name w-full h-full hidden sm:flex justify-center items-center overflow-hidden ${className}`}
    >
      <div
        ref={lettersRef}
        className="animated-name__letters-container w-full h-full flex justify-between items-start"
        style={{
          perspective: "1000px",
          perspectiveOrigin: "center center",
        }}
      >
        {lettersData.map((letter, index) => (
          <div
            key={index}
            className="animated-name__letter flex-grow flex justify-center items-center h-full relative px-1 md:px-2"
            style={{
              transformOrigin: "center center",
              transformStyle: "preserve-3d",
              opacity: 0,
            }}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox={letter.viewBox}
              preserveAspectRatio="xMidYMid meet"
              className="block w-auto h-full max-w-full max-h-full"
              fill="currentColor"
              stroke="none"
              aria-labelledby={`${letter.char}-title`}
            >
              <title id={`${letter.char}-title`}>{letter.title}</title>
              <g transform={letter.transform}>
                <path d={letter.path} />
              </g>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedName;
