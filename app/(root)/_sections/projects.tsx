import { JSX } from "react";
import Section from "../../_components/section";
import { oranienbaum } from "../fonts";

export default function Projects(): JSX.Element {
    return (
        <Section name="projects">
            <div className="section-container">
                <h2 className={`header ${oranienbaum.className}`}>Projects</h2>
                <p className="paragraph">Projects section.</p>
            </div>
        </Section>
    );
}
