import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import InputField from "./InputField";

const ContactForm = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div className="w-full md:w-1/2">
      <motion.form ref={ref} className="flex flex-col gap-4">
        <div className="flex gap-4">
          <InputField label="Full name" />
          <InputField label="Company" />
        </div>
        <InputField label="Message" textarea />
      </motion.form>
    </div>
  );
};

export default ContactForm;
