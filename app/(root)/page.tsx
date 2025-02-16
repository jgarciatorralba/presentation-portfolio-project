import { ReactNode } from "react";
import About from "./sections/about";
import Contact from "./sections/contact";
import Experience from "./sections/experience";
import Intro from "./sections/intro";
import Projects from "./sections/projects";

export default function Home(): ReactNode {
  return (
    <main>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <div className="blurred-background" />
    </main>
  );
}
