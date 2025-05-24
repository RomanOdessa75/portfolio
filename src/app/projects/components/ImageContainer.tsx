"use client";

import Image, { StaticImageData } from "next/image";

interface ImageContainerProps {
  imageSource: StaticImageData;
  description: string;
}

export default function ImageContainer({
  imageSource,
  description,
}: ImageContainerProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-[clamp(10rem,50vw,60rem)] h-auto aspect-video">
        <Image
          src={imageSource}
          alt="gallery image"
          fill
          className="object-contain"
          quality={90}
        />
      </div>
      <p className="uppercase text-white m-0 p-0">{description}</p>
    </div>
  );
}
