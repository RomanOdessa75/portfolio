"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#bfccd8]">
      <motion.div
        initial={{ y: 200, skewY: 10, opacity: 0 }}
        animate={{ y: 0, skewY: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute left-6 top-6 text-xl font-bold text-[#294757]"
      >
        Roman Ryabchinskiy
      </motion.div>

      <div className="flex h-full w-full flex-col justify-center pl-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="flex w-[70%] flex-col"
        >
          {[
            "PAGE",
            <span key="middle" className="flex items-center gap-4">
              <motion.div
                variants={textVariant}
                className="inline-block rounded-[300px] border-2 border-[#b68c60] px-12 py-2 text-[200px]"
              >
                404
              </motion.div>
              <motion.span variants={textVariant}>NOT</motion.span>
            </span>,
            "FOUND",
          ].map((text, idx) => (
            <motion.span
              key={idx}
              variants={textVariant}
              className="overflow-hidden font-bold leading-[0.89] text-[#1f3d4d]"
              style={{ fontSize: "250px", fontFamily: "Bigilla, sans-serif" }}
            >
              {text}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-24 right-24"
      >
        <Link href="/" passHref>
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="aspect-square h-48 w-48 rounded-full bg-[#b68c60] text-white text-[20px] font-bold flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ fontFamily: "Neutral Face, sans-serif" }}
          >
            Take me home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

const textVariant = {
  hidden: { y: 200, skewY: 10, opacity: 0 },
  visible: { y: 0, skewY: 0, opacity: 1, transition: { duration: 0.8 } },
};
