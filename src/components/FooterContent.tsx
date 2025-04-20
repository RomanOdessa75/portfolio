import React from "react";
import TitleWithDivider from "./TitleWithDivider";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import FooterLogo from "./FooterLogo";

export default function FooterContent() {
  return (
    // <div className="bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between space-y-16">
    <div className="bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between space-y-10">
      <TitleWithDivider />
      <div className="flex flex-col md:flex-row justify-between">
        <ContactForm />
        <ContactInfo />
      </div>
      <FooterLogo />
    </div>
  );
}

//-----------
//--------------------------------------------------------------
// import React, { useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { dividerMotion } from "@/utils/animations";
// import StaticTitle from "./StaticTitle";
// import { useInView } from "react-intersection-observer";
// import Button from "./Button";

// export default function Content() {
//   return (
//     <div className="bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between">
//       <Section1 />
//       <Section2 />
//     </div>
//   );
// }

// const Section1 = () => {
//   return (
//     <div>
//       <Nav />
//     </div>
//   );
// };

// const ContactSection = () => {
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

//   const [formState, setFormState] = useState({
//     name: "",
//     company: "",
//     message: "",
//   });

//   const [focusStates, setFocusStates] = useState({
//     name: false,
//     company: false,
//     message: false,
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormState((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFocus = (field: string) => {
//     setFocusStates((prev) => ({ ...prev, [field]: true }));
//   };

//   const handleBlur = (field: string) => {
//     if (!formState[field as keyof typeof formState]) {
//       setFocusStates((prev) => ({ ...prev, [field]: false }));
//     }
//   };

//   const inputVariants = {
//     initial: { width: 0 },
//     animate: {
//       width: "100%",
//       transition: { duration: 0.8, ease: "easeInOut" },
//     },
//   };

//   return (
//     <div
//       ref={ref}
//       className="flex flex-col md:flex-row justify-between mt-16 mb-16"
//     >
//       <div className="w-full md:w-1/2 pr-0 md:pr-6">
//         <div className="flex flex-col mb-8">
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="relative flex-1 mb-4 md:mb-0">
//               <input
//                 type="text"
//                 name="name"
//                 value={formState.name}
//                 onChange={handleInputChange}
//                 onFocus={() => handleFocus("name")}
//                 onBlur={() => handleBlur("name")}
//                 className="w-full bg-transparent text-white px-2 py-2 focus:outline-none hover:bg-[#454550] transition-all duration-300"
//               />
//               <motion.div
//                 className="h-[1px] bg-[#ffffff80] w-full origin-left"
//                 variants={inputVariants}
//                 initial="initial"
//                 animate={inView ? "animate" : "initial"}
//               />
//               <motion.div
//                 className="h-[1px] bg-white w-full origin-left absolute bottom-0 left-0"
//                 variants={inputVariants}
//                 initial="initial"
//                 animate={focusStates.name ? "animate" : "initial"}
//               />
//               <span
//                 className={`absolute transition-all duration-300 text-[#ffffff80] ${
//                   focusStates.name
//                     ? "top-[-20px] text-sm text-white"
//                     : "top-[6px] text-base"
//                 }`}
//               >
//                 Full name
//               </span>
//             </div>

//             <div className="relative flex-1">
//               <input
//                 type="text"
//                 name="company"
//                 value={formState.company}
//                 onChange={handleInputChange}
//                 onFocus={() => handleFocus("company")}
//                 onBlur={() => handleBlur("company")}
//                 className="w-full bg-transparent text-white px-2 py-2 focus:outline-none hover:bg-[#454550] transition-all duration-300"
//               />
//               <motion.div
//                 className="h-[1px] bg-[#ffffff80] w-full origin-left"
//                 variants={inputVariants}
//                 initial="initial"
//                 animate={inView ? "animate" : "initial"}
//               />
//               <motion.div
//                 className="h-[1px] bg-white w-full origin-left absolute bottom-0 left-0"
//                 variants={inputVariants}
//                 initial="initial"
//                 animate={focusStates.company ? "animate" : "initial"}
//               />
//               <span
//                 className={`absolute transition-all duration-300 text-[#ffffff80] ${
//                   focusStates.company
//                     ? "top-[-20px] text-sm text-white"
//                     : "top-[6px] text-base"
//                 }`}
//               >
//                 Company
//               </span>
//             </div>
//           </div>

//           <div className="relative mt-8">
//             <textarea
//               name="message"
//               value={formState.message}
//               onChange={handleInputChange}
//               onFocus={() => handleFocus("message")}
//               onBlur={() => handleBlur("message")}
//               rows={4}
//               className="w-full bg-transparent text-white px-2 py-2 focus:outline-none hover:bg-[#454550] transition-all duration-300 resize-none"
//             />
//             <motion.div
//               className="h-[1px] bg-[#ffffff80] w-full origin-left"
//               variants={inputVariants}
//               initial="initial"
//               animate={inView ? "animate" : "initial"}
//             />
//             <motion.div
//               className="h-[1px] bg-white w-full origin-left absolute bottom-0 left-0"
//               variants={inputVariants}
//               initial="initial"
//               animate={focusStates.message ? "animate" : "initial"}
//             />
//             <span
//               className={`absolute transition-all duration-300 text-[#ffffff80] ${
//                 focusStates.message
//                   ? "top-[-20px] text-sm text-white"
//                   : "top-[6px] text-base"
//               }`}
//             >
//               Message
//             </span>
//           </div>

//           <div className="mt-4">
//             <Button
//               variant="white"
//               iconAfter={
//                 <div className="overflow-hidden size-5">
//                   <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="100%"
//                       height="100%"
//                       viewBox="0 0 13 16"
//                       fill="none"
//                       preserveAspectRatio="xMidYMid meet"
//                       aria-hidden="true"
//                       role="img"
//                     >
//                       <path
//                         d="M0.545457 9.56589L0.545478 8.34759L8.89964 8.3476L5.15766 4.60563L6.02788 3.7354L11.2492 8.95675L6.0279 14.1781L5.15769 13.3079L8.89964 9.56593L0.545457 9.56589Z"
//                         fill="currentColor"
//                       />
//                     </svg>

//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="100%"
//                       height="100%"
//                       viewBox="0 0 13 16"
//                       fill="none"
//                       preserveAspectRatio="xMidYMid meet"
//                       aria-hidden="true"
//                       role="img"
//                     >
//                       <path
//                         d="M0.545457 9.56589L0.545478 8.34759L8.89964 8.3476L5.15766 4.60563L6.02788 3.7354L11.2492 8.95675L6.0279 14.1781L5.15769 13.3079L8.89964 9.56593L0.545457 9.56589Z"
//                         fill="currentColor"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               }
//             >
//               <span>Send Message</span>
//             </Button>
//           </div>
//         </div>
//       </div>

//       <div className="w-1/2 flex flex-col items-end text-white">
//         <h4 className="text-right mb-6">
//           Alternatively, you can email
//           <br />
//           Roman.Ryabchinskiy@gmail.com
//           <br />
//           or give me a call at
//           <br />
//           (38) 0677156955
//         </h4>
//         <h4 className="text-right">
//           Workshop Office
//           <br />
//           12, Gagarin ave.
//           <br />
//           65034 Odessa
//           <br />
//           Ukraine
//         </h4>
//       </div>
//     </div>
//   );
// };

// const Section2 = () => {
//   const [ref, inView] = useInView({ triggerOnce: true });
//   const { scrollYProgress } = useScroll();
//   const animatedTitleY = useTransform(
//     scrollYProgress,
//     [0, 0.5],
//     ["100%", "-50%"]
//   );

//   return (
//     <div ref={ref} className="flex justify-between items-end">
//       <div className="relative flex justify-center items-center w-[100%]">
//         <motion.div
//           className="absolute h-[2px] bg-white w-full origin-left bottom-80"
//           variants={dividerMotion}
//           initial="initial"
//           animate={inView ? "animate" : "initial"}
//         />
//         <StaticTitle
//           scrollYProgress={scrollYProgress}
//           animatedTitleY={animatedTitleY}
//         />
//       </div>
//     </div>
//   );
// };

// const Nav = () => {
//   const [ref, inView] = useInView({ triggerOnce: true });

//   return (
//     <>
//       <h1 className="text-4xl text-white md:text-7xl lg:text-8xl">
//         Contact Me
//       </h1>
//       <motion.div
//         className="mt-4 h-[2px] bg-white w-full origin-left"
//         variants={dividerMotion}
//         initial="initial"
//         animate={inView ? "animate" : "initial"}
//         ref={ref}
//       />
//       <ContactSection />
//     </>
//   );
// };
