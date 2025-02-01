import { ReactNode } from "react";
import About from "../_components/about";
import Intro from "../_components/intro";

export default function Home(): ReactNode {
  return (
    <main>
      <Intro />
      <About />
      <div className="blurred-background"></div>
    </main>
  );
}
