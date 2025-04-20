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

//----------------- claude ------------------------------------------

// "use client";

// import { useEffect, useState } from "react";
// import Lenis from "lenis";
// import Header from "@/sections/Header";
// import Hero from "@/sections/Hero";
// import SelectedWorks from "@/sections/SelectedWorks";
// import Footer from "@/sections/Footer";
// import Services from "@/sections/Services";
// import MarqueeSection from "@/sections/MarqueeSection";
// import Preloader from "./Preloader";

// export default function RootPage() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Initialize smooth scrolling with Lenis
//     const lenis = new Lenis();
//     function raf(time: DOMHighResTimeStamp) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//   }, []);

//   const handlePreloaderComplete = () => {
//     setIsLoading(false);
//   };

//   return (
//     <>
//       {/* Content is always rendered, but initially hidden behind the preloader */}
//       <div className={isLoading ? "pointer-events-none" : ""}>
//         <Header />
//         <Hero />
//         <MarqueeSection />
//         <Services />
//         <SelectedWorks />
//         <Footer />
//       </div>

//       {/* Preloader is shown on top of the content */}
//       {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
//     </>
//   );
// }

//------------  init  -------------------------------------------------

// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";
// import Header from "@/sections/Header";
// import Hero from "@/sections/Hero";
// import SelectedWorks from "@/sections/SelectedWorks";
// import Footer from "@/sections/Footer";
// import Services from "@/sections/Services";
// import MarqueeSection from "@/sections/MarqueeSection";

// export default function RootPage() {
//   useEffect(() => {
//     const lenis = new Lenis();
//     function raf(time: DOMHighResTimeStamp) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);
//   }, []);

//   return (
//     <>
//       <Header />
//       <Hero />
//       <MarqueeSection />
//       {/* <MyServices /> */}
//       <Services />
//       {/* <FAQs /> */}
//       <SelectedWorks />
//       {/* <Intro /> */}
//       <Footer />
//     </>
//   );
// }
