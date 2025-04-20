"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { motion, useAnimate, useInView, stagger } from "framer-motion";
import ServicesTitles from "@/components/ServicesTitles";
import { useState } from "react";

const servicesData = [
  {
    title: "Web Development",
    description:
      "Building responsive and performant websites tailored to your needs.",
    speed: 0.5,
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing user interfaces.",
    speed: 0.5,
  },
  {
    title: "Consulting",
    description: "Providing expert advice to optimize your digital projects.",
    speed: 0.67,
  },
  {
    title: "Maintenance",
    description: "Ensuring your website runs smoothly with ongoing support.",
    speed: 0.8,
  },
];

const MyServices = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [, titleAnimate] = useAnimate();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // useEffect(() => {
  //   if (isInView && titleRef.current) {
  //     // Инициализация SplitType
  //     // const split = new SplitType(titleRef.current, {
  //     //   types: "lines, words",
  //     //   tagName: "span",
  //     // });
  //     const split = new SplitType(titleRef.current, {
  //       types: "lines,words",
  //       tagName: "span",
  //     });

  //     // Убедимся, что слова изначально скрыты
  //     // titleRef.current.querySelectorAll(".word").forEach((word) => {
  //     //   word.style.transform = "translateY(100%)";
  //     //   word.style.opacity = "0";
  //     // });
  //     titleRef.current.querySelectorAll(".word").forEach((word) => {
  //       const el = word as HTMLElement;
  //       el.style.transform = "translateY(100%)";
  //       el.style.opacity = "0";
  //     });

  //     // Запуск анимации
  //     titleAnimate(
  //       titleRef.current.querySelectorAll(".word"),
  //       {
  //         transform: "translateY(0)",
  //         opacity: 1,
  //       },
  //       {
  //         duration: 0.5,
  //         delay: stagger(0.2),
  //       }
  //     );

  //     // Очистка SplitType при размонтировании
  //     return () => {
  //       split.revert();
  //     };
  //   }
  // }, [isInView, titleAnimate]);
  useEffect(() => {
    if (isInView && titleRef.current) {
      const split = new SplitType(titleRef.current, {
        types: "lines,words",
        tagName: "span",
      });

      // 👇 Показываем заголовок (убираем invisible)
      titleRef.current.classList.remove("invisible");

      // 👇 Скрываем слова перед анимацией
      titleRef.current.querySelectorAll(".word").forEach((word) => {
        const el = word as HTMLElement;
        el.style.transform = "translateY(100%)";
        el.style.opacity = "0";
      });

      // 👇 Запуск анимации
      titleAnimate(
        titleRef.current.querySelectorAll(".word"),
        {
          transform: "translateY(0)",
          opacity: 1,
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );

      return () => {
        split.revert();
      };
    }
  }, [isInView, titleAnimate]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#c8a3b3] py-20 -mt-72"
      id="services"
    >
      <div className="relative">
        <motion.h2
          ref={titleRef}
          // className="inline-block text-white text-4xl md:text-7xl lg:text-[10vw] lg:px-10 py-10 md:py-16 lg:py-24 relative z-10"
          className="invisible inline-block text-white text-4xl md:text-7xl lg:text-[10vw] lg:px-10 py-10 md:py-16 lg:py-24 relative z-10"
        >
          My Services
        </motion.h2>
      </div>
      <div className="relative">
        <ServicesTitles
          data={servicesData}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          openAccordion={openAccordion}
          setOpenAccordion={setOpenAccordion}
        />
      </div>
    </section>
  );
};

export default MyServices;

//-------------------------------------------------------------------------------

// // "use client";

// // import { motion, useScroll, useTransform } from "framer-motion";
// import { useState } from "react";
// import ServicesTitles from "@/components/ServicesTitles";
// import {
//   motion,
//   useMotionTemplate,
//   useScroll,
//   useTransform,
// } from "framer-motion";

// const servicesData = [
//   {
//     title: "Web Development",
//     description:
//       "Building responsive and performant websites tailored to your needs.",
//     speed: 0.5,
//   },
//   {
//     title: "UI/UX Design",
//     description: "Crafting intuitive and visually appealing user interfaces.",
//     speed: 0.5,
//   },
//   {
//     title: "Consulting",
//     description: "Providing expert advice to optimize your digital projects.",
//     speed: 0.67,
//   },
//   {
//     title: "Maintenance",
//     description: "Ensuring your website runs smoothly with ongoing support.",
//     speed: 0.8,
//   },
// ];

// const MyServices = () => {
//   const [selectedService, setSelectedService] = useState<number | null>(null);
//   const [openAccordion, setOpenAccordion] = useState<number | null>(null);

//   // const { scrollYProgress } = useScroll();
//   // const servicesY = useTransform(scrollYProgress, [0, 1], ["20%", "-50%"]);
//   const { scrollYProgress } = useScroll();
//   const clipProgress = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
//   const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

//   return (
//     // <motion.section
//     <section
//       // className="relative w-full min-h-screen bg-[#c8a3b3] py-20"
//       className="relative w-full min-h-screen bg-[#c8a3b3] py-20 -mt-72"
//       id="services"
//       // style={{ y: servicesY }}
//     >
//       <div className="relative">
//         {/* <motion.h2
//           style={{ clipPath: clip }}
//           className="inline-block text-white text-4xl md:text-7xl lg:text-8xl lg:px-10 py-10 md:py-16 lg:py-24 relative z-10"
//         >
//           My Services
//         </motion.h2>
//         <h2
//           className="text-4xl md:text-7xl lg:text-8xl lg:px-10 py-10 md:py-16 lg:py-24"
//           style={{ color: "#b692a1" }}
//         >
//           My Services
//         </h2> */}
//         <motion.h2
//           style={{ clipPath: clip }}
//           className="inline-block text-white text-4xl md:text-7xl lg:text-[10vw] lg:px-10 py-10 md:py-16 lg:py-24 relative z-10"
//         >
//           My Services
//         </motion.h2>
//         <h2
//           className="block absolute top-24 text-4xl md:text-7xl lg:text-[10vw] lg:px-10 "
//           style={{ color: "#b692a1" }}
//         >
//           My Services
//         </h2>
//       </div>
//       <div className="relative">
//         <ServicesTitles
//           data={servicesData}
//           selectedService={selectedService}
//           setSelectedService={setSelectedService}
//           openAccordion={openAccordion}
//           setOpenAccordion={setOpenAccordion}
//         />
//       </div>
//     </section>
//   );
// };

// export default MyServices;
