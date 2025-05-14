"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { motion, useAnimate, useInView, stagger } from "framer-motion";
import ServicesTitlesMobile from "./components/ServicesTitlesMobile";
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

const MyServicesMobile = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [, titleAnimate] = useAnimate();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView && titleRef.current) {
      const split = new SplitType(titleRef.current, {
        types: "lines,words",
        tagName: "span",
      });

      titleRef.current.classList.remove("invisible");

      titleRef.current.querySelectorAll(".word").forEach((word) => {
        const el = word as HTMLElement;
        el.style.transform = "translateY(100%)";
        el.style.opacity = "0";
      });

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
      className="relative w-full bg-[#c8a3b3] pb-20"
      id="services"
    >
      <div className="relative">
        <motion.h1
          ref={titleRef}
          className="invisible inline-block text-white text-5xl md:text-7xl lg:text-[10vw] px-5 lg:px-10 py-10 md:py-16 lg:py-24 relative z-10"
        >
          My Services
        </motion.h1>
      </div>
      <div className="relative">
        <ServicesTitlesMobile
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

export default MyServicesMobile;
