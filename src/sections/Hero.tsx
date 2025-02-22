"use client";

import { FC, useEffect, useRef } from "react";
// import Button from "@/components/Button";
import SplitType from "split-type";
import {
  useAnimate,
  motion,
  stagger,
  useScroll,
  useTransform,
} from "framer-motion";
import { dividerMotion } from "@/utils/animations";
// import Image from "next/image";

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
  // const portraitHeight = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["50vh", "100vh"]
  // );

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
              Full-Stack Developer
            </motion.h1>
            <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6 justify-between">
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
              </motion.h2>
              {/* <motion.div
                className=" bottom-20 h-[2px] bg-black w-[100%] origin-left"
                variants={dividerMotion}
              /> */}
            </div>
          </div>
        </div>

        <div className="md:col-span-6 relative">
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full bg-[#b692a1]"
            style={{
              width: portraitWidth,
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

            <h2 className="absolute bottom-10 right-10 text-5xl md:text-[70px] text-white font-thin">
              ROMAN RYABCHINSKIY
            </h2>
          </motion.div>
        </div>
      </div>
      <div className="md:h-[200vh] border-4" ref={scrollingDiv}></div>
    </section>
  );
};

export default Hero;

//---------------------------------------------------------------------------------------
// "use client";

// import { FC, useEffect, useRef } from "react";
// import SplitType from "split-type";
// import {
//   useAnimate,
//   motion,
//   stagger,
//   useScroll,
//   useTransform,
// } from "framer-motion";

// const Hero: FC = () => {
//   const [titleScope, titleAnimate] = useAnimate();
//   const scrollingDiv = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: scrollingDiv,
//     offset: ["start end", "end end"],
//   });

//   const portraitWidth = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["50vw", "100vw"]
//   );
//   const portraitHeight = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["calc(50vh - 50%)", "100vh"]
//   );

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
//         <div className="md:col-span-6 flex flex-col justify-center relative z-10 mix-blend-difference">
//           <div className="container !max-w-full">
//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-5xl md:text-6xl lg:text-8xl mt-40 md:mt-0"
//               ref={titleScope}
//             >
//               {/* Crafting digital experiences through code and creative design */}
//               Full-Stack Developer
//             </motion.h1>
//             <div className="flex flex-col md:flex-row md:items-center mt-10 items-start gap-6">
//               {/* <motion.div */}
//               <motion.h2
//                 initial={{ opacity: 0, y: "100%" }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: 1,
//                 }}
//               >
//                 I specialize in turning digital ideas into user-friendly
//                 experiences, whether crafting sleek websites or seamless mobile
//                 apps. We blend creativity with tech savvy.
//               </motion.h2>
//             </div>
//           </div>
//         </div>

//         <div className="md:col-span-6 relative ">
//           <motion.div
//             className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full bg-[#798e7b] top-1/2 -translate-y-1/2"
//             style={{
//               width: portraitWidth,
//               height: portraitHeight,
//             }}
//           >
//             {/* Фон с явным указанием размеров */}
//             <div className="absolute inset-0 bg-[#798e7b] -z-10 w-full h-screen" />

//             <video
//               src="/videos/13522169-hd_1920_1080_25fps.mp4"
//               className="size-full object-cover"
//               autoPlay
//               loop
//               muted
//             />
//           </motion.div>
//         </div>
//       </div>
//       <div className="md:h-[200vh] border-4" ref={scrollingDiv}></div>
//     </section>
//   );
// };

// export default Hero;
