"use client";

import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";
import Lenis from "lenis";
// import FAQs from "@/sections/FAQs";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import MyServices from "@/sections/MyServices";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <MyServices />
      {/* <FAQs /> */}
      <Projects />
      <Intro />
    </>
  );
}

//
//-------------------------- init ---------------------------------------
// // import FAQs from "@/sections/FAQs";
// import Header from "@/sections/Header";
// import Hero from "@/sections/Hero";
// import Intro from "@/sections/Intro";
// import Projects from "@/sections/Projects";
// import MyServices from "@/sections/MyServices";

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <MyServices />
//       {/* <FAQs /> */}
//       <Projects />
//       <Intro />
//     </>
//   );
// }
