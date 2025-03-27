'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import ServicesTitles from '@/components/ServicesTitles';

const servicesData = [
  {
    title: "Web Development",
    description: "Building responsive and performant websites tailored to your needs.",
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

  const { scrollYProgress } = useScroll();
  const servicesY = useTransform(scrollYProgress, [0, 1], ["20%", "-50%"]);

  return (
    <motion.section
      className="relative w-full min-h-screen bg-[#c8a3b3] py-20"
      id="services"
      style={{ y: servicesY }}
    >
      <h2 className="text-4xl md:text-7xl lg:text-8xl lg:px-10 py-10 md:py-16 lg:py-24">My Services</h2>
      <div className="relative">
        <ServicesTitles
          data={servicesData}
          selectedService={selectedService} 
          setSelectedService={setSelectedService}
          openAccordion={openAccordion}
          setOpenAccordion={setOpenAccordion}
        />
      </div>
    </motion.section>
  );
};

export default MyServices;
