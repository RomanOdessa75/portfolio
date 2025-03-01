import FAQs from "@/sections/FAQs";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import MyServices from "@/sections/MyServices";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MyServices />
      {/* <FAQs /> */}
      <Projects />
      <Intro />
    </>
    // <h1 className="text-9xl">
    //   Crafting digital experiences through code and creative design
    // </h1>
  );
}
