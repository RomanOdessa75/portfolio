import Button from "@/components/Button";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useLenis } from "lenis/react"; 

interface ProgressSectionProps {
  className?: string;
}

const ProgressSection: React.FC<ProgressSectionProps> = ({ className }) => {
  const nextProjectProgressBarRef = useRef<HTMLDivElement>(null);
  const [fillProgress, setFillProgress] = useState(0);
  const [accumulatedScroll, setAccumulatedScroll] = useState(0);
  const [smoothFillProgress, setSmoothFillProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const lenis = useLenis();

  const [debugWindowScrollY, setDebugWindowScrollY] =
    useState<string>("N/A (SSR)");

  const SCROLL_SENSITIVITY = 5;
  const MAX_SCROLL_ACCUMULATION = 100;

  useEffect(() => {
    let animationId: number;
    const animate = () => {
      setSmoothFillProgress((prevSmooth) => {
        const targetFillProgress = fillProgress;
        const diff = targetFillProgress - prevSmooth;
        let newSmoothValue = prevSmooth + diff * 0.1;

        if (Math.abs(diff) < 0.01) {
          newSmoothValue = targetFillProgress;
        }

        if (
          isActive &&
          targetFillProgress === 0 &&
          Math.abs(newSmoothValue) < 0.5
        ) {
          setIsActive(false);
        }
        return newSmoothValue;
      });
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [fillProgress, isActive]); 

  useEffect(() => {
    if (typeof document === "undefined") return; 

    const bodyStyle = document.body.style;
    let originalOverscrollBehavior: string | undefined = undefined;

    if (typeof window !== "undefined") {
      originalOverscrollBehavior = bodyStyle.overscrollBehavior;
    }

    if (isActive) {
      lenis?.stop();
      if (originalOverscrollBehavior !== undefined) {
        bodyStyle.overscrollBehavior = "none";
      }
    } else {
      lenis?.start();
      if (originalOverscrollBehavior !== undefined) {
        bodyStyle.overscrollBehavior = originalOverscrollBehavior;
      }
    }

    return () => {
      lenis?.start();
      if (originalOverscrollBehavior !== undefined) {
        bodyStyle.overscrollBehavior = originalOverscrollBehavior;
      }
    };
  }, [isActive, lenis]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateScrollY = () => {
        setDebugWindowScrollY(window.scrollY.toFixed(0));
      };
      window.addEventListener("scroll", updateScrollY, { passive: true });
      updateScrollY(); 

      return () => {
        window.removeEventListener("scroll", updateScrollY);
      };
    }
  }, []); 

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (window.innerWidth < 1024) return;

      const element = nextProjectProgressBarRef.current;
      if (!element) return;

      if (!isActive) {
        const rect = element.getBoundingClientRect();
        const isFullyVisible =
          rect.top >= 0 && rect.bottom <= window.innerHeight;
        const currentScrollY = lenis?.scroll ?? window.scrollY;
        const isAtBottom =
          window.innerHeight + currentScrollY >=
          document.body.offsetHeight - 10;

        if (isAtBottom && isFullyVisible && e.deltaY > 0) {
          e.preventDefault();
          setIsActive(true);
          setAccumulatedScroll(SCROLL_SENSITIVITY);
          setFillProgress((SCROLL_SENSITIVITY / MAX_SCROLL_ACCUMULATION) * 100);
        }
        return;
      }

      e.preventDefault();
      setAccumulatedScroll((prev) => {
        const newValue =
          prev + (e.deltaY > 0 ? SCROLL_SENSITIVITY : -SCROLL_SENSITIVITY);
        const clampedValue = Math.max(
          0,
          Math.min(MAX_SCROLL_ACCUMULATION, newValue)
        );
        const newProgress = (clampedValue / MAX_SCROLL_ACCUMULATION) * 100;

        setFillProgress(newProgress);

        if (newProgress >= 100) {
          setTimeout(() => router.push("/projects"), 200);
        }
        return clampedValue;
      });
    },
    [
      isActive,
      router,
      lenis,
      setIsActive,
      setFillProgress,
      setAccumulatedScroll,
    ]
  );

  const handleScroll = useCallback(() => {
    if (window.innerWidth < 1024) return;

    const element = nextProjectProgressBarRef.current;
    if (!element || isActive) return;

    const rect = element.getBoundingClientRect();
    const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (!isFullyVisible) {
      setFillProgress(0);
      setAccumulatedScroll(0);
    }
  }, [isActive, setFillProgress, setAccumulatedScroll]);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleWheel, handleScroll]); 

  return (
    <div
      className={`relative w-full flex flex-col justify-between p-6 md:p-8 text-black overflow-hidden ${className || ""}`}
      ref={nextProjectProgressBarRef}
      style={{ minHeight: "100px" }} 
    >
      <div className="absolute inset-0 bg-[#e9ece6]" style={{ zIndex: 1 }} />

      <div
        className="absolute inset-0 bg-[#e4e0d5] origin-left hidden mdl:block"
        style={{
          zIndex: 2,
          clipPath: `inset(0 ${100 - smoothFillProgress}% 0 0)`,
        }}
      />

      <div className="relative z-10 flex justify-between mdl:justify-around items-center h-full">
        <span className="text-xs font-medium text-gray-600 tracking-wider uppercase hidden mdl:inline-block">
          SCROLL DOWN
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-center text-black relative">
          Projects
          <sup className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light absolute top-0 -right-4 sm:-right-6 md:-right-8">
            70
          </sup>
        </h1>
        <span className="text-xs font-medium text-gray-600 tracking-wider uppercase hidden mdl:inline-block">
          SCROLL DOWN
        </span>
        <div className="flex items-center mdl:hidden">
          <Button variant={"black"} />
        </div>
      </div>

      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-2 left-2 text-xs text-white bg-black p-1 z-[9999]">
          Smooth: {Math.round(smoothFillProgress)}%<br />
          Target: {Math.round(fillProgress)}%<br />
          Accum: {Math.round(accumulatedScroll)}%<br />
          Active: {isActive.toString()}
          <br />
          LenisScrollY: {lenis?.scroll?.toFixed(0) ?? "N/A"}
          <br />
          WindowScrollY: {debugWindowScrollY} 
        </div>
      )}
    </div>
  );
};

export default ProgressSection;
