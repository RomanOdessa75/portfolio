import { FC, useEffect, useRef } from "react";
import SplitType from "split-type";
import {
  motion,
  stagger,
  useAnimate,
  useInView,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
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

const creativityText = [
  "Creativity and innovation drive my process, fueled",
  "by a commitment to uniqueness and tailor-made solutions.",
  "I joyfully reject the ordinary, the familiar, and the commonplace,",
  "always striving to chart new territories in my work.",
];

const SelectedWorks: FC = () => {
  const imagesRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const creativeRef = useRef<HTMLDivElement>(null);
  const projectListRef = useRef<HTMLDivElement>(null);

  const [, titleAnimate] = useAnimate();
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isCreativeInView = useInView(creativeRef, { once: true, amount: 0.4 });

  const { scrollYProgress } = useScroll({
    target: projectListRef,
    offset: ["start end", "center center"],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 0 0 ${clipProgress}%)`;

  useEffect(() => {
    if (isInView && titleRef.current) {
      const split = new SplitType(titleRef.current, {
        types: "lines,words",
        tagName: "span",
      });

      titleRef.current.classList.remove("invisible");

      titleRef.current.querySelectorAll(".word").forEach((word) => {
        const el = word as HTMLElement;
        el.style.transform = "translateY(100%)";
        el.style.opacity = "0";
      });

      titleAnimate(
        titleRef.current.querySelectorAll(".word"),
        {
          transform: "translateY(0)",
          opacity: 1,
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );

      return () => {
        split.revert();
      };
    }
  }, [isInView, titleAnimate]);

  useEffect(() => {
    if (isCreativeInView && creativeRef.current) {
      const split = new SplitType(creativeRef.current, {
        types: "lines",
        tagName: "span",
      });

      creativeRef.current.classList.remove("invisible");

      creativeRef.current.querySelectorAll(".line").forEach((line) => {
        const el = line as HTMLElement;
        el.style.transform = "translateY(100%)";
        el.style.opacity = "0";
      });

      titleAnimate(
        creativeRef.current.querySelectorAll(".line"),
        {
          transform: "translateY(0)",
          opacity: 1,
        },
        {
          duration: 0.5,
          delay: stagger(0.15),
        }
      );

      return () => {
        split.revert();
      };
    }
  }, [isCreativeInView, titleAnimate]);

  useEffect(() => {
    const calculateImageScrollDistance = () => {
      if (!imagesRef.current) return 0;
      return imagesRef.current.scrollHeight - window.innerHeight;
    };

    const setupStickyContainer = () => {
      if (!wrapperRef.current || !sectionRef.current) return;
      const imageScrollDistance = calculateImageScrollDistance();
      wrapperRef.current.style.height = `${window.innerHeight + imageScrollDistance}px`;
    };

    const handleScroll = () => {
      if (!imagesRef.current || !sectionRef.current || !wrapperRef.current)
        return;

      const wrapper = wrapperRef.current;
      const imagesContainer = imagesRef.current;
      const section = sectionRef.current;

      const wrapperRect = wrapper.getBoundingClientRect();
      const imageScrollDistance = calculateImageScrollDistance();

      if (wrapperRect.top > 0) {
        section.style.position = "";
        section.style.top = "";
        imagesContainer.style.transform = `translateY(0px)`;
        return;
      }

      if (wrapperRect.top <= 0 && wrapperRect.top > -imageScrollDistance) {
        section.style.position = "fixed";
        section.style.top = "0";
        section.style.width = "100%";
        const scrollAmount = Math.abs(wrapperRect.top);
        imagesContainer.style.transform = `translateY(-${scrollAmount}px)`;
        return;
      }

      if (wrapperRect.top <= -imageScrollDistance) {
        section.style.position = "absolute";
        section.style.top = `${imageScrollDistance}px`;
        imagesContainer.style.transform = `translateY(-${imageScrollDistance}px)`;
        return;
      }
    };

    setupStickyContainer();
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      setupStickyContainer();
      handleScroll();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <section
        ref={sectionRef}
        className="bg-[#bfccd8] flex w-full h-screen"
        id="projects"
      >
        {/* Left Side: Scrolling Images */}
        <div className="w-2/5 h-screen overflow-hidden">
          <div
            ref={imagesRef}
            className="flex flex-col transition-transform duration-300 ease-out"
          >
            {projects.map(({ name, image }, index) => (
              <div key={index} className="w-full h-[33.33vh]">
                <Image
                  src={image}
                  alt={`${name} image`}
                  className="w-full h-full object-cover"
                  sizes="50vw"
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Project List */}
        <div className="w-3/5 h-screen flex flex-col justify-between py-16 px-10">
          <motion.h2
            ref={titleRef}
            className="invisible text-6xl md:text-7xl lg:text-9xl text-left"
          >
            Projects
          </motion.h2>

          <motion.div
            ref={projectListRef}
            style={{ clipPath: clip }}
            className="w-1/2 ml-auto"
          >
            {projects.map(({ name }) => (
              <a
                href="#"
                key={name}
                className="block border-t last:border-b border-black py-4 group/project relative"
              >
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-slate-400 z-0"></div>
                <div className="relative z-10 flex justify-between items-center">
                  <h3 className="text-xl md:text-2xl group-hover/project:pl-4 transition-all duration-700">
                    {name}
                  </h3>
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
          </motion.div>

          <motion.div
            ref={creativeRef}
            className="invisible w-full ml-auto text-3xl"
          >
            {creativityText.map((line, index) => (
              <div key={index} className="mb-1">
                {line}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SelectedWorks;
