"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  const [counter, setCounter] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const topHalfRef = useRef<HTMLDivElement>(null);
  const bottomHalfRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(preloaderRef.current, {
        clipPath: "polygon(0% 45%, 0% 45%, 0% 55%, 0% 55%)",
      });

      gsap.to(preloaderRef.current, {
        clipPath: "polygon(0% 45%, 25% 45%, 25% 55%, 0% 55%)",
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.5,
      });

      gsap.to(preloaderRef.current, {
        clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
        duration: 2,
        ease: "power3.inOut",
        delay: 2,
        onStart: () => {
          gsap.to(progressBarRef.current, {
            width: "100vw",
            duration: 2,
            ease: "power3.inOut",
          });

          const counterTween = gsap.to(
            {},
            {
              duration: 2,
              ease: "power3.inOut",
              onUpdate: () => {
                const progress = Math.round(counterTween.progress() * 100);
                setCounter(progress);
              },
            }
          );
        },
      });

      gsap.to(preloaderRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power3.inOut",
        delay: 4.5,
        onComplete: () => {
          gsap.to(progressBarRef.current, {
            opacity: 0,
            duration: 0.3,
          });

          gsap.set(wrapperRef.current, {
            backgroundColor: "transparent",
          });

          gsap.set([topHalfRef.current, bottomHalfRef.current], {
            display: "block",
          });

          gsap.set(preloaderRef.current, {
            display: "none",
          });

          gsap.to(topHalfRef.current, {
            y: "-100%",
            duration: 1.2,
            ease: "power3.inOut",
          });

          gsap.to(bottomHalfRef.current, {
            y: "100%",
            duration: 1.2,
            ease: "power3.inOut",
            onComplete: () => {
              gsap.to(wrapperRef.current, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                  setLoaded(true);
                },
              });
            },
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  if (loaded) return null;

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 w-full h-full bg-[#bfccd8] overflow-hidden z-[101]"
      style={{ pointerEvents: "none" }}
    >
      <div
        ref={preloaderRef}
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{
          clipPath: "polygon(0% 45%, 0% 45%, 0% 55%, 0% 55%)",
          willChange: "clip-path",
          backgroundColor: "#15161b",
        }}
      >
        <div
          ref={progressBarRef}
          className="absolute top-1/2 left-0 -translate-y-1/2 w-1/4 px-8 py-6 flex justify-between items-center text-[#ffbb00]"
        >
          <p className="text-sm mdl:text-2xl uppercase font-medium hidden md:block">
            Loading
          </p>
          <p className="text-sm mdl:text-2xl uppercase font-medium">
            /
            <span ref={counterRef} id="counter">
              {counter}
            </span>
          </p>
        </div>
      </div>

      <div
        ref={topHalfRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#15161b]"
        style={{ display: "none", willChange: "transform" }}
      />

      <div
        ref={bottomHalfRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#15161b]"
        style={{ display: "none", willChange: "transform" }}
      />
    </div>
  );
};

export default Preloader;
