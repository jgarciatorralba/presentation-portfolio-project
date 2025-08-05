import { JSX } from "react";
import About from "./sections/about";
import Contact from "./sections/contact";
import Experience from "./sections/experience";
import Intro from "./sections/intro";
import Projects from "./sections/projects";

export default function Home(): JSX.Element {
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
