"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/sections/Header";
import HeaderMobile from "@/sections/mobile/HeaderMobile";
import Hero from "@/sections/Hero";
import HeroMobile from "@/sections/mobile/HeroMobile";
import SelectedWorks from "@/sections/SelectedWorks";
import SelectedWorksMobile from "@/sections/mobile/SelectedWorksMobile";
import Footer from "@/sections/Footer";
import Services from "@/sections/Services";
import ServicesMobile from "@/sections/mobile/ServicesMobile";
import MarqueeSection from "@/sections/MarqueeSection";
import Preloader from "@/components/Preloader";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function RootPage() {
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Preloader />
      {isDesktop ? (
        <>
          <Header />
          <Hero />
          <MarqueeSection />
          <Services />
          <SelectedWorks />
          <Footer />
        </>
      ) : (
        <>
          <HeaderMobile />
          <HeroMobile />
          <ServicesMobile />
          <SelectedWorksMobile />
          <Footer />
        </>
      )}
    </>
  );
}
