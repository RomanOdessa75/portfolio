import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./Button";

const ContactForm = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formState, setFormState] = useState({
    name: "",
    company: "",
    message: "",
  });

  const [focusStates, setFocusStates] = useState({
    name: false,
    company: false,
    message: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: string) => {
    setFocusStates((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    if (!formState[field as keyof typeof formState]) {
      setFocusStates((prev) => ({ ...prev, [field]: false }));
    }
  };

  const inputVariants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div ref={ref} className="w-full md:w-2/3 pr-0 md:pr-6">
      <div className="flex flex-col mb-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative flex-1 mb-6 md:mb-0">
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              onFocus={() => handleFocus("name")}
              onBlur={() => handleBlur("name")}
              className="w-full bg-transparent text-white px-2 py-3 focus:outline-none hover:bg-[#454550] transition-all duration-300 text-2xl"
            />
            <motion.div
              className="h-[1px] bg-[#ffffff80] w-full origin-left"
              variants={inputVariants}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            />
            <motion.div
              className="h-[1px] bg-white w-full origin-left absolute bottom-0 left-0"
              variants={inputVariants}
              initial="initial"
              animate={focusStates.name ? "animate" : "initial"}
            />
            <span
              className={`absolute transition-all duration-300 text-[#ffffff80] ${
                focusStates.name
                  ? "top-[-28px] text-xl text-white"
                  : "top-[8px] text-2xl"
              }`}
            >
              Full name
            </span>
          </div>

          <div className="relative flex-1">
            <input
              type="text"
              name="company"
              value={formState.company}
              onChange={handleInputChange}
              onFocus={() => handleFocus("company")}
              onBlur={() => handleBlur("company")}
              className="w-full bg-transparent text-white px-2 py-3 focus:outline-none hover:bg-[#454550] transition-all duration-300 text-2xl"
            />
            <motion.div
              className="h-[1px] bg-[#ffffff80] w-full origin-left"
              variants={inputVariants}
              initial="initial"
              animate={inView ? "animate" : "initial"}
            />
            <motion.div
              className="h-[1px] bg-white w-full origin-left absolute bottom-0 left-0"
              variants={inputVariants}
              initial="initial"
              animate={focusStates.company ? "animate" : "initial"}
            />
            <span
              className={`absolute transition-all duration-300 text-[#ffffff80] ${
                focusStates.company
                  ? "top-[-28px] text-xl text-white"
                  : "top-[8px] text-2xl"
              }`}
            >
              Company
            </span>
          </div>
        </div>

        <div className="relative mt-12">
          <textarea
            name="message"
            value={formState.message}
            onChange={handleInputChange}
            onFocus={() => handleFocus("message")}
            onBlur={() => handleBlur("message")}
            rows={4}
            className="w-full bg-transparent text-white px-2 py-3 focus:outline-none hover:bg-[#454550] transition-all duration-300 resize-none text-2xl"
          />
          <motion.div
            className="h-[1px] bg-[#ffffff80] w-full origin-left"
            variants={inputVariants}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          />
          <motion.div
            className="h-[1px] bg-white w-full origin-left absolute bottom-0 left-0"
            variants={inputVariants}
            initial="initial"
            animate={focusStates.message ? "animate" : "initial"}
          />
          <span
            className={`absolute transition-all duration-300 text-[#ffffff80] ${
              focusStates.message
                ? "top-[-28px] text-xl text-white"
                : "top-[8px] text-2xl"
            }`}
          >
            Message
          </span>
        </div>

        <div className="mt-8">
          <Button
            variant="submit"
            iconAfter={
              <div className="overflow-hidden size-10">
                <div className="h-10 w-20 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 13 16"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M0.545457 9.56589L0.545478 8.34759L8.89964 8.3476L5.15766 4.60563L6.02788 3.7354L11.2492 8.95675L6.0279 14.1781L5.15769 13.3079L8.89964 9.56593L0.545457 9.56589Z"
                      fill="currentColor"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 13 16"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M0.545457 9.56589L0.545478 8.34759L8.89964 8.3476L5.15766 4.60563L6.02788 3.7354L11.2492 8.95675L6.0279 14.1781L5.15769 13.3079L8.89964 9.56593L0.545457 9.56589Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            }
          >
            <span className="text-2xl">Send Message</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
