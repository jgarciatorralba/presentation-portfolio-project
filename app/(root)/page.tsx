import { ReactNode } from "react";
import About from "./_sections/about";
import Contact from "./_sections/contact";
import Experience from "./_sections/experience";
import Intro from "./_sections/intro";
import Projects from "./_sections/projects";

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
