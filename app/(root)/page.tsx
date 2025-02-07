import { ReactNode } from "react";
import About from "../_components/about";
import Contact from "../_components/contact";
import Experience from "../_components/experience";
import Intro from "../_components/intro";
import Projects from "../_components/projects";

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
