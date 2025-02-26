import FAQs from "@/sections/FAQs";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <FAQs />
      <Intro />
    </>
    // <h1 className="text-9xl">
    //   Crafting digital experiences through code and creative design
    // </h1>
  );
}
