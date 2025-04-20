"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Определяем ОДИН блок текста, который должен быть виден за раз
// Если нужно больше текста в видимой части, добавьте его сюда
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
  "*", // Добавил еще раз для большей длины видимой части
];

// Текст для статичной секции (остается без изменений)
const staticTexts = {
  left: "I CREATE WEB APPLICATIONS WITH LOVE AND PASSION",
  center: "FOR COOL BRANDS AND CUSTOMERS",
  right: "SINCE 2022",
};

const MarqueeSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  //   const servicesY = useTransform(scrollYProgress, [0, 1], ["20%", "-50%"]);
  const servicesY = useTransform(scrollYProgress, [0, 1], ["20%", "-80%"]);

  return (
    <>
      <motion.section
        className="relative z-10"
        //   id="services"
        style={{ y: servicesY }}
      >
        {/* Верхняя секция - Бегущая строка */}
        <div className="bg-gray-100 py-8 overflow-hidden w-full">
          {/* Анимируемый контейнер */}
          <div className="flex flex-nowrap animate-marquee">
            {/* Рендерим ОДИН и тот же блок контента ДВА раза подряд */}
            {[
              ...marqueeSegmentContent,
              ...marqueeSegmentContent,
              ...marqueeSegmentContent,
              ...marqueeSegmentContent,
            ].map((item, index) => (
              <span
                // Важно использовать уникальный ключ, даже при повторах
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
        {/* <div className="bg-black text-white py-20 px-4 md:px-8"> */}
        <div
          className="text-white py-20 px-4 md:px-10"
          style={{ backgroundColor: "#798e7b" }}
        >
          <motion.div
            // className="h-px w-full bg-gray-600 mb-4"
            // className="h-0.5 w-full bg-white mb-4"
            // className="h-0.5 w-full bg-[#bfccd8] mb-4"
            className="h-0.5 w-full bg-black mb-4"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs uppercase tracking-wider space-y-2 md:space-y-0">
            {/* <p className="text-gray-400">{staticTexts.left}</p>
            <p className="text-gray-400">{staticTexts.center}</p>
            <p className="text-gray-400">{staticTexts.right}</p> */}
            {/* <p className="text-white">{staticTexts.left}</p>
            <p className="text-white">{staticTexts.center}</p>
            <p className="text-white">{staticTexts.right}</p> */}
            {/* <p className="text-[#bfccd8]">{staticTexts.left}</p>
            <p className="text-[#bfccd8]">{staticTexts.center}</p>
            <p className="text-[#bfccd8]">{staticTexts.right}</p> */}
            <p className="text-black">{staticTexts.left}</p>
            <p className="text-black">{staticTexts.center}</p>
            <p className="text-black">{staticTexts.right}</p>
          </div>
          {/* <div className="mt-12 md:mt-20 max-w-4xl"> */}
          {/* <div className="mt-12 md:mt-20 w-full">
            <p className="text-2xl md:text-6xl font-extralight leading-relaxed text-gray-200">
              Right from the start, I’ve carved out our niche with a bold
              approach. Crafting immersive experiences that authentically
              reflect your essence relies on seamlessly blending your vision
              with our expertise.
            </p>
          </div> */}
          {/* <div className="text-[#bfccd8]"> */}
          <div className="text-black">
            {/* <div className="text-blue-950"> */}
            {/* <div className="text-white"> */}
            <div className="mt-12 md:mt-20 w-full">
              {/* <p className="text-2xl text-center md:text-5xl font-extralight leading-relaxed text-gray-200"> */}
              <p className="text-2xl text-center md:text-5xl font-extralight leading-relaxed">
                Right from the start, I’ve carved out our niche with a
              </p>
            </div>
            <div className="w-full">
              {/* <p className="text-2xl md:text-5xl font-extralight leading-relaxed text-gray-200"> */}
              <p className="text-2xl md:text-5xl font-extralight leading-relaxed">
                bold approach. Crafting immersive experiences that authentically
              </p>
              {/* <p
                className="font-extralight leading-relaxed text-gray-200"
                style={{ fontSize: "2.6rem", lineHeight: "3rem" }}
              >
                bold approach. Crafting immersive experiences that authentically
              </p> */}
            </div>
            <div className="w-full">
              {/* <p className="text-2xl md:text-5xl font-extralight leading-relaxed text-gray-200"> */}
              <p className="text-2xl md:text-5xl font-extralight leading-relaxed">
                {/* <p
                className="font-extralight leading-relaxed text-gray-200"
                style={{ fontSize: "2.6rem", lineHeight: "3rem" }}
              > */}
                reflect your essence relies on seamlessly blending your vision
                with
              </p>
            </div>
            <div className="w-full">
              {/* <p className="text-2xl md:text-5xl font-extralight leading-relaxed text-gray-200"> */}
              <p className="text-2xl md:text-5xl font-extralight leading-relaxed">
                our expertise.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default MarqueeSection;

// ---------------------- Gemini ---------------------------------------
// components / MarqueeSection.tsx;
// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// // Определяем ОДИН блок текста, который должен быть виден за раз
// // Если нужно больше текста в видимой части, добавьте его сюда
// const marqueeSegmentContent = [
//   "INDEPENDENT",
//   "*",
//   "CREATIVE",
//   "*",
//   "PASSIONATE",
//   "*",
//   "INDEPENDENT",
//   "*",
//   "CREATIVE",
//   "*",
//   "PASSIONATE",
//   "*", // Добавил еще раз для большей длины видимой части
// ];

// // Текст для статичной секции (остается без изменений)
// const staticTexts = {
//   left: "WE CREATE WEBSITES WITH LOVE AND PASSION",
//   center: "FOR COOL BRANDS AND CUSTOMERS",
//   right: "SINCE 2008",
// };

// const MarqueeSection: React.FC = () => {
//   return (
//     <section>
//       {/* Верхняя секция - Бегущая строка */}
//       <div className="bg-gray-100 py-4 overflow-hidden w-full">
//         {/* Анимируемый контейнер */}
//         <div className="flex flex-nowrap animate-marquee">
//           {/* Рендерим ОДИН и тот же блок контента ДВА раза подряд */}
//           {[
//             ...marqueeSegmentContent,
//             ...marqueeSegmentContent,
//             ...marqueeSegmentContent,
//             ...marqueeSegmentContent,
//           ].map((item, index) => (
//             <span
//               // Важно использовать уникальный ключ, даже при повторах
//               key={`marquee-item-${index}`}
//               className={`mx-4 text-sm font-semibold uppercase tracking-wider flex-shrink-0 ${
//                 item === "*" ? "text-orange-500" : "text-black"
//               }`}
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Нижняя секция - Статичный текст и анимированная линия (без изменений) */}
//       <div className="bg-black text-white py-6 px-4 md:px-8">
//         <motion.div
//           className="h-px w-full bg-gray-600 mb-4"
//           initial={{ scaleX: 0, originX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           viewport={{ once: true }}
//         />
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs uppercase tracking-wider space-y-2 md:space-y-0">
//           <p className="text-gray-400">{staticTexts.left}</p>
//           <p className="text-gray-400">{staticTexts.center}</p>
//           <p className="text-gray-400">{staticTexts.right}</p>
//         </div>
//         <div className="mt-12 md:mt-20 max-w-4xl">
//           <p className="text-2xl md:text-4xl leading-relaxed text-gray-200">
//             Right from the start, we’ve carved out our niche with a bold
//             approach. Crafting immersive experiences that authentically reflect
//             your essence relies on seamlessly blending your vision with our
//             expertise.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarqueeSection;
//=======================================================================================

//------------------------ gpt --------------------------------------------

// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const words = ["INDEPENDENT", "CREATIVE", "PASSIONATE"];

// export default function MarqueeSection() {
//   const lineRef = useRef(null);
//   const isInView = useInView(lineRef, { once: true, margin: "-50px" });

//   return (
//     <div className="w-full">
//       {/* Light background Marquee */}
//       <div className="bg-neutral-100 overflow-hidden py-4 border-b border-neutral-300 relative">
//         <div className="flex whitespace-nowrap animate-marquee">
//           {[...words, ...words].map((word, idx) => (
//             <div
//               key={idx}
//               className="flex items-center gap-6 text-xl font-medium text-neutral-800 uppercase px-6"
//             >
//               {word} <span className="text-orange-500 text-2xl">*</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dark background static text */}
//       <div className="bg-black text-white px-4 md:px-12 py-16 space-y-8 relative">
//         {/* Divider Line */}
//         <motion.div
//           ref={lineRef}
//           className="h-px bg-white"
//           initial={{ width: 0 }}
//           animate={isInView ? { width: "100%" } : {}}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//         />

//         {/* Top Labels */}
//         <div className="flex justify-between text-xs uppercase text-white/60 tracking-wide">
//           <div>We create websites with love and passion</div>
//           <div className="text-right">For cool brands and customers</div>
//           <div className="text-right">Since 2008</div>
//         </div>

//         {/* Main Message */}
//         <p className="text-4xl md:text-6xl font-light leading-tight max-w-6xl">
//           Right from the start, we've carved out our niche with a bold approach.
//           Crafting immersive experiences that authentically reflect your essence
//           relies on seamlessly blending your vision with our expertise.
//         </p>
//       </div>
//     </div>
//   );
// }

// ----------- DeepSeek + ---------------------------------------------

// "use client";

// import { motion, useInView, Variants } from "framer-motion";
// import { useRef } from "react";

// const marqueeText = [
//   "CREATIVE",
//   "PASSIONATE",
//   "INDEPENDENT",
//   "CREATE",
//   "PASSIONA",
//   "MECHANTRYINBERTESWITH LOVE",
//   "FORECOLEBANGSAAD",
//   "SUNDE2003",
//   "AND PASSION",
//   "CUSTOMER",
// ].join(" ★ ");

// const dividerVariants: Variants = {
//   hidden: { scaleX: 0, originX: 0 },
//   visible: {
//     scaleX: 1,
//     transition: { duration: 1.5, ease: "circOut" },
//   },
// };

// export default function MarqueeSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <div className="w-full">
//       {/* Light Section - Marquee */}
//       <div className="bg-white py-8 overflow-hidden">
//         <motion.div
//           animate={{
//             // x: ["-100%", "0%"],
//             x: ["0%", "-100%"],
//             transition: {
//               duration: 60,
//               repeat: Infinity,
//               ease: "linear",
//               repeatType: "loop",
//             },
//           }}
//           className="flex whitespace-nowrap"
//         >
//           <span className="text-4xl font-bold text-black px-4">
//             {marqueeText}
//           </span>
//           <span className="text-4xl font-bold text-black px-4">
//             {marqueeText}
//           </span>
//           {/* <span className="text-4xl font-bold text-black px-4">
//             {marqueeText}
//           </span>
//           <span className="text-4xl font-bold text-black px-4">
//             {marqueeText}
//           </span> */}
//         </motion.div>
//       </div>

//       {/* Dark Section - Divider */}
//       <div
//         ref={ref}
//         className="bg-black relative h-96 flex items-center justify-center"
//       >
//         <motion.div
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={dividerVariants}
//           className="absolute top-1/2 left-0 w-full h-px bg-white/30"
//         />

//         <div className="relative z-10 max-w-2xl px-4 text-center">
//           <p className="text-white text-xl md:text-2xl leading-relaxed">
//             Right from the start, we've carved out our niche with a bold
//             approach. Crafting immersive experiences that authentically reflect
//             your essence relies on seamlessly blending your vision with our
//             expertise.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

//---------------- claude.ai ---------------------------------------------

// "use client";

// import { useRef } from "react";
// import { motion, useInView, useScroll, useTransform } from "framer-motion";

// export default function MarqueeSection() {
//   // Ref for the divider animation
//   const dividerRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(dividerRef, { once: true, amount: 0.5 });

//   // For parallax scrolling effect on the marquee
//   const { scrollYProgress } = useScroll();
//   const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -200]);

//   return (
//     <section className="w-full">
//       {/* Marquee section with moving text */}
//       <div className="bg-white py-4 overflow-hidden">
//         <motion.div
//           className="whitespace-nowrap text-2xl font-bold flex"
//           style={{ x: marqueeX }}
//           animate={{ x: [0, -1000] }}
//           transition={{
//             x: { repeat: Infinity, duration: 20, ease: "linear" },
//           }}
//         >
//           <div className="flex items-center gap-4 mr-4">
//             <span>INDEPENDENT</span>
//             <span className="text-orange-500 text-2xl">*</span>
//             <span>CREATIVE</span>
//             <span className="text-orange-500 text-2xl">*</span>
//             <span>PASSIONATE</span>
//             <span className="text-orange-500 text-2xl">*</span>
//             <span>INDEPENDENT</span>
//             <span className="text-orange-500 text-2xl">*</span>
//             <span>CREATIVE</span>
//             <span className="text-orange-500 text-2xl">*</span>
//             <span>PASSIONATE</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <span>INDEPENDENT</span>
//             <span className="text-orange-500 text-2xl">*</span>
//             <span>CREATIVE</span>
//             <span className="text-orange-500 text-2xl">*</span>
//             <span>PASSIONATE</span>
//             <span className="text-orange-500 text-2xl">*</span>
//             <span>INDEPENDENT</span>
//             <span className="text-orange-500 text-2xl">*</span>
//             <span>CREATIVE</span>
//             <span className="text-orange-500 text-2xl">*</span>
//             <span>PASSIONATE</span>
//           </div>
//         </motion.div>
//       </div>

//       {/* Dark section with animated divider and static text */}
//       <div className="bg-black text-white py-16 px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Animated divider */}
//           <div ref={dividerRef} className="w-full h-px relative mb-12">
//             <motion.div
//               className="absolute top-0 left-0 h-px bg-white w-full origin-left"
//               initial={{ scaleX: 0 }}
//               animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
//               transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
//             />
//           </div>

//           {/* Content */}
//           <div className="flex justify-between items-start">
//             <div className="max-w-xs">
//               <p className="text-sm font-medium uppercase leading-tight">
//                 WE CREATE WEBSITES WITH LOVE
//                 <br />
//                 AND PASSION
//               </p>
//             </div>

//             <div className="max-w-4xl">
//               <h2 className="text-5xl font-bold leading-tight">
//                 Right from the start, we&apos;ve carved out our niche with a
//                 bold approach. Crafting immersive experiences that authentically
//                 reflect your essence relies on seamlessly blending your vision
//                 with our expertise.
//               </h2>
//             </div>

//             <div className="text-right">
//               <p className="text-sm font-medium uppercase leading-tight">
//                 FOR COOL BRANDS AND
//                 <br />
//                 CUSTOMERS
//               </p>
//               <p className="text-sm font-medium uppercase mt-4">SINCE 2006</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//----------------------- grok -------------------------------------------------

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const MarqueeSection = () => {
//   const dividerRef = useRef(null);
//   const isInView = useInView(dividerRef, { once: true });

//   const marqueeText = [
//     "Strategy",
//     "Design",
//     "Technology",
//     "Growth",
//     "Innovation",
//   ];

//   return (
//     <section className="w-full overflow-hidden bg-white dark:bg-gray-900 py-12">
//       {/* Light Theme Marquee */}
//       <div className="relative w-full h-16 bg-white dark:bg-gray-900">
//         <motion.div
//           className="flex whitespace-nowrap text-2xl font-semibold text-gray-900 dark:text-white"
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 20,
//               ease: "linear",
//             },
//           }}
//         >
//           {[...marqueeText, ...marqueeText].map((item, index) => (
//             <span key={index} className="inline-flex items-center mx-4">
//               {item}
//               <span className="mx-4 text-gray-400">✦</span>
//             </span>
//           ))}
//         </motion.div>
//       </div>

//       {/* Divider */}
//       <div className="relative w-full h-1 my-8" ref={dividerRef}>
//         <motion.div
//           className="absolute top-0 left-0 h-1 bg-gray-900 dark:bg-white"
//           initial={{ width: 0 }}
//           animate={isInView ? { width: "100%" } : { width: 0 }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//         />
//       </div>

//       {/* Static Text on Dark Background */}
//       <div className="bg-gray-900 text-white py-12">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold">
//             We craft experiences that inspire and empower
//           </h2>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarqueeSection;
