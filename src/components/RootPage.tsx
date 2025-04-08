"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Footer from "@/sections/Footer";
import Services from "@/sections/Services";

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
      <Header />
      <Hero />
      {/* <MyServices /> */}
      <Services />
      {/* <FAQs /> */}
      <Projects />
      {/* <Intro /> */}
      <Footer />
    </>
  );
}
