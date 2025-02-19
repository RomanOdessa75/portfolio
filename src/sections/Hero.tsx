"use client";

import { FC, useEffect, useRef } from "react";
import Button from "@/components/Button";
import SplitType from "split-type";
import {
  useAnimate,
  motion,
  stagger,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });

  const portraitWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["50vw", "100vw"]
  );
  const portraitHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["50vh", "100vh"]
  );

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    });

    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      {
        transform: "translateY(0)",
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      }
    );
  }, []);

  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-6 flex flex-col justify-center relative z-10 mix-blend-difference">
          <div className="container !max-w-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-6xl lg:text-8xl mt-40 md:mt-0"
              ref={titleScope}
            >
              {/* Crafting digital experiences through code and creative design */}
              Full-Stack Developer
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
              {/* <motion.div */}
              <motion.h2
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1,
                }}
              >
                I specialize in turning digital ideas into user-friendly
                experiences, whether crafting sleek websites or seamless mobile
                apps. We blend creativity with tech savvy.
                {/* <Button
                  variant="secondary"
                  iconAfter={
                    <div className="overflow-hidden size-5">
                      <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  <span>View my Work</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 2.2,
                }}
              >
                <Button variant="text">Let&apos;s talk</Button>*/}
              </motion.h2>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 relative">
          {/* <motion.div
            className="mt-20 md:mt-0 md:absolute md:right-0 md:top-0"
            style={{
              width: portraitWidth,
              height: portraitHeight,
            }}
          >
            <video
              src="/videos/13522169-hd_1920_1080_25fps.mp4"
              className="object-cover"
              // className="object-fit"
              autoPlay
              loop
              muted
            />
          </motion.div> */}
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full bg-black"
            style={{
              width: portraitWidth,
            }}
          >
            {/* <Image
              src={heroImage}
              alt="My portrait"
              className="size-full object-cover"
            /> */}
          </motion.div>
        </div>
      </div>
      <div className="md:h-[200vh] border-4" ref={scrollingDiv}></div>
    </section>
  );
};

export default Hero;

//-------------------- origin -------------------------------------------------
// "use client";

// import { FC, useEffect, useRef } from "react";
// /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
// /* eslint-disable-next-line */
// import heroImage from "@/assets/images/hero-image.jpg";
// import Image from "next/image";
// import Button from "@/components/Button";
// import SplitType from "split-type";
// import {
//   useAnimate,
//   motion,
//   stagger,
//   useScroll,
//   useTransform,
// } from "motion/react";
// import { div } from "motion/react-client";
// // import { transform } from "motion";

// const Hero: FC = () => {
//   const [titleScope, titleAnimate] = useAnimate();
//   const scrollingDiv = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: scrollingDiv,
//     offset: ["start end", "end end"],
//   });

//   const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);
//   // 12 /5 = 2.4 * 100 = 240%

//   useEffect(() => {
//     new SplitType(titleScope.current, {
//       types: "lines,words",
//       tagName: "span",
//     });

//     titleAnimate(
//       titleScope.current.querySelectorAll(".word"),
//       {
//         transform: "translateY(0)",
//       },
//       {
//         duration: 0.5,
//         delay: stagger(0.2),
//       }
//     );
//   }, []);
//   return (
//     <section>
//       <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
//         <div className="md:col-span-7 flex flex-col justify-center">
//           <div className="container !max-w-full">
//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0"
//               ref={titleScope}
//             >
//               Crafting digital experiences through code and creative design
//             </motion.h1>
//             <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
//               <motion.div
//                 initial={{ opacity: 0, y: "100%" }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: 1.75,
//                 }}
//               >
//                 <Button
//                   variant="secondary"
//                   iconAfter={
//                     <div className="overflow-hidden size-5">
//                       <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="size-5"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
//                           />
//                         </svg>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="size-5"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   }
//                 >
//                   <span>View my Work</span>
//                 </Button>
//               </motion.div>
//               <motion.div
//                 initial={{ opacity: 0, y: "100%" }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: 2.2,
//                 }}
//               >
//                 <Button variant="text">Let&apos;s talk</Button>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//         <div className="md:col-span-5 relative">
//           <motion.div
//             className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full"
//             style={{
//               width: portraitWidth,
//             }}
//           >
//             <Image
//               src={heroImage}
//               alt="My portrait"
//               className="size-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </div>
//       <div className="md:h-[200vh] border-4" ref={scrollingDiv}></div>
//     </section>
//   );
// };

// export default Hero;
