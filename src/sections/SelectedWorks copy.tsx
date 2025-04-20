import { FC, useEffect, useRef } from "react";
import image1 from "@/assets/works-slider/1.avif";
import image2 from "@/assets/works-slider/2.avif";
import image3 from "@/assets/works-slider/3.avif";
import image4 from "@/assets/works-slider/4.avif";
import image5 from "@/assets/works-slider/5.avif";
import image6 from "@/assets/works-slider/6.avif";
import Image from "next/image";

const projects = [
  {
    name: "Artisan Brew Co.",
    image: image1,
  },
  {
    name: "Wavelength Studios",
    image: image2,
  },
  {
    name: "Nova Fitness",
    image: image3,
  },
  {
    name: "Urban Plates",
    image: image4,
  },
  {
    name: "Bloom Botanicals",
    image: image5,
  },
  {
    name: "Bloom Botanicals 1",
    image: image6,
  },
];
//-------------- параллакс прокрутка секции -------------------------------------
// const SelectedWorks: FC = () => {
//   const imagesRef = useRef<HTMLDivElement>(null);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!imagesRef.current || !sectionRef.current) return;

//       const section = sectionRef.current;
//       const imagesContainer = imagesRef.current;
//       const sectionTop = section.getBoundingClientRect().top;
//       const imagesHeight = imagesContainer.scrollHeight;
//       const viewportHeight = window.innerHeight;

//       // Calculate when section reaches top of viewport
//       const scrollY = window.scrollY;
//       const sectionOffsetTop = section.offsetTop;

//       if (sectionTop <= 0) {
//         // Calculate max scroll for images (total height - viewport height)
//         const maxScroll = imagesHeight - viewportHeight;
//         // Scroll images based on how far we've scrolled past the section's top
//         const offset = Math.min(scrollY - sectionOffsetTop, maxScroll);
//         imagesContainer.style.setProperty("--scroll-offset", `${-offset}px`);

//         // If images have scrolled to the end, allow section to scroll
//         if (offset >= maxScroll) {
//           section.style.position = "relative";
//         } else {
//           section.style.position = "sticky";
//           section.style.top = "0";
//         }
//       } else {
//         imagesContainer.style.setProperty("--scroll-offset", "0px");
//         section.style.position = "relative";
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="min-h-screen bg-[#bfccd8] flex"
//       id="projects"
//     >
//       {/* Left Side: Images */}
//       <div className="w-1/2 h-screen overflow-hidden">
//         <div
//           ref={imagesRef}
//           className="flex flex-col transition-transform duration-300 ease-out"
//           style={{
//             transform: "translateY(var(--scroll-offset, 0))",
//           }}
//         >
//           {projects.map(({ name, image }, index) => (
//             <div key={index} className="w-full h-[33.33vh]">
//               <Image
//                 src={image}
//                 alt={`${name} image`}
//                 className="w-full h-full object-cover"
//                 sizes="50vw"
//                 priority={index < 3} // Preload first three images
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Side: Project List */}
//       <div className="w-1/2 flex items-center justify-center">
//         <div className="container max-w-md py-10">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">
//             Selected works
//           </h2>
//           <div>
//             {projects.map(({ name, image }) => (
//               <a
//                 href="#"
//                 key={name}
//                 className="block border-t last:border-b border-stone-400 border-dotted py-6 group/project relative"
//               >
//                 <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-slate-400 z-0"></div>
//                 <div className="relative z-10 flex justify-between items-center">
//                   <h3 className="text-2xl md:text-3xl group-hover/project:pl-4 transition-all duration-700">
//                     {name}
//                   </h3>
//                   <div className="relative w-16 h-16 opacity-0 group-hover/project:opacity-100 transition-opacity duration-500">
//                     <Image
//                       src={image}
//                       alt={`${name} thumbnail`}
//                       className="w-full h-full object-cover"
//                       sizes="64px"
//                     />
//                   </div>
//                   <div className="size-6 overflow-hidden group-hover/project:pr-4 transition-all duration-700">
//                     <div className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-300">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="size-6"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
//                         />
//                       </svg>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="size-6"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
//------------- начало прокрутки картинок -----------------------------------
// const SelectedWorks: FC = () => {
//   const imagesRef = useRef<HTMLDivElement>(null);
//   const rightSideRef = useRef<HTMLDivElement>(null);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!imagesRef.current || !rightSideRef.current || !sectionRef.current)
//         return;

//       const section = sectionRef.current;
//       const imagesContainer = imagesRef.current;
//       const rightSide = rightSideRef.current;
//       const sectionTop = section.getBoundingClientRect().top;
//       const sectionHeight = section.offsetHeight;
//       const imagesHeight = imagesContainer.scrollHeight;
//       const viewportHeight = window.innerHeight;

//       // Calculate scroll position
//       const scrollY = window.scrollY;
//       const sectionOffsetTop = section.offsetTop;

//       // When section is in view (top reaches or passes viewport top)
//       if (sectionTop <= 0 && scrollY >= sectionOffsetTop) {
//         // Calculate max scroll for images (total height - viewport height)
//         const maxScroll = imagesHeight - viewportHeight;
//         // Scroll images based on scroll distance past section top
//         const offset = Math.min(scrollY - sectionOffsetTop, maxScroll);
//         imagesContainer.style.setProperty("--scroll-offset", `${-offset}px`);

//         // Keep right side fixed until images are fully scrolled
//         if (offset < maxScroll) {
//           rightSide.style.position = "fixed";
//           rightSide.style.top = "0";
//           rightSide.style.height = "100vh";
//         } else {
//           // When images are fully scrolled, release right side
//           rightSide.style.position = "relative";
//           rightSide.style.top = "auto";
//           rightSide.style.height = "auto";
//         }
//       } else {
//         // Reset images and right side when section is above viewport
//         imagesContainer.style.setProperty("--scroll-offset", "0px");
//         rightSide.style.position = "relative";
//         rightSide.style.top = "auto";
//         rightSide.style.height = "auto";
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-[#bfccd8] flex"
//       id="projects"
//       style={{ minHeight: "200vh" }} // Accounts for 6 images (3 extra scrolls)
//     >
//       {/* Left Side: Scrolling Images */}
//       <div className="w-1/2 h-screen fixed top-0 left-0 overflow-hidden">
//         <div
//           ref={imagesRef}
//           className="flex flex-col transition-transform duration-300 ease-out"
//           style={{
//             transform: "translateY(var(--scroll-offset, 0))",
//           }}
//         >
//           {projects.map(({ name, image }, index) => (
//             <div key={index} className="w-full h-[33.33vh]">
//               <Image
//                 src={image}
//                 alt={`${name} image`}
//                 className="w-full h-full object-cover"
//                 sizes="50vw"
//                 priority={index < 3} // Preload first three images
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Side: Sticky Project List */}
//       <div className="w-1/2 ml-auto" ref={rightSideRef}>
//         <div className="container max-w-md py-10 min-h-screen flex flex-col justify-center">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">
//             Selected works
//           </h2>
//           <div>
//             {projects.map(({ name, image }) => (
//               <a
//                 href="#"
//                 key={name}
//                 className="block border-t last:border-b border-stone-400 border-dotted py-6 group/project relative"
//               >
//                 <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-slate-400 z-0"></div>
//                 <div className="relative z-10 flex justify-between items-center">
//                   <h3 className="text-2xl md:text-3xl group-hover/project:pl-4 transition-all duration-700">
//                     {name}
//                   </h3>
//                   <div className="relative w-16 h-16 opacity-0 group-hover/project:opacity-100 transition-opacity duration-500">
//                     <Image
//                       src={image}
//                       alt={`${name} thumbnail`}
//                       className="w-full h-full object-cover"
//                       sizes="64px"
//                     />
//                   </div>
//                   <div className="size-6 overflow-hidden group-hover/project:pr-4 transition-all duration-700">
//                     <div className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-300">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="size-6"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
//                         />
//                       </svg>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         className="size-6"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
const SelectedWorks: FC = () => {
  const imagesRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imagesRef.current || !sectionRef.current) return;

      const section = sectionRef.current;
      const imagesContainer = imagesRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const imagesHeight = imagesContainer.scrollHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll position relative to section start
      const scrollY = window.scrollY;
      const sectionOffsetTop = section.offsetTop;

      // When section top reaches viewport top
      if (sectionTop <= 0 && scrollY >= sectionOffsetTop) {
        // Calculate max scroll for images (total height - viewport height)
        const maxScroll = imagesHeight - viewportHeight;
        // Scroll images based on scroll distance past section top
        const offset = Math.min(scrollY - sectionOffsetTop, maxScroll);
        imagesContainer.style.setProperty("--scroll-offset", `${-offset}px`);

        // Keep section sticky until images are fully scrolled
        if (offset < maxScroll) {
          section.style.position = "sticky";
          section.style.top = "0";
        } else {
          section.style.position = "relative";
          section.style.top = "auto";
        }
      } else {
        // Reset images when section is not at top
        imagesContainer.style.setProperty("--scroll-offset", "0px");
        section.style.position = "relative";
        section.style.top = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#bfccd8] flex relative"
      id="projects"
      style={{ minHeight: "200vh" }} // Accounts for 6 images (3 extra scrolls)
    >
      {/* Left Side: Scrolling Images */}
      <div className="w-1/2 h-screen overflow-hidden">
        <div
          ref={imagesRef}
          className="flex flex-col transition-transform duration-300 ease-out"
          style={{
            transform: "translateY(var(--scroll-offset, 0))",
          }}
        >
          {projects.map(({ name, image }, index) => (
            <div key={index} className="w-full h-[33.33vh]">
              <Image
                src={image}
                alt={`${name} image`}
                className="w-full h-full object-cover"
                sizes="50vw"
                priority={index < 3} // Preload first three images
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Project List */}
      <div className="w-1/2">
        <div className="container max-w-md py-10 min-h-screen flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8">
            Selected works
          </h2>
          <div>
            {projects.map(({ name, image }) => (
              <a
                href="#"
                key={name}
                className="block border-t last:border-b border-stone-400 border-dotted py-6 group/project relative"
              >
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-slate-400 z-0"></div>
                <div className="relative z-10 flex justify-between items-center">
                  <h3 className="text-2xl md:text-3xl group-hover/project:pl-4 transition-all duration-700">
                    {name}
                  </h3>
                  <div className="relative w-16 h-16 opacity-0 group-hover/project:opacity-100 transition-opacity duration-500">
                    <Image
                      src={image}
                      alt={`${name} thumbnail`}
                      className="w-full h-full object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="size-6 overflow-hidden group-hover/project:pr-4 transition-all duration-700">
                    <div className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SelectedWorks;

// import { FC } from "react";
// import image1 from "@/assets/images/project-1.jpg";
// import image2 from "@/assets/images/project-2.jpg";
// import image3 from "@/assets/images/project-3.jpg";
// import image4 from "@/assets/images/project-4.jpg";
// import image5 from "@/assets/images/project-5.jpg";
// import Image from "next/image";

// /* eslint-disable-next-line @typescript-eslint/no-unused-vars */

// const projects = [
//   {
//     name: "Artisan Brew Co.",
//     image: image1,
//   },
//   {
//     name: "Wavelength Studios",
//     image: image2,
//   },
//   {
//     name: "Nova Fitness",
//     image: image3,
//   },
//   {
//     name: "Urban Plates",
//     image: image4,
//   },
//   {
//     name: "Bloom Botanicals",
//     image: image5,
//   },
// ];

// const SelectedWorks: FC = () => {
//   return (
//     <section className="" id="projects" style={{ backgroundColor: "#bfccd8" }}>
//       <div className="container">
//         <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected works</h2>
//         <div className="mt-10 md:mt-16 lg:mt-20">
//           {projects.map(({ name, image }) => (
//             <a
//               href="#"
//               key={name}
//               className="border-t last:border-b border-stone-400 border-dotted py-6 md:py-8 lg:py-10 flex flex-col relative group/project"
//             >
//               <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-slate-400"></div>
//               <div className="relative">
//                 <div className="aspect-video md:hidden">
//                   <Image
//                     src={image}
//                     alt={`${name} image`}
//                     className="size-full object-cover"
//                   />
//                 </div>
//                 <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
//                   <div className="lg:group-hover/project:pl-8 transition-all duration-700">
//                     <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
//                   </div>
//                   <div className="relative">
//                     <div className="absolute aspect-video w-full top-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 lg:group-hover/project:scale-110 transition-all duration-500 z-10">
//                       <Image
//                         src={image}
//                         alt={`${name} image`}
//                         className="size-full object-cover"
//                       />
//                     </div>
//                   </div>
//                   <div className="lg:group-hover/project:pr-8 transition-all duration-700">
//                     <div className="size-6 overflow-hidden">
//                       <div className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-300">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="size-6"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
//                           />
//                         </svg>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="1.5"
//                           stroke="currentColor"
//                           className="size-6"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SelectedWorks;
