import { ReactNode } from "react";
import { oranienbaum } from "../(root)/fonts";
import Section from "./section";

export default function Projects(): ReactNode {
    return (
        <Section name="projects">
            <div>
                <div className="section-container">
                    <h2 className={`header ${oranienbaum.className}`}>Projects</h2>
                    <p className="paragraph">Projects section.</p>
                </div>
            </div>
        </Section>
    );
}
