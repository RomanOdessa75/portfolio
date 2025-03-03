"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { easings } from "@/utils/animations";
import ServicesItem from "@/components/ServicesItem";
import { dividerMotion } from "@/utils/animations";

const MyServices: FC = () => {
  const servicesItems = [
    "Services",
    "Our Work",
    "People & Culture",
    "Clients & Partners",
    "Get In Touch",
  ];

  return (
    <section className="section bg-[#c8a3b3]" id="faqs">
      <h2 className="text-4xl md:text-7xl lg:text-8xl lg:px-10">My Services</h2>
      <motion.div
        className="inset-0 bg-[#c8a3b3] flex flex-col justify-end p-8 mt-10 md:mt-16 lg:mt-20"
        initial={{ y: "-100%" }}
        animate={{
          y: 0,
          transition: { duration: 1, ease: easings.easeOutQuart },
        }}
        exit={{ y: "-100%", transition: { duration: 0.3 } }}
      >
        <motion.div
          className="bottom-0 h-[1px] bg-black w-full origin-left"
          variants={dividerMotion}
          initial="initial"
          animate="animate"
        />
        <motion.ul exit={{ opacity: 0, transition: { duration: 0 } }}>
          {servicesItems.map((item, idx) => (
            <ServicesItem key={idx} index={idx + 1} title={item} />
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default MyServices;
