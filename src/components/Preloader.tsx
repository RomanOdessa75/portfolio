"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const letters = "ROMAN RYABCHINSKIY".split("");

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [startFlip, setStartFlip] = useState(false);
  const [alignText, setAlignText] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const flipTimeout = setTimeout(() => setStartFlip(true), 2500);
    const alignTimeout = setTimeout(() => setAlignText(true), 3700);
    const exitTimeout = setTimeout(() => setExit(true), 5000);
    const finishTimeout = setTimeout(() => setShowPreloader(false), 6500);

    return () => {
      clearTimeout(flipTimeout);
      clearTimeout(alignTimeout);
      clearTimeout(exitTimeout);
      clearTimeout(finishTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#b692a1]"
          initial={{ x: 0 }}
          animate={exit ? { x: "100%" } : {}}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-[80vw] h-[50vh] flex justify-center items-center gap-[1.2rem] perspective-[1200px]">
            {letters.map((char, index) => {
              const isEven = index % 2 === 0;
              const yOffset = alignText ? "0px" : isEven ? "-25px" : "25px";

              return (
                <motion.div
                  key={index}
                  className="flex items-center justify-center"
                  style={{
                    width: "auto",
                    height: "100%",
                  }}
                  animate={{ y: yOffset }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <motion.div
                    className="h-full flex items-center justify-center"
                    style={{
                      rotateY: startFlip ? "0deg" : "90deg",
                      transition: "transform 1s ease-in-out",
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <span
                      className="text-white font-extrabold"
                      style={{
                        fontSize: "clamp(3rem, 8vw, 10rem)",
                        lineHeight: 1,
                      }}
                    >
                      {char}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

// "use client";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const letters = "ROMAN RYABCHINSKIY".split("");

// const Preloader = () => {
//   const [showPreloader, setShowPreloader] = useState(true);
//   const [startFlip, setStartFlip] = useState(false);
//   const [alignText, setAlignText] = useState(false);
//   const [exit, setExit] = useState(false);

//   useEffect(() => {
//     const flipTimeout = setTimeout(() => setStartFlip(true), 2500);
//     const alignTimeout = setTimeout(() => setAlignText(true), 3700);
//     const exitTimeout = setTimeout(() => setExit(true), 5000);
//     const finishTimeout = setTimeout(() => setShowPreloader(false), 6500);

//     return () => {
//       clearTimeout(flipTimeout);
//       clearTimeout(alignTimeout);
//       clearTimeout(exitTimeout);
//       clearTimeout(finishTimeout);
//     };
//   }, []);

//   return (
//     <AnimatePresence>
//       {showPreloader && (
//         <motion.div
//           className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#b692a1]"
//           initial={{ x: 0 }}
//           animate={exit ? { x: "100%" } : {}}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//         >
//           <div className="flex gap-[1rem] perspective-[1000px]">
//             {letters.map((char, index) => {
//               const isEven = index % 2 === 0;
//               const yOffset = alignText ? "0px" : isEven ? "-20px" : "20px";

//               return (
//                 <motion.div
//                   key={index}
//                   className="w-12 md:w-16 h-28 md:h-32 flex items-center justify-center"
//                   animate={{ y: yOffset }}
//                   transition={{ duration: 0.8, ease: "easeInOut" }}
//                 >
//                   <motion.div
//                     className="w-full h-full flex items-center justify-center"
//                     style={{
//                       rotateY: startFlip ? "0deg" : "90deg",
//                       transition: "transform 1s ease-in-out",
//                       transformStyle: "preserve-3d",
//                       backfaceVisibility: "hidden",
//                     }}
//                   >
//                     <span className="text-6xl md:text-8xl font-extrabold text-white block">
//                       {char}
//                     </span>
//                   </motion.div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Preloader;

//-------------  claude  -------------------------------------------------------

// "use client";

// import { FC, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Preloader: FC<{ onComplete: () => void }> = ({ onComplete }) => {
//   useEffect(() => {
//     // Simulate content loading time
//     const timer = setTimeout(() => {
//       onComplete();
//     }, 2000); // Show preloader for 2 seconds

//     return () => clearTimeout(timer);
//   }, [onComplete]);

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ x: 0 }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ duration: 0.8, ease: "easeInOut", delay: 1.5 }}
//         className="fixed inset-0 z-50 bg-[#b692a1]"
//         key="backdrop"
//       >
//         <motion.div
//           className="absolute left-10 bottom-10"
//           initial={{ y: "100%" }}
//           animate={{ y: 0 }}
//           exit={{ x: "calc(50vw - 10px)" }}
//           transition={{
//             y: { duration: 0.6, ease: "easeOut" },
//             x: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
//           }}
//         >
//           <motion.svg
//             version="1.0"
//             xmlns="http://www.w3.org/2000/svg"
//             width="623.000000pt"
//             height="107.000000pt"
//             viewBox="0 0 623.000000 107.000000"
//             preserveAspectRatio="xMidYMid meet"
//             className="w-[90%] max-w-[623px] h-auto"
//           >
//             <g
//               transform="translate(0.000000,107.000000) scale(0.100000,-0.100000)"
//               fill="#FFFFFF"
//               stroke="none"
//             >
//               <path
//                 d="M0 535 l0 -535 50 0 50 0 0 270 0 270 26 0 c14 0 34 -5 45 -10 18
// -10 19 -24 19 -270 l0 -260 50 0 50 0 0 223 c-1 242 -8 303 -38 327 -19 16
// -19 16 3 43 17 19 25 45 30 92 10 94 1 305 -14 333 -20 37 -70 52 -176 52
// l-95 0 0 -535z m171 475 c18 -10 19 -23 19 -197 0 -206 -5 -223 -62 -223 l-28
// 0 0 215 0 215 26 0 c14 0 34 -5 45 -10z"
//               />
//               <path
//                 d="M455 1061 c-11 -5 -29 -19 -40 -31 -19 -21 -20 -38 -23 -475 -3 -510
// -3 -513 62 -540 73 -31 180 -11 208 37 10 18 14 117 16 448 2 234 0 444 -3
// 468 -3 23 -16 54 -29 69 -20 23 -31 26 -97 29 -41 2 -83 0 -94 -5z m113 -53
// c17 -17 17 -929 0 -946 -15 -15 -51 -15 -66 0 -17 17 -17 929 0 946 7 7 21 12
// 33 12 12 0 26 -5 33 -12z"
//               />
//               <path
//                 d="M780 535 l0 -535 45 0 45 0 1 303 1 302 28 -155 c15 -85 33 -188 40
// -227 10 -61 15 -73 31 -73 10 0 19 1 20 3 0 1 17 101 39 222 l38 220 1 -297 1
// -298 45 0 45 0 0 535 0 535 -39 0 -39 0 -10 -57 c-5 -32 -29 -179 -53 -327
// -27 -166 -46 -261 -51 -250 -6 16 -108 606 -108 627 0 4 -18 7 -40 7 l-40 0 0
// -535z m297 73 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z"
//               />
//               <path
//                 d="M1320 1058 c-14 -7 -33 -29 -42 -48 -16 -32 -18 -78 -18 -522 l0
// -488 50 0 50 0 0 270 0 270 45 0 45 0 0 -270 0 -270 50 0 50 0 0 478 c0 287
// -4 491 -10 513 -16 57 -40 71 -122 76 -48 3 -82 -1 -98 -9z m118 -50 c9 -9 12
// -70 12 -215 l0 -203 -45 0 -45 0 0 203 c0 213 3 227 45 227 12 0 26 -5 33 -12z"
//               />
//               <path
//                 d="M1640 535 l0 -535 47 0 46 0 -6 371 c-3 204 -5 370 -3 368 2 -2 29
// -120 60 -262 49 -225 56 -272 56 -367 l0 -110 45 0 45 0 0 535 0 535 -46 0
// -46 0 4 -294 c2 -162 2 -293 1 -292 -2 2 -123 573 -123 581 0 3 -18 5 -40 5
// l-40 0 0 -535z"
//               />
//               <path
//                 d="M2220 535 l0 -535 50 0 50 0 0 270 0 270 26 0 c14 0 34 -5 45 -10 18
// -10 19 -24 19 -270 l0 -260 50 0 50 0 0 223 c-1 242 -8 303 -38 327 -19 16
// -19 16 3 43 17 19 25 45 30 92 10 94 1 305 -14 333 -20 37 -70 52 -176 52
// l-95 0 0 -535z m171 475 c18 -10 19 -23 19 -197 0 -206 -5 -223 -62 -223 l-28
// 0 0 215 0 215 26 0 c14 0 34 -5 45 -10z"
//               />
//               <path
//                 d="M2580 1041 c0 -50 39 -338 65 -483 21 -118 25 -168 25 -348 l0 -210
// 45 0 45 0 0 204 c0 146 4 226 15 278 30 140 85 492 85 540 l0 49 -32 -3 -32
// -3 -17 -135 c-22 -176 -51 -362 -55 -357 -6 5 -42 302 -50 405 l-7 92 -43 0
// c-42 0 -44 -1 -44 -29z"
//               />
//               <path
//                 d="M2990 1058 c-14 -7 -33 -29 -42 -48 -16 -32 -18 -78 -18 -522 l0
// -488 50 0 50 0 0 270 0 270 45 0 45 0 0 -270 0 -270 50 0 50 0 0 478 c0 287
// -4 491 -10 513 -16 57 -40 71 -122 76 -48 3 -82 -1 -98 -9z m118 -50 c9 -9 12
// -70 12 -215 l0 -203 -45 0 -45 0 0 203 c0 213 3 227 45 227 12 0 26 -5 33 -12z"
//               />
//               <path
//                 d="M3320 535 l0 -535 98 0 c72 0 106 4 132 18 55 27 62 63 58 294 -3
// 186 -4 198 -26 227 l-23 31 23 31 c22 29 23 39 23 212 0 133 -4 188 -13 205
// -21 38 -71 52 -177 52 l-95 0 0 -535z m171 475 c18 -10 19 -23 19 -197 0 -206
// -5 -223 -62 -223 l-28 0 0 215 0 215 26 0 c14 0 34 -5 45 -10z m0 -480 c18
// -10 19 -23 19 -227 0 -239 -3 -253 -62 -253 l-28 0 0 245 0 245 26 0 c14 0 34
// -5 45 -10z"
//               />
//               <path
//                 d="M3775 1061 c-11 -5 -29 -19 -40 -31 -19 -21 -20 -38 -23 -475 -3
// -510 -3 -513 62 -540 73 -31 181 -11 207 37 9 14 15 75 17 166 l4 142 -51 0
// -51 0 0 -143 c0 -150 -5 -167 -45 -167 -45 0 -45 0 -45 485 0 485 0 485 45
// 485 40 0 45 -17 45 -157 l0 -133 50 0 50 0 0 108 c-1 194 -17 223 -132 228
// -40 2 -82 0 -93 -5z"
//               />
//               <path
//                 d="M4080 535 l0 -535 50 0 50 0 0 270 0 270 45 0 45 0 0 -270 0 -270 50
// 0 50 0 0 535 0 535 -50 0 -50 0 0 -240 0 -240 -45 0 -45 0 0 240 0 240 -50 0
// -50 0 0 -535z"
//               />
//               <path d="M4470 535 l0 -535 50 0 50 0 0 535 0 535 -50 0 -50 0 0 -535z" />
//               <path
//                 d="M4670 535 l0 -535 47 0 46 0 -6 371 c-3 204 -5 370 -3 368 2 -2 29
// -120 60 -262 49 -225 56 -272 56 -367 l0 -110 45 0 45 0 0 535 0 535 -46 0
// -46 0 4 -294 c2 -162 2 -293 1 -292 -2 2 -123 573 -123 581 0 3 -18 5 -40 5
// l-40 0 0 -535z"
//               />
//               <path
//                 d="M5094 1056 c-42 -19 -54 -58 -54 -177 0 -118 14 -161 106 -325 34
// -62 67 -130 73 -151 6 -21 11 -102 11 -180 0 -115 -3 -144 -16 -157 -21 -22
// -61 -20 -74 3 -5 11 -10 81 -10 155 l0 136 -45 0 -45 0 0 -135 c0 -155 10
// -188 65 -211 74 -31 180 -9 204 42 7 15 11 84 11 175 0 178 -6 200 -102 369
// -83 147 -88 163 -88 279 0 103 13 141 50 141 42 0 50 -24 50 -156 l0 -124 46
// 0 46 0 -4 140 c-3 129 -5 141 -26 162 -18 19 -35 23 -95 25 -46 2 -83 -2 -103
// -11z"
//               />
//               <path
//                 d="M5420 535 l0 -535 45 0 45 0 1 273 1 272 48 -215 c26 -118 53 -241
// 59 -272 l12 -58 45 0 c24 0 44 3 44 8 1 4 -32 143 -71 309 l-73 303 61 222 60
// 223 -29 3 c-17 2 -33 1 -36 -2 -3 -4 -31 -106 -63 -229 l-57 -222 -1 228 -1
// 227 -45 0 -45 0 0 -535z"
//               />
//               <path d="M5770 535 l0 -535 50 0 50 0 0 535 0 535 -50 0 -50 0 0 -535z" />
//               <path
//                 d="M5940 1041 c0 -50 39 -338 65 -483 21 -118 25 -168 25 -348 l0 -210
// 45 0 45 0 0 204 c0 146 4 226 15 278 30 140 85 492 85 540 l0 49 -32 -3 -32
// -3 -17 -135 c-22 -176 -51 -362 -55 -357 -6 5 -42 302 -50 405 l-7 92 -43 0
// c-42 0 -44 -1 -44 -29z"
//               />
//             </g>
//           </motion.svg>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default Preloader;
