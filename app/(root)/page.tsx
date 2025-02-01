import { ReactNode } from "react";
import Intro from "../_components/intro";

export default function Home(): ReactNode {
  return (
    <main>
      <Intro />
      <div className="blurred-background"></div>
    </main>
  );
}
