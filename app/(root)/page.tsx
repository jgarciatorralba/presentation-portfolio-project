import { ReactNode } from "react";
import About from "../_components/about";
import Contact from "../_components/contact";
import Intro from "../_components/intro";

export default function Home(): ReactNode {
  return (
    <main>
      <Intro />
      <About />
      <Contact />
      <div className="blurred-background" />
    </main>
  );
}
