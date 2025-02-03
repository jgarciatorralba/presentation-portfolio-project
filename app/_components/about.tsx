import { ReactNode } from "react";
import { oranienbaum } from "../(root)/fonts";
import Section from "./section";

export default function About(): ReactNode {
    return (
        <Section name="about">
            <div>
                <div className="section-container">
                    <h2 className={`header ${oranienbaum.className}`}>About</h2>
                    <p className="paragraph">Hi, My name is Jorge and I develop digital products for a living. I've always been interested in technology for as long as I can remember, but it wasn't until 2020 that I decided to leave the automotive industry and try my luck with programming.
                    </p>
                    <p className="paragraph">Here are some technologies that I've worked with or that I'm eager to perfect at some point along my professional journey:</p>
                    <ul>
                        <li>PHP</li>
                        <li>Symfony</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                    </ul>
                </div>
            </div>
        </Section>
    );
}
