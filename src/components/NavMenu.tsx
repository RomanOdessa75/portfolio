import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { easings } from "@/utils/animations";
import NavMenuItem from "./NavMenuItem";

interface NavMenuProps {
  onClose: () => void;
}

const NavMenu: React.FC<NavMenuProps> = () => {
  const navItems = [
    "Services",
    "Our Work",
    "People & Culture",
    "Clients & Partners",
    "Get In Touch",
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.nav
      className="fixed inset-0 bg-[#eee9e4] flex flex-col justify-end p-8 z-50"
      initial={{ y: "-100%" }}
      animate={{
        y: 0,
        transition: { duration: 1, ease: easings.easeOutQuart },
      }}
      exit={{ y: "-100%", transition: { duration: 0.3 } }}
    >
      <motion.ul exit={{ opacity: 0, transition: { duration: 0 } }}>
        {navItems.map((item, idx) => (
          <NavMenuItem key={idx} index={idx + 1} title={item} />
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default NavMenu;
