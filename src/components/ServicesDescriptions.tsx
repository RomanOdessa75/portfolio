"use client";

import React, { FC, useEffect, useState } from "react";

interface Service {
  title: string;
  description: string;
  speed: number;
}

interface ServicesDescriptionsProps {
  data: Service[];
  selectedService: number | null;
  titleRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const ServicesDescriptions: FC<ServicesDescriptionsProps> = ({
  data,
  selectedService,
  titleRefs,
}) => {
  const [offsets, setOffsets] = useState<number[]>([]); 
  const crop = (string: string, maxLength: number) =>
    string.substring(0, maxLength);

  useEffect(() => {
    const updateOffsets = () => {
      const newOffsets = data.map((_, i) => {
        const ref = titleRefs.current[i];
        return ref ? ref.offsetTop : 0; 
      });
      setOffsets(newOffsets);
    };

    updateOffsets();
    window.addEventListener("resize", updateOffsets); 
    return () => window.removeEventListener("resize", updateOffsets);
  }, [selectedService, titleRefs, data]);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
      {data.map((service, i) => (
        <div
          key={i}
          className="bg-[#e49366] flex justify-between items-center px-[10%] transition-all duration-400 absolute w-full"
          style={{
            top: offsets[i] || 0,
            clipPath: selectedService === i ? "inset(0 0 0)" : "inset(50% 0 50%)",
            height: "7.5vw", 
          }}
        >
          <p className="text-[#010101] uppercase font-bold text-[6vw] leading-[7.5vw] m-0 relative z-10">
            {crop(service.title, 9)}
          </p>
          <p className="w-[40%] text-[1vw] font-bold">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesDescriptions;
