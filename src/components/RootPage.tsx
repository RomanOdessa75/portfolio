"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import SelectedWorks from "@/sections/SelectedWorks";
import Footer from "@/sections/Footer";
import Services from "@/sections/Services";
import MarqueeSection from "@/sections/MarqueeSection";
import Preloader from "@/components/Preloader";

export default function RootPage() {
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
      <Header />
      <Hero />
      <MarqueeSection />
      <Services />
      <SelectedWorks />
      <Footer />
    </>
  );
}
