import { ReactNode } from "react";
import Contact from "../_components/contact";
import Intro from "../_components/intro";

export default function Home(): ReactNode {
  return (
    <main>
      <Intro />
      <Contact />
      <div className="blurred-background"></div>
    </main>
  );
}
