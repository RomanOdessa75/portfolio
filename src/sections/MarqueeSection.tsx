"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const marqueeSegmentContent = [
  "INDEPENDENT",
  "*",
  "CREATIVE",
  "*",
  "PASSIONATE",
  "*",
  "INDEPENDENT",
  "*",
  "CREATIVE",
  "*",
  "PASSIONATE",
  "*",
];

const staticTexts = {
  left: "I CREATE WEB APPLICATIONS WITH LOVE AND PASSION",
  center: "FOR COOL BRANDS AND CUSTOMERS",
  right: "SINCE 2022",
};

const MarqueeSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const servicesY = useTransform(scrollYProgress, [0, 1], ["20%", "-80%"]);

  return (
    <>
      <motion.section className="relative z-10" style={{ y: servicesY }}>
        {/* Верхняя секция - Бегущая строка */}
        <div className="bg-gray-100 py-8 overflow-hidden w-full">
          {/* Анимируемый контейнер */}
          <div className="flex flex-nowrap animate-marquee">
            {[
              ...marqueeSegmentContent,
              ...marqueeSegmentContent,
              ...marqueeSegmentContent,
              ...marqueeSegmentContent,
            ].map((item, index) => (
              <span
                key={`marquee-item-${index}`}
                className={`mx-4 text-4xl font-normal uppercase tracking-wider flex-shrink-0 ${
                  item === "*" ? "text-orange-500" : "text-black"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Нижняя секция - Статичный текст и анимированная линия (без изменений) */}

        <div
          className="text-white py-20 px-4 md:px-10"
          style={{ backgroundColor: "#798e7b" }}
        >
          <motion.div
            className="h-0.5 w-full bg-black mb-4"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs uppercase tracking-wider space-y-2 md:space-y-0">
            <p className="text-black">{staticTexts.left}</p>
            <p className="text-black">{staticTexts.center}</p>
            <p className="text-black">{staticTexts.right}</p>
          </div>

          <div className="text-black">
            <div className="mt-12 md:mt-20 w-full">
              <p className="text-2xl text-center md:text-5xl font-extralight leading-relaxed">
                Right from the start, I’ve carved out our niche with a
              </p>
            </div>
            <div className="w-full">
              <p className="text-2xl md:text-5xl font-extralight leading-relaxed">
                bold approach. Crafting immersive experiences that authentically
              </p>
            </div>
            <div className="w-full">
              <p className="text-2xl md:text-5xl font-extralight leading-relaxed">
                reflect your essence relies on seamlessly blending your vision
                with
              </p>
            </div>
            <div className="w-full">
              <p className="text-2xl md:text-5xl font-extralight leading-relaxed">
                my expertise.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default MarqueeSection;
